import { BodyText, Button, Column, Row } from "@/components/atom";
import { FOOTER_DATA } from "@/constants";
import { SealAgent } from "@/public/index";
import React from "react";

type Props = {};

const Summary = (props: Props) => {
  return (
    <Column className="gap-[2.5rem] max-w-[38.5rem]">
      <BodyText variant="xs">{FOOTER_DATA.main.address}</BodyText>
      <div className="self-start">
        <Button variant="outlined" href={FOOTER_DATA.main.CTA.link}>
          <Row className="gap-[1rem] items-center">
            <SealAgent />
            <small className="text-[1.4rem]">
              {" "}
              {FOOTER_DATA.main.CTA.text}
            </small>
          </Row>
        </Button>
      </div>
    </Column>
  );
};

export default Summary;
