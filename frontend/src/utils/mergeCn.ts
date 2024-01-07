import { twMerge } from "tailwind-merge";
import { clsx, ClassArray } from "clsx";

function mergeCn(...inputs: ClassArray) {
  return twMerge(clsx(inputs));
}

export default mergeCn;
