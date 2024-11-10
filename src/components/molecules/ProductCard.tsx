import { Button } from "../atoms/Button";
import { Typography } from "../atoms/Typography";

interface ProductCardProps {
  title: string;
  price: number;
  imageUrl?: string;
}

export const ProductCard: React.FC<ProductCardProps> = ({ title, price, imageUrl }) => {
  return (
    <div className="w-full md:w-[324px] p-[25px] bg-white rounded-lg shadow border border-zinc-200 flex-col justify-start items-start gap-6 flex">
      <Typography variant="h2">{title}</Typography>
      
      <div className="self-stretch h-48 flex-col justify-start items-start flex">
        <div className="w-full h-48 justify-center items-center inline-flex">
          {/* Image placeholder - replace with actual image component */}
          <div className="w-full h-full bg-gray-100 rounded-md" />
        </div>
      </div>

      <Typography variant="price">¥{price.toLocaleString()}</Typography>
      
      <Button className="w-full">カートに追加</Button>
    </div>
  );
}; 