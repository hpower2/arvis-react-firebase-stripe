import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Shop } from "./pages/shop";
import { Cart } from "./pages/checkout";
import { Detail } from "./pages/detail";
import { Login } from "./pages/login";
import { initializeApp } from "firebase/app";
import { config } from "./firebase/config";
import { NewTheme } from "./theme";
import { CartProvider } from "react-use-cart";
import { Navigate } from "react-router-dom";


initializeApp(config.firebaseConfig);

export const App = () => (
  <ChakraProvider theme={NewTheme}>
    <BrowserRouter>
      <ColorModeScript initialColorMode={NewTheme.config.initialColorMode} />
      <CartProvider>
        <Routes>
          <Route index path="" element={<Navigate to={"/shop"}/>} />
          <Route path="shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Detail />} />
          <Route path="/shop/checkout" element={<Cart />} />
          <Route path="login" element={<Login />} />
        </Routes>
      </CartProvider>
    </BrowserRouter>
  </ChakraProvider>
);
