import { View, Image, Text, Button } from "react-native";
import styles from "./style";

export default function Cartao(props) {

    const uri = props.uri
    return (
        <View style={styles.container}>
            <View style={styles.ViewImagem}>
                <Image
                    style={styles.poster}
                    source={{
                        uri: props.card.uri
                    }}
                />
            </View>
            <View style={styles.ViewDados}>
                <Text>Nome do item:{props.card.name}</Text>
                <Text>Poder de ataque:{props.card.ataque}</Text>
                <Text>Defesa: {props.card.defesa}</Text>
                <Text>Durabilidade: {props.card.durabilidade}</Text>
                <Button style = {styles.btnTrocar}title="Trocar" />
            </View>
        </View>
    )
}

