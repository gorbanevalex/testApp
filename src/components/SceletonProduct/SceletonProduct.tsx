import { Skeleton } from "@mui/material";
import React from "react";

const SceletonProduct = () => {
  return (
    <div className="product">
      <Skeleton variant="rounded" width="100%" height={200} />
      <Skeleton variant="text" sx={{ fontSize: "2rem" }} />
      <Skeleton variant="rounded" width="100%" height={50} />
      <div className="product-bottom">
        <Skeleton variant="rounded" width="100px" height={30} />
        <Skeleton variant="rounded" width="100px" height={30} />
      </div>
    </div>
  );
};

export default SceletonProduct;
