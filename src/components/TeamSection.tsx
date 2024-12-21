"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { TeamMember } from "../types/team";
import { containerVariants, contentVariants } from "../utils/animations";
import { TeamMemberAvatar } from "./TeamMemberAvatar";
import { TeamMemberDetails } from "./TeamMemberDetails";

interface TeamSectionProps {
  teamMembers: TeamMember[];
}

export function TeamSection({ teamMembers }: TeamSectionProps) {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  const handleSelectMember = (member: TeamMember) => {
    setSelectedMember(member);
  };

  return (
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-12">Meet Our Team</h2>

      <div className="flex justify-center space-x-4 mb-12">
        {teamMembers.map((member) => (
          <TeamMemberAvatar
            key={member.id}
            member={member}
            isSelected={selectedMember?.id === member.id}
            onSelect={handleSelectMember}
          />
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
                  <TeamMemberDetails member={selectedMember} />
                </div>
              </CardContent>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
