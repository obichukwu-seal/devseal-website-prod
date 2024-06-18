"use client";
import { Container } from "@/components/atom";
import { HelpCard } from "@/components/molecule";
import { SEALS_HELP_CARD } from "@/constants/sealsHelpCard";
import { usePathname } from "next/navigation";

type Props = {};

const SectionHelpCard = (props: Props) => {
  const pathname = usePathname();
  if (pathname === "/contact-us") {
    return <></>;
  }
  return (
    <Container className="w-full mt-auto py-[4rem]">
      <HelpCard cta={SEALS_HELP_CARD.CTA} title={SEALS_HELP_CARD.title} />
    </Container>
  );
};

export default SectionHelpCard;
