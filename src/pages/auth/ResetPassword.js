import { IconButton, Link, Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import React from "react";
import { CaretCircleLeft } from "phosphor-react";
import ResetPasswordForm from "../../sections/auth/ResetPasswordForm";

const ResetPassword = () => {
  return (
    <>
      <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
        <Typography variant="h3" paragraph>
          Forgot your Password?{" "}
        </Typography>
        <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please enter the mail associated with your account and we will email
          you to reset your password.
        </Typography>
        {/* Reset Password Form */}
        <ResetPasswordForm/>
        <Link
          component={RouterLink}
          to="/auth/login"
          variant="subtitle2"
          color="inherit"
          sx={{
            mt: 3,
            mx: "auto",
            alignItems: "center",
            display: "inline-flex",
          }}
        >
          <IconButton color="inherit">
            <CaretCircleLeft />
          </IconButton>
          Return back to Login Page
        </Link>
      </Stack>
    </>
  );
};

export default ResetPassword;
