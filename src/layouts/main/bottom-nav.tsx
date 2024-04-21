import { FC } from "react";

import NextLink from "next/link";

import { Home } from "@mui/icons-material";
import { Box, Button, ButtonGroup, Link } from "@mui/joy";

type NavConfigType = { label: string; href: string; icon?: JSX.Element }[];

export const NavConfig: NavConfigType = [
  { label: "Home", href: "/main", icon: <Home /> },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
  { label: "Settings", href: "/settings" },
];

const BottomNav: FC = () => {
  return (
    <Box
      sx={{
        width: "100%",
        height: "60px",
        position: "absolute",
        bottom: 0,
        left: 0,
      }}
    >
      <ButtonGroup
        buttonFlex={1}
        aria-label="flex button group"
        variant={"plain"}
        sx={{
          borderRadius: 0,
          maxWidth: "100%",
          height: "100%",
          overflow: "auto",
          resize: "horizontal",
        }}
      >
        {NavConfig.map((nav, index) => (
          <Button
            key={index}
            aria-label=" button group"
            sx={{
              flex: 1,
              height: "100%",
              flexDirection: "column",
              "&:hover": {
                backgroundColor: "background.paper",
              },
            }}
          >
            <NextLink href={nav.href} passHref>
              <Link
                component="button"
                underline={"none"}
                color="neutral"
                sx={{ flexDirection: "column" }}
              >
                {nav.icon && nav.icon}
                {nav.label}
              </Link>
            </NextLink>
          </Button>
        ))}
      </ButtonGroup>
    </Box>
  );
};

export default BottomNav;
