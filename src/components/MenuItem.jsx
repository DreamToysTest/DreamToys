import React from 'react';
import Link from 'next/link';

const MenuItem = ({ page, pathname, handlePageChange, isSidebar }) => {
  const activeColor = isSidebar ? 'text-secondary-500' : 'text-primary-500';
  const inactiveColor = isSidebar ? 'text-white' : 'text-primary-300';
  const borderColor = isSidebar ? 'border-secondary-500' : 'border-primary-500';

  return (
    <Link href={page.route} passHref>
      <div
        className={`list-none cursor-pointer w-full h-full flex justify-center items-center ${pathname === page.route ? activeColor : inactiveColor} ${pathname === page.route ? 'border-b-2' : ''} ${borderColor}`}
        onClick={() => handlePageChange(page.id)}
      >
        <span className={`text-center text-xl mr-0.5 font-bold ${pathname === page.route && isSidebar ? activeColor : ''}`}>{page.title}</span>
        <span className={`w-[2.5rem] h-[2.5rem] flex justify-center items-center ${pathname === page.route ? activeColor : inactiveColor}`}>{page.icon}</span>
      </div>
    </Link>
  );
};

export default MenuItem;
