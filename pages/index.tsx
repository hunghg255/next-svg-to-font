import { ReactElement } from 'react';

import Image from 'next/image';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Home from '@components/Home';
import MainLayout from '@layout/MainLayout';

const HomePage = () => {
  return (
    <div>
      <Home />
      <h1>Home 11</h1>
      <Image src='/static/images/imgtest.png' width={300} height={400} quality={100} alt='' />
      <Image
        src='https://res.cloudinary.com/practicaldev/image/fetch/s--lCXt1EeI--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/i/kmbttwj1ys46hggutmgg.png'
        width={300}
        height={400}
        quality={100}
        alt=''
      />
    </div>
  );
};

HomePage.getLayout = function getLayout(page: ReactElement) {
  return (
    <MainLayout>
      <>{page}</>
    </MainLayout>
  );
};

export async function getStaticProps({ locale }: any) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}

export default HomePage;
