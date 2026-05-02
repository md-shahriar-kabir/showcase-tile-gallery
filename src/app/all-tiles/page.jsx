import TileCard from '@/component/TileCard';


const AllTilePage = async() => {
    const res = await fetch("http://localhost:3000/data.json");
    const tiles = await res.json();
    return (
        <div>
            <h1 className='text-3xl font-bold text-center m-4'>All Tiles Design ShowCase</h1>
            <div className='grid grid-cols-4 gap-4'>
                {
                    tiles.map((tile)=> <TileCard key={tile.id} tile={tile}/>)
                }
            </div>
        </div>
    );
};

export default AllTilePage;