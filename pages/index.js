import { getProviders, getSession, useSession } from 'next-auth/react';
import { useRecoilState } from 'recoil';

import { modalState } from '../atoms/modalAtom';

import Feed from '../components/Feed';
import Sidebar from '../components/Sidebar';
import Login from '../components/Login';
import Widgets from '../components/Widgets.js';
import Modal from '../components/Modal';

export default function Home({ trendingResults, followResults, providers }) {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useRecoilState(modalState);

  if (!session) return <Login providers={providers} />;

  return (
    <>
      <main className='bg-black min-h-screen flex max-w-[1500px] mx-auto'>
        <Sidebar />
        <Feed />
        <Widgets
          trendingResults={trendingResults}
          followResults={followResults}
        />
        {isOpen && <Modal />}
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const trendingResults = await fetch('https://www.jsonkeeper.com/b/NKEV').then(
    (res) => res.json()
  );
  const followResults = await fetch('https://www.jsonkeeper.com/b/WWMJ').then(
    (res) => res.json()
  );

  const providers = await getProviders();
  const session = await getSession(context);

  return {
    props: {
      trendingResults,
      followResults,
      providers,
      session,
    },
  };
}
