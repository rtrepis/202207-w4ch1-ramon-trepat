import { Key } from "react";

interface Man {
  id: Key;
  name: string;
  status: string;
  profession: string;
  twitter: string;
  picture: string;
  alternativeText: string;
  selected: boolean;
}

export default Man;
