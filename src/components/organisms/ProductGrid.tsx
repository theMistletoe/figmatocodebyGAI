import { Typography } from "../atoms/Typography";
import { ProductCard } from "../molecules/ProductCard";

interface Product {
  id: string;
  title: string;
  price: number;
  imageUrl?: string;
}

interface ProductGridProps {
  products: Product[];
}

export const ProductGrid: React.FC<ProductGridProps> = ({ products }) => {
  return (
    <div className="w-full px-4 md:px-5 py-8">
      <Typography variant="h2" className="mb-6">人気の商品</Typography>
      
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            title={product.title}
            price={product.price}
            imageUrl={product.imageUrl}
          />
        ))}
      </div>
    </div>
  );
}; 