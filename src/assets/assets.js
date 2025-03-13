import Logo from "./Logo.png";
import Profile from "./profile.jpeg";
import Founder1 from "./founder1.jpg";
import Founder2 from "./founder2.jpg";

import Step from "./step.png";
import Warranty from "./warranty.webp";
import Agreement from "./Agreement.png";
import GettheDeal from "./getthedeal.png";
import GoodDeal from "./GoodDeal.jpg";
import Illustration from "./illustration.png";



import Image1 from "./mechanic.png";
import Image2 from "./plumbing.png";
import Image3 from "./painting.png";
import Image4 from "./carpentry.png";
import Image5 from "./electricity.avif";
import Image6 from "./waterproofing.jpeg";
import Image7 from "./Locksmithing.jpeg";
import Image8 from "./AirConditioning.png";
import Image9 from "./sanitation.webp";
import Image10 from "./SecuritySystems.jpeg";



import carpenter1 from "./carpentry/carpenter1.jpg";
import carpenter2 from "./carpentry/carpenter2.jpg";
import carpenter3 from "./carpentry/carpenter3.jpg";
import carpenter4 from "./carpentry/carpenter4.jpg";

import plumber1 from "./plumbing/plumber1.jpg";
import plumber2 from "./plumbing/plumber2.jpg";
import plumber3 from "./plumbing/plumber3.jpg";
import plumber4 from "./plumbing/plumber4.jpg";


import mechanic1 from "./mechanic/mechanic1.jpg";
import mechanic2 from "./mechanic/mechanic2.jpg";
import mechanic3 from "./mechanic/mechanic3.jpg";
import mechanic4 from "./mechanic/mechanic4.jpg";


import electrician1 from "./electrician/electrician1.jpg";
import electrician2 from "./electrician/electrician2.jpg";
import electrician3 from "./electrician/electrician3.jpg";
import electrician4 from "./electrician/electrician4.jpg";

import painter1 from "./painter/painter1.jpg";
import painter2 from "./painter/painter2.jpg";
import painter3 from "./painter/painter3.jpg";
import painter4 from "./painter/painter4.jpg";

import plumber11 from "../assets/plumbing/plumber11.jpeg";
import plumber22 from "../assets/plumbing/plumber22.jpeg";
import plumber33 from "../assets/plumbing/plumber33.jpeg";
import plumber44 from "../assets/plumbing/plumber44.jpeg";

export const assets = {
  Logo,
  Profile,
  Founder1,
  Founder2,
  Step,
  Warranty,
  Agreement,
  GettheDeal,
  GoodDeal,
  Illustration,
};


export const serviceData = [
  {
    id: 1,
    service: "mechanics",
    image: Image1,
  },
  {
    id: 2,
    service: "plumbing",
    image: Image2,
  },
  {
    id: 3,
    service: "painting",
    image: Image3,
  },
  {
    id: 4,
    service: "carpentry",
    image: Image4,
  },
  {
    id: 5,
    service: "electricity",
    image: Image5,
  },

  {
    id: 6,
    service: "Air Conditioning",
    image: Image9,
  },
  {
    id: 7,
    service: "sanitation",
    image: Image10,
  },
  
];



export const serviceRelatedImageData = {
  mechanics: [
    {
      id: 1,
      image: plumber11,
      repair_short: "",
    },
    {
      id: 2,
      image: "image 02",
      repair_short: "",
    },
    {
      id: 3,
      image: "image 03",
      repair_short: "",
    },
    {
      id: 4,
      image: "image 04",
      repair_short: "",
    },
  ],
  plumbing: [
    {
      id: 1,
      image: plumber11,
      repair_short: "Fixing leaking and broken pipes",
    },
    {
      id: 2,
      image: Image2,
      repair_short: "Fixing Leaking sink",
    },
    {
      id: 3,
      image: plumber11,
      repair_short: "Repairing sink and relatives",
    },
    {
      id: 4,
      image: plumber11,
      repair_short: "Shower repairing",
    },
  ],
  painting: [
    {
      id: 1,
      image: plumber11,
      repair_short: "",
    },
    {
      id: 2,
      image: plumber11,
      repair_short: "",
    },
    {
      id: 3,
      image: plumber11,
      repair_short: "",
    },
    {
      id: 4,
      image: plumber11,
      repair_short: "",
    },
  ],
  charpentry: [
    {
      id: 1,
      image: plumber11,
      repair_short: "",
    },
    {
      id: 2,
      image: plumber11,
      repair_short: "",
    },
    {
      id: 3,
      image: plumber11,
      repair_short: "",
    },
    {
      id: 4,
      image: plumber11,
      repair_short: "",
    },
  ],
  electricity: [
    {
      id: 1,
      image: plumber11,
      repair_short: "",
    },
    {
      id: 2,
      image: plumber11,
      repair_short: "",
    },
    {
      id: 3,
      image: plumber11,
      repair_short: "",
    },
    {
      id: 4,
      image: plumber11,
      repair_short: "",
    },
  ],
 
};


export const domainServiceData = [
  {
    id: 1,
    image: Image1,
    service_type: "Furniture Repair",
    services_list: [
      "Fixing broken chairs, tables, and cabinets.",
      "Refinishing and restoring antique furniture.",
      "Replacing damaged parts like legs, arms, or drawers.",
    ],
  },
  {
    id: 2,
    image: Image2,
    service_type: "Door and Window Repair",
    services_list: [
      "Repairing or replacing door frames and window sills.",
      "Fixing sticking or squeaky doors and windows.",
      "Installing new locks, hinges, and handles.",
    ],
  },
  {
    id: 3,
    image: Image3,
    service_type: "Floor Repair",
    services_list: [
      "Repairing or replacing damaged floorboards.",
      "Refinishing and sanding hardwood floors.",
      "Fixing creaky or uneven floors.",
    ],
  },
  {
    id: 4,
    image: Image4,
    service_type: "Cabinet Repair",
    services_list: [
      "Repairing kitchen and bathroom cabinets.",
      "Replacing broken cabinet doors, hinges, and handles.",
      "Refacing or refinishing cabinets.",
    ],
  },
  {
    id: 5,
    image: Image5,
    service_type: "Deck and Patio Repair",
    services_list: [
      "Fixing broken or loose deck boards.",
      "Repairing or replacing railings and stairs.",
      "Staining and sealing wooden decks.",
    ],
  },
  {
    id: 6,
    image: Image6,
    service_type: "Trim and Molding Repair",
    services_list: [
      "Repairing or replacing damaged crown molding, baseboards, and wainscoting.",
      "Installing new trim around windows and doors.",
      "Refinishing or repainting trim and molding.",
    ],
  },
  {
    id: 7,
    image: Image7,
    service_type: "Shelving and Storage Repair",
    services_list: [
      "Fixing or installing built-in shelves and bookcases.",
      "Repairing closet systems and organizers.",
      "Customizing and repairing storage solutions.",
    ],
  },
  {
    id: 8,
    image: Image8,
    service_type: "Structural Repairs",
    services_list: [
      "Reinforcing or replacing wooden beams and joists.",
      "Fixing sagging or damaged roofs and ceilings.",
      "Addressing issues with wooden supports and framework.",
    ],
  },
  {
    id: 9,
    image: Image9,
    service_type: "Staircase Repair",
    services_list: [
      "Repairing or replacing damaged steps, risers, and treads.",
      "Fixing loose or creaky stairs.",
      "Refinishing and staining staircases.",
    ],
  },
  {
    id: 10,
    image: Image10,
    service_type: "Wooden Fence Repair",
    services_list: [
      "Repairing or replacing damaged fence panels and posts.",
      "Fixing gates and latches.",
      "Staining or painting wooden fences.",
    ],
  },
  {
    id: 11,
    image: Image1,
    service_type: "Siding and Exterior Wood Repair",
    services_list: [
      "Repairing or replacing wooden siding.",
      "Fixing exterior trim and fascia boards.",
      "Addressing issues with wooden shutters and decorative elements.",
    ],
  },
  {
    id: 12,
    image: Image2,
    service_type: "Custom Carpentry Repairs",
    services_list: [
      "Creating custom solutions for unique repair needs.",
      "Building and repairing custom furniture pieces.",
      "Designing and fixing bespoke wooden structures and installations.",
    ],
  },
];