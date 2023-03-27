import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PrimaryLayout from '../components/layouts/primary/PrimaryLayout';
import Search from '../components/utility/search/Search';
import { NextPageWithLayout } from './page';

const Home: NextPageWithLayout = () => {
  const { locale } = useRouter();

  return (
    <section className="flex flex-col items-center gap-y-5 mt-12 sm:mt-36">
      <Image
        src="/ArgoLogo.png"
        alt="Argo Logo"
        width={300}
        height={100}
        priority
      />
      <Search />
      <p>
        Argo knowledge base offered in:{' '}
        <Link href="/" legacyBehavior locale={locale === 'en' ? 'fr' : 'en'}>
          <a className="underline text-blue-600"> Français</a>
        </Link>
      </p>
    </section>
  );
};

export default Home;

Home.getLayout = (page) => {
  return <PrimaryLayout>{page}</PrimaryLayout>;
};
