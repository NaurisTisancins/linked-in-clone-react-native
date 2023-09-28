export interface Post {
  id: string;
  content: string;
  image?: string;
  likes: number;
  profile: User;
  comments?: Comment[];
}

export interface User {
  id: string;
  name: string;
  position: string;
  image: string;
  backImage?: string;
  about?: string;
  experience?: Experience[];
}

export interface Comment {
  user: {
    name: string;
    image: string;
  };
  comment: string;
  timestamp: string;
}

export type Experience = {
  id: string;
  title: string;
  companyname: string;
  companyimage?: string;
};
