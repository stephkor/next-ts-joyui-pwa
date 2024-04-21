import getConfig from "next/config";

import axiosInstance from "@/api/index";

const { publicRuntimeConfig } = getConfig();
const getHello = async (req: Request, res: Response) => {
  const { data } = await axiosInstance.get(
    `${publicRuntimeConfig.API_BASE_URL}/hello`,
  );

  return data;
};
