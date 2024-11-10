import { Footer } from "../organisms/Footer";
import { Header } from "../organisms/Header";

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full min-h-screen bg-neutral-50">
      <Header />
      <main className="max-w-[1440px] mx-auto">
        {children}
      </main>
      <Footer />
    </div>
  );
}; 