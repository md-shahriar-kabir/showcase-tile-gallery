import { Button, Card, Chip } from "@heroui/react";
import Image from "next/image";
import Link from "next/link";


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
                <Chip className={`absolute top-2 left-2 ${
                tile.inStock
                  ? "bg-green-100 text-green-600"
                  : "bg-red-100 text-red-600"
              }`}>{tile.inStock ? "In Stock" : "Out of Stock"}</Chip>
            </div>
            <div className="font-medium">
                Name: {tile.title}
            </div>
            <div>
                <p className="truncate">{tile.description}</p>
                <p>Price: ${tile.price}</p>

            </div>
            <Link href={`all-tiles/${tile.id}`}><Button variant = "outline" className="w-full">View Details</Button></Link>

        </Card>
    );
};

export default TileCard;