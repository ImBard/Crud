import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Button, TouchableOpacity } from 'react-native';
import { Input } from "react-native-elements";
import styles from "../style/MainStyle";
import { TextInputMask } from "react-native-masked-text";
import userService from "../Services/UserServices";

export default function Post({navigation}) {

    const [nome, setNome] = useState(null)
    const [nascimento, setNascimento] = useState(null)
    const [email, setEmail] = useState(null)
    const [senha, setSenha] = useState(null)
    const [errorNome, setErrorNome] = useState(null)
    const [errorNascimento, setErrorNascimento] = useState(null)
    const [errorEmail, setErrorEmail] = useState(null)
    const [errorSenha, setErrorSenha] = useState(null)
    const [isLoading, setLoading] = useState(false)
    let datetimeField = null
    
    // Se eu usar o useEffect quando carregar a pagina vai dar erro em todos os inputs, pois o use effect 'atualiza' as coisas toda vez que há uma renderização da pagina
    /*useEffect(() => {
        Enviar();
    },[])*/

    const validate = () => {
        let error = false
        setErrorNome(null)
        setErrorNascimento(null)
        setErrorEmail(null)
        setErrorSenha(null)

        if (nome == null) {
            setErrorNome('Preencha seu nome')
            error = true
        }

        const reEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!reEmail.test(String(email).toLocaleLowerCase())){
            setErrorEmail('Preencha seu email corretamente')
            error = true
        }

        if (!datetimeField.isValid()){
            setErrorNascimento('Preencha sua data corretamente DD/MM/YYYY')
            error = true
        }

        const reSenha = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z])(?!.*[.,\/#!$%\^&\*;:{}=\-_`~()]).{6,}$/;
        if(!reSenha.test(String(senha))){
            setErrorSenha('tem q ter 8 digitos \n tem q ter letras minusculas e maiusculas \n conter numeros ')
            error = true
        }

        return !error
    }

    // Se validate() nao estiver valido a função não envia os dados para o userServices que envia pra API e conecta com o banco de dados e armazena os dados
    async function Enviar() {
        if (validate()){
            setLoading(true)
            let data = {
                nome: nome, nascimento: nascimento, email: email, senha: senha
            }
            userService.Cadastrar(data)
            .then((response) => {
                setLoading(false)
                console.log(response.data)
            }).catch((error) => {
                setLoading(false)
                console.log(error)
                console.log("Deu erro!")
            })
        }
    }

    return(
        <View style={styles.container}>
                <Input 
                style={styles.input}
                placeholder='Digite seu nome'
                onChangeText={value => {
                    setNome(value)
                    setErrorNome(null)}}
                    returnKeyType='done'
                    errorMessage={errorNome}
                    maxLength={50}
                />



                <View style={styles.containerMask}>
                    <TextInputMask
                        placeholder='DD/MM/YYYY'
                        type={'datetime'}
                        options={{
                            format: 'DD/MM/YYYY'
                        }}
                        value={nascimento}
                        onChangeText={value => {
                            setNascimento(value)
                            setErrorNascimento(null)
                        }}
                        keyboardType='numeric'
                        returnKeyType='done'
                        style={styles.maskedInput}
                        ref={(ref) => datetimeField = ref}
                    />
                    <Text style={styles.errorMessage}>{errorNascimento}</Text>
                </View>

                <Input
                style={styles.input}
                    placeholder="E-mail"
                    keyboardType="email-address"
                    onChangeText={value => {
                    setEmail(value)
                    setErrorEmail(null)}}
                    returnKeyType="done"
                    errorMessage={errorEmail}
                    maxLength={50}
                />

                <Input
                    style={styles.input}
                    placeholder='Senha'
                    onChangeText={value => {
                        setSenha(value)
                        setErrorSenha(null)}}
                    returnKeyType='go'
                    errorMessage={errorSenha}
                    secureTextEntry={true}
                    maxLength={32}
                    
                />

                {isLoading &&
                <Text>...CARREGANDO!</Text>
                }
                {!isLoading &&
                <TouchableOpacity style={styles.button}
                    onPress={() => Enviar()}>
                <Text style={{fontSize:20, color: '#fff'}}>Criar</Text>
                </TouchableOpacity>
                } 
                <Button
                    buttonStyle={{margin:20}}
                    title='Lista!'
                    onPress={() =>  navigation.navigate('lista')}
                />
            </View>
    )
}