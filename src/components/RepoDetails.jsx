import React from 'react';
import { View, Text } from 'react-native';

const RepoDetails = ({ route }) => {
  const { repoName } = route.params;

  return (
    <View>
      <Text>Detalhes do Repositório: {repoName}</Text>
    </View>
  );
};

export default RepoDetails;
