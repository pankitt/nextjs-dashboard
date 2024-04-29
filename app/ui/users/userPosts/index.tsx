import { UserPostsType } from '@/app/lib/definitions';
import styles from './styles.module.css';

type Props = {
  // promise: Promise<UserPostsType[]>;
  posts: UserPostsType[];
};

export default async function UserPosts({ posts }: Props) {
  // const posts = await promise;

  return (
    <div className={styles.wrapper}>
      {posts.map(({ id, title, body }) => (
        <article className={styles.article} key={id}>
          <h2 className={styles.postTitle}>{title}</h2>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}
