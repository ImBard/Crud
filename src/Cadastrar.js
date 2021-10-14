import React, { useState, useEffect } from "react";
import { View, Text, ScrollView, Button, TouchableOpacity, ImageBackground } from 'react-native';
import { Input } from "react-native-elements";
import { TextInputMask } from "react-native-masked-text";


import styles from "../style/MainStyle";
import userService from "../Services/UserServices";
import CustomDialog from "../components/CustomDialog";


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

    const [visibleDialog, setVisibleDialog] = useState(false);
    const [titulo, setTitulo] = useState(null);
    const [mensagem, setMensagem] = useState(null);
    const [tipo, setTipo] = useState(null);
    
    const showDialog = (titulo, mensagem, tipo) => {
        setVisibleDialog(true)
        setTitulo(titulo)
        setMensagem(mensagem)
        setTipo(tipo)
    }
    const hideDialog = (status) => {
        setVisibleDialog(status)
        navigation.navigate('Store list')
    }

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
            setErrorSenha('- Conter 8 no minímo digitos \n- Letras minusculas e maiusculas \n- Conter numeros ')
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
                const titulo = (response.data.status)? 'Sucesso!' : "Erro"
                showDialog(titulo, response.data.mensagem, "Sucesso")
            }).catch((error) => {
                setLoading(false)
                showDialog("Erro", "Houve um erro inesperado", "Erro")
            })
        }

    }

    return(
        <ImageBackground source={{uri: 'https://michelleismoneyhungry.com/wp-content/uploads/2014/11/store-1-vintage-2.jpg'}}
            style={styles.container}
        > 
        <View style={styles.container}>
            <Text style={styles.titulo}>Cadastrar</Text>
            <Input 
            style={styles.input}
            placeholder='Digite seu nome'
            onChangeText={value => {
                setNome(value)
                setErrorNome(null)}}
                returnKeyType='done'
                errorMessage={errorNome}
                maxLength={50}
                inputStyle={styles.inputLogin}
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
                    placeholderTextColor='#91a4b5'
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
                inputStyle={styles.input}
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
                inputStyle={styles.input}
                
            />

            {isLoading &&
            <Text>...CARREGANDO!</Text>
            }
            {!isLoading &&
            <TouchableOpacity style={[styles.button, {marginBottom: 100}]}
                onPress={() => Enviar()}>
            <Text style={{fontSize:20, color: '#000'}}>Criar</Text>
            </TouchableOpacity>
            } 

            {visibleDialog &&
            <CustomDialog titulo={titulo} mensagem={mensagem} tipo={tipo} visible={visibleDialog} onClose={hideDialog}></CustomDialog>
            }

        </View>
        </ImageBackground>
    )
}