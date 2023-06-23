import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cartao from '../../components/cartao/index';

let Itens = [
 {
  key: 1,
  name: " Espada de Diamante",
  ataque: " 200",
  defesa : " 0",
  durabilidade : " 10",
  uri: "https://w7.pngwing.com/pngs/921/675/png-transparent-minecraft-pocket-edition-pokemon-diamond-and-pearl-diamond-sword-swords-angle-text-symmetry.png"

 },
 {
  key: 2,
  name: " Escudo",
  ataque: " 0",
  defesa : " 200",
  durabilidade: " 300",
  uri: "https://2.bp.blogspot.com/-bpmqxktsrFw/Uy3ETRC4MgI/AAAAAAAAAm0/zvaymYQIMto/s1600/Iron_Shield_SK+(1).png"
 },
 {
  key: 3,
  name: " Arco",
  ataque: " 500",
  defesa : " 0",
  durabilidade: " 400",
  uri: "https://i.pinimg.com/originals/d0/e8/cc/d0e8cc1b2fd978e9db6999ef76f70008.jpg"
 }
]
export default function ItensPage(){
    return(
        <View style={styles.container}>
         {Itens.map(item => <Cartao card={item} key={item.key}/>)}
      </View>
    )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'black',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  