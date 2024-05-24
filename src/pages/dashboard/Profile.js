import { Avatar, Box, IconButton, Stack, Typography, useTheme } from "@mui/material";
import { CaretLeft } from "phosphor-react";
import React from "react";
import ProfileForm from "../../sections/settings/ProfileForm";

const Profile = () => {
    const theme = useTheme();
  return (
    <>
      <Stack direction={"row"} sx={{ width: "100%" }}>
        <Box
          sx={{
            position: "relative",
            width: 320,
            backgroundColor:
              theme.palette.mode === "light"
                ? "#FBFAFF"
                : theme.palette.background.paper,
            boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
          }}
        >
            <Stack p={4} spacing={5}>
                {/* Header */}
                <Stack direction={"row"} alignItems={"center"} spacing={3}>
                    <IconButton>
                        <CaretLeft size={24} color="#4B4B4B"/>
                    </IconButton>
                    <Typography variant="h5">Profile</Typography>
                </Stack>

                {/* ProfileForm */}
                <ProfileForm/>
            </Stack>
        </Box>
      </Stack>
    </>
  );
};

export default Profile;
