import { Button } from '@heroui/react';
import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestTiles = ({ tiles }) => {
    return (
        <div className='flex justify-between bg-gray-200 items-center py-2 px-2 container mx-auto gap-2 mt-4'>
            
            <Button variant='outline' className="border-2 border-[#D4AF37]">Latest Tiles</Button>

            <Marquee pauseOnHover={true} speed={100}>
                <span className='mx-8 font-medium'>
                    New Arrivals:
                </span>

                {tiles.map((t) => (
                    <span className='mx-8' key={t.id}>
                        {t.title}
                    </span>
                ))}

            </Marquee>

        </div>
    );
};

export default LatestTiles;