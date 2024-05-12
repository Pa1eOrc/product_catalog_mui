import { CardActions, CardMedia } from "@mui/material";
import {
  CastomButton,
  CastomCard,
  CastomCardContent,
  CastomTextTypography,
} from "../../MUICastomStyle/styler";
import CloseIcon from "@mui/icons-material/Close";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import { Cart } from "../../types/Cart";

type Props = {
  item: Cart;
  handleUpdateCartCount: (updatedCart: Cart) => void;
  handleDeleteCart: (itemId: string) => void;
};

export const CartItem: React.FC<Props> = ({
  item,
  handleUpdateCartCount,
  handleDeleteCart,
}) => {
  const { name, price, itemId, count, formatedImg: image } = item;
  const totalPrice = price * count;

  const handleDeleteCartBottomActions = () => {
    handleDeleteCart(itemId);
  };

  const handleAddCartActions = () => {
      handleUpdateCartCount({ ...item, count: count + 1 });
  };

  const handleRemoveCartActions = () => {
      handleUpdateCartCount({ ...item, count: count - 1 });
  };

  return (
    <CastomCard key={itemId}>
      <CastomCardContent>
        <CardActions
          sx={{
            padding: 0,
          }}
        >
          <CastomButton
            sx={{
              border: "none",
              minWidth: "16px",
              width: "16px",
              padding: "0",
            }}
            onClick={handleDeleteCartBottomActions}
          >
            <CloseIcon
              sx={{
                width: "16px",
                height: "16px",
                color: "#89939a",
              }}
            />
          </CastomButton>
        </CardActions>
        <CardMedia
          component="img"
          image={image}
          sx={{
            height: "66px",
            width: "66px",
            objectFit: "contain",
          }}
        />
        <CastomTextTypography
          sx={{
            textAlign: "center",
            color: "#313237",
            maxWidth: "176px",
            minWidth: "128px",
          }}
        >
          {name}
        </CastomTextTypography>
      </CastomCardContent>

      <CastomCardContent>
        <CardActions
          sx={{
            padding: 0,
            width: "96px",
            display: "flex",
            justifyContent: "space-between",
          }}
        >
          <CastomButton
            disabled={count <= 1}
            onClick={handleRemoveCartActions}
          >
            <RemoveIcon
              sx={{
                width: "16px",
                height: "16px",
                color: "#89939a",
              }}
            />
          </CastomButton>
          <CastomTextTypography>{count}</CastomTextTypography>
          <CastomButton onClick={handleAddCartActions}>
            <AddIcon
              sx={{
                width: "16px",
                height: "16px",
                color: "#89939a",
              }}
            />
          </CastomButton>
        </CardActions>
        <CastomTextTypography
          sx={{
            color: "#313237",
            fontWeight: 800,
            fontSize: "22px",
            lineHeight: "31px",
          }}
        >
          ${totalPrice}
        </CastomTextTypography>
      </CastomCardContent>
    </CastomCard>
  );
};
