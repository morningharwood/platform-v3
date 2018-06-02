export enum Overview {
  WHAT = 'What it is',
  ROLE = 'My Roles',
  WHY = ' Why is it important?'
}

export interface PostContent {
  title: string;
  subtitle: string;
  description?: string;
}

export interface PostFooterContent extends PostContent {
  title: Overview | string;
}

export interface PostBody {
  sections: Sections[];
}

export interface PostMeta {
  title: string;
}

export interface Post {
  header: PostContent;
  body: PostBody;
  footer?: PostFooterContent[];
  id: string;
}

export interface Sections extends Post {}
