interface NavItemProps {
  href: string;
  children: React.ReactNode;
}

export const NavItem: React.FC<NavItemProps> = ({ href, children }) => {
  return (
    <a
      href={href}
      className="px-4 py-2.5 rounded-md hover:bg-gray-50 transition-colors
        text-center text-zinc-950 text-sm font-medium font-['Inter'] leading-tight"
    >
      {children}
    </a>
  );
}; 