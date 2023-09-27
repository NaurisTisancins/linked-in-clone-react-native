import { Text, StyleSheet, View, Image } from 'react-native';
import { Experience } from '../types';

type ExperienceListItemProps = {
  experience: Experience;
};

export default function ExperienceListItem({
  experience,
}: ExperienceListItemProps) {
  return (
    <View style={styles.container}>
      <Image source={{ uri: experience.companyImage }} style={styles.image} />
      <View>
        <Text style={styles.title}>{experience.title}</Text>
        <Text style={styles.title}>{experience.companyName}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    aliugnItems: 'center',
    padding: 5,
    margin: 10,
    paddingBotom: 10,
    borderBottomWidth: 0.5,
    borderColor: 'lightgray',
  },
  image: {
    width: 50,
    aspectRatio: 1,
    marginRight: 5,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
  },
});
