import { Box, Button } from "@chakra-ui/react";
import Auth from "../components/Auth";
import { Headers } from "../components/Headers";
import { Products } from "../components/Product";
export const Shop = () => {
  return (
    <>
      <Auth>
        <Headers />
        <Products />
      </Auth>
    </>
  );
};
