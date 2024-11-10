import { Logo } from "../atoms/Logo";
import { NavItem } from "../molecules/NavItem";
import { SearchBar } from "../molecules/SearchBar";


export const Header: React.FC = () => {
  return (
    <header className="h-[73px] w-full bg-white border-b border-zinc-200">
      <div className="max-w-[1440px] mx-auto px-4 md:px-5 h-full">
        <div className="flex items-center justify-between h-full">
          {/* Logo */}
          <Logo />

          {/* Navigation - Only visible on desktop */}
          <nav className="hidden md:flex items-center gap-4">
            <NavItem href="/mens">メンズ</NavItem>
            <NavItem href="/womens">レディース</NavItem>
            <NavItem href="/kids">キッズ</NavItem>
            <NavItem href="/sale">セール</NavItem>
          </nav>

          {/* Search and Cart - Desktop */}
          <div className="hidden md:flex items-center gap-4">
            <SearchBar />
            <button className="w-10 h-10 p-3 rounded-md">
              <CartIcon />
            </button>
          </div>

          {/* Mobile Menu */}
          <div className="flex md:hidden items-center gap-4">
            <button className="w-10 h-10 p-3 rounded-md">
              <MenuIcon />
            </button>
            <button className="w-10 h-10 p-3 rounded-md">
              <CartIcon />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

// Supporting components
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
  </svg>
);

const CartIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
  </svg>
); 