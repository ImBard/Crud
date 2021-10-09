import React, { useState, useEffect } from "react";
import { View, Text, ScrollView } from 'react-native';
import { Input, Button } from "react-native-elements";
import styles from "../style/MainStyle";
import { TextInputMask } from "react-native-masked-text";

export default function Post({navigation}) {

    const [nome, setNome] = useState(null)
    const [data, setData] = useState(null)
    const [email, setEmail] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorData, setErrorData] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    let datetimeField = null
    
    // Se eu usar o useEffect quando carregar a pagina vai dar erro em todos os inputs, pois o use effect 'atualiza' as coisas toda vez que há uma renderização da pagina
    /*useEffect(() => {
        Enviar();
    },[])*/

    const validate = () => {
        let error = false
        setErrorNome(null)
        setErrorData(null)
        setErrorEmail(null)

        if (nome == null) {
            setErrorNome('Preencha seu nome')
            error = true
        }

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(email).toLocaleLowerCase())){
            setErrorEmail('Preencha seu email corretamente')
            error = true
        }

        if (!datetimeField.isValid()){
            setErrorData('Preencha sua data corretamente DD/MM/YYYY')
            error = true
        }

        return !error
    }

    // Se validate() nao estiver valido a função não envia os dados para a API
    async function Enviar() {
        if (validate()){
            try {
                await fetch('https://webhook.site/58138779-58cb-4c9c-840f-c749d8c3a164', {
                    method: 'post',
                    mode: 'no-cors',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({
                        nome: nome, data: data, email: email
                    })
                })

            } catch(e) {
                console.log(e)
            }
        }
    }

    return(
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.phone}>
                    <Input 
                    style={styles.input}
                    placeholder='Digite seu nome'
                    onChangeText={value => {
                        setNome(value)
                        setErrorNome(null)}}
                        returnKeyType='done'
                        errorMessage={errorNome}
                    />



                    <View style={styles.containerMask}>
                        <TextInputMask
                            placeholder='DD/MM/YYYY'
                            type={'datetime'}
                            options={{
                                format: 'DD/MM/YYYY'
                            }}
                            value={data}
                            onChangeText={value => {
                                setData(value)
                                setErrorData(null)
                            }}
                            keyboardType='numeric'
                            returnKeyType='done'
                            style={styles.maskedInput}
                            ref={(ref) => datetimeField = ref}
                        />
                        <Text style={styles.errorMessage}>{errorData}</Text>
                    </View>

                    <Input
                        placeholder="E-mail"
                        keyboardType="email-address"
                        onChangeText={value => {
                        setEmail(value)
                        setErrorEmail(null)}}
                        returnKeyType="done"
                        errorMessage={errorEmail}
                    />

                    <Button
                        title='Enviar!'
                        onPress={() => Enviar()}
                    />  
                    <Button
                        buttonStyle={{marginTop: 5}}
                        title='Crud'
                        onPress={() => navigation.navigate('Crud')}
                    />  
                </View>
            </ScrollView>
        </View>
    )
}