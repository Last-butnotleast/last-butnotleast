import { motion } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { TeamMember } from "../types/team"

interface TeamMemberAvatarProps {
  member: TeamMember
  isSelected: boolean
  onSelect: (member: TeamMember) => void
}

export function TeamMemberAvatar({ member, isSelected, onSelect }: TeamMemberAvatarProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Avatar
        className={`h-20 w-20 cursor-pointer transition-all duration-300 ease-in-out ${
          isSelected ? "ring-4 ring-primary" : ""
        }`}
        onClick={() => onSelect(member)}
      >
        <AvatarImage src={member.avatar} alt={member.name} />
        <AvatarFallback>{member.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
      </Avatar>
    </motion.div>
  )
}

