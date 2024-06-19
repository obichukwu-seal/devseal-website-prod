"use client";
import {
  BodyText,
  Card,
  CustomInput,
  Title,
} from "@/components/atom";
import { BOOK_A_FREE_CONSULTATION_PAGE_CONTENT, CONTACT_US_PAGE_CONTENT } from "@/constants";

type Props = {};

const BookConsultationForm = (props: Props) => {
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
            {BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form.title}
          </Title>
          <BodyText variant="sm" className="leading-[2.8rem]">
            {BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form.subtitle}
          </BodyText>
        </article>
        <div className=" space-y-[2rem] mt-[2.7rem]">
          <CustomInput
            label={BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form.contactName.label}
            placeholder={BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form.contactName.placeHolder}
          />
          <CustomInput
            label={BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form.phone.label}
            placeholder={BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form.phone.placeHolder}
          />
          <CustomInput
            label={BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form["Email address"].label}
            placeholder={
              BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form["Email address"].placeHolder
            }
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

export default BookConsultationForm;
