import PostListItem from '../../components/PostListItem';
import posts from '../../../assets/data/posts.json';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';
import { gql, useQuery } from '@apollo/client';
import { ActivityIndicator, Text } from 'react-native';

const query = gql`
  query MyQuery($id: ID!) {
    post(id: $id) {
      content
      id
      image
      profile {
        id
        image
        name
        position
      }
    }
  }
`;

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams();

  const { loading, error, data } = useQuery(query, { variables: { id } });

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    console.warn(error.message);
    return <Text>Something went wrong</Text>;
  }

  return (
    <ScrollView>
      <PostListItem post={data.post} />
    </ScrollView>
  );
}
