export interface TeamMember {
  id: number
  name: string
  role: string
  bio: string
  avatar: string
  details: Detail[]
}

export interface Detail {
  title: string
  content: string
}

