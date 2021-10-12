import React from "react";
import { TouchableOpacity, View, Text} from 'react-native';
import { Input } from "react-native-elements";
import styles from "../style/MainStyle";

export default function Login({navigation}) {
    return(
        <View style={styles.container}>
            <Text style={styles.titulo}>Market List</Text>

            <TouchableOpacity style={styles.button}
            onPress={() => navigation.navigate('Post')}>

                <Text style={{fontSize:20, color: '#fff'}}>Cadastrar</Text>
            
            </TouchableOpacity>
        </View>
    )
}