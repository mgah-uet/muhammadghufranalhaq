export type ExperienceSymbol = "transformer" | "breaker" | "disconnect";

export interface ExperienceEntry {
  id: string;
  company: string;
  role: string;
  start: string; // YYYY-MM
  end: string | null; // null = present
  location: string;
  symbol: ExperienceSymbol;
  summary: string;
  responsibilities: string[];
  projects: string[];
}

export const experience: ExperienceEntry[] = [
  {
    id: "pace",
    company: "Pace | Architecture, Engineering + Planning",
    role: "Electrical Design Engineer",
    start: "2021-10",
    end: null,
    location: "Hawalli, Kuwait",
    symbol: "transformer",
    summary:
      "Lead electrical design activities for commercial and residential high-rise buildings and mixed-use megaprojects, ensuring functional, effective, and code-compliant designs across disciplines.",
    responsibilities: [
      "Electrical space planning",
      "Preparation of single-line diagrams, transformer/generator/UPS selection",
      "Electrical load schedules, technical specifications, bill of quantities",
      "Estimation & costing of projects",
      "Capacitor bank, busbar & earthing calculations",
      "Cable sizing and cable tray calculations",
      "Lighting & emergency lighting calculations in DIALux Evo",
      "Load flow, voltage drop & short-circuit analysis in ETAP",
      "3D modelling and MEP coordination in Autodesk Revit",
    ],
    projects: [
      "Almoosa University and Schools, Al Hofuf, Saudi Arabia",
      "Kuwait University Health Sciences Campus, Al Shadadiya, Kuwait",
      "Aquellum (The Cube & Cube Marina), NEOM, Saudi Arabia",
      "Oxagon Research and Innovation Center, NEOM, Saudi Arabia",
      "Wadi AlFann, Al Ula, Saudi Arabia",
      "Jeddah Central Oceanarium and Coral Farm, Jeddah, Saudi Arabia",
      "Beautification of Mubarakiya Souks and Related Parking, Kuwait",
      "Jaber Al-Ahmad City J3 Mall, Kuwait",
      "Jaber Al-Ahmad City J2 Business Center and Retail Development, Kuwait",
      "Royal Saudi Air Defense Force (RSADF), Saudi Arabia",
      "Sabah Al Ahmed City S2 Logistics and Distribution District, Kuwait",
      "Fahd Al-Salem Tower, Kuwait",
      "Faisal Tower, Kuwait",
    ],
  },
  {
    id: "faddan",
    company: "Faddan General Trading & Contracting Co. W.L.L.",
    role: "Electrical Maintenance Engineer (Electrical Supervisor)",
    start: "2018-04",
    end: "2021-10",
    location: "Ahmadi, Kuwait",
    symbol: "breaker",
    summary:
      "Electrical & Instrumentation Maintenance of the New Ahmadi Hospital and residential buildings for Kuwait Oil Company (KOC).",
    responsibilities: [
      "Preparation & submission of daily, weekly & monthly reports",
      "Follow-up on maintenance requests from the Medical Facility Services Team (MFST)",
      "Assigning duties to foremen and supervising technical teams",
      "Contacting subcontractors for maintenance of generators, UPS, and elevators",
      "Preventive maintenance & routine checks of substations, generators, transformers, relay/control panels, switchboards, 110V DC battery chargers and battery rooms",
    ],
    projects: ["New KOC Ahmadi Hospital & Residential Buildings, Ahmadi, Kuwait"],
  },
  {
    id: "kcpc-estimation",
    company: "Kuwait Company for Process Plant Construction & Contracting (KCPC)",
    role: "Electrical Estimation Engineer",
    start: "2017-06",
    end: "2018-04",
    location: "Shuwaikh, Kuwait",
    symbol: "breaker",
    summary: "Tender review and cost estimation for electrical scopes of work.",
    responsibilities: [
      "Reviewed draft tender documents to ensure all systems/components were included",
      "Reviewed system drawings against tender requirements and raised technical queries",
      "Studied tender documents, scope of work, drawings, BOQ, and specifications for estimating",
      "Prepared and sent RFQs to approved suppliers/subcontractors",
      "Evaluated supplier/subcontractor quotations against tender requirements",
      "Prepared price comparison sheets and final cost summaries",
    ],
    projects: [],
  },
  {
    id: "kcpc-site",
    company: "Kuwait Company for Process Plant Construction & Contracting (KCPC)",
    role: "Electrical Site Engineer",
    start: "2016-01",
    end: "2017-05",
    location: "Ahmadi, Kuwait",
    symbol: "breaker",
    summary:
      "Construction of the EQUATE New Headquarters Building & Carpark for EQUATE Petrochemical Company. Also served as Acting Senior Electrical Engineer, 21 Jun 2016 – 24 Jul 2016.",
    responsibilities: [
      "Assigned duties to foremen and supervised technical teams",
      "Inspected and verified materials delivered to site store against orders",
      "Attended project coordination meetings to resolve site work issues",
      "Prepared and submitted shop drawings with schedules and voltage-drop calculations for consultant approval",
      "Prepared daily and weekly progress reports and material/work inspection requests",
    ],
    projects: ["EQUATE New Headquarters Building & Carpark, Ahmadi, Kuwait"],
  },
  {
    id: "freelancer",
    company: "Freelancer.com",
    role: "Freelance Electrical Engineer",
    start: "2015-01",
    end: "2015-12",
    location: "Remote / Kuwait",
    symbol: "disconnect",
    summary:
      "Completed various electrical engineering projects, simulations, and assignments, including thesis reports, PCB layouts, posters, and logo designs.",
    responsibilities: [],
    projects: [],
  },
];
