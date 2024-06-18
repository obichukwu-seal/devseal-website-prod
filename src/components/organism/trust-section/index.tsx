import { Column, Row, Title } from "@/components/atom";
import { Container } from "@/components/atom";
import React from "react";

type Props = {
  title?: string;
  images?: any;
};

const BrandThatTrustUs = ({ title, images = [] }: Props) => {
  return (
    <Container>
      <Column className="gap-[2.4rem]">
        <Title variant="xs" type="h5" className="text-risd-blue-800">
          {title}
        </Title>
        <ul className="items-center sm:flex  w-full">
          {images.map((Items: any, index: number) => (
            <li key={index} className="w-full">
              <figure className=" w-full h-[12rem] p-4 border border-grey-100] flex items-center justify-center">
                <Items />
              </figure>
            </li>
          ))}
        </ul>
      </Column>
    </Container>
  );
};

export default BrandThatTrustUs;
