import "./ContactForm.css";

export default function ContactForm() {
  return (
    <section className="contact" id="contact">
      <div className="contact__overlay"></div>
      <div className="container contact__content">
        <h2>Оставьте заявку</h2>
        <p>Напишите нам, и мы поможем подобрать вещи под ваш стиль</p>
        <form className="contact__form" onSubmit={(e) => e.preventDefault()}>
          <input type="text" placeholder="Ваше имя" required />
          <input type="tel" placeholder="Телефон" required />
          <button type="submit" className="btn btn-primary">Отправить</button>
        </form>
      </div>
    </section>
  );
}
