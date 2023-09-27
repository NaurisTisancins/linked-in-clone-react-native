import { useLayoutEffect, useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  Image,
  Pressable,
  ScrollView,
} from 'react-native';
import { useLocalSearchParams, useNavigation } from 'expo-router';
import ExperienceListItem from '../../components/ExperienceListItem';

import userJson from '../../../assets/data/user.json';
import { User } from '../../types';

export default function UserProfile() {
  const [user, setUser] = useState<User>(userJson);
  const { id } = useLocalSearchParams();
  const navigation = useNavigation();

  useLayoutEffect(() => {
    navigation.setOptions({ title: user.name });
  }, [user?.name]);

  const onConnect = () => {
    console.warn('Connect Pressed');
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* header */}
      <View style={styles.header}>
        {/* BG IMG */}
        <Image style={styles.backImage} source={{ uri: user.backImage }} />
        <View style={styles.headerContent}>
          {/* Prof IMG */}
          <Image style={styles.profileImage} source={{ uri: user.image }} />

          {/* postion */}
          <Text style={styles.name}>{user.name}</Text>
          <Text style={styles.position}>{user.position}</Text>

          {/* connetct button */}
          <Pressable onPress={onConnect} style={styles.button}>
            <Text style={styles.buttonText}>Connect</Text>
          </Pressable>
        </View>
      </View>

      {/* about */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>About</Text>
        <Text style={styles.paragraph}>{user.about}</Text>
      </View>

      {/* experience */}
      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Experience</Text>
        {user.experience?.map((item, idx) => (
          <ExperienceListItem experience={item} key={idx} />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {},
  header: { backgroundColor: 'white', marginBottom: 5 },
  backImage: {
    width: '100%',
    aspectRatio: 5 / 1,
    marginBottom: -60,
  },

  headerContent: {
    padding: 10,
    paddingTop: 0,
  },

  profileImage: {
    width: 120,
    aspectRatio: 1,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: 'white',
  },

  name: { fontSize: 24, fontWeight: '500' },
  position: {},

  button: {
    backgroundColor: 'royalblue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 50,
    marginVertical: 10,
  },
  buttonText: { color: 'white', fontWeight: '600' },

  section: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertcial: 5,
  },
  paragraph: {
    lineHeight: 20,
  },
});
