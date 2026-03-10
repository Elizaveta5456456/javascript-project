import "./Catalog.css";
import PixelCard from "./PixelCard";

const categories = [
  { title: "Худи и свитшоты", img: "https://images.unsplash.com/photo-1620799140188-3b2a02fd9a77?w=400&h=500&fit=crop" },
  { title: "Футболки", img: "https://images.unsplash.com/photo-1576566588028-4147f3842f27?w=400&h=500&fit=crop" },
  { title: "Брюки и джоггеры", img: "https://images.unsplash.com/photo-1594938298603-c8148c4dae35?w=400&h=500&fit=crop" },
  { title: "Куртки", img: "https://images.unsplash.com/photo-1521223890158-f9f7c3d5d504?w=400&h=500&fit=crop" },
  { title: "Аксессуары", img: "https://images.unsplash.com/photo-1611312449408-fcece27cdbb7?w=400&h=500&fit=crop" },
  { title: "Новинки", img: "https://images.unsplash.com/photo-1487222477894-8943e31ef7b2?w=400&h=500&fit=crop" },
];

export default function Catalog() {
  return (
    <section className="catalog" id="catalog">
      <div className="container">
        <h2>Каталог</h2>
        <div className="catalog__grid">
          {categories.map((item, i) => (
            <PixelCard key={i} label={item.title}>
              <img src={item.img} alt={item.title} />
            </PixelCard>
          ))}
        </div>
      </div>
    </section>
  );
}
