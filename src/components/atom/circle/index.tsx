import React from "react";
import Card, { CardProp } from "../card";

type Props = CardProp & {};

const Circle = ({...props}: Props) => {
  return (
    <Card
    className={`${props.className} rounded-full items-center justify-center flex w-full h-full min-h-[18.4rem] min-w-[18.4rem]`}
    {...props}
    >
      {props.children}
    </Card>
  );
};

export default Circle;
