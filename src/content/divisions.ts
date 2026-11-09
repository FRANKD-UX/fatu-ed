export const divisions = [
  {
    id: "01",
    name: "FATU.E.D General Trading",
    short: "General Trading",
    href: "/general-trading",
    label: "Reliability in business",
    slogan: "Delivery in your time.",
    description:
      "Reliable products and trading services, with a commitment to quality and customer satisfaction.",
    cta: "Explore General Trading",
    tone: "trading",
  },
  {
    id: "02",
    name: "FATU.E.D Designs",
    short: "Fashion & Design",
    href: "/designs",
    label: "Creativity in every stitch",
    slogan: "Get what you order. No disappointments.",
    description:
      "Custom-made clothing, ladies’ fashion, church choir uniforms, alterations, garment production and millinery.",
    supporting:
      "With 26 years of sewing and garment production experience, we believe every customer deserves quality workmanship and exactly what they ordered.",
    cta: "Explore Our Designs",
    tone: "designs",
  },
  {
    id: "03",
    name: "F.E.D Old School Academy",
    short: "Empowerment & Development",
    href: "/academy",
    label: "A vision for tomorrow",
    slogan: "Learn the skill. Master the craft. Create your future.",
    description:
      "A vision to preserve traditional sewing craftsmanship while equipping people with practical garment-making skills.",
    supporting:
      "Our goal is to create a learning environment where students can develop confidence, creativity and skills for future opportunities.",
    cta: "Discover the Academy",
    tone: "academy",
    future: true,
  },
] as const;
// These descriptions expand only the service names supplied in the client content.
export const designServices = [
  {
    title: "Custom-made clothing",
    description:
      "Clothing made around your requirements. Share the garment you have in mind, your measurements and any reference photographs so the details can be discussed.",
  },
  {
    title: "Ladies’ fashion",
    description:
      "Ladies’ clothing with attention to design, fit and finishing. Discuss the style and garment details you would like to create.",
  },
  {
    title: "Church choir uniforms",
    description:
      "Garments for church choirs. Start with your choir’s design ideas, measurements and quantities to discuss a coordinated uniform.",
  },
  {
    title: "Alterations and repairs",
    description:
      "Discuss adjustments or repairs to an existing garment. The work required can be reviewed before arrangements and a quotation are confirmed.",
  },
  {
    title: "Garment production",
    description:
      "Garment-making enquiries based on your design and quantity requirements. Production details and arrangements are discussed directly with the business.",
  },
  {
    title: "Church hats and millinery",
    description:
      "Church hats and millinery enquiries. Share your ideas and references to discuss the design you would like to commission.",
  },
] as const;

// No product catalogue, named sectors or supply contracts have been supplied.
export const trading = {
  introduction:
    "General Trading is part of FATU.E.D’s business in Mdantsane, East London. Contact us with a product or service requirement so we can review your enquiry and discuss what we can provide.",
  enquiries: [
    {
      title: "Product and service enquiries",
      description:
        "Tell us what you need, including relevant specifications and quantities. We will review the request with you before confirming an offering.",
    },
    {
      title: "Quotation discussions",
      description:
        "Discuss your requirements with the business to confirm a quotation, availability and any collection or delivery arrangements.",
    },
    {
      title: "Business opportunities",
      description:
        "Introduce your business and the opportunity you would like to discuss. We welcome a conversation about how we may work together.",
    },
  ],
  enquiryChecklist: [
    "The product or service you are looking for",
    "Relevant specifications and quantities",
    "Any questions about availability, collection or delivery",
    "Your name and preferred contact details",
  ],
  availability:
    "Product ranges, availability and delivery arrangements are confirmed directly with the business for each enquiry. A product catalogue and sector-specific offering are not currently published.",
} as const;

export const orderSteps = [
  "Contact us through WhatsApp to begin your enquiry.",
  "Describe your design requirements.",
  "Share your design ideas, measurements and inspiration photographs.",
  "We review your requirements and supply a quotation.",
  "After confirmation, we discuss production and collection or delivery arrangements.",
];
export const academy = {
  purpose:
    "F.E.D Old School Academy is a proposed initiative for practical sewing and garment-making skills. The concept brings together traditional craftsmanship, hands-on learning and Fatima Mugaro’s ambition to share the knowledge behind her work.",
  learningAreas: [
    {
      title: "Sewing foundations",
      description:
        "Introduction to sewing and machine operation, hand sewing and basic stitching techniques.",
    },
    {
      title: "Measurements and patterns",
      description:
        "Taking body measurements, pattern drafting and understanding garment construction.",
    },
    {
      title: "Fabrics and cutting",
      description:
        "Fabric identification and selection, cutting techniques and preparing fabric for garment-making.",
    },
    {
      title: "Production techniques",
      description:
        "Industrial sewing and overlocking, with practical garment production as part of the proposed learning approach.",
    },
    {
      title: "Fit and finishing",
      description:
        "Garment fitting, finishing and alterations, with attention to each stage of the making process.",
    },
    {
      title: "Design and enterprise",
      description:
        "Creative design and an introduction to fashion entrepreneurship, connecting practical skills with future possibilities.",
    },
  ],
  notice:
    "The academy is a future development project. Training programmes and student enrolment will be announced when the academy is ready. It is not currently operating or accepting enrolments.",
  mission:
    "To provide practical sewing education, develop creative talent, preserve traditional garment-making knowledge and empower individuals with skills that can create opportunities and sustainable livelihoods.",
  vision:
    "To establish a practical sewing and garment-production academy that preserves traditional craftsmanship while equipping students with valuable skills for employment, entrepreneurship and self-reliance.",
};
