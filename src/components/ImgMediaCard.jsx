import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Stack } from "@mui/material";

export default function ImgMediaCard({ data }) {
  const { imageURL, title, rating, sold, discPrice, originalPrice } = data;
  // console.log(data);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image={imageURL}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Stack flexDirection="row" gap={2}>
          <Typography>Rating: {rating}/5</Typography>
          <Typography>{sold} Sold</Typography>
        </Stack>
        <Stack
          flexDirection="row"
          gap={2}
          alignItems={"baseline"}
          sx={{ mt: 2 }}
        >
          <Typography variant="h5" color="primary" fontWeight={"bold"}>
            AED {discPrice}
          </Typography>
          <Typography
            sx={{ textDecorationLine: "line-through", color: "gray" }}
          >
            AED {originalPrice}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
}
