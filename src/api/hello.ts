import getConfig from "next/config";

import axiosInstance from "@/api/index";

const getHello = async (req: Request, res: Response) => {
  const { data } = await axiosInstance.get(
    `/hello`,
  );

  return data;
};
