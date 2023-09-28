import { ActivityIndicator, FlatList, Text } from 'react-native';
import PostListItem from '../../components/PostListItem';
import { gql, useQuery } from '@apollo/client';

const postList = gql`
  query PostListQuery {
    postList {
      content
      id
      image
      userid
      profile {
        id
        image
        name
        position
      }
    }
  }
`;

export default function HomeFeedScreen() {
  const { loading, error, data } = useQuery(postList);

  if (loading) {
    return <ActivityIndicator />;
  }

  if (error) {
    console.warn(error.message);
    return <Text>Something went wrong</Text>;
  }

  console.log(data);

  return (
    <FlatList
      data={data.postList}
      renderItem={({ item }) => <PostListItem post={item} />}
      // keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
    />
  );
}
