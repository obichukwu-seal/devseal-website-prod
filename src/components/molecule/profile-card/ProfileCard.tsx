import { Avatar, BodyText, Card, Column, Title } from "@/components/atom";
import React from "react";
import { ImageProps } from "next/image";

type NewImageProp = Omit<ImageProps, "alt" |"placeholder">
type Props = NewImageProp & {
  name?: string;
  position?: string;
};

const ProfileCard = ({ name, position, src, ...props }: Props) => {
  return (
    <Card rounded="xs" variant="primary" className="py-[2.4rem] h-full min-w-[18rem] px-[1.2rem]" {...props}>
      <Column className="items-center xs:items-start gap-[.8rem]">
        {src && (
          <Avatar
            alt={name ? name : ""}
            src={src}
            placeholder="blur"
            size="4xl"
          />
        )}
        <article className="text-center xs:text-left text-seal-primary-100">
          <Title variant="xs" type="h5" className="text-white">
            {name}
          </Title>
          <BodyText variant="xxs" className="text-white">{position}</BodyText>
        </article>
      </Column>
    </Card>
  );
};

export default ProfileCard;
