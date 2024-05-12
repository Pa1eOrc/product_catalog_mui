import { Button, CardActions } from "@mui/material";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import FavoriteIcon from "@mui/icons-material/Favorite";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { useMemo } from "react";
import { checkIsProductAdded } from "../../helperFunctions/otherFunctions";
import {
  addNewFavouriteProduct,
  deleteFavouriteProduct,
} from "../../query/favouritesQueryApi";
import {
  addNewProductInCart,
  deleteProductFromCart,
} from "../../query/cartQueryApi";
import { Product } from "../../types/Product";
import { Cart } from "../../types/Cart";

type Props = {
  product: Product;
  favourites: Product[];
  cart: Cart[];
  pageId?: string;
};

export const ButtonGroup: React.FC<Props> = ({ 
  product, 
  favourites, 
  cart, 
  pageId, 
}) => {
  const isProductAddedToFavourites = useMemo(() => {
    return checkIsProductAdded(favourites, product.itemId);
  }, [favourites, product]);

  const isProductAddedToCart = useMemo(() => {
    return checkIsProductAdded(cart, product.itemId);
  }, [cart, product]);

  const queryClient = useQueryClient();
  const AddToFavouritesMutation = useMutation({
    mutationFn: addNewFavouriteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
  });

  const deleteFromFavouritesMutation = useMutation({
    mutationFn: deleteFavouriteProduct,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["favourites"] });
    },
  });

  const AddToCartMutation = useMutation({
    mutationFn: addNewProductInCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const deleteFromCartMutation = useMutation({
    mutationFn: deleteProductFromCart,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["cart"] });
    },
  });

  const handleFavouritesActions = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isProductAddedToFavourites) {
      return deleteFromFavouritesMutation.mutate(product.itemId);
    } else {
      const productToAdd = {
        ...product,
        id: product.itemId,
      };
      return AddToFavouritesMutation.mutate(productToAdd);
    }
  };

  const handleCartActions = (e: React.MouseEvent) => {
    e.preventDefault();
    if (isProductAddedToCart) {
      return deleteFromCartMutation.mutate(product.itemId);
    } else {
      const productToAdd = {
        ...product,
        id: product.itemId,
      };
      return AddToCartMutation.mutate(productToAdd);
    }
  };

  return (
    <CardActions
      sx={{
        padding: 0,
        paddingTop: 2,
      }}
    >
      <Button
        sx={{
          border: "1px solid #B4BDC3",
          padding: 0,
          height: pageId === "fetailsPage" ? "48px" : "40px",
          width: "100%",
          color: !isProductAddedToCart ? "#fff" : "#313237",
          backgroundColor: !isProductAddedToCart ? "#313237" : "#fff",
          fontFamily: "inherit",
          fontSize: "14px",
          lineHeight: "21px",
          zIndex: "2",
          "&:hover": {
            color: !isProductAddedToCart ? "#313237" : "#fff",
            backgroundColor: !isProductAddedToCart ? "#fff" : "#313237",
          },
        }}
        onClick={(e) => handleCartActions(e)}
      >
        {!isProductAddedToCart ? "Add to cart" : "Added to cart"}
      </Button>
      <Button
        sx={{
          minWidth: "40px",
          width: pageId === "fetailsPage" ? "48px" : "40px",
          height: pageId === "fetailsPage" ? "48px" : "40px",
          padding: 0,
          border: "1px solid #B4BDC3",
          color: "#313237",
          zIndex: "2",
          "&:hover": {
            borderColor: "#313237",
          },
        }}
        onClick={(e) => handleFavouritesActions(e)}
      >
        {!isProductAddedToFavourites ? (
          <FavoriteBorderIcon
            sx={{
              color: "#313237",
            }}
          />
        ) : (
          <FavoriteIcon sx={{ color: "#eb5757" }} />
        )}
      </Button>
    </CardActions>
  );
};