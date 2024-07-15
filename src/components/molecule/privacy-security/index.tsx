import { BodyText, Column } from "@/components/atom"
import { FOOTER_DATA } from "@/constants"

const PrivacySecurity = () => {
    return (
        <Column className="gap-[1.6rem] max-w-max ">
            <BodyText variant="sm" className="text-white">{FOOTER_DATA.main.privacySecurity.title}</BodyText>
            <Column className="gap-[1.2rem]">
                {FOOTER_DATA.main.privacySecurity.list.map((service, index) => (
                    <BodyText variant="sm" className="text-grey-200 font-400" key={index}>{service}</BodyText>
                ))}
            </Column>
        </Column>
    )
}

export default PrivacySecurity