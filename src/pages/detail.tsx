import { Box } from "@chakra-ui/react";
import { useParams } from "react-router-dom";
import Auth from "../components/Auth";
import DetailProduct from "../components/ItemDetail";
import { products } from "../data/dummyProduct";

export const Detail = () => {
  const id  = useParams();
  const product = products.filter((data)=> data.id === id.id)[0]

  return (
    <>
      <Auth>
        <DetailProduct product={product} />
      </Auth>
    </>
  );
};
