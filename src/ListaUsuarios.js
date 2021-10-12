import axios from "axios";
import React, {useEffect, useState} from "react";
import { View, Text, ScrollView, FlatList } from 'react-native';
import styles from "../style/MainStyle";

export default function lista({navigation}) {
    console.log('teste')
    const [usuarios, setUsuarios] = useState([])
    
    useEffect(() => {
        listarUsuarios();
    },[])

    async function listarUsuarios() {
        const response = await axios.get('http://192.168.0.5:3000/usuario/listar');
        setUsuarios(response.data)
    }
    
    return(
        <View style={styles.container, {overFlow: 'hidden'}}>
            <Text style={styles.headerLista}>Lista de Usuários</Text>
            <FlatList
            keyExtractor={item => item.id.toString()}
            data={usuarios}
            renderItem={({item}) => (
                <View style={[styles.lista, {backgroundColor: item.id % 2 === 0 ? '#fcfbfb' : '#D3D3D3'}]}>
                    <Text>Identificação: {item.id}</Text>
                    <Text>Nome: {item.name}</Text>
                    <Text>Data de Nascimento: {item.nascimento}</Text>
                    <Text>E-mail: {item.email}</Text>
                    <Text>Senha: {item.senha}</Text>
                </View>
            )}
            />
        </View>
    )
}