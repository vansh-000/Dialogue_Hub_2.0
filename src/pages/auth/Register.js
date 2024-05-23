import React, { useState } from "react";
import {
  Link,
  Stack,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import RegisterForm from "../../sections/auth/RegisterForm";
import AuthSocial from "../../sections/auth/AuthSocial";

const Register = () => {
   
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Stack direction={"row"} justifyContent={"center"}>
        <Typography variant="h4">Getting Started with Conversify</Typography>
      </Stack>
      <Stack direction="row" spacing={0.5} justifyContent={"center"}>
        <Typography variant="body2">Already Have an Account? </Typography>
        <Link to="/auth/login" component={RouterLink} variant="subtitle2">
          Sign In
        </Link>
      </Stack>
      {/* Register Form */}
      <RegisterForm/>

      <Typography
        component={"div"}
        sx={{
          color: "text.seceondary",
          mt: 3,
          typography: "caption",
          textAlign: "center",
        }}
      >
        {"By signing up, I agree to "}
        <Link underline="always" color={"text.primary"}>
          Terms of service
        </Link>
        {' and '}
        <Link underline="always" color={"text.primary"}>
          Privacy Policy
        </Link>
      </Typography>

      <AuthSocial/>
    </Stack>
  );
};

export default Register;
