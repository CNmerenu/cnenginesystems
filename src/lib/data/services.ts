export interface Service {
  id: string;
  title: string;
  slug: string;
  description: string;
  icon: string;
  features: string[];
}

export const services: Service[] = [
  {
    id: "1",
    title: "Engineering Services",
    slug: "engineering",
    description: "Comprehensive engineering design, feasibility studies, and technical consultation for industrial and commercial projects.",
    icon: "🔧",
    features: ["Feasibility studies", "System design", "Technical documentation", "Compliance approvals"],
  },
  {
    id: "2",
    title: "Procurement Services",
    slug: "procurement",
    description: "Strategic sourcing and procurement management ensuring quality equipment at competitive prices with reliable delivery.",
    icon: "📦",
    features: ["Equipment sourcing", "Price negotiation", "Quality verification", "Logistics coordination"],
  },
  {
    id: "3",
    title: "Installation Services",
    slug: "installation",
    description: "Professional installation and commissioning services with certified technicians and project management expertise.",
    icon: "⚙️",
    features: ["Site preparation", "Equipment installation", "System integration", "Testing and commissioning"],
  },
  {
    id: "4",
    title: "Maintenance & Support",
    slug: "maintenance",
    description: "Preventive and corrective maintenance programs to maximize equipment uptime and extend operational life.",
    icon: "🔨",
    features: ["Preventive maintenance", "Emergency response", "24/7 support", "Spare parts management"],
  },
];
