import React from "react";
import { IconButton, Link, Stack, Typography } from "@mui/material";
import { CaretCircleLeft } from "phosphor-react";
import { Link as RouterLink } from "react-router-dom";
import NewPasswordForm from "../../sections/auth/NewPasswordForm";

const NewPassword = () => {
  return (
    <Stack spacing={2} sx={{ mb: 5, position: "relative" }}>
      <Typography variant="h3" paragraph>Reset Password</Typography>
      <Typography sx={{ color: "text.secondary", mb: 5 }}>
          Please set you new password for your account
        </Typography>

        <NewPasswordForm/>
        
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
  );
};

export default NewPassword;
