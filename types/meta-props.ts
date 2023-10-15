import { PostType } from './post';

export interface MetaProps
  extends Pick<
    PostType,
    'publishedTime' | 'modifiedTime' | 'description' | 'image' | 'title'
  > {
  /**
   * For the meta tag `og:type`
   */
  type?: string;
}
