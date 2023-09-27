import { useNavigation } from 'expo-router';
import { useLayoutEffect, useState } from 'react';
import { Text, View, StyleSheet, FlatList } from 'react-native';
import users from '../../assets/data/users.json';
import UserListItem from '../components/UserListItem';

export default function SearchScreen() {
  const navigation = useNavigation();

  const [search, setSearch] = useState('');

  useLayoutEffect(() => {
    navigation.setOptions({
      headerSearchBarOptions: {
        placeholder: 'Search users',
        onChangeText: setSearch,
      },
    });
  }, []);

  return (
    <View style={{ backgroundColor: 'white' }}>
      <FlatList
        data={users}
        renderItem={({ item }) => <UserListItem user={item} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
