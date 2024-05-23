import React from "react";
import {
  Box,
  Button,
  Divider,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import { MagnifyingGlass } from "phosphor-react";
import { ArchiveBox, CircleDashed } from "phosphor-react";
import { ChatList } from "../../data";
import Search from './../../components/Search/Search';
import StyledInputBase from './../../components/Search/StyledInputBase';
import SearchIconWrapper from './../../components/Search/SearchIconWrapper';
import ChatElement from "../../components/ChatElement";

const Chat = () => {
  const theme = useTheme();
  return (
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
      <Stack p={0.5} spacing={3} sx={{ height: "100vh" }}>
        <Stack
          px={3}
          pt={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h5">Chats</Typography>
          <IconButton>
            <CircleDashed />
          </IconButton>
        </Stack>
        <Stack px={3} sx={{ width: "100%" }}>
          <Search>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
            />
          </Search>
        </Stack>
        <Stack px={3} spacing={0.3}>
          <Stack direction="row" alignItems="center" spacing={1.5}>
            <ArchiveBox size={24} />
            <Button>Archive Chats</Button>
          </Stack>
          <Divider />
        </Stack>
        <Stack
          spacing={2}
          direction="column"
          sx={{
            flexGrow: 1,
            overflowY: "auto",
            height: "100%",
            "&::-webkit-scrollbar": {
              width: "3px",
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
          <Stack px={3} spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              Pinned
            </Typography>
            {ChatList.filter((el) => el.pinned).map((el) => (
              <ChatElement key={el.id} {...el} />
            ))}
          </Stack>
          <Stack px={3} spacing={2.4}>
            <Typography variant="subtitle2" sx={{ color: "#676767" }}>
              All Chats
            </Typography>
            {ChatList.filter((el) => !el.pinned).map((el) => (
              <ChatElement key={el.id} {...el} />
            ))}
          </Stack>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Chat;
