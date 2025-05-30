import CssBaseline from "@mui/material/CssBaseline";
import Container from "@mui/material/Container";
import Toolbar from "@mui/material/Toolbar";

import Header from "./Header";
import type React from "react";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

function DashboardLayout(props: DashboardLayoutProps) {
  return (
    <>
      <CssBaseline />
      <Header />
      <Container maxWidth="md">
        <Toolbar />
        {props.children}
      </Container>
    </>
  );
}

export default DashboardLayout;
