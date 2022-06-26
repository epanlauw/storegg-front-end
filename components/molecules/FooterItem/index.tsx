import cx from 'classnames';
import ListItem from './ListItem';

interface FooterItemProps {
  title: string;
  listMenu: ListMenu[];
  isLast?: boolean;
}

interface ListMenu {
  title: string;
  href: string;
}

const FooterItem = (props: Partial<FooterItemProps>) => {
  const { title, listMenu, isLast } = props;

  const classTitle = cx(
    'col-md-4',
    {
      'col-6 mb-lg-0 mb-25': !isLast
    },
    { 'col-12 mt-lg-0 mt-md-0 mt-25': isLast }
  );

  return (
    <div className={classTitle}>
      <p className='text-lg fw-semibold color-palette-1 mb-12'>{title}</p>
      <ul className='list-unstyled'>
        {listMenu?.map((menu, idx) => {
          // eslint-disable-next-line react/no-array-index-key
          return <ListItem key={idx} title={menu.title} href={menu.href} />;
        })}
      </ul>
    </div>
  );
};

export default FooterItem;
