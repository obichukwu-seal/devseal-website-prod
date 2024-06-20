"use client";
import React from "react";
import {
  BodyText,
  Card,
  CustomInput,
  CustomTextArea,
  Title,
} from "@/components/atom";
import { CONTACT_US_PAGE_CONTENT } from "@/constants";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { sendEmail } from "@/libs/emailService";
import { Loader } from "@/components/atom/Loader";

type Props = {};

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
  message: string;
}

const GetInTouch = (props: Props) => {
  const [isLoading, setIsLoading] = React.useState<boolean>(false);
  const buttonStyle =
    "p-[1.2rem] w-full bg-risd-blue-600 text-grey-50 rounded-[.8rem] hover:bg-risd-blue-900 transition-all duration-300";

  const schema = yup.object({
    firstName: yup.string().required("First Name is required"),
    lastName: yup.string().required("Last Name is required"),
    message: yup.string().required("Message is required"),
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
    const { firstName, email, lastName, message } = formData;
    setIsLoading(true);
    try {
      const fullName =`${firstName} ${lastName}`
      await sendEmail({
        contactName: fullName,
        message: ` Name: ${fullName} Email: ${email}  message: ${message}`,
        subject: "Contact Form"
      });
      reset();
      toast("Message Sent Successful", {
        hideProgressBar: true,
        autoClose: 2000,
        type: "success",
      });
    } catch (error: any) {
      toast("Message Failed", {
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
            {CONTACT_US_PAGE_CONTENT.form.title}
          </Title>
          <BodyText variant="sm" className="leading-[2.8rem]">
            {CONTACT_US_PAGE_CONTENT.form.subtitle}
          </BodyText>
        </article>
        <div className=" space-y-[2rem] mt-[2.7rem]">
          <div className="grid-cols-2 grid gap-[2.4rem]">
            <CustomInput
              {...register("firstName")}
              disabled={isLoading}
              label={CONTACT_US_PAGE_CONTENT.form.firstName.label}
              placeholder={CONTACT_US_PAGE_CONTENT.form.firstName.placeHolder}
              error={errors?.firstName?.message}
            />
            <CustomInput
              {...register("lastName")}
              disabled={isLoading}
              label={CONTACT_US_PAGE_CONTENT.form.LastName.label}
              placeholder={CONTACT_US_PAGE_CONTENT.form.LastName.placeHolder}
              error={errors?.lastName?.message}
            />
          </div>
          <CustomInput
            {...register("email")}
            disabled={isLoading}
            label={CONTACT_US_PAGE_CONTENT.form["Email address"].label}
            placeholder={
              CONTACT_US_PAGE_CONTENT.form["Email address"].placeHolder
            }
            error={errors?.email?.message}
          />
          <CustomTextArea
            {...register("message")}
            label={CONTACT_US_PAGE_CONTENT.form.message.label}
            placeholder={CONTACT_US_PAGE_CONTENT.form.message.placeHolder}
            error={errors?.message?.message}
          />
          <button
            type="submit"
            className={`${buttonStyle} max-h-[5rem] rounded-[.5rem] text-[1.6rem] font-[600] leading-[2.4rem] flex items-center justify-center`}
          >
            {isLoading ? <Loader /> : CONTACT_US_PAGE_CONTENT.form.CTA.text}
          </button>
        </div>
      </Card>
    </form>
  );
};

export default GetInTouch;
