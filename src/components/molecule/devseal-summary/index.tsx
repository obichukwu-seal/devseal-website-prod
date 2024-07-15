import { BodyText, Column, Row } from "@/components/atom";
import { FOOTER_DATA } from "@/constants";
import { Nigeria, USA } from "@/public/footer-countries";
import Link from "next/link";
import React from "react";

type Props = {};

const Summary = (props: Props) => {
  return (
    <Column className="gap-[2.5rem] max-w-[30.5rem]">
      {FOOTER_DATA.main.address.map((address, index) => (
       <Link key={index}  href={address.pathName} target="_blank">
          <BodyText variant="sm" className="text-white" >{address.region}</BodyText>
          <BodyText variant="sm" className="text-grey-200 font-400" >{address.address}</BodyText>
       </Link>
      ))

      }
      <div className="self-start">
        <Row className="gap-[1.6rem]">
          <Nigeria />
          <USA />
        </Row>
      </div>
    </Column>
  );
};

export default Summary;
