export type Post = {
  id: string;
  author: User;
  content: string;
  image?: string;
  likes: number;
  comment?: Comment[];
};

export type User = {
  id: string;
  name: string;
  position: string;
  image?: string;
};

export type Comment = {
  user: {
    name: string;
    image: string;
  };
  comment: string;
  timestamp: string;
};
