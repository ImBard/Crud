import * as React from 'react';
import { View, Text } from 'react-native';
import { Button as PaperButton, Paragraph, Dialog, Portal, Provider } from 'react-native-paper';

const CustomDialog = (props) => {
    return(
        <Provider>
            <View>
                <Portal>
                <Dialog visible={props.visible} onDismiss={() => props.onClose(false)}>
                    <Dialog.Title>{props.titulo}</Dialog.Title>
                    <Dialog.Content>
                    <Paragraph>{props.mensagem}</Paragraph>
                    </Dialog.Content>
                    <Dialog.Actions>
                        <PaperButton onPress={() => props.onClose(false)}>Done</PaperButton> 
                    </Dialog.Actions>
                </Dialog>
                </Portal>
            </View>
        </Provider>
    )
}

export default CustomDialog