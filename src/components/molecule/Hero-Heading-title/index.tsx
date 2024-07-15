import {
  BodyText,
  Button,
  Center,
  Column,
  Label,
  Title,
} from "@/components/atom";

type Props = {
  title?: React.ReactNode;
  subtitle?: string;
  label?: string;
  type?: "center" | "left";
  cta?: {
    text: string;
    pathname: string;
  };
};

const HeroHeadingTitle = ({
  title = "",
  subtitle = "",
  label = "",
  type = "center",
  cta,
}: Props) => {
  if (type === "left") {
    return (
      <Column className="items-start gap-[4rem]">
        <article className={`text-left space-y-[1.6rem] max-w-[71.4rem]`}>
          {label && <Label>{label}</Label>}
          <Title type="h1" variant="xl" className="text-risd-blue-50">
            {title}
          </Title>
          <BodyText variant="md" className="text-risd-blue-100">
            {subtitle}
          </BodyText>
        </article>
        {cta && <Button href={cta.pathname}>{cta.text}</Button>}
      </Column>
    );
  }
  return (
    <Center className="flex-col">
      <article className={`text-center space-y-[2.6rem] max-w-[113.8rem]`}>
        {label && <Label>{label}</Label>}
        <Title type="h1" variant="xl" className="text-risd-blue-900">
          {title}
        </Title>
        <BodyText variant="md" className="text-grey-700">
          {subtitle}
        </BodyText>
      </article>
    </Center>
  );
};

export default HeroHeadingTitle;
