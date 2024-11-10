interface FooterSection {
  title: string;
  links: { text: string; href: string }[];
}

export const Footer: React.FC = () => {
  const sections: FooterSection[] = [
    {
      title: 'カスタマーサービス',
      links: [
        { text: 'お問い合わせ', href: '/contact' },
        { text: '返品・交換について', href: '/returns' },
        { text: 'サイズガイド', href: '/size-guide' },
      ],
    },
    {
      title: '会社情報',
      links: [
        { text: '会社概要', href: '/about' },
        { text: '採用情報', href: '/careers' },
        { text: 'プライバシーポリシー', href: '/privacy' },
      ],
    },
    {
      title: 'ソーシャルメディア',
      links: [
        { text: 'Facebook', href: 'https://facebook.com' },
        { text: 'Twitter', href: 'https://twitter.com' },
        { text: 'Instagram', href: 'https://instagram.com' },
      ],
    },
  ];

  return (
    <footer className="bg-gray-100">
      <div className="max-w-[1440px] mx-auto px-4 md:px-5 py-8 md:py-16">
        {/* Desktop Layout */}
        <div className="hidden md:flex justify-between">
          {sections.map((section) => (
            <FooterSection key={section.title} {...section} />
          ))}
        </div>

        {/* Mobile Layout */}
        <div className="md:hidden space-y-8">
          {sections.map((section) => (
            <FooterSection key={section.title} {...section} />
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-base font-normal font-['Inter'] mt-8">
          © 2024 靴のECサイト. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const FooterSection: React.FC<FooterSection> = ({ title, links }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-zinc-950 text-lg font-semibold font-['Inter'] leading-7">
        {title}
      </h3>
      <ul className="space-y-3.5">
        {links.map((link) => (
          <li key={link.href}>
            <a
              href={link.href}
              className="text-zinc-950 text-base font-normal font-['Inter'] leading-normal
                hover:underline"
            >
              {link.text}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}; 