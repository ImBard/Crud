import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    phone: {
      padding: 10,
      backgroundColor:'#fff',
      borderRadius: 25,
      justifyContent:'center'
    },
    card: {
      backgroundColor: '#fff',
      justifyContent: 'center',
      alignItems: 'center',
      width: 300,
      height: 200,
      borderRadius: 20,
    },
    input: {
      flexGrow: 1,
      height: 40,
      fontSize: 18,
      borderBottomWidth: 1,
      borderBottomColor: "#999",
      borderStyle: "solid",
      alignSelf: "flex-start"
    },
    maskedInput: {
      flexGrow: 1,
      margin: 'auto',
      width: 304,
      justifyContent:'center',
      alignItems:'center',      
      height: 40,
      fontSize: 18,
      borderBottomWidth: 2,
      borderBottomColor: "#999",
      borderStyle: "solid"
    },
    containerMask: {
      flexDirection: "row",
      marginBottom: 6,
      marginLeft: 10,
      marginRight: 10,
    },
    errorMessage: {
      justifyContent:'center',
      fontSize: 12,
      alignSelf: "flex-start",
      marginLeft: 15,
      color: "#f00",
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#000',
      width: 150,
      height: 45,
      borderRadius: 25,
      margin: 20
    },
    lista: {
      margin:5, 
      backgroundColor: '#fff', 
      borderRadius: 10, 
      padding: 10
    },
    headerLista: {
      fontSize: 20, 
      width: '100%', 
      textAlign: 'center', 
      fontWeight: 'bold'
    },
    titulo: {
      justifyContent: "flex-start",
      color: '#555'
    }
  });

export default styles;