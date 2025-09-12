import {
  BodyText,
  Button,
  Card,
  Center,
  Column,
  Title,
} from "@/components/atom";
import { useMediaQuery } from "@/hooks";
import { ConsultImage, DevSealLogoReducedOpacity } from "@/public/index";

type Props = {
  className?: string;
  title?: string;
  body?: string;
  cta?: {
    text: string | React.ReactNode;
    link: string;
  };
};

// const HelpCard = ({ title = "",body, cta, className }: Props) => {
//   return (
//     <Card
//       variant="unstyled"
//       className={`pt-[6.4rem] pb-[4.8rem] ${className} bg-risd-blue-50 overflow-hidden relative`}
//     >
//       <Center>
//         <Column className="gap-[2.4rem] max-w-[42.4rem] items-center justify-center">
//           <article className="text-center space-y-[1.6rem]">
//             <Title variant="lg" type="h3" className="text-risd-blue-900 font-[500]">
//               {title}
//             </Title>
//             <BodyText variant="sm">
//                 {body}
//             </BodyText>
//           </article>
//           {cta && (
//             <Button variant="outlined" href={cta.link}>
//               {cta.text}
//             </Button>
//           )}
//         </Column>
//       </Center>
//       <figure className="max-w-[30.8rem] absolute bottom-0 right-0 w-full">
//         <DevSealLogoReducedOpacity />
//       </figure>
//     </Card>
//   );
// };

const HelpCard = ({ title = "", body, cta, className }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1024px)");
  return (
    <Card
      variant="unstyled"
      className={` flex ${isAboveMediumScreens ? " pl-[2.4rem] pt-[3.4rem] justify-between " : "p-[2.4rem] items-center justify-center"}   ${className} bg-risd-blue-50  relative`}
    >
      {/* <Card className="shadow-lg bg-white p-10 rounded-xl absolute -bottom-10 left-1/2 -translate-x-1/2 w-[90%]"></Card> */}
      <Column className={`gap-[2.4rem] ${isAboveMediumScreens ? "ml-24 text-left" : "ml-0 text-center items-center flex justify-center"} self-center max-w-[42.4rem]`}>
        <article className=" space-y-[1.6rem]">
          <Title
            variant="lg"
            type="h3"
            className="text-risd-blue-900 font-[500]"
          >
            {title}
          </Title>
          <BodyText variant="sm">{body}</BodyText>
        </article>
        {cta && (
          <Button variant="primary" href={cta.link}>
            {cta.text}
          </Button>
        )}
      </Column>
      {isAboveMediumScreens && (
        <figure className="w-[40rem]">
          <ConsultImage />
        </figure>
      )}
    </Card>
  );
};

export default HelpCard;
