import React from "react";
import {
  Dialog,
  DialogContent,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import Transition from "../../components/DialogueTransition";
import Search from "../../components/Search/Search";
import SearchIconWrapper from "../../components/Search/SearchIconWrapper";
import { MagnifyingGlass, XCircle } from "phosphor-react";
import StyledInputBase from "../../components/Search/StyledInputBase";
import { ChatList } from "../../data";
import { CallElement } from "../../components/CallElement";

const MakeACall = ({ open, handleClose }) => {
  const theme = useTheme();
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={handleClose}
      aria-describedby="alert-dialog-slide-description"
      maxWidth="sm"
      fullWidth
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        px={4}
        pt={4}
      >
        <Typography variant="h4">Start Call</Typography>
        <IconButton onClick={handleClose}>
          <XCircle />
        </IconButton>
      </Stack>
      <DialogContent>
        <Stack spacing={2} direction="column" alignItems="center" sx={{ width: "100%" }}>
          <Search sx={{ width: "100%" }}>
            <SearchIconWrapper>
              <MagnifyingGlass color="#709CE6" />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search..."
              inputProps={{ "aria-label": "search" }}
              sx={{ width: "100%" }}  // Ensure the input base also takes full width
            />
          </Search>
          <Stack
            sx={{
              flexGrow: 1,
              overflowY: "auto",
              width: "100%",
              height: "300px",
              "&::-webkit-scrollbar": {
                width: "8px",
                backgroundColor: "transparent",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.primary.main,
                borderRadius: "4px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                backgroundColor: theme.palette.primary.dark,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "transparent",
              },
            }}
            spacing={2}
          >
            {ChatList.map((el) => (
              <CallElement key={el.id} online={el.online} />
            ))}
          </Stack>
        </Stack>
      </DialogContent>
    </Dialog>
  );
};

export default MakeACall;
