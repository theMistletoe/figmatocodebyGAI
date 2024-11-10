import { ProductGrid } from "../components/organisms/ProductGrid";
import { Layout } from "../components/templates/Layout";

const products = [
  {
    id: '1',
    title: 'クラシックレザーシューズ',
    price: 12000,
  },
  {
    id: '2',
    title: 'スポーツランニングシューズ',
    price: 8500,
  },
  {
    id: '3',
    title: 'カジュアルスニーカー',
    price: 6800,
  },
  {
    id: '4',
    title: 'ハイヒールパンプス',
    price: 9800,
  },
];

export const Home: React.FC = () => {
  return (
    <Layout>
      <ProductGrid products={products} />
    </Layout>
  );
}; 