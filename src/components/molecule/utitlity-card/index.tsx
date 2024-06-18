import { Card, Column, Title } from "@/components/atom";
import { ICardProps } from "@/components/atom/card";

type Props = ICardProps & {
  body?: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
  className?: string;
};

const UtilityCard = ({
  body,
  footer,
  title = "",
  ...props
}: Props) => {
  return (
    <Card {...props}>
      <Column className="justify-between h-full">
        <article className="mb-[6.5rem]">
          <Title variant="sm" type="h3" className="mb-[3.2rem] text-grey-900">
            {title}
          </Title>
          <span className="text-grey-700">{body && body}</span>
        </article>
        <div className="mt-auto w-full">{footer && footer}</div>
      </Column>
    </Card>
  );
};

export default UtilityCard;
