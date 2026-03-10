import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero" id="top">
      <video className="hero__video" autoPlay muted loop playsInline>
        <source src="/video/fon.mp4" type="video/mp4" />
      </video>
      <div className="hero__content">
        <h1>Design Gang</h1>
        <p>
          Одежда. Эстетика. Стиль.
        </p>
      </div>
    </section>
  );
}
