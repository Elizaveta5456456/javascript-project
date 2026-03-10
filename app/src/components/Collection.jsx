import "./Collection.css";
import PixelCard from "./PixelCard";

const photos = [
  { src: "https://images.unsplash.com/photo-1509631179647-0177331693ae?w=400&h=400&fit=crop", label: "Dystopia Hoodie" },
  { src: "https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=400&h=400&fit=crop", label: "Noir Oversized Tee" },
  { src: "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?w=400&h=400&fit=crop", label: "Phantom Cargo" },
  { src: "https://images.unsplash.com/photo-1544441893-675973e31985?w=400&h=400&fit=crop", label: "Chaos Bomber" },
  { src: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?w=400&h=400&fit=crop", label: "Revolt Leather" },
  { src: "https://images.unsplash.com/photo-1539109136881-3be0616acf4b?w=400&h=400&fit=crop", label: "Vandal Denim" },
  { src: "https://images.unsplash.com/photo-1485230895905-ec40ba36b9bc?w=400&h=400&fit=crop", label: "Ruins Knit" },
  { src: "https://images.unsplash.com/photo-1496747611176-843222e1e57c?w=400&h=400&fit=crop", label: "Static Layer" },
];

export default function Collection() {
  return (
    <section className="collection" id="collection">
      <div className="container">
        <h2>Коллекция SS'26</h2>
        <p>
          Новая коллекция вдохновлена городской культурой и свободой самовыражения.
          Каждая вещь создана для тех, кто живёт на своей волне.
        </p>
        <div className="collection__grid">
          {photos.map((item, i) => (
            <PixelCard key={i} label={item.label}>
              <img src={item.src} alt={item.label} />
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
}
