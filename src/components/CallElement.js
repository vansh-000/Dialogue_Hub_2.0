import React from "react";
import {
  Avatar,
  Box,
  IconButton,
  Stack,
  Typography,
  useTheme,
} from "@mui/material";
import StyledBadge from "./StyleBadge";
import { faker } from "@faker-js/faker";
import {
  ArrowDownLeft,
  ArrowUpRight,
  Phone,
  VideoCamera,
} from "phosphor-react";

const CallLogElement = ({ online, incomming, missed }) => {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: "100%",
          borderRadius: 1,
          backgroundColor:
            theme.palette.mode === "light"
              ? "#fff"
              : theme.palette.background.paper,
        }}
        p={2}
      >
        <Stack
          direction={"row"}
          alignItems={"center"}
          justifyContent={"space-between"}
        >
          <Stack direction={"row"} spacing={2} alignItems={"center"}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={faker.image.avatar()} />
              </StyledBadge>
            ) : (
              <Avatar src={faker.image.avatar()} />
            )}
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">
                {faker.name.fullName()}
              </Typography>
              <Stack direction={"row"} spacing={1}>
                {incomming ? (
                  <ArrowDownLeft color={missed ? "red" : "green"} />
                ) : (
                  <ArrowUpRight color={missed ? "red" : "green"} />
                )}
                <Typography variant="caption">Yesterday 21:36</Typography>
              </Stack>
            </Stack>
          </Stack>
          <IconButton>
            <Phone size="22" color="green" />
          </IconButton>
        </Stack>
      </Box>
    </>
  );
};

const CallElement = ({ online }) => {
  const theme = useTheme();
  return (
    <Box
      sx={{
        width: "100%",
        borderRadius: 1,
        backgroundColor:
          theme.palette.mode === "light"
            ? "#fff"
            : theme.palette.background.paper,
        p: 2,
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        minWidth={300}
      >
        <Stack direction="row" spacing={2} alignItems="center">
          {online ? (
            <StyledBadge
              overlap="circular"
              anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
              variant="dot"
            >
              <Avatar src={faker.image.avatar()} />
            </StyledBadge>
          ) : (
            <Avatar src={faker.image.avatar()} />
          )}
          <Stack spacing={0.3}>
            <Typography variant="subtitle2">{faker.name.fullName()}</Typography>
          </Stack>
        </Stack>
        <Stack spacing={0.2} direction="row">
          <IconButton>
            <Phone size="22" color="green" />
          </IconButton>
          <IconButton>
            <VideoCamera size="22" color="green" />
          </IconButton>
        </Stack>
      </Stack>
    </Box>
  );
};

export { CallLogElement, CallElement };
