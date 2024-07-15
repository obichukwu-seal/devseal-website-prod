import { HTMLAttributes } from "react";

type ListProp = HTMLAttributes<HTMLUListElement>
type Props = ListProp & {
  children?: React.ReactNode;
  classsName?: string;
};

const NavCard = ({ children, classsName, ...props }: Props) => {
  return (
    <ul
      className={`${classsName} bg-white z-50 border-8 border-risd-blue-50 rounded-[.8rem] p-[3.2rem]`}
      {...props}
    >
      {children}
    </ul>
  );
};

export default NavCard;
