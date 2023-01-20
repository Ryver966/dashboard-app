import classNames from "classnames";
import { Link } from "react-router-dom";
import { TListItem } from "../../utils/Eshared";
import { Button } from "../Button/Button";

type TListItemProps = {
  buttonText?: string;
  className?: string;
  item: TListItem;
  onButtonClick?: () => void;
};

export const ListItem = ({
  buttonText,
  className,
  item,
  onButtonClick,
}: TListItemProps) => {
  return (
    <Link
      to="#"
      className={classNames(
        "p-2 bg-grey-light rounded w-full text-black",
        className
      )}
    >
      <p className="text-lg font-bold">{item.name}</p>
      <p>{item.company}</p>

      {buttonText && (
        <Button
          text={buttonText}
          onClick={(e) => {
            e.stopPropagation();

            if (onButtonClick) onButtonClick();
          }}
        />
      )}
    </Link>
  );
};
