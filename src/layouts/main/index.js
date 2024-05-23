import { Container, Stack } from "@mui/material";
import React from "react";
import { Outlet } from "react-router-dom";
import Logo from "../../assets/Images/logo.ico";

const MainLayout = () => {
  return (
    <>
      <Container sx={{pt:5}} maxWidth="xs">
        <Stack spacing={5}>
          <Stack sx={{width:"100%", height:"100%"}} direction={"column"} alignItems={"center"}>
            <img style={{height:120,width:120}} src={Logo} alt="Logo" />
          </Stack>
        </Stack>
        <Outlet />
      </Container>
    </>
  );
};

export default MainLayout;
