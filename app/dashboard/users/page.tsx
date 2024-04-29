import { Suspense } from 'react';
import { Metadata } from 'next';
import UsersList from '@/app/ui/users/usersList';
import Loader from '@/app/ui/common/loader';
import { lusitana } from '@/app/ui/fonts';

export const metadata: Metadata = {
  title: 'Users'
};

export default function Page() {
  return (
    <div className="w-full">
      <div className="flex w-full items-center justify-between">
        <h1 className={`${lusitana.className} text-2xl`}>Users Page</h1>
      </div>
      <Suspense fallback={<Loader text="loading users" />}>
        <UsersList />
      </Suspense>
    </div>
  );
}
