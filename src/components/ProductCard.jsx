import React, { useState } from 'react';
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
  color: #0033CC;
  margin: 0 0 16px 0;
`;

const Description = styled.p`
  font-size: 14px;
  color: #666;
  margin: 0 0 16px 0;
  line-height: 1.5;
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 8px;
  margin-bottom: 12px;
`;

const CartButton = styled.button`
  flex: 1;
  padding: 12px;
  background-color: #0033CC;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;

  &:focus-visible {
    outline: 2px solid #0033CC;
    outline-offset: 2px;
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

  &:focus-visible {
    outline: 2px solid #0033CC;
    outline-offset: 2px;
  }
`;

const ShareLink = styled.a`
  display: block;
  text-align: center;
  padding: 12px;
  color: #0033CC;
  text-decoration: none;
  font-size: 14px;
  font-weight: 500;
  border: 1px solid #ddd;
  border-radius: 4px;

  &:focus-visible {
    outline: 2px solid #0033CC;
    outline-offset: 2px;
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

// ===== NEW CODE BELOW: ReviewSection with A11y Violations =====

const ReviewsContainer = styled.div`
  margin-top: 16px;
  padding: 12px;
  background: #f5f5f5;
  border-radius: 8px;
`;

const ReviewsTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  margin: 0 0 12px 0;
  color: #333;
`;

const ReviewItem = styled.div`
  padding: 8px;
  margin-bottom: 8px;
  background: white;
  border-radius: 4px;
`;

const ReviewAuthor = styled.div`
  font-weight: 600;
  color: #AAAAAA;
  font-size: 13px;
  margin-bottom: 4px;
`;

const ReviewText = styled.p`
  font-size: 12px;
  color: #666;
  margin: 0;
`;

const ReviewButton = styled.button`
  width: 100%;
  padding: 8px;
  background: white;
  border: 1px solid #ddd;
  border-radius: 4px;
  cursor: pointer;
  font-size: 13px;
  outline: none;
  margin-top: 8px;
`;

function ReviewSection() {
  const [showReviews, setShowReviews] = useState(false);

  const reviews = [
    { id: 1, author: 'John D.', text: 'Great product!' },
    { id: 2, author: 'Sarah M.', text: 'Excellent quality' },
  ];

  return (
    <ReviewsContainer>
      <ReviewsTitle>Customer Reviews</ReviewsTitle>
      
      {showReviews && reviews.map((review) => (
        <ReviewItem key={review.id}>
          <ReviewAuthor>{review.author}</ReviewAuthor>
          <ReviewText>{review.text}</ReviewText>
        </ReviewItem>
      ))}

      <ReviewButton onClick={() => setShowReviews(!showReviews)}>
        {showReviews ? 'Hide Reviews' : 'Show All Reviews'}
      </ReviewButton>
    </ReviewsContainer>
  );
}

// ===== END NEW CODE =====

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
      <ProductImage 
        src={product.image}
        alt={`Product image: ${product.name}`}
      />

      <ProductName>{product.name}</ProductName>

      <Price>${product.price}</Price>

      <Description>{product.description}</Description>

      <RatingContainer>
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i}>★</Star>
        ))}
        <span style={{ marginLeft: '4px', color: '#666' }}>({product.reviews})</span>
      </RatingContainer>

      <ActionButtons>
        <CartButton 
          onClick={handleAddToCart}
          aria-label="Add product to cart"
        >
          <ShoppingCartIcon size={16} style={{ marginRight: '4px' }} />
          Add to Cart
        </CartButton>

        <IconButton 
          onClick={handleAddToWishlist}
          aria-label="Add product to wishlist"
        >
          <HeartIcon size={20} />
        </IconButton>
      </ActionButtons>

      <ShareLink 
        href="#" 
        onClick={handleShare}
      >
        <ShareIcon size={16} style={{ display: 'inline', marginRight: '4px' }} />
        Share Product
      </ShareLink>

      <ReviewSection />
    </CardWrapper>
  );
}

export default ProductCard;
