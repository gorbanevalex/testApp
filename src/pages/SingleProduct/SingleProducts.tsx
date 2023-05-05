import { Button, Textarea } from "@mui/joy";
import { CircularProgress, Container, Grid, TextField } from "@mui/material";

import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  useGetSingleProductQuery,
  useUpdateProductMutation,
} from "../../redux/products/productsApi";

import "./SingleProduct.scss";

const SingleProduct = () => {
  const navigate = useNavigate();
  const [update] = useUpdateProductMutation();
  const { id } = useParams();
  const idReq = id ?? "";
  const { data } = useGetSingleProductQuery({ id: idReq });

  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [price, setPrice] = React.useState("");
  const [thumbnail, setThumbnail] = React.useState("");
  const [returnInfo, setReturnInfo] = React.useState(false);

  React.useEffect(() => {
    if (data) {
      setTitle(data.title);
      setDescription(data.description);
      setPrice(data.price.toString());
      setThumbnail(data.thumbnail);
    }
  }, [data, returnInfo]);

  if (!data) {
    return (
      <div className="spinner">
        <CircularProgress />
      </div>
    );
  }

  const updateProduct = async () => {
    await update({
      title,
      description,
      price: Number(price),
      thumbnail,
      id: Number(idReq),
    });
    navigate("/");
  };

  return (
    <Container className="single-product">
      <Grid container rowSpacing={4}>
        <Grid item xs={12}>
          <TextField
            fullWidth
            label="Title"
            variant="outlined"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <Textarea
            value={description}
            size="md"
            variant="outlined"
            onChange={(e) => setDescription(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            type="number"
            value={price}
            label="Price"
            variant="outlined"
            fullWidth
            onChange={(e) => setPrice(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            fullWidth
            variant="outlined"
            label="Ссылка на изображение"
            value={thumbnail}
            onChange={(e) => setThumbnail(e.target.value)}
          />
        </Grid>
        <Grid item xs={12}>
          <div className="buttons-post">
            <Button color="success" onClick={updateProduct}>
              Сохранить
            </Button>
            <Button onClick={() => setReturnInfo(!returnInfo)} color="danger">
              Отменить
            </Button>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
};

export default SingleProduct;
