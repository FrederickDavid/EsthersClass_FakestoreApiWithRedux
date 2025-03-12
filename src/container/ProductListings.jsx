import { useEffect } from "react";
import styled from "@emotion/styled";
import ProductComponent from "./ProductComponent";
import { useDispatch, useSelector } from "react-redux";
import { setProducts } from "../redux/actions/productActions";
import axios from "axios";

const ProductListings = () => {
  const products = useSelector((state) => state.allProducts.products);
  const dispatch = useDispatch();

  // Function to get data from the API
  const fetchData = async () => {
    const response = await axios
      .get("https://fakestoreapi.com/products")
      .catch((err) => {
        console.log("Error:", err);
      });
    dispatch(setProducts(response.data));
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(products);
  return (
    <Container>
      <ProductComponent />
    </Container>
  );
};

export default ProductListings;

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
`;
