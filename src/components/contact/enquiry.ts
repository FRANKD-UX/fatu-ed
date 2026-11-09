import { site, whatsappEnquiry } from "@/config/site";

export const enquiryTopics = {
  general: "General enquiry",
  designs: "Designs enquiry",
  trading: "General Trading enquiry",
  academy: "Academy expression of interest",
} as const;
export type EnquiryTopic = keyof typeof enquiryTopics;
export type EnquiryInput = { topic: EnquiryTopic; name: string; message: string };
export const academyAcknowledgement = "I understand that F.E.D Old School Academy is a future initiative, is not operating or accredited, and is not accepting enrolments. This expression of interest is not an application or a reservation of a place.";

export function isEnquiryTopic(value: string | null): value is EnquiryTopic {
  return value !== null && Object.hasOwn(enquiryTopics, value);
}

export function validateEnquiry(input: EnquiryInput) {
  const errors: Partial<Record<"name" | "message", string>> = {};
  if (!input.name.trim()) errors.name = "Enter your name.";
  else if (input.name.trim().length > 80) errors.name = "Use 80 characters or fewer for your name.";
  if (!input.message.trim()) errors.message = "Tell us about your enquiry.";
  else if (input.message.trim().length > 1000) errors.message = "Keep your message to 1,000 characters or fewer.";
  return errors;
}

export function createEnquiryDraft(input: EnquiryInput) {
  const subject = `FATU.E.D · ${enquiryTopics[input.topic]}`;
  const body = [
    `Hello FATU.E.D,`,
    `Topic: ${enquiryTopics[input.topic]}`,
    `Name: ${input.name.trim().replace(/[\r\n]+/g, " ")}`,
    input.message.trim(),
    ...(input.topic === "academy" ? [academyAcknowledgement] : []),
  ].join("\n\n");
  return {
    body,
    whatsapp: whatsappEnquiry(body),
    email: `${site.contact.emailUri}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`,
  };
}
