import { Suspense } from 'react';
import Image from 'next/image';
import Loader from '@/app/ui/common/loader';
import { getUser, getUserPosts } from '@/app/lib/users/api';
import { UserType, UserPostsType } from '@/app/lib/definitions';
import UserPosts from '@/app/ui/users/userPosts';
import { lusitana } from '@/app/ui/fonts';
import styles from './styles.module.css';

type Props = {
  userId: string;
};

export default async function UserPage({ userId }: Props) {
  const userData: Promise<UserType> = await getUser({ userId });
  const userPostsData: Promise<{ posts: UserPostsType[] }> = await getUserPosts({ userId });

  // const [user, userPosts ] = await Promise.all([userData, userPostsData]);
  const user = await userData;
  const userPosts = await userPostsData;

  return (
    <div className={styles.wrapper}>
      <Suspense fallback={<Loader text="loading user" />}>
        <h1 className={styles.title}>
          <Image src={user.image} alt="Photo" width={150} height={150} />
          <span className={`${styles.name} ${lusitana.className}`}>
            {user.firstName} {user.lastName}
          </span>
        </h1>
      </Suspense>
      <Suspense fallback={<Loader text="loading posts" />}>
        <UserPosts posts={userPosts?.posts} />
      </Suspense>
    </div>
  );
}
