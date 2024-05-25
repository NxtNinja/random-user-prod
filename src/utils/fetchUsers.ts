import axios from "axios";
import { UserType } from "./types/UserType";

const api_url = process.env.NEXT_PUBLIC_API_URL as string;

export const fetchUsers = async (numberOfUsers: number) => {
  const res = await axios.get(api_url, {
    params: {
      results: numberOfUsers,
      nat: "IN",
    },
  });

  const data = res.data as UserType;

  return data;
};
