import React from 'react';
import ReachedItem from '../../molecules/ReachedItem';

const Reached = () => {
  return (
    <section className='reached pt-50 pb-50'>
      <div className='container-fluid'>
        <div className='d-flex flex-lg-row flex-column align-items-center justify-content-center gap-lg-0 gap-4'>
          <ReachedItem title='290M+' subtitle='Players Top Up' />
          <ReachedItem title='12.500' subtitle='Games Available' isMiddle />
          <ReachedItem title='99,9%' subtitle='Happy Players' isMiddle />
          <ReachedItem
            title='4.7'
            subtitle='Rating Worldwide'
            isMiddle
            isLast
          />
        </div>
      </div>
    </section>
  );
};

export default Reached;
