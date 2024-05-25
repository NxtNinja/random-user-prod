import { Button } from "@nextui-org/button";
import { useAtom } from "jotai";
import MoonIcon from "./MoonIcon";
import SunIcon from "./SunIcon";
import { useEffect } from "react";
import { darkjotaiAtom } from "@/utils/atoms/atoms";

const DarkMode = () => {
  const [darkmode, setDarkMode] = useAtom(darkjotaiAtom);

  useEffect(() => {
    if (darkmode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkmode]);

  return (
    <>
      <Button onPress={() => setDarkMode(!darkmode)}>
        {darkmode ? <MoonIcon /> : <SunIcon />}
      </Button>
    </>
  );
};

export default DarkMode;
