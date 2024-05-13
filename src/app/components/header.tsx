import Link from 'next/link';
import React, { useState } from 'react';
import Button from './button';

interface ISideNavigationBar {
  title: string;
  link?: string;
  isActive?: boolean;
}
const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const SideNavigationData: ISideNavigationBar[] = [
    {
      title: 'Home'
      // link: Routes.DASHBOARD,
      // isActive: currentRoute === Routes.DASHBOARD
    },
    {
      title: 'About'
      // link: Routes.NEW_ARRIVAL,
      // isActive: currentRoute === Routes.NEW_ARRIVAL
    },
    {
      title: 'Blog'
      // link: Routes.BID_2_BUY,
      // isActive: currentRoute === Routes.BID_2_BUY
    },

    {
      title: 'Contact'
      // link: `${Routes.SEARCH}?active-tab=${SubRoutes.NEW_SEARCH}`,
      // isActive:
      //   currentRoute === Routes.SEARCH &&
      //   currentSubRoute !== SubRoutes.SAVED_SEARCH
    },

    {
      title: 'FAQs'
      // link: `${Routes.SEARCH}?active-tab=${SubRoutes.SAVED_SEARCH}`,
      // isActive:
      //   currentRoute === Routes.SEARCH &&
      //   currentSubRoute === SubRoutes.SAVED_SEARCH
    }
  ];
  return (
    <header className="bg-[#ffffff] text-[#2F4F4F] md:h-[88px] flex items-center h-[88px]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between w-full">
          {/* Logo */}
          <div className="flex items-center">
            <img src="/kidogram.svg" alt="Logo" className="h-8 mr-2" />
            <span className="font-bold text-lg hidden md:block">Kidogram</span>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="block md:hidden text-[#2F4F4F] focus:outline-none"
            onClick={toggleMenu}
          >
            {isMenuOpen ? (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#2F4F4F"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="#2F4F4F"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>

          {/* Navigation */}
          <nav
            className={`md:flex md:items-center md:justify-end md:flex-row md:space-x-4 ${
              isMenuOpen ? 'flex flex-col space-y-4' : 'hidden md:block'
            }`}
          >
            {SideNavigationData.map(nav => {
              return (
                <Link
                  key={nav.title}
                  href="#"
                  className="block  md:py-0 bg-[none] !p-2 h-10 rounded-[12px] hover:bg-[#F2F2F2]"
                >
                  {nav.title}
                </Link>
              );
            })}

            <Button onClick={() => {}} variant="primary">
              Login
            </Button>
            <Button onClick={() => {}} variant="secondary">
              Think of copy
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
