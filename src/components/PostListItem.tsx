import { Text, View, Image, StyleSheet } from 'react-native';
import { Post } from '../types';
import { FontAwesome } from '@expo/vector-icons';

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
    <View>
      <View style={styles.header}>
        <Image source={{ uri: post.author.image }} style={styles.userImage} />
        <View>
          <Text style={styles.userName}>{post.author.name}</Text>
          <Text>{post.author.position}</Text>
        </View>
      </View>
      <Text style={styles.postContent}>{post.content}</Text>
      {post.image && (
        <Image source={{ uri: post.image }} style={styles.postImage} />
      )}
      <View style={styles.footer}>
        <FooterButton text='Like' icon='thumbs-o-up' />
        <FooterButton text='Comment' icon='comment-o' />
        <FooterButton text='Share' icon='share' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRighe: 10,
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
