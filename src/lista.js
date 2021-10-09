import React from "react";
import { View, FlatList, Text } from "react-native";
import styles from "../style/MainStyle";

export default function lista({route}){

    const [data] = route.params
    data.shift()
    return(
        <View style={styles.container}>
            <FlatList
            data={[data]}
            keyExtractor = {item => item.id}
            renderItem={({item}) => (
                <View>
                    <Text>Id: {item.id}</Text>
                    <Text>nome: {item.nome}</Text>
                    <Text>nascimento: {item.nascimento}</Text>
                </View>
            )}
            />
        </View>
    )
}