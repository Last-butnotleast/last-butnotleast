"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card, CardContent } from "@/components/ui/card"

interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  avatar: string
  details: {
    title: string
    content: string
  }[]
}

const teamMembers: TeamMember[] = [
  {
    id: 1,
    name: "Alice Johnson",
    role: "Lead Designer",
    bio: "Alice is a creative powerhouse with over 10 years of experience in UI/UX design.",
    avatar: "/placeholder.svg?height=100&width=100",
    details: [
      { title: "Expertise", content: "UI/UX Design, Brand Identity, Design Systems" },
      { title: "Education", content: "MFA in Design, Rhode Island School of Design" },
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
      { title: "Hobbies", content: "Rock Climbing, Chess, Open Source Contributing" },
    ],
  },
  {
    id: 3,
    name: "Carol Martinez",
    role: "Product Manager",
    bio: "Carol excels at bridging the gap between technical and business stakeholders.",
    avatar: "/placeholder.svg?height=100&width=100",
    details: [
      { title: "Expertise", content: "Agile Methodologies, Data Analysis, Strategic Planning" },
      { title: "Education", content: "MBA, Harvard Business School" },
      { title: "Hobbies", content: "Yoga, Cooking, Travel" },
    ],
  },
]

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null)

  const handleSelectMember = (member: TeamMember) => {
    setSelectedMember(member)
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
    exit: { opacity: 0 },
  }

  const contentVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>
      
      <div className="flex justify-center space-x-4 mb-12">
        {teamMembers.map((member) => (
          <motion.div
            key={member.id}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <Avatar
              className={`h-20 w-20 cursor-pointer transition-all duration-300 ease-in-out ${
                selectedMember?.id === member.id ? "ring-4 ring-primary" : ""
              }`}
              onClick={() => handleSelectMember(member)}
            >
              <AvatarImage src={member.avatar} alt={member.name} />
              <AvatarFallback>{member.name.split(" ").map((n) => n[0]).join("")}</AvatarFallback>
            </Avatar>
          </motion.div>
        ))}
      </div>

      <AnimatePresence mode="wait">
        {selectedMember && (
          <motion.div
            key={selectedMember.id}
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            transition={{ duration: 0.3 }}
          >
            <Card className="w-full max-w-4xl mx-auto overflow-hidden">
              <CardContent className="p-0">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  <motion.div
                    className="col-span-1 h-full"
                    variants={contentVariants}
                    transition={{ delay: 0.1 }}
                  >
                    <img
                      src={selectedMember.avatar}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                  </motion.div>
                  <div className="col-span-2 p-6">
                    <motion.h3
                      className="text-2xl font-bold mb-2"
                      variants={contentVariants}
                      transition={{ delay: 0.2 }}
                    >
                      {selectedMember.name}
                    </motion.h3>
                    <motion.p
                      className="text-lg text-muted-foreground mb-4"
                      variants={contentVariants}
                      transition={{ delay: 0.3 }}
                    >
                      {selectedMember.role}
                    </motion.p>
                    <motion.p
                      className="mb-6"
                      variants={contentVariants}
                      transition={{ delay: 0.4 }}
                    >
                      {selectedMember.bio}
                    </motion.p>
                    {selectedMember.details.map((detail, index) => (
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
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

