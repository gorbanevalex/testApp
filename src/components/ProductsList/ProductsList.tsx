import { Grid, Pagination } from "@mui/material";
import React from "react";
import { Product } from "../../redux/products/types";
import ProductItem from "../ProductItem/ProductItem";
import SceletonProduct from "../SceletonProduct/SceletonProduct";

import "./ProductsList.scss";

type Prop = {
  loading: Boolean;
  products: Product[];
};

const ProductsList = ({ loading, products }: Prop) => {
  const [selectedPage, setSelectedPage] = React.useState(0);
  const productCount = products.length;
  const productsOnPage = 9;
  const pagesCount = Math.ceil(productCount / productsOnPage);

  React.useEffect(() => {
    setSelectedPage(0);
  }, [products]);

  const changePage = (page: number) => {
    setSelectedPage(page - 1);
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
        {!loading
          ? products
              .slice(
                selectedPage * productsOnPage,
                selectedPage * productsOnPage + productsOnPage
              )
              .map((item) => (
                <Grid item xs={12} sm={6} md={4} key={item.id.toString()}>
                  <ProductItem product={item} />
                </Grid>
              ))
          : [...new Array(10)].map((item, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <SceletonProduct />
              </Grid>
            ))}
      </Grid>
      <div className="pagination">
        <Pagination
          count={pagesCount}
          color="primary"
          page={selectedPage + 1}
          onChange={(event, page) => changePage(page)}
        />
      </div>
    </>
  );
};

export default ProductsList;
