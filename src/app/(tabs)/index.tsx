import { ActivityIndicator, FlatList, Text } from 'react-native';
import PostListItem from '@/components/PostListItem';
import { gql, useQuery } from '@apollo/client';
import { useState } from 'react';

const postPaginatedListQuery = gql`
  query PostPaginatedListQuery($first: Int, $after: Int) {
    postPaginatedList(first: $first, after: $after) {
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
  const [hasMore, setHasMore] = useState<boolean>(true);
  const { loading, error, data, fetchMore } = useQuery(postPaginatedListQuery, {
    variables: { first: 2 },
  });

  const loadMore = async () => {
    if (!hasMore) return;

    const res = await fetchMore({
      variables: { after: data.postPaginatedList.length },
    });

    if (res.data.postPaginatedList.length === 0) {
      setHasMore(false);
    }

    console.log(res.data.postPaginatedList);
  };

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
      data={data.postPaginatedList}
      renderItem={({ item }) => <PostListItem post={item} />}
      keyExtractor={(item) => item.id}
      showsVerticalScrollIndicator={false}
      contentContainerStyle={{ gap: 10 }}
      onEndReached={loadMore}
      ListFooterComponent={() => (
        <Text
          onPress={loadMore}
          style={{
            alignSelf: 'center',
            fontWeight: '600',
            fontSize: 20,
            color: 'royalblue',
          }}
        >
          Load more
        </Text>
      )}
    />
  );
}
