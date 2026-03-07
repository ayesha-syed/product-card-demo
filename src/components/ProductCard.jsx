import React from 'react';
import styled from 'styled-components';
import { ShoppingCartIcon, HeartIcon, ShareIcon } from 'lucide-react';

const CardWrapper = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 16px;
  max-width: 280px;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const ProductImage = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;
  border-radius: 4px;
  margin-bottom: 12px;
`;

const ProductName = styled.h3`
  font-size: 18px;
  font-weight: 600;
  margin: 0 0 8px 0;
  color: #333;
`;

const Price = styled.p`
  font-size: 20px;
  font-weight: 700;
  color: #0066FF;
  margin: 0 0 16px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #888;
  margin: 0 0 16px 0;
  line-height: 1.5;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

const Button = styled.button`
  flex: 1;
  padding: 10px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f0f0f0;
  }

  &:active {
    background-color: #e0e0e0;
  }
`;

const CartButton = styled(Button)`
  background-color: #0066FF;
  color: white;

  &:hover {
    background-color: #0052cc;
  }
`;

const IconButton = styled.button`
  width: 40px;
  height: 40px;
  padding: 0;
  border: 1px solid #ddd;
  border-radius: 4px;
  background: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: border-color 0.2s;

  &:hover {
    border-color: #999;
  }
`;

const ShareLink = styled.a`
  display: block;
  text-align: center;
  padding: 12px;
  color: #0066FF;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #ddd;
  border-radius: 4px;
  transition: background-color 0.2s;

  &:hover {
    background-color: #f9f9f9;
  }
`;

const RatingContainer = styled.div`
  display: flex;
  gap: 4px;
  margin-bottom: 12px;
`;

const Star = styled.span`
  color: #FFB800;
  font-size: 16px;
`;

export function ProductCard({ product }) {
  const handleAddToCart = () => {
    console.log('Added to cart:', product.id);
  };

  const handleAddToWishlist = () => {
    console.log('Added to wishlist:', product.id);
  };

  const handleShare = (e) => {
    e.preventDefault();
    console.log('Sharing product:', product.id);
  };

  return (
    <CardWrapper>
      <ProductImage src={product.image} />

      <ProductName>{product.name}</ProductName>

      <Price>${product.price}</Price>

      <Description>{product.description}</Description>

      <RatingContainer>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i}>★</Star>
        ))}
        <span style={{ marginLeft: '4px', color: '#888' }}>({product.reviews})</span>
      </RatingContainer>

      <ActionButtons>
        <CartButton onClick={handleAddToCart} style={{ outline: 'none' }}>
          <ShoppingCartIcon size={16} style={{ marginRight: '4px' }} />
          Add
        </CartButton>

        <IconButton onClick={handleAddToWishlist}>
          <HeartIcon size={20} />
        </IconButton>
      </ActionButtons>

      <ShareLink href="#" onClick={handleShare} style={{ color: '#888' }}>
        <ShareIcon size={16} style={{ display: 'inline', marginRight: '4px' }} />
        Share
      </ShareLink>
    </CardWrapper>
  );
}

export default ProductCard;
