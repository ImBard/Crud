import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#555',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 10
    },
    phone: {
      width: 414,
      height: 736,
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
      height: 40,
      fontSize: 18,
      borderBottomWidth: 1,
      borderBottomColor: "#999",
      borderStyle: "solid",
      alignSelf: "flex-start"
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
  });

export default styles;