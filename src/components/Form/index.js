import React, { useState } from "react"
import {View, Text, TextInput, TouchableOpacity, Keyboard} from "react-native"
import styles from "./style"
import ResultLogin from "./ResultLogin"

export default function Form(){
    const [user, setUser] = useState(null)
    const [password, setPassword] = useState(null)
    const [messageLogin, setMessageLogin] = useState(null)

    function loginValidation(){
        if(user == "viniciuz6460@gmail.com" && password == "teste"){
            return true 
        }else{
            return false
        }
    }

    function login(){
        if(user != null && password != null){
            loginValidation()
            if(loginValidation() == true){
                setUser(null)
                setPassword(null)
                setMessageLogin("Sucesso ao efetuar login.")
                Keyboard.dismiss()
                return
            }else{
                setUser(null)
                setPassword(null)
                setMessageLogin("Falha ao efetuar login.")
                Keyboard.dismiss()
                return
            }
        }else{
            setMessageLogin("Preencha o usuário e senha.")
        }
    }

    return(        
            <View style={styles.formContext}>

                <View style={styles.form}>
                    <Text style={styles.textTitle}>Login</Text>

                    <Text style={styles.formLabel}>Usuário</Text>
                    <TextInput style={styles.formInput} onChangeText={setUser} value={user} placeholder="nome@gmail.com" keyboardType="email-address" autoCorrect={false}/>

                    <Text style={styles.formLabel}>Senha</Text>
                    <TextInput style={styles.formInput} onChangeText={setPassword} value={password} placeholder="********" keyboardType="default" secureTextEntry={true} autoCorrect={false}/>

                    <TouchableOpacity style={styles.buttonCalculator} onPress={() => login()}>
                        <Text style={styles.textButtonCalculator}>Entar</Text>
                    </TouchableOpacity>

                    <ResultLogin messageResultLogin={messageLogin}/>
                </View>

            </View>
    );
}