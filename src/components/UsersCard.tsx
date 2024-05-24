import { Result } from "@/utils/types/UserType";
import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";

const UsersCard = ({ info }: { info: Result }) => {
  console.log(info);

  return (
    <>
      <Card>
        <CardBody className="px-8 py-4">
          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <Image src={info?.picture?.large} radius="full" isBlurred={true} />
            <div className="text-center text-2xl font-semibold">
              {info?.name?.title} {info?.name?.first} {info?.name?.last}
            </div>
            <div className="text-wrap text-center text-xl">{info?.email}</div>
            <div className="text-wrap text-center text-lg">
              {info?.location?.city}, {info?.location?.country}
            </div>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default UsersCard;
