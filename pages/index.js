import { getProviders, getSession, useSession } from 'next-auth/react';

import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Login from '../components/Login';

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();

  if (!session) return <Login providers={providers} />;

  return (
    <>
      <main className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>
        <Sidebar />
        <Feed />
        {session.user.name}
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  // const data = await fetch('https://jsonkeeper.com/b/NKEV');
  // const trendingResults = await data.json();

  // const data1 = await fetch('https://jsonkeeper.com/b/WWMJ');
  // const followResults = await data1.json();

  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      // trendingResults,
      // followResults,
      providers,
      session,
    },
  };
}
