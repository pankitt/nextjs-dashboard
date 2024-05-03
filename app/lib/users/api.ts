import { UserType, UserPostsType } from '@/app/lib/definitions';

export async function getAllUsers() {
  // await new Promise((resolve) => setTimeout(resolve, 500)); //TODO Timeout
  const res = await fetch('https://dummyjson.com/users');

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error);
  }
  const data = await res.json();
  return data as { users: UserType[] };
}

export async function getUser({ userId }: { userId: string }) {
  const res = await fetch(`https://dummyjson.com/users/${userId}`);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error);
  }
  const data = await res.json();
  return data as UserType;
}

export async function getUserPosts({ userId }: { userId: string }) {
  // await new Promise((resolve) => setTimeout(resolve, 1000)); //TODO Timeout
  const res = await fetch(`https://dummyjson.com/users/${userId}/posts`);

  if (!res.ok) {
    const error = await res.json();
    throw new Error(error);
  }
  const data = await res.json();
  return data as { posts: UserPostsType[] };
}
