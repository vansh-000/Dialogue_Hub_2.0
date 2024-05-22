import {
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import React from "react";
import { updateSidebarType } from "../redux/slices/app";
import { ArrowLeft } from "phosphor-react";
import { useDispatch } from "../redux/store";
import Messages from "./Conversation/Messages";

const StarredMessages = () => {
  const theme = useTheme();
  const dispatch = useDispatch();
  return (
    <Box sx={{ width: 320, height: "100vh" }}>
      <Stack sx={{ height: "100%" }}>
        <Box
          sx={{
            boxShadow: "0px 0px 2px rgba(0,0,0,0.25)",
            width: "100%",
            backgroundColor:
              theme.palette.mode === "light"
                ? "#F8FAFF"
                : theme.palette.background,
          }}
        >
          <Stack
            sx={{ height: "100%", p: 2 }}
            direction={"row"}
            alignItems={"center"}
            justifyContent={"space-between"}
            spacing={3}
          >
            <IconButton
              sx={{ height: 50, width: 50 }}
              onClick={() => {
                dispatch(updateSidebarType("CONTACT"));
              }}
            >
              <ArrowLeft />
            </IconButton>
            <Typography variant="article">Starred Messages</Typography>
          </Stack>
        </Box>

        <Stack
          spacing={3}
          sx={{
            height: "100%",
            position: "relative",
            flexGrow: 1,
            overflowY: "scroll",
            p: 3,
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
            <Messages/>
        </Stack>
      </Stack>
    </Box>
  );
};

export default StarredMessages;
