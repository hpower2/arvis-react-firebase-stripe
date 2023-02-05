import { Box } from "@chakra-ui/react";
import Auth from "../components/Auth";
import { Headers } from "../components/Headers";
import { CheckoutProduct } from "../components/ItemCheckOut";

export const Cart = () => {
  return (
    <>
      <Auth>
        <Headers/>
        <CheckoutProduct />
      </Auth>
    </>
  );
};
