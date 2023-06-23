import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
    flexDirection: 'row',
    width: "100%",
    backgroundColor: 'yellow',
    margin: "10px",
    borderRadius: '15px'

    },
    ViewImagem:{
      width: '30%',
      padding: 10,
      
    },
    ViewDados:{
      width: '70%',
      padding: 10
    },
    poster: {
      width: "100%",
      height: "100%",
      borderRadius: 15
    },
    btnTrocar: {
      borderRadius: 15,
      bottom: 10,
      width: "50%",
      height: "50%"
    }
  });

export default styles