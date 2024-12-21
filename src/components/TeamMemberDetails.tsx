import { motion } from "framer-motion"
import { TeamMember } from "../types/team"
import { contentVariants } from "../utils/animations"

interface TeamMemberDetailsProps {
  member: TeamMember
}

export function TeamMemberDetails({ member }: TeamMemberDetailsProps) {
  return (
    <div className="col-span-2 p-6">
      <motion.h3
        className="text-2xl font-bold mb-2"
        variants={contentVariants}
        transition={{ delay: 0.2 }}
      >
        {member.name}
      </motion.h3>
      <motion.p
        className="text-lg text-muted-foreground mb-4"
        variants={contentVariants}
        transition={{ delay: 0.3 }}
      >
        {member.role}
      </motion.p>
      <motion.p
        className="mb-6"
        variants={contentVariants}
        transition={{ delay: 0.4 }}
      >
        {member.bio}
      </motion.p>
      {member.details.map((detail, index) => (
        <motion.div
          key={detail.title}
          className="mb-4"
          variants={contentVariants}
          transition={{ delay: 0.5 + index * 0.1 }}
        >
          <h4 className="font-semibold mb-1">{detail.title}</h4>
          <p className="text-sm text-muted-foreground">{detail.content}</p>
        </motion.div>
      ))}
    </div>
  )
}

