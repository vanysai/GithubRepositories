import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import Imagem from '../../assets/octocat.png';


const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
    <Image source={Imagem} style={styles.image} />
      <Text>Bem-vindo à Home</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ReposList')}>
        <Text>Ver Repositórios</Text>
      </TouchableOpacity>
      {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('RepoDetails', { repoName: 'ExemploRepo' })}>
        <Text>Detalhes do Repositório</Text>
      </TouchableOpacity> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke'
  },
  button: {
    marginTop: 20,
    padding: 10,
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  }
});

export default Home;
