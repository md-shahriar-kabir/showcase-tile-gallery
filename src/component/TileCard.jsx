import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";


const TileCard = ({tile}) => {
    return (
        <Card className="border">
            <div className="relative w-full aspect-square">
                <Image
                src={tile.image}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                alt={tile.title}
                className="object-cover rounded-md"
                />  
                <Chip className="absolute top-2 right-2">{tile.material}</Chip>
            </div>
            <div className="font-medium">
                Name: {tile.title}
            </div>
            <div>
                <p className="truncate">{tile.description}</p>
                <p>Price: ${tile.price}</p>

            </div>
            <Button variant = "outline" className="w-full">View Details</Button>

        </Card>
    );
};

export default TileCard;