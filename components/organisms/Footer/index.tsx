import Image from 'next/image';
import FooterItem from '../../molecules/FooterItem';

const Footer = () => {
  return (
    <section className='footer pt-50'>
      <footer>
        <div className='container-fluid'>
          <div className='row'>
            <div className='col-lg-4 text-lg-start text-center'>
              <a href='' className='mb-30'>
                <Image src='/icon/logo.svg' width={60} height={60} />
              </a>
              <p className='mt-30 text-lg color-palette-1 mb-30'>
                StoreGG membantu gamers
                <br /> untuk menjadi pemenang sejati
              </p>
              <p className='mt-30 text-lg color-palette-1 mb-30'>
                Copyright 2021. All Rights Reserved.
              </p>
            </div>
            <div className='col-lg-8 mt-lg-0 mt-20'>
              <div className='row gap-sm-0'>
                <FooterItem
                  title='Company'
                  listMenu={[
                    { title: 'About Us', href: '/about-us' },
                    { title: 'Press Release', href: '/press-release' },
                    { title: 'Terms of Use', href: '/terms-of-use' },
                    { title: 'Privacy & Policy', href: '/privacy-policy' }
                  ]}
                />
                <FooterItem
                  title='Support'
                  listMenu={[
                    { title: 'Refund Policy', href: '/refund-policy' },
                    { title: 'Unlock Rewards', href: '/unlock-rewards' },
                    { title: 'Live Chatting', href: '/live-chatting' }
                  ]}
                />
                <FooterItem
                  title='Connect'
                  listMenu={[
                    { title: 'hi@store.gg', href: 'mailto: hi@store.gg' },
                    { title: 'team@store.gg', href: 'mailto: team@store.gg' },
                    {
                      title: 'Pasific 12, Jakarta Selatan',
                      href: 'http://maps.google.com/?q=Pasific 12, Jakarta Selatan'
                    },
                    { title: ' 021 - 1122 - 9090', href: 'tel: 02111229090' }
                  ]}
                  isLast
                />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
