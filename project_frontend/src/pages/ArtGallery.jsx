import { useEffect, useState } from "react";
import API from "../api/api";

const ArtGallery = () => {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    const fetchArt = async () => {
      try {
        const res = await API.get("/art");
        setArtworks(res.data);
      } catch (error) {
        console.error("Art fetch error:", error);
      }
    };

    fetchArt();
  }, []);

  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Art Gallery</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {artworks.map((art) => (
          <div key={art._id} className="rounded overflow-hidden shadow">
            <img
              src={art.image}
              alt={art.title}
              className="w-full h-56 object-cover"
            />
            <div className="p-4">
              <h2 className="font-semibold text-lg">{art.title}</h2>
              <p className="text-gray-600 text-sm">{art.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtGallery;
