import React, { useState } from "react";
import { Nav_Buttons } from "../../data";
import { Gear } from "phosphor-react";
import { faker } from "@faker-js/faker";
import { Avatar, Box, Divider, IconButton, Stack } from "@mui/material";
import { useTheme } from "@mui/material/styles";

import Logo from "../../assets/Images/logo.ico";
import useSettings from "../../hooks/useSettings";
import AntSwitch from "../../components/AntSwitch";

const Sidebar = () => {
  const theme = useTheme();
  const [selected, setSelected] = useState(0);
  const { onToggleMode } = useSettings();

  return (
    <Box
      p={2}
      sx={{
        backgroundColor: theme.palette.background.paper,
        boxShadow: "0px 0px 2px rgba(0, 0, 0, 0.25)",
        height: "100vh",
        width: 100,
      }}
    >
      <Stack
        direction="column"
        alignItems="center"
        justifyContent="space-between"
        sx={{ height: "100%" }}
        spacing={3}
      >
        <Stack alignItems="center" spacing={4}>
          <Box
            sx={{
              backgroundColor: theme.palette.primary.main,
              height: 64,
              width: 64,
              borderRadius: 1.5,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <img src={Logo} alt="Chat App Logo" />
          </Box>
          <Stack
            sx={{ width: "max-content" }}
            direction="column"
            alignItems="center"
            spacing={3}
          >
            {Nav_Buttons.map((el) => (
              <IconButton
                key={el.index}
                onClick={() => setSelected(el.index)}
                sx={{
                  width: "max-content",
                  color: el.index === selected
                    ? "#fff"
                    : theme.palette.mode === "light"
                      ? "#000"
                      : theme.palette.text.primary,
                  backgroundColor: el.index === selected
                    ? theme.palette.primary.main
                    : "transparent",
                  borderRadius: 1.5,
                  p: 1,
                }}
              >
                {el.icon}
              </IconButton>
            ))}
            <Divider sx={{ width: "48px" }} />
            <IconButton
              onClick={() => setSelected(3)}
              sx={{
                width: "max-content",
                color: selected === 3 ? "#fff" : theme.palette.mode === "light" ? "#000" : theme.palette.text.primary,
                backgroundColor: selected === 3 ? theme.palette.primary.main : "transparent",
                borderRadius: 1.5,
                p: 1,
              }}
            >
              <Gear />
            </IconButton>
          </Stack>
        </Stack>

        <Stack spacing={4}>
          <AntSwitch
            onChange={onToggleMode}
            defaultChecked
          />
          <Avatar src={faker.image.avatar()} />
        </Stack>
      </Stack>
    </Box>
  );
};

export default Sidebar;
