import mergeCn from "@/utils/mergeCn";

type Props = {
  className?: string;
  orientation?: "vertical" | "horizontal";
};

const Divider = ({ className, orientation = "horizontal" }: Props) => {
  return (
    <figure
      className={mergeCn("border-secondary-600", className, {
        "h-0 w-full border-t": orientation === "horizontal",
        "h-full border-s": orientation === "vertical",
      })}
    />
  );
};

export default Divider;
