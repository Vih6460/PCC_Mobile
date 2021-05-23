import React, { useState } from "react"
import {View, Text, TextInput, TouchableOpacity, Keyboard} from "react-native"
import styles from "./style"
import ResultIMC from "./ResultIMC/"

export default function Form(){
    const [height, setHeight] = useState(null)
    const [weight, setWeight] = useState(null)
    const [messageImc, setMessageImc] = useState("Preencha o PESO e ALTURA.")
    const [imc, setImc] = useState(null)
    const [textButton, setTextButton] = useState("Entrar")

    function imcCalculator(){
        return setImc((weight/(height*height)).toFixed(2))
    }

    function validationIMC(){
        if(weight != null && height != null){
            imcCalculator()
            setWeight(null)
            setHeight(null)
            setMessageImc("Seu IMC é igual: ")
            setTextButton("Calcular Novamente")
            Keyboard.dismiss()
            return
        }
        setImc(null)
        setTextButton("Calcular")
        setMessageImc("Preencha o PESO e ALTURA.")
    }

    return(        
            <View style={styles.formContext}>

                <View style={styles.form}>
                    <Text style={styles.textTitle}>Login</Text>

                    <Text style={styles.formLabel}>Usuário</Text>
                    <TextInput style={styles.formInput} onChangeText={setHeight} value={height} placeholder="nome@exemplo.com" keyboardType="numeric" />

                    <Text style={styles.formLabel}>Senha</Text>
                    <TextInput style={styles.formInput} onChangeText={setWeight} value={weight} placeholder="******" keyboardType="numeric" />

                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => validationIMC()}>
                        <Text style={styles.textButtonCalculator}>{textButton}</Text>
                    </TouchableOpacity>

                    <ResultIMC messageResultImc={messageImc} resultImc={imc}/>
                </View>

            </View>
    );
}