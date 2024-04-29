import UserPage from '@/app/ui/users/userPage';
import { lusitana } from '@/app/ui/fonts';
import Link from 'next/link';

type Params = {
  params: {
    userId: string;
  };
};

export default function Page({ params: { userId } }: Params) {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Users Page</h1>
      </div>
      <small>
        <Link href="/dashboard/users">Back</Link>
      </small>
      <UserPage userId={userId} />
    </div>
  );
}
