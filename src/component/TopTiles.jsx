import React from 'react';
import TileCard from './TileCard';
import LatestTiles from './LatestTiles';

const TopTiles = async() => {
    const res = await fetch("https://showcase-tile-gallery.vercel.app/data.json", { 
  cache: 'no-store' 
});
    const tiles = await res.json();
    const showTopTiles = tiles.slice(0,8);
    return (
        <div>
            <h1 className='text-2xl font-bold mt-5 text-center mb-5'>Top Tiles ShowCase</h1>
               <LatestTiles tiles={tiles}></LatestTiles>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-2 mt-4">
                {
                    showTopTiles.map((tile)=> <TileCard key={tile.id} tile={tile}/>)
                }
            </div>
        </div>
    );
};

export default TopTiles;