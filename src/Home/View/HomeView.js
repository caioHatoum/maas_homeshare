import React from 'react';
import styles from './HomeStyle';
import { View, TextInput, TouchableHighlight, TouchableOpacity, TouchableWithoutFeedback, Text} from 'react-native';

const HomeView =(props) => {
        return(
            <View style={styles.container}>
            <TextInput style={styles.textInput}>
                email {props.cont}
            </TextInput>
            <TouchableHighlight onPress={props.onPressed}>
                <View style={styles.viewButton}> 
                    <Text>
                        TouchableHighlight
                    </Text>
                </View>
            </TouchableHighlight>
            <TouchableOpacity onPress={props.onPressed}>
                <View style={styles.viewButton}>
                    <Text>
                        TouchableOpacity
                    </Text>
                </View>
            </TouchableOpacity>
            <TouchableWithoutFeedback onPress={props.onPressed}>
                <View style={styles.viewButton}>
                    <Text>
                        TouchableWithoutFeedback
                    </Text>
                </View>
            </TouchableWithoutFeedback>
            </View>
        );
}
export default HomeView;