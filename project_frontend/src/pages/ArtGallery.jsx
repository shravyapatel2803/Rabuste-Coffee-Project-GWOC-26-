import { useEffect, useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import API from "../api/api";

const ArtGallery = ({ isPreview = false }) => {
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

  // If in preview mode, show only the first 3 items
  const displayedArtworks = isPreview ? artworks.slice(0, 3) : artworks;

  return (
    <div className="px-6 py-12">
      <h1 className="text-3xl font-bold text-center mb-10">Art Gallery</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {displayedArtworks.map((art) => (
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

      {/* Show "See More" button only in preview mode */}
      {isPreview && (
        <div className="flex justify-center mt-10">
          <Link 
            to="/gallery" 
            className="px-8 py-3 bg-rabuste-orange text-white font-bold tracking-widest uppercase rounded-sm hover:bg-rabuste-gold transition-colors"
          >
            See More
          </Link>
        </div>
      )}
    </div>
  );
};

export default ArtGallery;