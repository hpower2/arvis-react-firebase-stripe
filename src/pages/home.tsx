import { Box } from "@chakra-ui/react";
import { Outlet } from "react-router-dom";
import Auth from "../components/Auth";
import { Headers } from "../components/Headers";
import { Products } from "../components/Product";

export const Home = () => {
  return (
    <>
      <Auth>
        <Headers />
        <Products />
      </Auth>
    </>
  );
};
