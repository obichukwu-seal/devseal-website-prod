import { BodyText, Column, Container, Title } from "@/components/atom";
import { ConnectWithUS, EmailUs, GetInTouch } from "@/components/molecule";
import PhoneUs from "@/components/molecule/phone";
import { CONTACT_US_PAGE_CONTENT } from "@/constants";
import React from "react";

type Props = {};

const ContactUsPageContent = (props: Props) => {
  return (
    <section className="w-full bg-grey-alt-2 py-[4rem]">
      <Container className="space-y-[4rem]">
        <article className="space-y-[1.6rem] max-w-[48.6rem]">
          <Title variant="xl" type="h1">
            {CONTACT_US_PAGE_CONTENT.title.split(",")[0]}
            <span className="text-risd-blue-600">
              {CONTACT_US_PAGE_CONTENT.title.split(",")[1]}
            </span>
            {CONTACT_US_PAGE_CONTENT.title.split(",")[2]}
          </Title>
          <BodyText variant="sm">{CONTACT_US_PAGE_CONTENT.body}</BodyText>
        </article>
        <section className="grid grid-cols-1 md:grid-cols-2 gap-[2.6rem] justify-between">
          <GetInTouch />
          <Column className="gap-[7rem]">
            <EmailUs />
            <PhoneUs />
            <ConnectWithUS />
          </Column>
        </section>
      </Container>
    </section>
  );
};

export default ContactUsPageContent;
