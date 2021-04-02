import * as React from 'react';
import { Animated, Platform, processColor, StyleSheet, } from 'react-native';
import createNativeWrapper from '../handlers/createNativeWrapper';
import GestureHandlerButton from './GestureHandlerButton';
import { State } from '../State';
export const RawButton = createNativeWrapper(GestureHandlerButton, {
    shouldCancelWhenOutside: false,
    shouldActivateOnStart: false,
});
export class BaseButton extends React.Component {
    constructor(props) {
        super(props);
        this.handleEvent = ({ nativeEvent, }) => {
            const { state, oldState, pointerInside } = nativeEvent;
            const active = pointerInside && state === State.ACTIVE;
            if (active !== this.lastActive && this.props.onActiveStateChange) {
                this.props.onActiveStateChange(active);
            }
            if (oldState === State.ACTIVE &&
                state !== State.CANCELLED &&
                this.lastActive &&
                this.props.onPress) {
                this.props.onPress(active);
            }
            this.lastActive = active;
        };
        // Normally, the parent would execute it's handler first,
        // then forward the event to listeners. However, here our handler
        // is virtually only forwarding events to listeners, so we reverse the order
        // to keep the proper order of the callbacks (from "raw" ones to "processed").
        this.onHandlerStateChange = (e) => {
            this.props.onHandlerStateChange?.(e);
            this.handleEvent(e);
        };
        this.onGestureEvent = (e) => {
            this.props.onGestureEvent?.(e);
            this.handleEvent(e); // TODO: maybe it is not correct
        };
        this.lastActive = false;
    }
    render() {
        const { rippleColor, ...rest } = this.props;
        return (<RawButton rippleColor={processColor(rippleColor)} {...rest} onGestureEvent={this.onGestureEvent} onHandlerStateChange={this.onHandlerStateChange}/>);
    }
}
const AnimatedBaseButton = Animated.createAnimatedComponent(BaseButton);
const btnStyles = StyleSheet.create({
    underlay: {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        top: 0,
    },
});
export class RectButton extends React.Component {
    constructor(props) {
        super(props);
        this.onActiveStateChange = (active) => {
            if (Platform.OS !== 'android') {
                this.opacity.setValue(active ? this.props.activeOpacity : 0);
            }
            this.props.onActiveStateChange?.(active);
        };
        this.opacity = new Animated.Value(0);
    }
    render() {
        const { children, style, ...rest } = this.props;
        const resolvedStyle = StyleSheet.flatten(style ?? {});
        return (<BaseButton {...rest} style={resolvedStyle} onActiveStateChange={this.onActiveStateChange}>
        <Animated.View style={[
            btnStyles.underlay,
            {
                opacity: this.opacity,
                backgroundColor: this.props.underlayColor,
                borderRadius: resolvedStyle.borderRadius,
                borderTopLeftRadius: resolvedStyle.borderTopLeftRadius,
                borderTopRightRadius: resolvedStyle.borderTopRightRadius,
                borderBottomLeftRadius: resolvedStyle.borderBottomLeftRadius,
                borderBottomRightRadius: resolvedStyle.borderBottomRightRadius,
            },
        ]}/>
        {children}
      </BaseButton>);
    }
}
RectButton.defaultProps = {
    activeOpacity: 0.105,
    underlayColor: 'black',
};
export class BorderlessButton extends React.Component {
    constructor(props) {
        super(props);
        this.onActiveStateChange = (active) => {
            if (Platform.OS !== 'android') {
                this.opacity.setValue(active ? this.props.activeOpacity : 1);
            }
            this.props.onActiveStateChange?.(active);
        };
        this.opacity = new Animated.Value(1);
    }
    render() {
        const { children, style, ...rest } = this.props;
        return (<AnimatedBaseButton {...rest} onActiveStateChange={this.onActiveStateChange} style={[style, Platform.OS === 'ios' && { opacity: this.opacity }]}>
        {children}
      </AnimatedBaseButton>);
    }
}
BorderlessButton.defaultProps = {
    activeOpacity: 0.3,
    borderless: true,
};
export { default as PureNativeButton } from './GestureHandlerButton';
