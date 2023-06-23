import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cartao from './src/components/cartao';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ItensPage from './src/pages/ItensPage';
import PublicScreens from './src/routes/PublicScreens';

const Stack = createNativeStackNavigator()
export default function App() {
  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        <Stack.Screen name='Itens do usuário' component={ItensPage}/>
      </Stack.Navigator> */}
      <PublicScreens/>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'grey',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
