import { fetchUsers } from "@/utils/fetchUsers";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const DisplayCards = () => {
  const [numberOfUsers, setNumberOfUsers] = useState(3);
  const { data, isFetched, isSuccess } = useQuery({
    queryKey: ["users"],
    queryFn: () => fetchUsers(numberOfUsers),
    refetchOnWindowFocus: false,
  });

  console.log(data);

  if (isFetched && isSuccess) {
    return (
      <>
        <div className="">
          {data?.results.map((item) => (
            <div className="" key={item.login.uuid}>
              {item.name.first}
            </div>
          ))}
        </div>
      </>
    );
  }
};

export default DisplayCards;
