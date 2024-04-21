import { FC, ReactNode } from "react";



import { detectAppType, detectDeviceType } from "@/utils/detect-user-agent";
import { styled } from "@mui/joy";
import TopNav from "@/layouts/main/top-nav";
import BottomNav from "@/layouts/main/bottom-nav";


const deviceType = detectDeviceType();
const appType = detectAppType();


const LayoutRoot = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  height: "100%",
  padding:
    appType === "app" && deviceType === "ios"
      ? "56px 0 72px 0"
      : "56px 0 60px 0", // * Top Nav 와 Bottom Nav 공간 확보
  margin: "0 auto",
  width: "100%",
  maxWidth: theme.breakpoints.values.md,
  overscrollBehavior: "none",
  scrollSnapType: "none",
}));

const LayoutContainer = styled("div")(({ theme }) => ({
  display: "flex",
  flex: "1 1 auto",
  flexDirection: "column",
  width: "100%",
  maxWidth: theme.breakpoints.values.md,
  margin: "0 auto",
  backgroundColor: theme.palette.background.body,
  boxShadow:
    "0px 0px 1px 0px rgba(0, 0, 0, 0.30), 0px 1px 10px 0px rgba(0, 0, 0, 0.04)",

  overscrollBehavior: "none",
  scrollSnapType: "none",
}));


interface MainLayoutProps {
  children: ReactNode;
}

const MainLayout:FC<MainLayoutProps> = ({ children }) => {
  return (
    <>
      <TopNav />
      <LayoutRoot>
        <LayoutContainer>{children}</LayoutContainer>
      </LayoutRoot>
      <BottomNav />
    </>
  )
}


export default MainLayout;