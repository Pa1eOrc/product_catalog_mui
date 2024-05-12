import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import {
  deleteProductFromCart,
  getCart,
  updateCountInCart,
} from "../../query/cartQueryApi";
import { useAppSelector } from "../../app/hooks";
import {
  CastomCartBox,
  CastomProductsContainer,
  CastomTitleTypography,
} from "../../MUICastomStyle/styler";
import { BasicBreadcrumbs } from "../../components/Breadcrumbs/Breadcrumbs";
import { Box, Button, Typography } from "@mui/material";
import { Cart } from "../../types/Cart";
import { CartItem } from "../../components/CartItem";

export const CardPage = () => {
  const queryClient = useQueryClient();
  const { breadcrumbs: breadcrumbsParams } = useAppSelector(
    (state) => state.searchParamsSlice
  );
  const { data: carts = [] } = useQuery({
    queryKey: ["cart"],
    queryFn: getCart,
  });

  const updateCartCountMutation = useMutation({
    mutationFn: updateCountInCart,
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

  const handleUpdateCartCount = (updatedCart: Cart) => {
    updateCartCountMutation.mutate(updatedCart);
  };

  const handleDeleteCart = (itemId: string) => {
    deleteFromCartMutation.mutate(itemId);
  };

  const totalPrice = carts.reduce(
    (acc: number, cart: Cart) => acc + cart.price * cart.count,
    0
  );

  const totalItems = carts.reduce(
    (acc: number, cart: Cart) => acc + cart.count,
    0
  );

  return (
    <CastomProductsContainer>
      <BasicBreadcrumbs breadcrumbsParams={breadcrumbsParams} />

      <Box
        sx={{
          padding: "20px 0 40px 8px",
        }}
      >
        <CastomTitleTypography>Cart</CastomTitleTypography>
      </Box>

      <CastomCartBox>
        <Box
          sx={{
            padding: "0 0 40px 8px",
            display: "flex",
            flexDirection: "column",
            gap: "12px",
            width: "100%",
            maxWidth: "1157px",
          }}
        >
          {carts.map((cart: Cart) => (
            <CartItem
              item={cart}
              handleUpdateCartCount={handleUpdateCartCount}
              handleDeleteCart={handleDeleteCart}
              key={cart.itemId}
            />
          ))}
        </Box>

        <Box
          sx={{
            maxHeight: "206px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            border: "1px solid #e2e6e9",
            padding: "20px 0",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Mont",
              fontWeight: "800",
              fontSize: "32px",
              lineHeight: "41px",
            }}
          >
            ${totalPrice}
          </Typography>
          <Typography
            sx={{
              fontFamily: "Mont",
              fontWeight: "600",
              fontSize: "14px",
              lineHeight: "21px",
              color: "#89939a",
              paddingBottom: "35px",
            }}
          >
            Total for {totalItems} {totalItems === 1 ? "item" : "items"}
          </Typography>
          <Button
            sx={{
              height: "48px",
              width: "calc(100% - 40px)",
              backgroundColor: "#313237",
              color: "#fff",
              fontFamily: "Mont",
              fontWeight: "700",
              fontSize: "14px",
              lineHeight: "21px",
              border: "1px solid #313237",
              position: "relative",
              "&::after": {
                position: "absolute",
                top: "-20px",
                content: '""',
                height: "1px",
                width: "100%",
                backgroundColor: "#e2e6e9",
              },
              "&:hover": {
                backgroundColor: "#fff",
                color: "#313237",
              },
            }}
          >
            Checkout
          </Button>
        </Box>
      </CastomCartBox>
    </CastomProductsContainer>
  );
};
