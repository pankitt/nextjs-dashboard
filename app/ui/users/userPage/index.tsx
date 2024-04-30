import { Suspense } from 'react';
import Image from 'next/image';
import Loader from '@/app/ui/common/loader';
import { getUser, getUserPosts } from '@/app/lib/users/api';
import UserPosts from '@/app/ui/users/userPosts';
import { lusitana } from '@/app/ui/fonts';
import styles from './styles.module.css';

type Props = {
  userId: string;
};

export default async function UserPage({ userId }: Props) {
  const user = await getUser({ userId }); // Promise<UserType>
  //Promise<{ posts: UserPostsType[] }>

  // const [user, userPosts ] = await Promise.all([userData, userPostsData]);
  // const user = await userData;
  // const userPosts = await userPostsData;

  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}>
        <Image src={user.image} alt="Photo" width={150} height={150} />
        <span className={`${styles.name} ${lusitana.className}`}>
          {user.firstName} {user.lastName}
        </span>
      </h1>
      <Suspense fallback={<Loader text="loading posts" />}>
        <UserPosts userId={userId} />
      </Suspense>
    </div>
  );
}
