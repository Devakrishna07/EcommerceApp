import React from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';

interface Props{
    image : string
    title : string
    description : string
}

const InfoCard: React.FC<Props> = ({image, title, description}) => {
    return(
        <Card className="w-full max-w-sm shadow-lg">
      <CardHeader>
        <img src={image} alt={title} className="w-full h-48 object-cover rounded-md" />
      </CardHeader>
      <CardContent>
        <CardTitle className="text-lg font-bold">{title}</CardTitle>
        <CardDescription className="text-sm text-gray-600 dark:text-gray-400">
          {description}
        </CardDescription>
      </CardContent>
    </Card>
    )

}

export default InfoCard
