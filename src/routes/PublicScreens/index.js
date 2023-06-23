import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItensPage from '../../pages/ItensPage';
import Login from '../../pages/LoginPage';
import Cadastro from '../../pages/CadastroPage';
import RecuperarSenha from '../../pages/RecuperarSenha';
const Stack = createNativeStackNavigator()
export default function PublicScreens(){
    return(
    <Stack.Navigator initialRouteName ='Login' screenOptions={{headerShown: false}} >
        <Stack.Screen name = "Login" component={Login}/>
        <Stack.Screen name = "ItensPage" component={ItensPage}/>
        <Stack.Screen name = "Cadastro" component={Cadastro}/>
        <Stack.Screen name= "RecuperarSenha" component={RecuperarSenha}/>

        
    </Stack.Navigator>
    )

}