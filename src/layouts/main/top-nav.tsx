
import { Box, IconButton, Stack, Typography } from "@mui/joy";
import MenuIcon from "@mui/icons-material/Menu";
import React from "react";


const TopNav = () => {
  return (
    <Box sx={{
      width:"100%",
      height:"56px",
      position:'absolute',
      top:0,
      left:0,
    }}>
    <Stack direction={"row"} alignItems={"center"} justifyContent={"space-between"} p={2}>
      <Box>
        <Typography level={"h4"} variant={"plain"} textColor={"common.black"} >
          Top Nav
        </Typography>
      </Box>
      <Box>
        <IconButton>
          <MenuIcon />
        </IconButton>
      </Box>
    </Stack>
    </Box>
  )
}

export default TopNav;