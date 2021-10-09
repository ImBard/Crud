import React, {useState, useEffect} from "react";
import { View, Text, TouchableOpacity, SafeAreaView } from "react-native";
import { Button, Input} from 'react-native-elements';
import styles from "../style/MainStyle";

export default function Crud({navigation}) {

    const [nome, setNome] = useState('')
    const [born, setBorn] = useState('')
    const [data, setData] = useState([])
    
    const next = () => {
        let preData = {
            id: '0',
            nome: nome,
            nascimento: born
        }
        
        setData(preData)
        console.log(data)
        navigation.navigate('lista', [data]);
    }
    

    return(
        <View style={styles.container}>
            <SafeAreaView>
                <View style={styles.card} >
                    <Input onChangeText={value => {
                        setNome(value)}}
                        placeholder='Nome'
                        returnKeyType='done' />
                    
                    <Input onChangeText={value => {setBorn(value)}}
                        returnKeyType='done'
                        placeholder='yyyy/mm/dd'
                        keyboardType='number-pad'

                    />
                    <Button title='Just Press Me!'
                        onPress={() => next()}
                    />
                    
                </View>
            </SafeAreaView>
        </View>
    )
}