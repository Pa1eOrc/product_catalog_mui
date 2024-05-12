import { imgFormatFunction } from "../../helperFunctions/imgFormatFunctions";
import { ProductDeatails } from "../../types/ProductDetails";
import { useState } from "react";
import { CastomGridImagesContainer, CastomImageButton, CastomImageList } from "./ImagesContainerStyle";

type Props = {
  productDetails: ProductDeatails;
};

export const ImagesAndOptions: React.FC<Props> = ({ productDetails }) => {
  const { images, id } = productDetails;
  const formatedImages = images.map((img) => imgFormatFunction(id, img));
  const [mainImage, setMainImage] = useState(0);

  return (
    <CastomGridImagesContainer>
      <CastomImageList>
        {formatedImages.map((image, i) => (
          <CastomImageButton
            key={i}
            onClick={() => setMainImage(i)}
            sx={{
              border: mainImage === i ? "1px solid #000" : "none",
            }}
          >
            <img src={image} alt="image" />
          </CastomImageButton>
        ))}
      </CastomImageList>

      <img
        src={formatedImages[mainImage]}
        alt="main image"
        className="main__image"
      />
    </CastomGridImagesContainer>
  );
};
