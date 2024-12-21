import { TeamMember } from "../../../types/team";
import { TeamSection } from "../../../components/TeamSection";

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Lead Designer",
    bio: "Alice is a creative powerhouse with over 10 years of experience in UI/UX design.",
    avatar: "/placeholder.svg?height=100&width=100",
    details: [
      {
        title: "Expertise",
        content: "UI/UX Design, Brand Identity, Design Systems",
      },
      {
        title: "Education",
        content: "MFA in Design, Rhode Island School of Design",
      },
      { title: "Hobbies", content: "Photography, Hiking, Painting" },
    ],
  },
  {
    id: 2,
    name: "Bob Smith",
    role: "Senior Developer",
    bio: "Bob is a full-stack developer with a passion for creating scalable web applications.",
    avatar: "/placeholder.svg?height=100&width=100",
    details: [
      { title: "Expertise", content: "React, Node.js, GraphQL, AWS" },
      { title: "Education", content: "BS in Computer Science, MIT" },
      {
        title: "Hobbies",
        content: "Rock Climbing, Chess, Open Source Contributing",
      },
    ],
  },
  {
    id: 3,
    name: "Carol Martinez",
    role: "Product Manager",
    bio: "Carol excels at bridging the gap between technical and business stakeholders.",
    avatar: "/placeholder.svg?height=100&width=100",
    details: [
      {
        title: "Expertise",
        content: "Agile Methodologies, Data Analysis, Strategic Planning",
      },
      { title: "Education", content: "MBA, Harvard Business School" },
      { title: "Hobbies", content: "Yoga, Cooking, Travel" },
    ],
  },
];

export default function Page() {
  return <TeamSection teamMembers={teamMembers} />;
}
