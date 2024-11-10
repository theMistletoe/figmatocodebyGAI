interface TypographyProps {
  variant: 'h1' | 'h2' | 'h3' | 'body' | 'price';
  children: React.ReactNode;
  className?: string;
}

export const Typography: React.FC<TypographyProps> = ({ variant, children, className = '' }) => {
  const styles = {
    h1: "text-2xl font-bold font-['Inter'] leading-loose",
    h2: "text-2xl font-semibold font-['Inter'] leading-normal",
    h3: "text-lg font-semibold font-['Inter'] leading-7",
    body: "text-base font-normal font-['Inter'] leading-normal",
    price: "text-xl font-bold font-['Inter'] leading-7",
  };

  return <div className={`${styles[variant]} ${className}`}>{children}</div>;
}; 