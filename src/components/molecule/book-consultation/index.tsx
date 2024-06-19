"use client";
import React from "react";
import { BodyText, Card, CustomInput, Title } from "@/components/atom";
import {
  BOOK_A_FREE_CONSULTATION_PAGE_CONTENT,
  CONTACT_US_PAGE_CONTENT,
} from "@/constants";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { sendEmail } from "@/libs/emailService";
import { toast } from "react-toastify";
import { Loader } from "@/components/atom/Loader";

type Props = {};

interface FormValues {
  contactName: string;
  phoneNumber: string;
  email: string;
}
const BookConsultationForm = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);


  const buttonStyle =
    "p-[1.2rem] w-full bg-risd-blue-600 text-grey-50 rounded-[.8rem] hover:bg-risd-blue-900 transition-all duration-300";

  const schema = yup.object({
    contactName: yup.string().required("Contact Name is required"),
    phoneNumber: yup.string().required("Phone Number is required"),
    email: yup
      .string()
      .required("Email is required")
      .trim()
      .email("Enter a valid email address"),
  });

  const {
    formState: { errors },
    handleSubmit,
    reset,
    register,
  } = useForm<FormValues>({
    mode: "all",
    resolver: yupResolver(schema),
  });

  const onSubmit: SubmitHandler<FormValues> = async (formData) => {
    const { contactName, email, phoneNumber } = formData;
    setIsLoading(true);
    try {
      await sendEmail({
        contactName: contactName,
        message: `Booking a free consultation : Name: ${contactName} Email: ${email} PhoneNumber: ${phoneNumber}`,
        subject: "Book consultation"
      });
      reset();
      toast("Booking Successful", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
    } catch (error: any) {
      toast("Booking Failed", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "error",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
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
            {...register("contactName")}
            disabled={isLoading}
            label={BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form.contactName.label}
            placeholder={
              BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form.contactName.placeHolder
            }
            error={errors?.contactName?.message}
          />
          <CustomInput
            {...register("phoneNumber")}
            label={BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form.phone.label}
            disabled={isLoading}
            placeholder={
              BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form.phone.placeHolder
            }
            error={errors?.phoneNumber?.message}
          />
          <CustomInput
            {...register("email")}
            label={
              BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form["Email address"].label
            }
            disabled={isLoading}
            placeholder={
              BOOK_A_FREE_CONSULTATION_PAGE_CONTENT.form["Email address"]
                .placeHolder
            }
            error={errors?.email?.message}
          />
          <button
            type="submit"
            disabled={isLoading}
            className={`${buttonStyle} max-h-[5rem] rounded-[.5rem] text-[1.6rem] font-[600] leading-[2.4rem] flex items-center justify-center`}
          >
            {isLoading ? <Loader /> : CONTACT_US_PAGE_CONTENT.form.CTA.text}
          </button>
        </div>
      </Card>
    </form>
  );
};

export default BookConsultationForm;
