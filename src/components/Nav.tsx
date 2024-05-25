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

const Nav = () => {
  return (
    <>
      <Navbar
        maxWidth="xl"
        className="h-[12vh]"
        // isBlurred
        // isBordered
        // isMenuOpen={isMenuOpen}
        // onMenuOpenChange={setIsMenuOpen}
      >
        <NavbarBrand className="text-2xl font-bold">RandomUser V2</NavbarBrand>
        <NavbarContent justify="end" className=" hidden sm:flex">
          <NavbarItem>
            <form className="flex gap-2" noValidate>
              <Input
                type="number"
                defaultValue="3"
                label="Enter Number"
                labelPlacement="outside-left"
              />
              <Button
                type="submit"
                color="secondary"
                variant="shadow"
                endContent={<DownloadCloud />}
              >
                Get
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
