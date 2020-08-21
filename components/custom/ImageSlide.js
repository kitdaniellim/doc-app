import * as React from 'react';
import { StyleSheet, View, Text, ScrollView, Dimensions, Image } from 'react-native'

const DEVICE_WIDTH = Dimensions.get("window").width;

class ImageSlide extends React.Component {
    scrollRef = React.createRef();
    constructor(props) {
        super(props);
        this.state = {
            selectedIndex: 0
        }
    }

    setSelectedIndex = event => {
        const viewSize = event.nativeEvent.layoutMeasurement.width;
        const contentOffset = event.nativeEvent.contentOffset.x;
        const selectedIndex = Math.floor(contentOffset/viewSize)
        this.setState({ selectedIndex });
    }

    render() {
        const { images } = this.props
        const { selectedIndex } = this.state
        return (
            <View>
                <ScrollView
                    horizontal
                    pagingEnabled
                    showsHorizontalScrollIndicator={false}
                    onMomentumScrollEnd={this.setSelectedIndex}
                    ref={this.scrollRef}
                    contentContainerStyle={{}}
                >
                    {images.map((image) => (
                        <Image
                            key={image.key}
                            source={{ uri: image.img.toString() }}
                            style={styles.backgroundImage}
                        />
                        
                    ))}
                </ScrollView>
                <View style={styles.circleDiv}>
                    {images.map((image, i) => (
                        <View 
                            key={image.key} 
                            style={[
                                styles.whiteCircle, 
                                {opacity: i === selectedIndex ? 0.5 : 1}
                            ]}
                        />
                    ))}
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    backgroundImage: {
        flex: 1,
        width: DEVICE_WIDTH,
        height: "100%",
        resizeMode: 'contain',
    },

    circleDiv: {
        position: 'absolute',
        bottom: 15,
        height: 10,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },

    whiteCircle: {
        width: 6,
        height: 6,
        borderRadius: 3,
        margin: 2,
        backgroundColor: '#19BAB9',
    },
});

export { ImageSlide }