import { NextPage } from "next";

import getConfig from "next/config";
import MainLayout from "@/layouts/main";
import { Box } from "@mui/joy";

const Page: NextPage = () => {


  return (
    <MainLayout>
      <Box px={2}>
        <Box>
          <h1>Page</h1>
        </Box>
      </Box>
    </MainLayout>
  );
};

export default Page;