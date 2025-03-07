import React from "react";
import styled from "@emotion/styled";

const ProductComponent = () => {
  return (
    <Card>
      <ProductImage />
      <ProductDetails>
        <ProductName>Text</ProductName>
        <ProductPrice>$ 200</ProductPrice>
        <AddToCartButton>Add to Cart</AddToCartButton>
      </ProductDetails>
    </Card>
  );
};

export default ProductComponent;

const Card = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  overflow: hidden;
  width: 300px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  background-color: #fff;
  transition: transform 0.2s ease-in-out;
  margin: 20px;

  &:hover {
    transform: translateY(-10px);
  }
`;

const ProductImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`;

const ProductDetails = styled.div`
  padding: 16px;
`;

const ProductName = styled.h3`
  font-size: 1.2rem;
  margin: 0;
  color: #333;
`;

const ProductPrice = styled.p`
  font-size: 1rem;
  color: #00b894;
  margin: 8px 0;
`;

const AddToCartButton = styled.button`
  padding: 10px;
  width: 100%;
  background-color: #00b894;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #05a07b;
  }
`;
