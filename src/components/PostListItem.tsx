import { Text, View, Image } from 'react-native';
import { Post } from '../types';

type PostListItemProps = {
  post: Post;
};

export default function PostListItem({ post }: PostListItemProps) {
  console.log(post);
  return (
    <View>
      <Text>{post.content}</Text>
    </View>
  );
}
