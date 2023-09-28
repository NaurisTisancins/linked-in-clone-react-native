import { Text, View, Image, StyleSheet, Pressable } from 'react-native';
import { Post } from '../types';
import { FontAwesome } from '@expo/vector-icons';
import { Link } from 'expo-router';

type PostListItemProps = {
  post: Post;
};

type FooterButtonProps = {
  text: string;
  // icon: keyof typeof FontAwesome.glyphMap;
  icon: React.ComponentProps<typeof FontAwesome>['name'];
};

function FooterButton({ text, icon }: FooterButtonProps) {
  return (
    <View style={{ flexDirection: 'row' }}>
      <FontAwesome name={icon} size={24} color='gray' />
      <Text style={{ marginLeft: 5, color: 'gray', fontWeight: '500' }}>
        {text}
      </Text>
    </View>
  );
}

export default function PostListItem({ post }: PostListItemProps) {
  return (
    <Link href={`/posts/${post.id}`} asChild>
      <Pressable style={styles.container}>
        <Link href={`/users/${post.profile.id}`}>
          <View style={styles.header}>
            {post.profile.image && (
              <Image
                source={{ uri: post.profile.image }}
                style={styles.userImage}
              />
            )}
            <View>
              <Text style={styles.userName}>{post.profile.name}</Text>
              <Text>{post.profile.position}</Text>
            </View>
          </View>
        </Link>
        <Text style={styles.postContent}>{post.content}</Text>
        {post.image && (
          <Image source={{ uri: post.image }} style={styles.postImage} />
        )}
        <View style={styles.footer}>
          <FooterButton text='Like' icon='thumbs-o-up' />
          <FooterButton text='Comment' icon='comment-o' />
          <FooterButton text='Share' icon='share' />
        </View>
      </Pressable>
    </Link>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    width: '100%',
    maxWidth: 500,
    alignSelf: 'center',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },

  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  postContent: {
    margin: 10,
    marginTop: 0,
  },
  postImage: {
    width: '100%',
    aspectRatio: 1,
  },
  footer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-around',
    borderTopWidth: 0.5,
    borderColor: 'lightgray',
  },
});
