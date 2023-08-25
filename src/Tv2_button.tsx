interface Tv2_buttonProps {
  btnType: "primary" | "secondary" | "lightGray" | "disabled";

  size: "small" | "medium" | "large";

  label: string;

  costumStyle?: Array<string>;

  onClick?: () => void;
}

export const Tv2_button = ({ btnType = "primary", size = "small", label }: Tv2_buttonProps) => {
  function setBtnSize() {
    if (size === "small") {
      return " min-w-min ";
    } else if (size === "medium") {
      return " min-w-full max-w-xxsm";
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
    } else if (btnType === "disabled") {
      return "bg-btn_disabled";
    }
  }
  function setBtnHeight() {
    if (size === "small") {
      return "h-10";
    } else if (size === "medium") {
      return "h-12";
    } else if (size === "large") {
      return "h-14";
    }
  }

  const background = setBackgroundColor();
  const btnSize = setBtnSize();
  const btnHeight = setBtnHeight();
  return (
    <button
      type="button"
      className={`${background} ${btnSize} ${btnHeight}  px-5 h-10 ${
        btnType === "lightGray" ? "text-primary" : "text-white"
      } rounded-full  ${btnType === "disabled" ? "text-opacity-50" : "text-opacity-100"}`}
    >
      {label}
    </button>
  );
};
