import React, { useState } from "react";
import { TouchableOpacity, View, Text, Image, ImageBackground, } from 'react-native';
import { Input } from "react-native-elements";

import styles from "../style/MainStyle";

export default function Login({navigation}) {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    const Entrar = () => {
        console.log('ALOOOOOOOOOOOOOOOOOOO')
    }

    return(
        <ImageBackground source={{uri: 'https://www.infomoney.com.br/wp-content/uploads/2021/08/nrd-D6Tu_L3chLE-unsplash.jpg?quality=70'}}
            style={styles.imageContainer}
            > 
        <View style={styles.container}>

            <Text style={styles.titulo}>Log-in</Text>

            <Input
                placeholder='E-mail'
                leftIcon={{reverse: true, type:'font-awesome', name: 'envelope', size: 15}}
                keyboardType='email-address'
                inputStyle={styles.inputLogin}
                onChangeText={(value) => setEmail(value)}
            />

            <Input
                placeholder='Password'
                leftIcon={{reverse: true,type: 'font-awesome', name:'lock', size: 15}}
                secureTextEntry={true}
                inputStyle={styles.inputLogin}
                onChangeText={(value) => setPassword(value)}
            />

            <TouchableOpacity style={styles.button}
            onPress={() => Entrar()}>

                <Text style={{fontSize:20, color: '#000'}}>Entrar</Text>
            
            </TouchableOpacity>

            <Text style={styles.textBottom}>Não possui uma conta?</Text> 

            <Text style={[styles.textBottom,{borderBottomWidth: 1, borderBottomColor: '#fff', height: 21}]}
                onPress={() => navigation.navigate('Post')}    
            >
                Cadastrar!
            </Text>
        </View>
            </ImageBackground>
    )
}