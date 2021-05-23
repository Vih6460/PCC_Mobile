import React from "react"
import {View, Text, Image} from "react-native"
import styles from "./style";
import style from "./style/"

export default function Title(){
    return(
        <View style={styles.boxTitle}>
            {/* <Text style={styles.textTitle}>H GOLD</Text> */}
            <Image style={styles.imgTitle} source={require("../../assets/img/logohgold.png")}/>
        </View>
    );
}