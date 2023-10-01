import { useState } from 'react';
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { gql, useMutation } from '@apollo/client';
import { useUserContext } from '@/context/UserContext';

const createProfileMutation = gql`
  mutation CreateProfile($name: String, $about: String, $authid: String) {
    insertProfile(about: $about, authid: $authid, name: $name) {
      id
      name
      authid
      about
    }
  }
`;

export default function SetupProfileScreen() {
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');

  const { authUser, reloadDbUser } = useUserContext();

  const [handleMutation, { loading }] = useMutation(createProfileMutation);

  const onSave = async () => {
    try {
      await handleMutation({
        variables: {
          name: name,
          about: about,
          authid: authUser.id,
        },
      });
      reloadDbUser();
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Setup profile</Text>

      <TextInput
        placeholder='Name'
        value={name}
        onChangeText={setName}
        style={styles.input}
      />
      <TextInput
        placeholder='About'
        value={about}
        multiline={true}
        numberOfLines={3}
        onChangeText={setAbout}
        style={styles.input}
      />

      <TouchableOpacity style={styles.submitButton} onPress={onSave}>
        <Text style={styles.submitButtonText}>
          {loading ? 'Saving...' : 'Save'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    borderColor: 'gray',
    borderWidth: 1,
    padding: 10,
    width: '100%',
    borderRadius: 5,
    marginVertical: 5,
  },
  submitButton: {
    backgroundColor: 'royalblue',
    padding: 10,
    alignItems: 'center',
    borderRadius: 5,
    width: '100%',
  },
  submitButtonText: { fontWeight: 'bold', color: 'white' },
});
