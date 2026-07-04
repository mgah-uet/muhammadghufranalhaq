export type ProjectCategory = "design" | "site";

export interface DesignProject {
  id: string;
  name: string;
  location: string;
  category: "design";
  description: string;
}

export interface FlagshipProject {
  id: string;
  name: string;
  location: string;
  category: "site";
  client: string;
  consultant?: string;
  projectManagement?: string;
  mainContractor?: string;
  electricalContractor?: string;
  valueTotal?: string;
  valueElectrical: string;
  duration: string;
  image: string;
  description: string;
}

export type Project = DesignProject | FlagshipProject;

export const designProjects: DesignProject[] = [
  {
    id: "almoosa",
    name: "Almoosa University and Schools",
    location: "Al Hofuf, Saudi Arabia",
    category: "design",
    description: "Full electrical design for a university campus and schools complex.",
  },
  {
    id: "kuwait-uni-health",
    name: "Kuwait University Health Sciences Campus",
    location: "Al Shadadiya, Kuwait",
    category: "design",
    description: "Electrical systems design for a health sciences academic campus.",
  },
  {
    id: "aquellum",
    name: "Aquellum — The Cube & Cube Marina",
    location: "NEOM, Saudi Arabia",
    category: "design",
    description: "Landmark mixed-use development — electrical design for The Cube and marina facilities.",
  },
  {
    id: "oxagon",
    name: "Oxagon Research and Innovation Center",
    location: "NEOM, Saudi Arabia",
    category: "design",
    description: "Electrical design for a research and innovation campus at NEOM.",
  },
  {
    id: "wadi-alfann",
    name: "Wadi AlFann",
    location: "Al Ula, Saudi Arabia",
    category: "design",
    description: "Cultural arts destination — electrical infrastructure design.",
  },
  {
    id: "jeddah-oceanarium",
    name: "Jeddah Central Oceanarium and Coral Farm",
    location: "Jeddah, Saudi Arabia",
    category: "design",
    description: "Specialist electrical design for an oceanarium and marine research facility.",
  },
  {
    id: "mubarakiya",
    name: "Beautification of Mubarakiya Souks & Related Parking",
    location: "Kuwait",
    category: "design",
    description: "Electrical upgrade and beautification design for Kuwait's historic Mubarakiya market.",
  },
  {
    id: "j3-mall",
    name: "Jaber Al-Ahmad City J3 Mall",
    location: "Kuwait",
    category: "design",
    description: "Full electrical engineering design for a large retail mall.",
  },
  {
    id: "j2-business",
    name: "Jaber Al-Ahmad City J2 Business Center & Retail",
    location: "Kuwait",
    category: "design",
    description: "Electrical design for a mixed-use business center and retail development.",
  },
  {
    id: "rsadf",
    name: "Royal Saudi Air Defense Force (RSADF)",
    location: "Saudi Arabia",
    category: "design",
    description: "Electrical systems design for defense facilities.",
  },
  {
    id: "sabah-s2",
    name: "Sabah Al Ahmed City S2 Logistics & Distribution District",
    location: "Kuwait",
    category: "design",
    description: "Electrical engineering for a major logistics and distribution complex.",
  },
  {
    id: "fahd-tower",
    name: "Fahd Al-Salem Tower",
    location: "Kuwait",
    category: "design",
    description: "High-rise tower electrical design — SLDs, load schedules, and MEP coordination.",
  },
  {
    id: "faisal-tower",
    name: "Faisal Tower",
    location: "Kuwait",
    category: "design",
    description: "Residential high-rise electrical design including power and lighting systems.",
  },
];

export const flagshipProjects: FlagshipProject[] = [
  {
    id: "koc-ahmadi-hospital",
    name: "New KOC Ahmadi Hospital",
    location: "Ahmadi, Kuwait",
    category: "site",
    client: "Kuwait Oil Company",
    electricalContractor: "Faddan General Trading & Cont. Co.",
    valueElectrical: "KD 4.1 million",
    duration: "March 2018 – February 2022",
    image: "/projects/koc-new-ahmadi-hospital.png",
    description:
      "Electrical & instrumentation maintenance of a fully operational hospital and residential complex serving KOC staff and dependants.",
  },
  {
    id: "chest-diseases-hospital",
    name: "Chest Diseases Hospital Extension",
    location: "Sabah Health Region, Kuwait",
    category: "site",
    client: "State of Kuwait, Ministry of Health",
    consultant: "Gulf Consult",
    projectManagement: "Sand and Steel Project Management",
    electricalContractor: "Al-Mailam & Al-Shaalan Co.",
    valueTotal: "KD 8.1 million",
    valueElectrical: "KD 0.925 million",
    duration: "June 2017 – December 2018",
    image: "/projects/chest-diseases-hospital-extension.png",
    description:
      "Electrical site engineering for the extension of a specialist chest diseases hospital under the Ministry of Health.",
  },
  {
    id: "equate-hq",
    name: "EQUATE New Headquarters",
    location: "Ahmadi, Kuwait",
    category: "site",
    client: "EQUATE Petrochemical Company",
    consultant: "Gulf Consult",
    mainContractor: "KCPC",
    valueTotal: "KD 11 million",
    valueElectrical: "KD 2.2 million",
    duration: "May 2015 – May 2017",
    image: "/projects/equate-new-headquarters.png",
    description:
      "Electrical site engineer for a flagship headquarters building for one of Kuwait's largest petrochemical companies.",
  },
];
