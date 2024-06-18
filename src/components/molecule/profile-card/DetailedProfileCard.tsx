import { BodyText, Card, Title } from "@/components/atom";
import { DevSealLogoFullOpacity } from "@/public/index";
import Image, { ImageProps } from "next/image";
import React, { HTMLAttributes } from "react";
type CardProp = HTMLAttributes<HTMLDivElement>;
type NewImageProp = Omit<ImageProps, "alt" | "placeholder">;
type Props = CardProp &
  NewImageProp & {
    image?: string;
    about?: string;
    position?: string;
    name?: string;
    variant?: "primary" | "secondary";
  };

const DetailedProfileCard = ({
  src,
  about,
  name,
  position,
  className,
  variant = "primary",
  ...props
}: Props) => {
  return (
    <Card
      {...props}
      variant={variant}
      rounded="lg"
      className={`${className} shadow-2xl  w-[200%] h-[50%] z-50 overflow-hidden`}
    >
      <article className="absolute bottom-0 left-0 w-full px-[3rem] pb-[2.3rem] z-50 flex items-end text-white">
        <span>
          <span>
            <Title variant="xs" type="h3" className="font-[600]">
              {name}
            </Title>
            <BodyText>{position}</BodyText>
          </span>
          {about?.split(".").map((items, index) => (
            <BodyText key={index} className="mt-[2.5rem]">
              {items + "."}
            </BodyText>
          ))}
        </span>
      </article>
      <figure className="w-full h-full relative after:absolute after:from-black after:to-transparent after:bg-gradient-to-t after:w-full after:h-full after:z-10 items-center justify-center flex">
        {src && (
          <Image
            src={src}
            alt={name ? name : ""}
            placeholder="blur"
            quality={100}
            className="w-[60rem] h-[60rem] object-cover absolute bottom-0 right-0"
          />
        )}
      </figure>
      <figure className="mt-[5.6rem] items-end justify-end absolute bottom-0 hidden opacity-30 sm:flex right-0">
        <DevSealLogoFullOpacity />
      </figure>
      <figure className="mt-[5.6rem] absolute -bottom-20 hidden opacity-30  rotate-[90deg] -z-10 -left-[40rem] sm:flex right-0">
        <DevSealLogoFullOpacity/>
      </figure>
    </Card>
  );
};

export default DetailedProfileCard;
