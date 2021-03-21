export interface comment {
  timestamp: number;
  topic_id: number; // not needed in state as already linked to topics
  user_id: string;
  comment: string;
}

export interface topic {
  topic_id: number;
  time_uploaded: number;
  title: string;
  file_name: string;
  thumbnail_url: string;
  comments: comment[];
}

export interface user {
  user_id: string;
  company: string;
  position: string;
  first_name: string;
  last_name: string;
}
