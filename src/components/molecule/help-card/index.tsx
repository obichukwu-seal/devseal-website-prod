import { Button, Card, Column, Title } from "@/components/atom";
import { DevSealLogoReducedOpacity } from "@/public/index";

type Props = {
  className?: string;
  title?: string;
  cta?: {
    text: string | React.ReactNode;
    link: string;
  };
};

const HelpCard = ({ title = "", cta, className }: Props) => {
  return (
    <Card
      variant="secondary"
      className={`p-[4rem] ${className} overflow-hidden relative`}
    >
      <Column className="gap-[4.6rem] items-start max-w-[54.9rem]">
        <Title variant="lg" className="text-white font-[500]">
          {title}
        </Title>
        {cta && (
          <Button
            variant="unstyled"
            className="text-risd-blue-500 hover:bg-risd-blue-900 hover:text-white bg-white px-[2.4rem] py-[1.2rem]"
            href={cta.link}
          >
            {cta.text}
          </Button>
        )}
      </Column>
      <figure className="max-w-[30.8rem] absolute bottom-0 right-0 w-full">
        <DevSealLogoReducedOpacity />
      </figure>
    </Card>
  );
};

export default HelpCard;
