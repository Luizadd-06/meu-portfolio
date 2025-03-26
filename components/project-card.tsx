import Image from "next/image"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  title: string
  description: string
  tags: string[]
  imageUrl: string
  link?: string
}

export function ProjectCard({ title, description, tags, imageUrl, link = "#" }: ProjectCardProps) {
  return (
    <Card className="overflow-hidden">
      <div className="aspect-video w-full overflow-hidden">
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          width={600}
          height={400}
          className="h-full w-full object-cover transition-all hover:scale-105"
        />
      </div>
      <CardContent className="p-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="mt-2 text-muted-foreground">{description}</p>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-2 p-4 pt-0">
        {tags.map((tag) => (
          <Badge key={tag} variant="secondary">
            {tag}
          </Badge>
        ))}
      </CardFooter>
    </Card>
  )
}

