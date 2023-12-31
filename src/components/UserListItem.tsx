import { Text, View, Image, StyleSheet } from 'react-native';
import { User } from '../types';

import { Link } from 'expo-router';

type UserListItemProps = {
  user: User;
};

export default function UserListItem({ user }: UserListItemProps) {
  return (
    <Link href={`/users/${user.id}`}>
      <View style={styles.header}>
        {user.image && (
          <Image source={{ uri: user.image }} style={styles.userImage} />
        )}
        <View>
          <Text style={styles.userName}>{user.name}</Text>
          <Text>{user.position}</Text>
        </View>
      </View>
    </Link>
  );
}

const styles = StyleSheet.create({
  header: { flexDirection: 'row', alignItems: 'center', padding: 10 },
  userImage: { width: 50, height: 50, borderRadius: 25, marginRight: 10 },
  userName: { fontWeight: 'bold', fontSize: 16, marginBottom: 5 },
});
