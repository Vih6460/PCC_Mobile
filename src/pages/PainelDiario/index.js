import React from 'react'
import { View, Text } from 'react-native'

export default function PainelDiario({ route }){
    return(
        <View>
            <Text>Painel Diário</Text>
            <Text>Tipo de usuário: {route.params?.typeUser}</Text>
        </View>
    )
}