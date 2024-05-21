import { Box, Stack, useTheme } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Messages from "./Messages";

const Conversation = () => {
  const theme = useTheme();
  return (
    <Stack height="100%" maxHeight="100vh" width="auto">
      <Header />

      <Box
        width="100%"
        sx={{
          flexGrow: 1,
          height: "100%",
          overflowY: "scroll",
          p: 3,
          spacing: 3,
          "&::-webkit-scrollbar": {
            width: "4px",
            background: "transparent",
          },
          "&:hover::-webkit-scrollbar": {
            background: "transparent",
          },
          "&:hover::-webkit-scrollbar-thumb": {
            backgroundColor: theme.palette.primary.main,
            borderRadius: "4px",
          },
        }}
      >
        <Messages />
      </Box>

      <Footer />
    </Stack>
  );
};

export default Conversation;
