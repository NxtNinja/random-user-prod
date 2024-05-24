import { Card, CardBody } from "@nextui-org/card";
import { Image } from "@nextui-org/image";
import { Skeleton } from "@nextui-org/skeleton";

const SkeletonCard = () => {
  return (
    <>
      <Card>
        <CardBody className="px-8 py-4">
          <div className="flex flex-col items-center justify-center gap-4 p-4">
            <Skeleton className="rounded-full">
              <Image src="72.jpg" radius="full" isBlurred={true} />
            </Skeleton>
            <Skeleton className="rounded-2xl">
              <div className="text-2xl font-semibold">
                Mrs. Naydena Kostricya
              </div>
            </Skeleton>
            <Skeleton className="rounded-2xl">
              <div className="text-xl">naydena.kostricya@example.com</div>
            </Skeleton>
            <Skeleton className="rounded-2xl">
              <div className="text-lg">Kup'yansk ,Ukraine</div>
            </Skeleton>
          </div>
        </CardBody>
      </Card>
    </>
  );
};

export default SkeletonCard;
