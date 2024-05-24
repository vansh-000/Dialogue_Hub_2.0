import {
  Box,
  Stack,
  Typography,
  useTheme,
  Link,
  IconButton,
  Divider,
} from "@mui/material";
import {CallLogs} from "../../data";
import React, { useState } from "react";
import Search from "../../components/Search/Search";
import StyledInputBase from "./../../components/Search/StyledInputBase";
import SearchIconWrapper from "./../../components/Search/SearchIconWrapper";
import { MagnifyingGlass, Phone} from "phosphor-react"
import { CallLogElement } from "../../components/CallElement";
import MakeACall from "../../sections/main/MakeACall";

const Call = () => {
  const theme = useTheme();
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => {
    setOpenDialog(false);
  };
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
          <Stack p={1.5} spacing={3} sx={{ height: "100vh" }}>
            <Stack
              px={3}
              pt={3}
              direction="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h5">Call Logs</Typography>
            </Stack>
            <Stack px={0.5} sx={{ width: "100%" }}>
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
            <Stack
              px={2}
              direction={"row"}
              alignItems={"center"}
              justifyContent={"space-between"}
            >
              <Typography variant="subtitle2" component={Link}>
                Start New Conversation
              </Typography>
              <IconButton
                onClick={() => {
                  setOpenDialog(true);
                }}
              >
                <Phone style={{ color: theme.palette.primary.main }} />
              </IconButton>
            </Stack>
            <Divider />
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
              {CallLogs.map((el)=><CallLogElement {...el}/>)}
              
            </Stack>
          </Stack>
        </Box>
      </Stack>
      {openDialog && (
        <MakeACall open={openDialog} handleClose={handleCloseDialog} />
      )}
    </>
  );
};

export default Call;
