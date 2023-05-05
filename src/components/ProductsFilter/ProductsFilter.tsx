import { Grid } from "@mui/material";
import TextField from "@mui/material/TextField";
import React from "react";

type Prop = {
  value: string;
  changeValue: React.Dispatch<React.SetStateAction<string>>;
};

const ProductsFilter = ({ value, changeValue }: Prop) => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Фильтр"
          value={value}
          onChange={(e) => changeValue(e.target.value)}
        />
      </Grid>
    </Grid>
  );
};

export default ProductsFilter;
