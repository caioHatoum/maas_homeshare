import React from 'react';
import styles from './HomeStyle';
import { View, TextInput} from 'react-native';
const HomeView = () => {
    return(
        <View style={styles.container}>
         <TextInput style={styles.textInput}>
             email
         </TextInput>
        </View>
    );
}

export default HomeView;