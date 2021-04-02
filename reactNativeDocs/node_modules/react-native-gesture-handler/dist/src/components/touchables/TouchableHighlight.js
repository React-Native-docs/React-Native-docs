import * as React from 'react';
import { Component } from 'react';
import GenericTouchable, { TOUCHABLE_STATE, } from './GenericTouchable';
import { StyleSheet, View, } from 'react-native';
/**
 * TouchableHighlight follows RN's implementation
 */
export default class TouchableHighlight extends Component {
    constructor(props) {
        super(props);
        // Copied from RN
        this.showUnderlay = () => {
            if (!this.hasPressHandler()) {
                return;
            }
            this.setState({
                extraChildStyle: {
                    opacity: this.props.activeOpacity,
                },
                extraUnderlayStyle: {
                    backgroundColor: this.props.underlayColor,
                },
            });
            this.props.onShowUnderlay?.();
        };
        this.hasPressHandler = () => this.props.onPress ||
            this.props.onPressIn ||
            this.props.onPressOut ||
            this.props.onLongPress;
        this.hideUnderlay = () => {
            this.setState({
                extraChildStyle: null,
                extraUnderlayStyle: null,
            });
            this.props.onHideUnderlay?.();
        };
        this.onStateChange = (_from, to) => {
            if (to === TOUCHABLE_STATE.BEGAN) {
                this.showUnderlay();
            }
            else if (to === TOUCHABLE_STATE.UNDETERMINED ||
                to === TOUCHABLE_STATE.MOVED_OUTSIDE) {
                this.hideUnderlay();
            }
        };
        this.state = {
            extraChildStyle: null,
            extraUnderlayStyle: null,
        };
    }
    renderChildren() {
        if (!this.props.children) {
            return <View />;
        }
        const child = React.Children.only(this.props.children); // TODO: not sure if OK but fixes error
        return React.cloneElement(child, {
            style: StyleSheet.compose(child.props.style, this.state.extraChildStyle),
        });
    }
    render() {
        const { style = {}, ...rest } = this.props;
        const { extraUnderlayStyle } = this.state;
        return (<GenericTouchable {...rest} style={[style, extraUnderlayStyle]} onStateChange={this.onStateChange}>
        {this.renderChildren()}
      </GenericTouchable>);
    }
}
TouchableHighlight.defaultProps = {
    ...GenericTouchable.defaultProps,
    activeOpacity: 0.85,
    delayPressOut: 100,
    underlayColor: 'black',
};
