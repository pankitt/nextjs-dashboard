export async function getAllUsers() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 500)); //TODO Timeout
    const res = await fetch('https://dummyjson.com/users');

    // if(!res.ok) throw new Error(res.statusText);
    return res.json();
  } catch (error) {
    console.error('Failed to fetch users:', error);
    throw new Error('Failed to fetch users.');
  }
}

export async function getUser({ userId }: { userId: string }) {
  try {
    const res = await fetch(`https://dummyjson.com/users/${userId}`);

    // if(!res.ok) throw new Error(res.statusText);
    return res.json();
  } catch (error) {
    console.error('Failed to fetch user:', error);
    throw new Error('Failed to fetch user.');
  }
}

export async function getUserPosts({ userId }: { userId: string }) {
  try {
    // await new Promise((resolve) => setTimeout(resolve, 3000)); //TODO Timeout
    const res = await fetch(`https://dummyjson.com/users/${userId}/posts`);

    // if(!res.ok) throw new Error(res.statusText);
    return res.json();
  } catch (error) {
    console.error('Failed to fetch user posts:', error);
    throw new Error('Failed to fetch user posts.');
  }
}
