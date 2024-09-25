

import MobileMenu from '../molecules/MobileMenu';
import NavMenu from '../molecules/NavMenu';

function Header() {
 
  return (
    <header className="w-full header">
      <MobileMenu/>
      <NavMenu/>
    </header>
  );
}

export default Header;
