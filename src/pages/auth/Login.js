import { Link, Stack, Typography } from "@mui/material";
import React from "react";
import AuthSocial from "../../sections/auth/AuthSocial";
import { Link as RouterLink } from "react-router-dom";
import LoginForm from "../../sections/auth/LoginForm";

const Login = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Stack direction={"row"} justifyContent={"center"}><Typography variant="h4">Login to Conversify</Typography></Stack>
        <Stack direction="row" spacing={0.5} justifyContent={"center"}>
          <Typography variant="body2">New User? </Typography>
          <Link to="/auth/register" component={RouterLink} variant="subtitle2">
            Create an Account
          </Link>
        </Stack>

        {/* Login Form */}
        <LoginForm/>

        {/* Auth Social */}
        <AuthSocial />
      </Stack>
    </>
  );
};

export default Login;
