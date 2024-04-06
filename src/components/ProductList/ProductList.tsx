import { Grid } from "@mui/material";
import { Product } from "../../types/Product";
import { ProductCart } from "../ProductCart";

type Props = {
  products: Product[],
}

export const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <Grid container sx={{
      justifyContent: "center",
      padding: "30px 0",
      gap: "16px 16px",
    }} >
      {products.map(product => 
      <Grid item key={product.itemId}>
        <ProductCart product={product} />
      </Grid>
      )}
    </Grid>
  );
};