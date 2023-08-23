interface Tv2_buttonProps {
  btnType: "primary" | "secondary" | "lightGray";

  size: "small" | "medium" | "large";

  label: string;

  costumStyle?: Array<string>;

  onClick?: () => void;
}

export const Tv2_button = ({ btnType = "primary", size = "small", label }: Tv2_buttonProps) => {
  function setBtnSize() {
    if (size === "small") {
      return "w-24";
    } else if (size === "medium") {
      return "w-52";
    } else if (size === "large") {
      return "w-60";
    }
  }
  function setBackgroundColor() {
    if (btnType === "primary") {
      return "bg-primary";
    } else if (btnType === "secondary") {
      return "bg-secondary";
    } else if (btnType === "lightGray") {
      return "bg-lightGray";
    }
  }
  const background = setBackgroundColor();
  const btnSize = setBtnSize();
  return (
    <button
      type="button"
      className={`${background} ${btnSize} px-5 h-10 ${btnType === "lightGray" ? "text-primary" : "text-white"} rounded-full `}
    >
      {label}
    </button>
  );
};
