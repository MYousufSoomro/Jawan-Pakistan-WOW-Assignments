import {
  Card,
  CardContent,
  CardMedia,
  Typography,
  Container,
  Stack,
  Avatar,
} from "@mui/material";
import { products_data } from "../utils/products_data";
import { Navbar } from "./Navbar";
import { useParams } from "react-router-dom";

export const ProductDetails = () => {
  const params = useParams();
  const filteredData = products_data.filter((pro) => params.key == pro.id);

  return (
    <div className="space-y-12">
      <Navbar />
      <Container maxWidth={false}>
        <Stack spacing={5}>
          <div className=" md:grid-cols-2 sm:grid-cols-2  grid gap-10">
            <Card elevation={1} className="">
              <CardMedia
                className="aspect-square w-full object-cover"
                image={filteredData[0].images[0]}
                title={filteredData[0].title}
              />
              <CardContent className="space-y-6">
                <Stack>
                  <Typography noWrap gutterBottom variant="h6" component="div">
                    {filteredData[0].title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {filteredData[0].description}
                  </Typography>
                </Stack>

                <Stack flexDirection="row" alignItems="center" gap={1}>
                  <Avatar
                    sx={{ width: 24, height: 24 }}
                    alt={filteredData[0].name}
                    src={filteredData[0].images[0]}
                  />
                  <Typography>{filteredData[0].name}</Typography>
                </Stack>

                <Stack>
                  <Typography
                    variant="body"
                    fontWeight="bold"
                    className="text-3xl font-bold text-orange-400"
                  >
                    ${filteredData[0].price}
                  </Typography>
                </Stack>
              </CardContent>
            </Card>
          </div>
        </Stack>
      </Container>
    </div>
  );
};
