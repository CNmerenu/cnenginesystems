import { LucideIcon } from "lucide-react";
import {
  Wrench,
  Package,
  Settings,
  Drill,
  HeartHandshake,
  FolderKanban,
} from "lucide-react";

export interface Service {
  id: string;
  title: string;
  icon: LucideIcon;
  slug: string;
  description: string;
  features: string[];
  content: {
    overview: string;
    approach: string;
    industries: string[];
    image: string;
  };
}

export const services: Service[] = [
  {
    id: "1",
    title: "Engineering Services",
    icon: Wrench,
    slug: "engineering",
    description:
      "Comprehensive engineering design, feasibility studies, and technical consultation for industrial and commercial projects.",
    features: [
      "Feasibility studies",
      "System design",
      "Technical documentation",
      "Compliance approvals",
    ],
    content: {
      overview:
        "Our engineering services encompass the complete spectrum of technical design and consultation for industrial and commercial projects. From initial concept development to detailed engineering drawings, we provide comprehensive solutions that meet international standards and local regulations.",
      approach:
        "We employ a systematic approach to engineering design, beginning with thorough site assessments and feasibility studies. Our team of certified engineers utilizes cutting-edge CAD software and simulation tools to develop optimal solutions that balance performance, cost-effectiveness, and sustainability.",
      industries: [
        "Manufacturing",
        "Oil & Gas",
        "Power Generation",
        "Water Treatment",
        "Commercial Buildings",
        "Industrial Facilities",
      ],
      image: "/images/engineering-services.jpg",
    },
  },
  {
    id: "2",
    title: "Procurement Services",
    icon: Package,
    slug: "procurement",
    description:
      "Strategic sourcing and procurement management ensuring quality equipment at competitive prices with reliable delivery.",

    features: [
      "Equipment sourcing",
      "Price negotiation",
      "Quality verification",
      "Logistics coordination",
    ],
    content: {
      overview:
        "Our procurement services leverage extensive supplier networks and industry expertise to source high-quality equipment and materials at competitive prices. We manage the entire procurement lifecycle, from specification development to delivery coordination.",
      approach:
        "We maintain strategic partnerships with leading manufacturers and suppliers across Nigeria and internationally. Our procurement specialists conduct rigorous vendor evaluations, negotiate favorable terms, and implement quality assurance protocols to guarantee all procured items meet project specifications.",
      industries: [
        "Heavy Machinery",
        "Electrical Equipment",
        "HVAC Systems",
        "Industrial Tools",
        "Safety Equipment",
        "Spare Parts",
      ],
      image: "/images/logistics.jpg",
    },
  },
  {
    id: "3",
    title: "Installation Services",
    icon: Settings,
    slug: "installation",
    description:
      "Professional installation and commissioning services with certified technicians and project management expertise.",

    features: [
      "Site preparation",
      "Equipment installation",
      "System integration",
      "Testing and commissioning",
    ],
    content: {
      overview:
        "Our installation services combine technical expertise with project management excellence to deliver seamless equipment commissioning and system integration. Our certified technicians ensure installations meet manufacturer specifications.",
      approach:
        "We follow structured installation methodologies that prioritize safety, quality, and efficiency. Our teams conduct pre-installation planning, coordinate with other trades, and perform comprehensive testing and commissioning to ensure optimal system performance from day one.",
      industries: [
        "Industrial Equipment",
        "Power Systems",
        "HVAC Installation",
        "Control Systems",
        "Safety Systems",
        "Process Equipment",
      ],
      image: "/images/installation.jpg",
    },
  },
  {
    id: "4",
    title: "Maintenance & Support",
    icon: Drill,
    slug: "maintenance",
    description:
      "Preventive and corrective maintenance programs to maximize equipment uptime and extend operational life.",

    features: [
      "Preventive maintenance",
      "Emergency response",
      "24/7 support",
      "Spare parts management",
    ],
    content: {
      overview:
        "Our maintenance and support services maximize equipment uptime and extend operational life through proactive maintenance strategies. We offer comprehensive maintenance programs tailored to specific equipment types and operational requirements.",
      approach:
        "We implement condition-based maintenance strategies using advanced diagnostic tools and predictive analytics. Our maintenance programs include regular inspections, preventive maintenance schedules, emergency response protocols, and comprehensive documentation.",
      industries: [
        "Manufacturing Plants",
        "Power Facilities",
        "Commercial Buildings",
        "Industrial Equipment",
        "HVAC Systems",
        "Process Control",
      ],
      image: "/images/electrician.jpg",
    },
  },
  {
    id: "5",
    title: "Project Lifecycle Support",
    icon: HeartHandshake,
    slug: "project-lifecycle-support",
    description:
      "Comprehensive project lifecycle support from concept to completion, ensuring seamless execution at every stage.",

    features: ["Project Lifecycle", "Support", "Local Operations Management"],
    content: {
      overview:
        "We provide end-to-end support across the entire project lifecycle from initial concept and planning to execution, monitoring, and closure — ensuring quality, consistency, and success at every phase.",
      approach:
        "Our team applies structured methodologies, continuous stakeholder engagement, and proactive risk management to keep your projects aligned, efficient, and outcome-driven.",
      industries: [
        "Manufacturing",
        "Oil & Gas",
        "Power Generation",
        "Water Treatment",
        "Commercial Buildings",
        "Industrial Facilities",
      ],
      image: "/images/project-lifecycle-support.jpg",
    },
  },
  {
    id: "6",
    title: "Project Management",
    icon: FolderKanban,
    slug: "project-management",
    description:
      "Expert project management delivering clarity, control, and results from planning to delivery.",

    features: ["Project Management", "Strategy", "Efficiency"],
    content: {
      overview:
        "Our project management services deliver focus, coordination, and accountability to help organizations achieve project goals on time and within budget.",
      approach:
        "We combine proven frameworks with agile practices, transparent communication, and performance tracking to drive measurable results and sustainable success.",
      industries: [
        "Manufacturing",
        "Oil & Gas",
        "Power Generation",
        "Water Treatment",
        "Commercial Buildings",
        "Industrial Facilities",
      ],
      image: "/images/project-management.jpg",
    },
  },
];
