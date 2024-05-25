import axios from "axios";
import { UserType } from "./types/UserType";

export const fetchUsers = async (numberOfUsers: number) => {
  const res = await axios.get("https://randomuser.me/api/", {
    params: {
      results: numberOfUsers,
      nat: "IN",
    },
  });

  const data = res.data as UserType;

  return data;
};
