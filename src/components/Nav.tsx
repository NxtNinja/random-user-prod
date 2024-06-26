import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
import { Button } from "@nextui-org/button";
import { Input } from "@nextui-org/input";
import { DownloadCloud } from "lucide-react";
import DarkMode from "./DarkMode";
import { useForm } from "react-hook-form";
import { validationScehma, validationScehmatype } from "@/utils/types/UserType";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useQueryClient } from "@tanstack/react-query";
import { useAtom } from "jotai";
import { UserNumberAtom } from "@/utils/atoms/UserNumberAtom";
import { useEffect } from "react";

const Nav = () => {
  const [numberOfUsers, setNumberOfUsers] = useAtom<number>(UserNumberAtom);

  // Form Validation

  const queryClient = useQueryClient();

  const {
    handleSubmit,
    register,
    formState: { errors, isSubmitting },
  } = useForm<validationScehmatype>({
    resolver: zodResolver(validationScehma),
  });

  const usernumberdata = (data: validationScehmatype) => {
    console.log(data);
    setNumberOfUsers(data.userNumber);
  };

  useEffect(() => {
    queryClient.refetchQueries({ queryKey: ["users"] });
    toast.success(`${numberOfUsers} users fetched`);
  }, [numberOfUsers]);

  return (
    <>
      <Navbar maxWidth="xl" className="h-[12vh]">
        <NavbarBrand className="text-2xl font-bold">RandomUser V2</NavbarBrand>
        <NavbarContent justify="end" className=" hidden sm:flex">
          <NavbarItem>
            <form
              className="flex gap-2"
              noValidate
              onSubmit={handleSubmit(usernumberdata)}
            >
              <Input
                type="number"
                defaultValue="3"
                label="Enter Number"
                labelPlacement="outside-left"
                {...register("userNumber")}
                errorMessage={errors.userNumber?.message}
                isInvalid={errors.userNumber?.message ? true : false}
              />

              <Button
                type="submit"
                color="secondary"
                variant="shadow"
                endContent={<DownloadCloud />}
              >
                {isSubmitting ? "" : "Get"}
              </Button>
            </form>
          </NavbarItem>
          <NavbarItem>
            <DarkMode />
          </NavbarItem>
        </NavbarContent>
      </Navbar>
    </>
  );
};

export default Nav;
