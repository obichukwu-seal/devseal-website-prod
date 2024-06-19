import emailjs from "@emailjs/browser";

interface EmailContent {
    contactName: string;
    message: string;
    subject: string
}
export const sendEmail = async ({ contactName,message, subject }: EmailContent) => {
  const templateParams = {
    subject_name: subject,
    from_name: contactName,
    to_name: "DevSeal tech",
    message: message,
  };

  try {
    const response = await emailjs.send(
      process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "",
      process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "",
      templateParams,
      process.env.NEXT_PUBLIC_EMAILJS_USER_ID
    );
    return response;
  } catch (error) {
    throw error;
  }
};