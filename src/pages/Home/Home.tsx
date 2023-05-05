import { Container, Grid } from "@mui/material";
import React from "react";
import ProductsFilter from "../../components/ProductsFilter/ProductsFilter";
import ProductsList from "../../components/ProductsList/ProductsList";
import { useGetProductsQuery } from "../../redux/products/productsApi";
import { getAllProducts } from "../../redux/products/productsSlice";
import { useTypedSelector } from "../../redux/store";

import "./Home.scss";

const Home = () => {
  const { isFetching } = useGetProductsQuery();
  const [searchValue, setSearchValue] = React.useState("");
  const products = useTypedSelector(getAllProducts);

  const filteredProducts =
    searchValue.length > 0
      ? products.filter((item) => {
          let flag = false;
          if (
            item.description
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) !== -1
          ) {
            flag = true;
          }
          if (
            item.title.toLowerCase().indexOf(searchValue.toLowerCase()) !== -1
          ) {
            flag = true;
          }
          if (
            item.price
              .toString()
              .toLowerCase()
              .indexOf(searchValue.toLowerCase()) !== -1
          ) {
            flag = true;
          }
          return flag;
        })
      : products;

  return (
    <Container className="main-container">
      <Grid container rowSpacing={2}>
        <Grid item xs={12}>
          <ProductsFilter value={searchValue} changeValue={setSearchValue} />
        </Grid>
        <Grid item xs={12}>
          <ProductsList loading={isFetching} products={filteredProducts} />
        </Grid>
      </Grid>
    </Container>
  );
};

export default Home;
