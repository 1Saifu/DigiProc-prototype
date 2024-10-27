import ProductCard from '../components/ProductCard';
import { Product } from '../types/product';

export default async function Home() {
  const res = await fetch('http://localhost:8080/api/products');
  const products: Product[] = await res.json();

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {products.map((product, index) => (
        <ProductCard key={index} {...product} />
      ))}
    </div>
  );
}
