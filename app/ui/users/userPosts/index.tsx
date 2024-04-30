import { getUserPosts } from '@/app/lib/users/api';
// import { UserPostsType } from '@/app/lib/definitions';
import styles from './styles.module.css';

type Props = {
  // promise: Promise<UserPostsType[]>;
  // posts: UserPostsType[];
  userId: string;
};

export default async function UserPosts({ userId }: Props) {
  // const posts = await promise;
  const userPosts = await getUserPosts({ userId });

  return (
    <div className={styles.wrapper}>
      {userPosts.posts.map(({ id, title, body }) => (
        <article className={styles.article} key={id}>
          <h2 className={styles.postTitle}>{title}</h2>
          <p>{body}</p>
        </article>
      ))}
    </div>
  );
}
