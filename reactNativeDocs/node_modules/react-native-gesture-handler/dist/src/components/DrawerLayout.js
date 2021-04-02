// This component is based on RN's DrawerLayoutAndroid API
//
// It perhaps deserves to be put in a separate repo, but since it relies
// on react-native-gesture-handler library which isn't very popular at the
// moment I decided to keep it here for the time being. It will allow us
// to move faster and fix issues that may arise in gesture handler library
// that could be found when using the drawer component
import * as React from 'react';
import { Component } from 'react';
import invariant from 'invariant';
import { Animated, StyleSheet, View, Keyboard, StatusBar, I18nManager, } from 'react-native';
import { PanGestureHandler, TapGestureHandler, } from '../handlers/gestureHandlers';
import { State } from '../State';
const DRAG_TOSS = 0.05;
const IDLE = 'Idle';
const DRAGGING = 'Dragging';
const SETTLING = 'Settling';
export default class DrawerLayout extends Component {
    constructor(props) {
        super(props);
        this.accessibilityIsModalView = React.createRef();
        this.pointerEventsView = React.createRef();
        this.panGestureHandler = React.createRef();
        this.drawerShown = false;
        this.updateAnimatedEvent = (props, state) => {
            // Event definition is based on
            const { drawerPosition, drawerWidth, drawerType } = props;
            const { dragX: dragXValue, touchX: touchXValue, drawerTranslation, containerWidth, } = state;
            let dragX = dragXValue;
            let touchX = touchXValue;
            if (drawerPosition !== 'left') {
                // Most of the code is written in a way to handle left-side drawer.
                // In order to handle right-side drawer the only thing we need to
                // do is to reverse events coming from gesture handler in a way they
                // emulate left-side drawer gestures. E.g. dragX is simply -dragX, and
                // touchX is calulcated by subtracing real touchX from the width of the
                // container (such that when touch happens at the right edge the value
                // is simply 0)
                dragX = Animated.multiply(new Animated.Value(-1), dragXValue); // TODO(TS): (for all "as" in this file) make sure we can map this
                touchX = Animated.add(new Animated.Value(containerWidth), Animated.multiply(new Animated.Value(-1), touchXValue)); // TODO(TS): make sure we can map this;
                touchXValue.setValue(containerWidth);
            }
            else {
                touchXValue.setValue(0);
            }
            // While closing the drawer when user starts gesture outside of its area (in greyed
            // out part of the window), we want the drawer to follow only once finger reaches the
            // edge of the drawer.
            // E.g. on the diagram below drawer is illustrate by X signs and the greyed out area by
            // dots. The touch gesture starts at '*' and moves left, touch path is indicated by
            // an arrow pointing left
            // 1) +---------------+ 2) +---------------+ 3) +---------------+ 4) +---------------+
            //    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXX|.........|
            //    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXX|.........|
            //    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXX|.........|
            //    |XXXXXXXX|......|    |XXXXXXXX|.<-*..|    |XXXXXXXX|<--*..|    |XXXXX|<-----*..|
            //    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXX|.........|
            //    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXX|.........|
            //    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXXXXX|......|    |XXXXX|.........|
            //    +---------------+    +---------------+    +---------------+    +---------------+
            //
            // For the above to work properly we define animated value that will keep start position
            // of the gesture. Then we use that value to calculate how much we need to subtract from
            // the dragX. If the gesture started on the greyed out area we take the distance from the
            // edge of the drawer to the start position. Otherwise we don't subtract at all and the
            // drawer be pulled back as soon as you start the pan.
            //
            // This is used only when drawerType is "front"
            //
            let translationX = dragX;
            if (drawerType === 'front') {
                const startPositionX = Animated.add(touchX, Animated.multiply(new Animated.Value(-1), dragX));
                const dragOffsetFromOnStartPosition = startPositionX.interpolate({
                    inputRange: [drawerWidth - 1, drawerWidth, drawerWidth + 1],
                    outputRange: [0, 0, 1],
                });
                translationX = Animated.add(dragX, dragOffsetFromOnStartPosition); // TODO: as above
            }
            this.openValue = Animated.add(translationX, drawerTranslation).interpolate({
                inputRange: [0, drawerWidth],
                outputRange: [0, 1],
                extrapolate: 'clamp',
            });
            const gestureOptions = {
                useNativeDriver: props.useNativeAnimations,
            };
            if (this.props.onDrawerSlide) {
                gestureOptions.listener = (ev) => {
                    const translationX = Math.floor(Math.abs(ev.nativeEvent.translationX));
                    const position = translationX / this.state.containerWidth;
                    this.props.onDrawerSlide?.(position);
                };
            }
            this.onGestureEvent = Animated.event([{ nativeEvent: { translationX: dragXValue, x: touchXValue } }], gestureOptions);
        };
        this.handleContainerLayout = ({ nativeEvent }) => {
            this.setState({ containerWidth: nativeEvent.layout.width });
        };
        this.emitStateChanged = (newState, drawerWillShow) => {
            this.props.onDrawerStateChanged?.(newState, drawerWillShow);
        };
        this.openingHandlerStateChange = ({ nativeEvent, }) => {
            if (nativeEvent.oldState === State.ACTIVE) {
                this.handleRelease({ nativeEvent });
            }
            else if (nativeEvent.state === State.ACTIVE) {
                this.emitStateChanged(DRAGGING, false);
                if (this.props.keyboardDismissMode === 'on-drag') {
                    Keyboard.dismiss();
                }
                if (this.props.hideStatusBar) {
                    StatusBar.setHidden(true, this.props.statusBarAnimation || 'slide');
                }
            }
        };
        this.onTapHandlerStateChange = ({ nativeEvent, }) => {
            if (this.drawerShown &&
                nativeEvent.oldState === State.ACTIVE &&
                this.props.drawerLockMode !== 'locked-open') {
                this.closeDrawer();
            }
        };
        this.handleRelease = ({ nativeEvent, }) => {
            const { drawerWidth, drawerPosition, drawerType } = this.props;
            const { containerWidth } = this.state;
            let { translationX: dragX, velocityX, x: touchX } = nativeEvent;
            if (drawerPosition !== 'left') {
                // See description in _updateAnimatedEvent about why events are flipped
                // for right-side drawer
                dragX = -dragX;
                touchX = containerWidth - touchX;
                velocityX = -velocityX;
            }
            const gestureStartX = touchX - dragX;
            let dragOffsetBasedOnStart = 0;
            if (drawerType === 'front') {
                dragOffsetBasedOnStart =
                    gestureStartX > drawerWidth ? gestureStartX - drawerWidth : 0;
            }
            const startOffsetX = dragX + dragOffsetBasedOnStart + (this.drawerShown ? drawerWidth : 0);
            const projOffsetX = startOffsetX + DRAG_TOSS * velocityX;
            const shouldOpen = projOffsetX > drawerWidth / 2;
            if (shouldOpen) {
                this.animateDrawer(startOffsetX, drawerWidth, velocityX);
            }
            else {
                this.animateDrawer(startOffsetX, 0, velocityX);
            }
        };
        this.updateShowing = (showing) => {
            this.drawerShown = showing;
            this.accessibilityIsModalView.current?.setNativeProps({
                accessibilityViewIsModal: showing,
            });
            this.pointerEventsView.current?.setNativeProps({
                pointerEvents: showing ? 'auto' : 'none',
            });
            const { drawerPosition, minSwipeDistance, edgeWidth } = this.props;
            const fromLeft = drawerPosition === 'left';
            // gestureOrientation is 1 if the expected gesture is from left to right and -1 otherwise
            // e.g. when drawer is on the left and is closed we expect left to right gesture, thus
            // orientation will be 1.
            const gestureOrientation = (fromLeft ? 1 : -1) * (this.drawerShown ? -1 : 1);
            // When drawer is closed we want the hitSlop to be horizontally shorter
            // than the container size by the value of SLOP. This will make it only
            // activate when gesture happens not further than SLOP away from the edge
            const hitSlop = fromLeft
                ? { left: 0, width: showing ? undefined : edgeWidth }
                : { right: 0, width: showing ? undefined : edgeWidth };
            // @ts-ignore internal API, maybe could be fixed in handler types
            this.panGestureHandler.current?.setNativeProps({
                hitSlop,
                activeOffsetX: gestureOrientation * minSwipeDistance,
            });
        };
        this.animateDrawer = (fromValue, toValue, velocity, speed) => {
            this.state.dragX.setValue(0);
            this.state.touchX.setValue(this.props.drawerPosition === 'left' ? 0 : this.state.containerWidth);
            if (fromValue != null) {
                let nextFramePosition = fromValue;
                if (this.props.useNativeAnimations) {
                    // When using native driver, we predict the next position of the animation
                    // because it takes one frame of a roundtrip to pass RELEASE event from
                    // native driver to JS before we can start animating. Without it, it is more
                    // noticable that the frame is dropped.
                    if (fromValue < toValue && velocity > 0) {
                        nextFramePosition = Math.min(fromValue + velocity / 60.0, toValue);
                    }
                    else if (fromValue > toValue && velocity < 0) {
                        nextFramePosition = Math.max(fromValue + velocity / 60.0, toValue);
                    }
                }
                this.state.drawerTranslation.setValue(nextFramePosition);
            }
            const willShow = toValue !== 0;
            this.updateShowing(willShow);
            this.emitStateChanged(SETTLING, willShow);
            if (this.props.hideStatusBar) {
                StatusBar.setHidden(willShow, this.props.statusBarAnimation || 'slide');
            }
            Animated.spring(this.state.drawerTranslation, {
                velocity,
                bounciness: 0,
                toValue,
                useNativeDriver: this.props.useNativeAnimations,
                speed: speed ?? undefined,
            }).start(({ finished }) => {
                if (finished) {
                    this.emitStateChanged(IDLE, willShow);
                    if (willShow) {
                        this.props.onDrawerOpen?.();
                    }
                    else {
                        this.props.onDrawerClose?.();
                    }
                }
            });
        };
        this.openDrawer = (options = {}) => {
            this.animateDrawer(
            // TODO: decide if it should be null or undefined is the proper value
            undefined, this.props.drawerWidth, options.velocity ? options.velocity : 0);
            // We need to force the update, otherwise the overlay is not rerendered and it would not be clickable
            this.forceUpdate();
        };
        this.closeDrawer = (options = {}) => {
            // TODO: decide if it should be null or undefined is the proper value
            this.animateDrawer(undefined, 0, options.velocity ? options.velocity : 0);
            // We need to force the update, otherwise the overlay is not rerendered and it would be still clickable
            this.forceUpdate();
        };
        this.renderOverlay = () => {
            /* Overlay styles */
            invariant(this.openValue, 'should be set');
            const overlayOpacity = this.openValue.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 1],
                extrapolate: 'clamp',
            });
            const dynamicOverlayStyles = {
                opacity: overlayOpacity,
                backgroundColor: this.props.overlayColor,
            };
            return (<TapGestureHandler onHandlerStateChange={this.onTapHandlerStateChange}>
        <Animated.View pointerEvents={this.drawerShown ? 'auto' : 'none'} ref={this.pointerEventsView} style={[styles.overlay, dynamicOverlayStyles]}/>
      </TapGestureHandler>);
        };
        this.renderDrawer = () => {
            const { drawerBackgroundColor, drawerWidth, drawerPosition, drawerType, drawerContainerStyle, contentContainerStyle, } = this.props;
            const fromLeft = drawerPosition === 'left';
            const drawerSlide = drawerType !== 'back';
            const containerSlide = drawerType !== 'front';
            // we rely on row and row-reverse flex directions to position the drawer
            // properly. Apparently for RTL these are flipped which requires us to use
            // the opposite setting for the drawer to appear from left or right according
            // to the drawerPosition prop
            const reverseContentDirection = I18nManager.isRTL ? fromLeft : !fromLeft;
            const dynamicDrawerStyles = {
                backgroundColor: drawerBackgroundColor,
                width: drawerWidth,
            };
            const openValue = this.openValue;
            invariant(openValue, 'should be set');
            let containerStyles;
            if (containerSlide) {
                const containerTranslateX = openValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: fromLeft ? [0, drawerWidth] : [0, -drawerWidth],
                    extrapolate: 'clamp',
                });
                containerStyles = {
                    transform: [{ translateX: containerTranslateX }],
                };
            }
            let drawerTranslateX = 0;
            if (drawerSlide) {
                const closedDrawerOffset = fromLeft ? -drawerWidth : drawerWidth;
                drawerTranslateX = openValue.interpolate({
                    inputRange: [0, 1],
                    outputRange: [closedDrawerOffset, 0],
                    extrapolate: 'clamp',
                });
            }
            const drawerStyles = {
                transform: [{ translateX: drawerTranslateX }],
                flexDirection: reverseContentDirection ? 'row-reverse' : 'row',
            };
            return (<Animated.View style={styles.main} onLayout={this.handleContainerLayout}>
        <Animated.View style={[
                drawerType === 'front'
                    ? styles.containerOnBack
                    : styles.containerInFront,
                containerStyles,
                contentContainerStyle,
            ]} importantForAccessibility={this.drawerShown ? 'no-hide-descendants' : 'yes'}>
          {typeof this.props.children === 'function'
                ? this.props.children(this.openValue)
                : this.props.children}
          {this.renderOverlay()}
        </Animated.View>
        <Animated.View pointerEvents="box-none" ref={this.accessibilityIsModalView} accessibilityViewIsModal={this.drawerShown} style={[styles.drawerContainer, drawerStyles, drawerContainerStyle]}>
          <View style={dynamicDrawerStyles}>
            {this.props.renderNavigationView(this.openValue)}
          </View>
        </Animated.View>
      </Animated.View>);
        };
        this.setPanGestureRef = (ref) => {
            // TODO(TS): make sure it is OK
            // taken from https://github.com/DefinitelyTyped/DefinitelyTyped/issues/31065#issuecomment-596081842
            this
                .panGestureHandler.current = ref;
            this.props.onGestureRef?.(ref);
        };
        const dragX = new Animated.Value(0);
        const touchX = new Animated.Value(0);
        const drawerTranslation = new Animated.Value(0);
        this.state = {
            dragX,
            touchX,
            drawerTranslation,
            containerWidth: 0,
        };
        this.updateAnimatedEvent(props, this.state);
    }
    UNSAFE_componentWillUpdate(props, state) {
        if (this.props.drawerPosition !== props.drawerPosition ||
            this.props.drawerWidth !== props.drawerWidth ||
            this.props.drawerType !== props.drawerType ||
            this.state.containerWidth !== state.containerWidth) {
            this.updateAnimatedEvent(props, state);
        }
    }
    render() {
        const { drawerPosition, drawerLockMode, edgeWidth, minSwipeDistance, } = this.props;
        const fromLeft = drawerPosition === 'left';
        // gestureOrientation is 1 if the expected gesture is from left to right and -1 otherwise
        // e.g. when drawer is on the left and is closed we expect left to right gesture, thus
        // orientation will be 1.
        const gestureOrientation = (fromLeft ? 1 : -1) * (this.drawerShown ? -1 : 1);
        // When drawer is closed we want the hitSlop to be horizontally shorter
        // than the container size by the value of SLOP. This will make it only
        // activate when gesture happens not further than SLOP away from the edge
        const hitSlop = fromLeft
            ? { left: 0, width: this.drawerShown ? undefined : edgeWidth }
            : { right: 0, width: this.drawerShown ? undefined : edgeWidth };
        return (<PanGestureHandler 
        // @ts-ignore could be fixed in handler types
        ref={this.setPanGestureRef} hitSlop={hitSlop} activeOffsetX={gestureOrientation * minSwipeDistance} failOffsetY={[-15, 15]} onGestureEvent={this.onGestureEvent} onHandlerStateChange={this.openingHandlerStateChange} enableTrackpadTwoFingerGesture={this.props.enableTrackpadTwoFingerGesture} enabled={drawerLockMode !== 'locked-closed' && drawerLockMode !== 'locked-open'}>
        {this.renderDrawer()}
      </PanGestureHandler>);
    }
}
DrawerLayout.defaultProps = {
    drawerWidth: 200,
    drawerPosition: 'left',
    useNativeAnimations: true,
    drawerType: 'front',
    edgeWidth: 20,
    minSwipeDistance: 3,
    overlayColor: 'rgba(0, 0, 0, 0.7)',
    drawerLockMode: 'unlocked',
    enableTrackpadTwoFingerGesture: false,
};
DrawerLayout.positions = {
    Left: 'left',
    Right: 'right',
};
const styles = StyleSheet.create({
    drawerContainer: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1001,
        flexDirection: 'row',
    },
    containerInFront: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1002,
    },
    containerOnBack: {
        ...StyleSheet.absoluteFillObject,
    },
    main: {
        flex: 1,
        zIndex: 0,
        overflow: 'hidden',
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        zIndex: 1000,
    },
});
