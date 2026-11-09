"use client";

import { useRef, useState, type FormEvent } from "react";
import { useSearchParams } from "next/navigation";
import { LinkButton } from "@/components/ui/LinkButton";
import buttons from "@/components/ui/ui.module.scss";
import { academyAcknowledgement, createEnquiryDraft, enquiryTopics, isEnquiryTopic, validateEnquiry, type EnquiryTopic } from "./enquiry";
import s from "./EnquiryComposer.module.scss";

export function EnquiryComposer() {
  const query = useSearchParams().get("topic");
  const [selection, setSelection] = useState<EnquiryTopic | null>(null);
  const topic = selection ?? (isEnquiryTopic(query) ? query : "general");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [errors, setErrors] = useState<ReturnType<typeof validateEnquiry>>({});
  const [draft, setDraft] = useState<ReturnType<typeof createEnquiryDraft> | null>(null);
  const preview = useRef<HTMLElement>(null);

  function prepare(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors = validateEnquiry({ topic, name, message });
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length) {
      setDraft(null);
      const firstField = nextErrors.name ? "name" : "message";
      (event.currentTarget.elements.namedItem(firstField) as HTMLElement)?.focus();
      return;
    }
    setDraft(createEnquiryDraft({ topic, name, message }));
    // Move keyboard focus to the review step after React renders it.
    requestAnimationFrame(() => preview.current?.focus());
  }

  return (
    <div className={s.composer}>
      <form onSubmit={prepare} noValidate onChange={() => { setDraft(null); setErrors({}); }} aria-label="Enquiry composer" aria-describedby="composer-help">
        <p id="composer-help" className={s.help}>All fields are required. This tool prepares a draft; it does not send or save your enquiry on this website.</p>
        <div className={s.field}>
          <label htmlFor="enquiry-topic">Enquiry type</label>
          <select id="enquiry-topic" name="topic" value={topic} onChange={(event) => { if (isEnquiryTopic(event.target.value)) setSelection(event.target.value); }}>
            {Object.entries(enquiryTopics).map(([value, label]) => <option key={value} value={value}>{label}</option>)}
          </select>
        </div>
        {topic === "academy" && <p className={s.notice}>{academyAcknowledgement}</p>}
        <div className={s.field}>
          <label htmlFor="enquiry-name">Your name</label>
          <input id="enquiry-name" name="name" autoComplete="name" required maxLength={80} value={name} onChange={(event) => setName(event.target.value)} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} />
          {errors.name && <p id="name-error" className={s.error}>{errors.name}</p>}
        </div>
        <div className={s.field}>
          <label htmlFor="enquiry-message">Your message</label>
          <p id="message-help" className={s.help}>{topic === "trading" ? "Include the requirement, specifications and quantities, if known." : topic === "designs" ? "Describe the service, design idea, quantity and any timing you would like to discuss." : topic === "academy" ? "Share your question or interest in the proposed initiative." : "Tell us how we can help."} Up to 1,000 characters.</p>
          <textarea id="enquiry-message" name="message" rows={7} required maxLength={1000} value={message} onChange={(event) => setMessage(event.target.value)} aria-invalid={!!errors.message} aria-describedby={`message-help${errors.message ? " message-error" : ""}`} />
          {errors.message && <p id="message-error" className={s.error}>{errors.message}</p>}
        </div>
        <p className={s.error} role="status">{Object.keys(errors).length ? "Please check the highlighted fields before preparing your draft." : ""}</p>
        <button type="submit" className={`${buttons.button} ${buttons.primary}`}>Review message draft</button>
      </form>
      {draft && <section ref={preview} tabIndex={-1} className={s.preview} aria-labelledby="draft-title">
        <h3 id="draft-title">Review your draft</h3>
        <p className={s.draft}>{draft.body}</p>
        <p>Choose an app below, then send the message there. FATU.E.D has not received this draft. WhatsApp or an email app must be available on your device.</p>
        <div className={s.actions}>
          <LinkButton href={draft.whatsapp}>Open WhatsApp message</LinkButton>
          <LinkButton href={draft.email} variant="secondary">Open email draft</LinkButton>
        </div>
        <p className={s.help}>If an app does not open, copy the draft above and use the contact details on this page. You can edit the fields to prepare a new draft.</p>
      </section>}
    </div>
  );
}
