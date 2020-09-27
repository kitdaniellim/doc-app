import React, { Component } from 'react';
import { Animated, Easing } from 'react-native';

export default class ImageLoader extends Component {
    state = {
        opacity: new Animated.Value(0),
        yValue: new Animated.Value(0)
    };

    onLoad = () => {
        Animated.sequence([
            Animated.timing(this.state.opacity, {
                toValue: 1,
                duration: 800,
                useNativeDriver: true
            }),
            Animated.timing(this.state.yValue, {
                toValue: -190,
                duration: 1200,
                useNativeDriver: true,
                asing: Easing.linear
            })
        ]).start()
    }

    render() {
        return (
            <Animated.Image
                onLoad={this.onLoad}
                {...this.props}
                style={[
                    {
                        opacity: this.state.opacity,
                        transform: [
                            {
                                translateY: this.state.yValue
                            }
                        ]
                    },
                    this.props.style
                ]}
            />
        );
    }
}
