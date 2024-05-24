import { Avatar, Badge, Box, Stack, Typography, useTheme } from "@mui/material";
import StyledBadge from "./StyleBadge";
import { faker } from "@faker-js/faker";

const ChatElement = ({ id, img, name, msg, time, unread, pinned, online }) => {
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
        }}
        p={2}
        key={id}
      >
        <Stack direction="row" alignItems="center" justifyContent="space-between">
          <Stack direction="row" spacing={2}>
            {online ? (
              <StyledBadge
                overlap="circular"
                anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
                variant="dot"
              >
                <Avatar src={img || faker.image.avatar()} />
              </StyledBadge>
            ) : (
              <Avatar src={img || faker.image.avatar()} />
            )}
  
            <Stack spacing={0.3}>
              <Typography variant="subtitle2">{name}</Typography>
              <Typography variant="caption">{msg}</Typography>
            </Stack>
          </Stack>
          <Stack spacing={1.5} alignItems="center">
            <Typography sx={{ fontWeight: 500 }} variant="caption">
              {time}
            </Typography>
            <Badge color="primary" badgeContent={unread} />
          </Stack>
        </Stack>
      </Box>
    );
  };

  export default ChatElement;