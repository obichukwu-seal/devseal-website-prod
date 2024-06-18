import { BodyText, Card, Title } from "@/components/atom";
import { DevSealLogoFullOpacity } from "@/public/index";
import { ICardProps } from "@/components/atom/card";


type Props = ICardProps & {
  title?: string;
  body?: string;
};

const MissionCard = ({ className, title = "", body = "", ...props }: Props) => {
  return (
    <Card
      variant="transparent"
      rounded="xs"
      border="xs"
      className={`px-[4.0rem] bg-grey-alt-100 relative overflow-hidden h-full transition-all duration-300 cursor-pointer hover:border-risd-blue-600 py-[3.2rem] ${className}`}
      {...props}
    >
      <article className="text-seal-primary-100 space-y-[2.4rem]">
        <Title variant="md">{title}</Title>
        <BodyText variant="md" className={`max-w-[50.8rem]`}>
          {body}
        </BodyText>
      </article>
      <figure className="mt-[5.6rem] items-end justify-end absolute bottom-0 hidden sm:flex right-0">
        <DevSealLogoFullOpacity />
      </figure>
    </Card>
  );
};

export default MissionCard;
