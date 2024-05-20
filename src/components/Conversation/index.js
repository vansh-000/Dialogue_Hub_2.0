import { Box, Stack } from "@mui/material";
import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Messages from "./Messages";

const Conversation = () => {
  return (
    <Stack height="100%" maxHeight="100vh" width="auto">
      <Header />

      <Box
        width="100%"
        sx={{
          flexGrow: 1,
          height: "100%",
          overflowY: "scroll",
          scrollbarWidth: "none", // For Firefox
          "-ms-overflow-style": "none", // For Internet Explorer and Edge
          "&::-webkit-scrollbar": {
            display: "none", // For Chrome, Safari, and Opera
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
