import { atomWithStorage } from "jotai/utils";

export const darkjotaiAtom = atomWithStorage<boolean>("darkmode", false);
