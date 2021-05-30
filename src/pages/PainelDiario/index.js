import React from 'react';
import { StatusBar, StyleSheet, ScrollView, View, Image, Text } from 'react-native';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons'; 


export default function PainelDiario(){
    return(
        <ScrollView style={styles.container}>
            <StatusBar barStyle="light-content" />

            <View style={styles.boxTitle}>
                <Image style={styles.imgTitle} source={require("../../assets/img/logohgold.png")}/>
            </View>

            <View style={styles.boxDescription}>
                <Text style={styles.textTitle}>Painel Diário</Text> 
                <Text style={styles.textTitleDay}><AntDesign name="calendar" size={20} color="#fff" /> 07/06/2021</Text>
            </View>

            <View style={{marginTop: 30}}>
                <View style={styles.linha}>
                    <Text style={styles.headTable}>Motorista</Text>
                    <Text style={styles.headTable}>Status</Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>Juan</Text>
                    <Text style={styles.tableContentTextsR}><Entypo name="check" size={30} color="#11ff00" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>Carlos Alberto</Text>
                    <Text style={styles.tableContentTextsR}><MaterialIcons name="clear" size={30} color="#ff0000" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>Bispo</Text>
                    <Text style={styles.tableContentTextsR}><Entypo name="check" size={30} color="#11ff00" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>Alexandre</Text>
                    <Text style={styles.tableContentTextsR}><Entypo name="check" size={30} color="#11ff00" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>Gilmar</Text>
                    <Text style={styles.tableContentTextsR}><MaterialIcons name="clear" size={30} color="#ff0000" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>João Victor</Text>
                    <Text style={styles.tableContentTextsR}><Entypo name="check" size={30} color="#11ff00" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>Matheus Henrique</Text>
                    <Text style={styles.tableContentTextsR}><MaterialIcons name="clear" size={30} color="#ff0000" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>Gabriel</Text>
                    <Text style={styles.tableContentTextsR}><MaterialIcons name="clear" size={30} color="#ff0000" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>Augusto</Text>
                    <Text style={styles.tableContentTextsR}><MaterialIcons name="clear" size={30} color="#ff0000" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>Fabio Elia</Text>
                    <Text style={styles.tableContentTextsR}><Entypo name="check" size={30} color="#11ff00" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>Michel</Text>
                    <Text style={styles.tableContentTextsR}><Entypo name="check" size={30} color="#11ff00" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>João Henrico</Text>
                    <Text style={styles.tableContentTextsR}><Entypo name="check" size={30} color="#11ff00" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>Djalma</Text>
                    <Text style={styles.tableContentTextsR}><Entypo name="check" size={30} color="#11ff00" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={styles.tableContent}>
                    <Text style={styles.tableContentTextsL}>Lucas</Text>
                    <Text style={styles.tableContentTextsR}><Entypo name="check" size={30} color="#11ff00" />     <Entypo name="eye" size={30} color="#ffe600" /></Text>
                </View>

                <View style={{margin: 60}}></View>

            </View> 

            {/* <Text style={styles.item}>Painel Diário</Text>
            <Text style={styles.cor}>Tipo de usuário: {route.params?.typeUser}</Text> */}
             
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#171717',
      paddingTop: 60,
    },

    boxTitle: {
        alignItems: "center",
        justifyContent: "center",
        padding: 10,
    },

    imgTitle: {
        width: 200,
        height: 100,
        borderRadius: 30
    },

    boxDescription: {
        marginTop: 30,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    textTitle: {
        fontSize: 40,
        color: '#ffe600',
    },

    textTitleDay: {
        fontSize: 20,
        color: '#fff',

    },

    linha: {
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },

    headTable: {
        color: "#fff",
        fontSize: 30,
    },


    tableContent: {
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        width: "100%",
    },

    tableContentTextsL: {
        width: "50%",
        fontSize: 20,
        color: '#fff',
        textAlign: "center",
    },

    tableContentTextsR: {
        width: "50%",
        fontSize: 20,
        color: '#fff',
        textAlign: "center",
    }
  });