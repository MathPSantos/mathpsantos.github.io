import React, { ReactNode } from "react";

import { Container } from "./styles";

import { Header, Footer } from "..";

interface Props {
  children?: ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default Layout;
