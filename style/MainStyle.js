import { StyleSheet } from "react-native";
import { color } from "react-native-elements/dist/helpers";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#555',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      backgroundColor: 'rgba(35,35,35,0.89)',
    },
    imageContainer: {
      flex: 1,
      backgroundColor: '#555',
      alignItems: 'center',
      justifyContent: 'center',
      width: '100%',
      
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
      color: '#fff'
    },
    maskedInput: {
      flexGrow: 1,
      margin: 'auto',
      width: '100%',
      justifyContent:'center',
      alignItems:'center',      
      height: 40,
      fontSize: 18,
      borderBottomWidth: 2,
      borderBottomColor: "#91a4b5",
      borderStyle: "solid",
      color: '#fff'
    },
    containerMask: {
      flexDirection: "row",
      flexWrap: 'wrap',
      marginBottom: 6,
      marginLeft: 10,
      paddingRight: 10,
    },
    errorMessage: {
      justifyContent:'center',
      fontSize: 12,
      alignSelf: "flex-start",
      marginLeft: 5,
      color: "#f00",
    },
    button: {
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
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
      color: '#fff',
      fontSize: 30,
    },
    textBottom: {
      color: '#fff'
    },
    inputLogin: {
      color: "#fff",
    }
  });

export default styles;