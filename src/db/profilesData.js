import Image1 from "../assets/plumbing/plumber1.jpg";

import Image2 from "../assets/plumbing/plumber1.jpg";
import Image3 from "../assets/plumbing/plumber2.jpg";
import Image4 from "../assets/plumbing/plumber3.jpg";
import Image5 from "../assets/plumbing/plumber4.jpg";
import Image6 from "../assets/plumbing/plumber1.jpg";
import Image7 from "../assets/plumbing/plumber2.jpg";
import Image8 from "../assets/plumbing/plumber4.jpg";
import Image9 from "../assets/plumbing/plumber3.jpg";
import Image10 from "../assets/plumbing/plumber3.jpg";
import Image11 from "../assets/plumbing/plumber1.jpg";
import Image12 from "../assets/plumbing/plumber4.jpg";

const profilesData = {
  mechanics: [
    {
      id: 1,
      professional_name: "John Doe",
      rating: 4.5,
      gig_short: "I will repair and maintain your vehicle with precision.",
      image: "mechanic1.jpeg",
      distance: 2.5 + " km",
      price: 200 + " INR",
      phone: 1234567890,
    },
    {
      id: 2,
      professional_name: "Jane Smith",
      rating: 4.2,
      gig_short: "I specialize in engine diagnostics and repairs.",
      image: "mechanic2.jpeg",

      distance: 3.5 + " km",
      price: 250 + " INR",
      phone: 9087654321,
    },
    {
      id: 3,
      professional_name: "Mike Johnson",
      rating: 4.7,
      gig_short: "Experienced mechanic for all types of vehicles.",
      image: "mechanic3.jpeg",
      distance: 1.5 + " km",
      price: 150 + " INR",
      phone: 6789012345,
    },
    {
      id: 4,
      professional_name: "Emma Brown",
      rating: 4.6,
      gig_short: "Car maintenance and repair services.",
      image: "mechanic4.jpeg",
      distance: 4.5 + " km",
      price: 300 + " INR",
      phone: 8901234567,
    },
  ],
  plumbing: [
    {
      id: 1,
      professional_name: "Yvan Kwame",
      rating: 4.8,
      gig_short: "I will help you out with everything plumbing.",
      image: Image1,
      distance: 2.5 + " km",
      price: 200 + " INR",
      phone: 7890123456,
    },
    {
      id: 2,
      professional_name: "Adeola Okoye",
      rating: 2.1,
      gig_short: "I will help you out with everything plumbing.",
      image: Image2,
      distance: 3.5 + " km",
      price: 250 + " INR",
      phone: 8901234567,
    },
    {
      id: 3,
      professional_name: "Binta Kone",
      rating: 4.0,
      gig_short: "Expert in residential and commercial plumbing.",
      image: Image3,
      distance: 1.5 + " km",
      price: 150 + " INR",
      phone: 6789012345,
    },
    {
      id: 4,
      professional_name: "Chidi Nwankwo",
      rating: 3.9,
      gig_short: "Affordable plumbing services for your home.",
      image: Image4,
      distance: 4.5 + " km",
      price: 300 + " INR",
      phone: 8901234567,
    },
  ],
  painting: [
    {
      id: 1,
      professional_name: "Emily Clark",
      rating: 4.7,
      gig_short: "I will paint your house beautifully.",
      image: "painting1.jpeg",
    },
    {
      id: 2,
      professional_name: "Michael Brown",
      rating: 4.3,
      gig_short: "Interior and exterior painting services.",
      image: "painting2.jpeg",
    },
    {
      id: 3,
      professional_name: "James White",
      rating: 4.5,
      gig_short: "Quality painting services for your home.",
      image: "painting3.jpeg",
    },
    {
      id: 4,
      professional_name: "Olivia Harris",
      rating: 4.6,
      gig_short: "Professional painting at affordable prices.",
      image: "painting4.jpeg",
    },
  ],
  carpentry: [
    {
      id: 1,
      professional_name: "Chris Johnson",
      rating: 4.9,
      gig_short: "Custom carpentry services for all your needs.",
      image: "carpentry1.jpeg",
    },
    {
      id: 2,
      professional_name: "Patricia Davis",
      rating: 4.4,
      gig_short: "Expert carpenter for furniture and fittings.",
      image: "carpentry2.jpeg",
    },
    {
      id: 3,
      professional_name: "Mark Evans",
      rating: 4.6,
      gig_short: "High-quality carpentry services.",
      image: "carpentry3.jpeg",
    },
    {
      id: 4,
      professional_name: "Linda Moore",
      rating: 4.5,
      gig_short: "Professional and affordable carpentry.",
      image: "carpentry4.jpeg",
    },
  ],
  electricity: [
    {
      id: 1,
      professional_name: "Tom Wilson",
      rating: 4.6,
      gig_short: "Certified electrician for home and office.",
      image: "electricity1.jpeg",
    },
    {
      id: 2,
      professional_name: "Sarah Lee",
      rating: 4.2,
      gig_short: "Electrical repairs and installations.",
      image: "electricity2.jpeg",
    },
    {
      id: 3,
      professional_name: "Brian Martinez",
      rating: 4.4,
      gig_short: "Expert in electrical services.",
      image: "electricity3.jpeg",
    },
    {
      id: 4,
      professional_name: "Laura Anderson",
      rating: 4.7,
      gig_short: "Reliable and affordable electrical work.",
      image: "electricity4.jpeg",
    },
  ],
  waterproofing: [
    {
      id: 1,
      professional_name: "Peter King",
      rating: 4.5,
      gig_short: "Waterproofing solutions for your home.",
      image: "waterproofing1.jpeg",
    },
    {
      id: 2,
      professional_name: "Nina Adams",
      rating: 4.3,
      gig_short: "Professional waterproofing services.",
      image: "waterproofing2.jpeg",
    },
    {
      id: 3,
      professional_name: "Michael Brooks",
      rating: 4.6,
      gig_short: "Expert in waterproofing your property.",
      image: "waterproofing3.jpeg",
    },
    {
      id: 4,
      professional_name: "Rachel Scott",
      rating: 4.7,
      gig_short: "Reliable and affordable waterproofing.",
      image: "waterproofing4.jpeg",
    },
  ],
  electronics: [
    {
      id: 1,
      professional_name: "Steve Roberts",
      rating: 4.8,
      gig_short: "Expert in electronic repairs and installations.",
      image: "electronics1.jpeg",
    },
    {
      id: 2,
      professional_name: "Linda Scott",
      rating: 4.5,
      gig_short: "Electronics technician for all your needs.",
      image: "electronics2.jpeg",
    },
    {
      id: 3,
      professional_name: "John Carter",
      rating: 4.7,
      gig_short: "Professional electronics repair services.",
      image: "electronics3.jpeg",
    },
    {
      id: 4,
      professional_name: "Susan Bell",
      rating: 4.6,
      gig_short: "Affordable and reliable electronics repair.",
      image: "electronics4.jpeg",
    },
  ],

  "air conditioning": [
    {
      id: 1,
      professional_name: "Brian Garcia",
      rating: 4.7,
      gig_short: "HVAC services for your comfort.",
      image: "hvac1.jpeg",
    },
    {
      id: 2,
      professional_name: "Laura Rodriguez",
      rating: 4.4,
      gig_short: "Heating and cooling system expert.",
      image: "hvac2.jpeg",
    },
    {
      id: 3,
      professional_name: "John Walker",
      rating: 4.6,
      gig_short: "Reliable HVAC installation and repair.",
      image: "hvac3.jpeg",
    },
    {
      id: 4,
      professional_name: "Emily Thompson",
      rating: 4.5,
      gig_short: "Professional HVAC services.",
      image: "hvac4.jpeg",
    },
  ],
  sanitation: [
    {
      id: 1,
      professional_name: "Charles Lewis",
      rating: 4.8,
      gig_short: "Sanitation services for homes and offices.",
      image: "sanitation1.jpeg",
    },
    {
      id: 2,
      professional_name: "Barbara Walker",
      rating: 4.5,
      gig_short: "Professional sanitation and cleaning services.",
      image: "sanitation2.jpeg",
    },
    {
      id: 3,
      professional_name: "James King",
      rating: 4.7,
      gig_short: "Expert in sanitation and waste management.",
      image: "sanitation3.jpeg",
    },
    {
      id: 4,
      professional_name: "Susan Young",
      rating: 4.6,
      gig_short: "Reliable and affordable sanitation services.",
      image: "sanitation4.jpeg",
    },
    {
      id: 5,
      professional_name: "David Wright",
      rating: 4.4,
      gig_short: "Sanitation services for a clean environment.",
      image: "sanitation5.jpeg",
    },
    {
      id: 6,
      professional_name: "Jessica Hall",
      rating: 4.2,
      gig_short: "Professional and thorough sanitation.",
      image: "sanitation6.jpeg",
    },
    {
      id: 7,
      professional_name: "Michael Green",
      rating: 4.3,
      gig_short: "Expert in home and office sanitation.",
      image: "sanitation7.jpeg",
    },
  ],
};

export default profilesData;
