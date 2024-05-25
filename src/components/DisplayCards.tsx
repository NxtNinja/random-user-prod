import { fetchUsers } from "@/utils/fetchUsers";
import { useQuery } from "@tanstack/react-query";
import UsersCard from "./UsersCard";
import SkeletonCard from "./SkeletonCard";
import { Result } from "@/utils/types/UserType";
import { useAtom } from "jotai";
import { UserNumberAtom } from "@/utils/atoms/UserNumberAtom";

const DisplayCards = () => {
  const [numberOfUsers] = useAtom<number>(UserNumberAtom);

  const { data, isFetched, isSuccess, isLoading, isFetching } = useQuery({
    queryKey: ["users", numberOfUsers],
    queryFn: () => fetchUsers(numberOfUsers),
    refetchOnWindowFocus: false,
  });

  console.log(data);

  if (isLoading || isFetching) {
    return (
      <div className="my-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        <SkeletonCard />
        <SkeletonCard />
        <SkeletonCard />
      </div>
    );
  }

  if (isFetched && isSuccess) {
    return (
      <>
        <div className="my-4 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {data?.results.map((item: Result) => {
            return <UsersCard key={item.login.uuid} info={item} />;
          })}
        </div>
      </>
    );
  }
};

export default DisplayCards;
