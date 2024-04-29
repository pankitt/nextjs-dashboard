import Link from 'next/link';
import { getAllUsers } from '@/app/lib/users/api';
import { UserType } from '@/app/lib/definitions';
import styles from './styles.module.css';
import Image from 'next/image';

export default async function UsersList() {
  const usersData: Promise<{ users: UserType[] }> = await getAllUsers();
  const usersList = await usersData;

  return (
    <section className={styles.wrapper}>
      {usersList?.users?.map(({ id, firstName, lastName, image }) => {
        return (
          <>
            <p className={styles.user} key={id}>
              <Link href={`users/${id}`}>
                <Image src={image} alt="Photo" width={12} height={12} className={styles.photo} />{' '}
                {firstName} {lastName}
              </Link>
            </p>
          </>
        );
      })}
    </section>
  );
}
