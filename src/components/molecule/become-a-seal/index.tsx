import { Button, Card, Column, Title } from "@/components/atom";
import { DevSealLogoReducedOpacity, SealAgentLarge } from "@/public/index";
import React from "react";

type Props = {
  title?: string;
  buttonText?: string;
  onClickButton?: () => void;
  href?: string | {};
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  type?: "small" | "large";
};

const BecomeASealCard = ({
  onClickButton,
  title = "",
  buttonText = "",
  href = "*",
  size = "sm",
  ...props
}: Props) => {
  if (props.type === "large") {
    return (
      <Card
        variant="tertiary"
        className="px-[2.4rem] py-[3.2rem] w-full relative z-10 overflow-hidden"
        rounded="xs"
      >
        <Column className="justify-between space-y-[8.4rem] h-full">
          <span className="space-y-[8.4rem]">
            <SealAgentLarge width={128} />
            <Title
              className=" text-white max-w-[54rem]"
              type={"h2"}
              variant={size}
            >
              {title}
            </Title>
          </span>
          <Button
            variant="secondary"
            href={href}
            className="mt-[2.5rem]"
            onClick={onClickButton}
          >
            {buttonText}
          </Button>
        </Column>
        <figure className="absolute bottom-0 -right-20 -z-10">
          <DevSealLogoReducedOpacity />
        </figure>
      </Card>
    );
  }
  if (props.type === "small") {
    return (
      <Card
        variant="unstyled"
        className="p-[2.4rem] bg-brandeis-blue-50 w-full relative z-10 overflow-hidden"
        rounded="xs"
      >
        <Column className="justify-between h-full">
          <span className=" space-y-[1.6rem] mb-[2rem]">
            <SealAgentLarge width={128} />
            <Title
              className="text-grey-900 max-w-[54rem]"
              type={"h2"}
              variant={size}
            >
              {title}
            </Title>
          </span>
          <Button
            variant="unstyled"
            href={href}
            className="rounded-full flex bg-risd-blue-500 items-center justify-center text-white  gap-[2.4rem]"
            onClick={onClickButton}
          >
            {buttonText}
          </Button>
        </Column>
        <figure className="absolute bottom-0 -right-20 -z-10">
          <DevSealLogoReducedOpacity />
        </figure>
      </Card>
    );
  }
  return (
    <Card
      variant="primary"
      className="px-[2.4rem] py-[3.2rem] w-full relative z-10 overflow-hidden"
      rounded="xs"
    >
      <Column className="justify-between space-y-[8.4rem] h-full">
        <span className="space-y-[8.4rem]">
          <SealAgentLarge width={128} />
          <Title
            className=" text-white max-w-[54rem]"
            type={"h2"}
            variant={size}
          >
            {title}
          </Title>
        </span>
        <Button
          variant="secondary"
          href={href}
          className="mt-[2.5rem]"
          onClick={onClickButton}
        >
          {buttonText}
        </Button>
      </Column>
      <figure className="absolute bottom-0 -right-20 -z-10">
        <DevSealLogoReducedOpacity />
      </figure>
    </Card>
  );
};

export default BecomeASealCard;
