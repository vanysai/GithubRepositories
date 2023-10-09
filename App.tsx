import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ReposList from './src/components/ReposList';
import RepoDetails from './src/components/RepoDetails';
import Home from './src/components/Home';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ title: 'Página Inicial' }} />
        <Stack.Screen name="ReposList" component={ReposList} options={{ title: 'Meus Repositórios' }} />
        <Stack.Screen name="RepoDetails" component={RepoDetails} options={{ title: 'Detalhes do Repositório' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
