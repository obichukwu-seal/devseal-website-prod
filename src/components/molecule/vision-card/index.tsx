import { BodyText, Card, Title } from "@/components/atom";
import { VisionAfrica } from "@/public/index";
import { ICardProps } from "@/components/atom/card";

type Props = ICardProps & {
  title?: string;
  body?: string;
  image?: React.ReactNode;
};

const VisionCard = ({
  className,
  title = "",
  body = "",
  image,
  ...props
}: Props) => {
  return (
    <Card
      variant="transparent"
      rounded="xs"
      border="xs"
      className={`px-[4.0rem] max-h-[32rem] overflow-hidden bg-grey-alt-100 transition-all duration-300 hover:bg-brandeis-blue-50 cursor-pointer hover:border-risd-blue-600 py-[3.2rem] ${className}`}
      {...props}
    >
      <article className="text-seal-primary-100 space-y-[2.4rem]">
        <Title variant="md">
          {title}
        </Title>
        <BodyText variant="md" className={`max-w-[50.8rem]`}>
          {body}
        </BodyText>
      </article>
      <figure className="mt-[5.6rem]">
        {image ? image : <VisionAfrica />}
      </figure>
    </Card>
  );
};

export default VisionCard;
