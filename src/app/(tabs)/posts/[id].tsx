import PostListItem from '../../../components/PostListItem';
import posts from '../../../../assets/data/posts.json';
import { useLocalSearchParams } from 'expo-router';
import { ScrollView } from 'react-native-gesture-handler';

export default function PostDetailsScreen() {
  const { id } = useLocalSearchParams();

  const post = posts.find((post) => post.id === id);
  return <ScrollView>{post && <PostListItem post={post} />}</ScrollView>;
}
