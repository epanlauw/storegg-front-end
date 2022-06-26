import cx from 'classnames';

interface ReachedItemProps {
  title: string;
  subtitle: string;
  isMiddle?: boolean;
  isLast?: boolean;
}
const ReachedItem = (props: Partial<ReachedItemProps>) => {
  const { title, subtitle, isMiddle, isLast } = props;

  const classTitle = cx('me-lg-35', {
    'ms-lg-35': isMiddle
  });

  return (
    <>
      <div className={classTitle}>
        <p className='text-4xl text-lg-start text-center color-palette-1 fw-bold m-0'>
          {title}
        </p>
        <p className='text-lg text-lg-start text-center color-palette-2 m-0'>
          {subtitle}
        </p>
      </div>
      {!isLast && (
        <>
          <div className='vertical-line me-lg-35 ms-lg-35 d-lg-block d-none' />
          <div className='horizontal-line mt-6 mb-6 me-lg-35 ms-lg-35 d-lg-none d-block' />
        </>
      )}
    </>
  );
};

export default ReachedItem;
