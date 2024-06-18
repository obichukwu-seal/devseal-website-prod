"use client";
import {
  BodyText,
  Card,
  CustomInput,
  CustomTextArea,
  Title,
} from "@/components/atom";
import { CONTACT_US_PAGE_CONTENT } from "@/constants";

type Props = {};

const GetInTouch = (props: Props) => {
  const buttonStyle =
    "p-[1.2rem] w-full bg-risd-blue-600 text-grey-50 rounded-[.8rem] hover:bg-risd-blue-900 transition-all duration-300";

  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <Card
        className="px-[2.4rem] bg-white py-[4rem]"
        rounded="xs"
        border="xs"
        variant="transparent"
      >
        <article>
          <Title
            variant="md"
            type="h3"
            className="text-seal-primary-100 leading-[3.3rem] font-bold"
          >
            {CONTACT_US_PAGE_CONTENT.form.title}
          </Title>
          <BodyText variant="sm" className="leading-[2.8rem]">
            {CONTACT_US_PAGE_CONTENT.form.subtitle}
          </BodyText>
        </article>
        <div className=" space-y-[2rem] mt-[2.7rem]">
          <div className="grid-cols-2 grid gap-[2.4rem]">
            <CustomInput
              label={CONTACT_US_PAGE_CONTENT.form.firstName.label}
              placeholder={CONTACT_US_PAGE_CONTENT.form.firstName.placeHolder}
            />
            <CustomInput
              label={CONTACT_US_PAGE_CONTENT.form.LastName.label}
              placeholder={CONTACT_US_PAGE_CONTENT.form.LastName.placeHolder}
            />
          </div>
          <CustomInput
            label={CONTACT_US_PAGE_CONTENT.form["Email address"].label}
            placeholder={
              CONTACT_US_PAGE_CONTENT.form["Email address"].placeHolder
            }
          />
          <CustomTextArea
            label={CONTACT_US_PAGE_CONTENT.form.message.label}
            placeholder={CONTACT_US_PAGE_CONTENT.form.message.placeHolder}
          />
          <button
            type="submit"
            className={`${buttonStyle} max-h-[5rem] rounded-[.5rem] text-[1.6rem] font-[600] leading-[2.4rem] flex items-center justify-center`}
          >
            {CONTACT_US_PAGE_CONTENT.form.CTA.text}
          </button>
        </div>
      </Card>
    </form>
  );
};

export default GetInTouch;
