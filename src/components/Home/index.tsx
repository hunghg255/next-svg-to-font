import { useTranslation } from 'next-i18next';

import { Icon } from '@components/UI/IconFont/Icon';

// import styles from './index.module.scss';

function Home() {
  const { t } = useTranslation('home');

  return (
    <>
      <h1 className='text-3xl font-bold underline bg'>{t('home.title')}</h1>
      <div className='flex'>
        <div className='flex-none w-14 h-14'>01</div>
        <div className='flex-initial w-64 ...'>02</div>
        <div className='flex-initial w-32 ...'>03</div>
      </div>

      <Icon icon='t4font-vite' className='text-[red] !text-[50px]' />
    </>
  );
}

export default Home;
