export interface Auth {
  karma: number;
  id: string;
}
export interface HackerNewsStory {
  id: number;
  title: string;
  by: string;
  time: number;
  url: string;
}

export interface AuthorInfo {
  about:     string;
  created:   number;
  id:        string;
  karma:     number;
  submitted: number[];
}