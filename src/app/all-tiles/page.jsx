import Search from "@/component/Search";
import TileCard from "@/component/TileCard";

const AllTilePage = async ({ searchParams }) => {
  const res = await fetch(
    "https://showcase-tile-gallery.vercel.app/data.json",
    {
      cache: "no-store",
    },
  );
  const tiles = await res.json();

  const params = await searchParams;
  const search = params?.search || "";

  const filtered = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div>
      <h1 className="text-3xl font-bold text-center m-4">
        All Tiles Design ShowCase
      </h1>

      <Search />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
        {tiles.map((tile) => (
          <TileCard key={tile.id} tile={tile} />
        ))}
      </div>
    </div>
  );
};

export default AllTilePage;
