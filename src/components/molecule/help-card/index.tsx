import { BodyText, Button, Card, Center, Column, Title } from "@/components/atom";
import { DevSealLogoReducedOpacity } from "@/public/index";

type Props = {
  className?: string;
  title?: string;
  body?: string;
  cta?: {
    text: string | React.ReactNode;
    link: string;
  };
};

const HelpCard = ({ title = "",body, cta, className }: Props) => {
  return (
    <Card
      variant="unstyled"
      className={`pt-[6.4rem] pb-[4.8rem] ${className} bg-risd-blue-50 overflow-hidden relative`}
    >
      <Center>
        <Column className="gap-[2.4rem] max-w-[42.4rem] items-center justify-center">
          <article className="text-center space-y-[1.6rem]">
            <Title variant="lg" type="h3" className="text-risd-blue-900 font-[500]">
              {title}
            </Title>
            <BodyText variant="sm">
                {body}
            </BodyText>
          </article>
          {cta && (
            <Button variant="outlined" href={cta.link}>
              {cta.text}
            </Button>
          )}
        </Column>
      </Center>
      <figure className="max-w-[30.8rem] absolute bottom-0 right-0 w-full">
        <DevSealLogoReducedOpacity />
      </figure>
    </Card>
  );
};

export default HelpCard;
