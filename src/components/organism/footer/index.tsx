"use client";
import {
  BodyText,
  Button,
  Center,
  Column,
  Container,
  NavLink,
  Row,
} from "@/components/atom";
import { Contacts, Summary, Services, PrivacySecurity } from "@/components/molecule";
import { FOOTER_DATA } from "@/constants";
import { useMediaQuery } from "@/hooks";
import Link from "next/link";

import React from "react";

type Props = {};

const Footer = (props: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 600px)");
  const SealLogo = FOOTER_DATA.header.Image;
  return (
    <footer className="w-full bg-risd-alt-1">
      <Container className="pt-[6.4rem] pb-[3rem]">
        {!isAboveMediumScreens ? (
          <>
            <Column className="gap-[2.5rem]">
              <Link href="/">
                <SealLogo />
              </Link>
              <div className="self-start">
                <Button href={FOOTER_DATA.header.CTA.link} variant="primary">
                  {FOOTER_DATA.header.CTA.text}
                </Button>
              </div>
            </Column>
            <Column className="gap-[2.5rem] mt-[1.3rem]">
              <Summary />
              <Services />
              <PrivacySecurity />
              <Contacts />
            </Column>
          </>
        ) : (
          <>
            <Row className="justify-between items-center">
              <Link href="/">
                <SealLogo />
              </Link>
            </Row>
            <Row className="gap-[2.5rem] justify-between items-start mt-[1.7rem]">
              <Summary />
              <Services />
              <PrivacySecurity />
              <Contacts position="right" />
            </Row>
          </>
        )}

        <Center className="pt-[1.6rem] mt-[3.2rem] border-t border-t-grey-600">
          <BodyText variant="xs" className="font-[400] text-grey-100">
            {FOOTER_DATA.footer.rights}
          </BodyText>
          {/* <Row className="gap-[1.5rem]">
            <small className="text-[1.3rem] text-gray-300 ">
              <Button
                href={FOOTER_DATA.footer.links[0].link}
                variant="unstyled"
              >
                {FOOTER_DATA.footer.links[0].text}
              </Button>
            </small>
            <small className="text-[1.3rem] text-gray-300 ">
              <Button
                href={FOOTER_DATA.footer.links[1].link}
                variant="unstyled"
              >
                {FOOTER_DATA.footer.links[1].text}
              </Button>
            </small>
          </Row> */}
        </Center>
      </Container>
    </footer>
  );
};

export default Footer;
