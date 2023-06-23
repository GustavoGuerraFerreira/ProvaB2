import { Link } from '@react-navigation/native';
import { useState } from 'react';
import { StyleSheet, Text, TextInput, View, Image, TouchableOpacity } from 'react-native';

export default function Login({navigation}){
const [usuario, setUsuario] = useState('')
const [senha, setSenha] = useState('')

return(
    <View style= {styles.container}>
       
         <Image
               style={styles.imagem}
                source={{
                     uri: "https://cdn-icons-png.flaticon.com/512/2619/2619285.png"
                }}
                />
       
       
        <TextInput
           placeholder="Usuário"
           style={styles.input}
           onChangeText={setUsuario}
           value={usuario}
        />
     
         <TextInput
           placeholder="Senha"
           secureTextEntry={true}
           style={styles.input}
           onChangeText={setSenha}
           value={senha}
        />
        <TouchableOpacity
        style={styles.btn}
        onPress={() => {navigation.push('ItensPage')}}>
        <Text style = {styles.btnText}>Entrar</Text>
        </TouchableOpacity>
       
        <View style= {styles.viewLinks}>
                <Link
                to={{screen: 'Cadastro'}}>
                   Cadastrar-se
                </Link>
                <Link
                to={{screen: 'RecuperarSenha'}}>
                   Esqueceu a senha?
                </Link>
        </View>
    </View>
    
)


}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
      },
    input: {
     border: '1px solid black',
     width: "70%",
     height: 40,
     padding: 5,
     marginBottom: 10,
     borderRadius: "2px"
    },
    imagem: {
   
      width: "150px",
      height: "150px",
      marginBottom: 15,
    },
    btn : {
       border: '2px solid black',
       width: '70%',
       height: 50,
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 5,
      backgroundColor: 'black'
    },
    btnText : {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: 'white'
    },
    viewLinks: {
     marginTop: 10,
     flexDirection: 'row',
     width: '70%',
     justifyContent: 'space-between'
    }
  });