import { Column, BodyText } from "@/components/atom";
import { FOOTER_DATA } from "@/constants";
import Link from "next/link";

const Services = () => {
    return (
        <Column className="gap-[1.6rem] max-w-max">
            <BodyText variant="sm" className="text-white">{FOOTER_DATA.main.services.title}</BodyText>
            <Column className="gap-[1.2rem] max-w-[18rem]">
                {FOOTER_DATA.main.services.list.map((service, index) => (
                    <BodyText variant="sm" className="text-grey-200 font-400" key={index}>
                        <Link href={service.pathName}>{service.name}</Link>
                    </BodyText>
                ))}
            </Column>

        </Column>
    );
}

export default Services;