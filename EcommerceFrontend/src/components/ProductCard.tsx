import React from "react"
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "./ui/card"
import { Button } from "./ui/button"

interface Props {
  image: string
  title: string
  description: string
}

const InfoCard: React.FC<Props> = ({ image, title, description }) => {
  return (
    <Card className="w-full shadow-md border rounded-xl overflow-hidden flex flex-col justify-between">
      <CardHeader className="p-0">
        <img
          src={image}
          alt={title}
          className="w-full h-40 md:h-52 object-fit bg-white p-2"
        />
      </CardHeader>
      <CardContent className="p-2 flex flex-col gap-2">
        <CardTitle className="text-base font-semibold leading-tight">
          {title}
        </CardTitle>
        <CardDescription className="text-sm text-gray-600 line-clamp-2">
          {description}
        </CardDescription>
        <Button className="mt-3 w-fit self-start text-sm">View More</Button>
      </CardContent>
    </Card>
  )
}

export default InfoCard
