import { BodyText, Center, Label, Title } from "@/components/atom";

type Props = {
  title?: string;
  subtitle?: string;
  label?: string;
};

const HeroHeadingTitle = ({ title = "", subtitle = "", label = "" }: Props) => {
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
