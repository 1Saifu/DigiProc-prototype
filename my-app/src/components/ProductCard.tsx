import Image from 'next/image';
import { Product } from "@/types/product";
import '../app/globals.css';
import StarRating from './StarRating';

const ProductCard = ({ name, rating, price, imageUrl, color }: Product) => {
    return(
        <div className="product-card" style={{ padding: '10px', borderRadius: '8px', textAlign: 'center' }}>
            <div> 
            <Image 
                src={imageUrl} 
                alt={name} 
                className="product-image" 
                width={200} 
                height={200} 
            />
            </div>
            <h3 className="product-price">{price} SEK</h3>
            <h2 style={{ color: `#${color}`, fontSize: '18px', fontWeight: '5px' }}>{name}</h2>
            <p>Ratings</p>
            <StarRating rating={rating} />
            <button style={{ background: `#${color}`, borderRadius: '5px', width: '250px', height: '50px', marginTop: '20px'}}>
                <p style={{ color: 'white', fontSize: '18px', fontWeight: 'bold'}}>Add to Cart</p>
            </button>
        </div>
    );
}

export default ProductCard;
