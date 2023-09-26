export interface Post {
  id: string;
  content: string;
  image?: string;
  likes: number;
  author: User;
  comments?: Comment[];
}

export interface User {
  id: string;
  name: string;
  position: string;
  image: string;
}

export interface Comment {
  user: {
    name: string;
    image: string;
  };
  comment: string;
  timestamp: string;
}
