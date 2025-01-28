// Update the Short interface to include tags
export interface Short {
  id: string;
  user: User;
  videoUrl: string;
  description: string;
  likes: number;
  comments: number;
  views: number;
  timestamp: number;
  tags: string[];
}