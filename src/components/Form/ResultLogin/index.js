import React from "react"
import { View, Text } from "react-native"
import styles from "./style"

export default function ResultLogin(props){
    return(
        <View style={styles.resultLogin}>
            <Text style={styles.information}>{props.messageResultLogin}</Text>
        </View>
    );
}