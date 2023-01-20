import classNames from "classnames";
import { SyntheticEvent } from "react";

type TButtonProps = {
  className?: string;
  text: string;
  onClick: (e: SyntheticEvent) => void;
};

export const Button = ({ className, text, onClick }: TButtonProps) => {
  return (
    <button
      className={classNames(
        "p-2 rounded bg-grey text-white font-semibold",
        className
      )}
      onClick={(e) => {
        e.stopPropagation();
        e.preventDefault();

        if (onClick) onClick(e);
      }}
    >
      {text}
    </button>
  );
};
