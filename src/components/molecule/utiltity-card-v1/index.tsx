import { Card, Column, Title } from "@/components/atom";
import { ICardProps } from "@/components/atom/card";

type Props = ICardProps & {
  body?: React.ReactNode;
  icon?: React.ReactNode;
  title?: string;
  footer?: React.ReactNode;
  titleClassName?: string;
};

const UtilityCardV1 = ({
  body = "",
  icon,
  title = "",
  footer,
  titleClassName,
  ...props
}: Props) => {
  return (
    <Card
      {...props}
      variant={props.variant ? props.variant : "tertiary"}
      className={`${
        props.className ? props.className : ""
      } group hover:border-risd-blue-600 flex flex-col justify-between transition-all duration-300 px-[2.4rem] pt-[3.2rem] pb-[1.6rem] h-full nin-h-[30.4rem]`}
      border="xs"
    >
      <Column className="gap-[2.4rem]">
        {icon && <span>{icon}</span>}
        <article className="space-y-[2.4rem]">
          <Title variant="sm" type="h4" className={`${titleClassName}`}>
            {title}
          </Title>
          <span className="mt-[2.4rem]">{body}</span>
        </article>
      </Column>
      {footer && <footer className="mt-[6.5rem]">{footer}</footer>}
    </Card>
  );
};

export default UtilityCardV1;
