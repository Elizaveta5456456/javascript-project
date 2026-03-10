import "./About.css";

const items = [
  {
    title: "Авторский дизайн",
    text: "Каждый принт и крой разрабатывается нашей командой. Вы не встретите такую же вещь на ком-то другом.",
  },
  {
    title: "Лимитированные дропы",
    text: "Выпускаем ограниченные партии. Когда коллекция заканчивается, она не повторяется.",
  },
  {
    title: "Качественные материалы",
    text: "Плотный хлопок, качественная фурнитура. Вещи, которые служат долго и выглядят достойно.",
  },
  {
    title: "Честные цены",
    text: "Никаких наценок за имя бренда. Вы платите за дизайн и качество, а не за логотип.",
  },
  {
    title: "Быстрая доставка",
    text: "Отправляем заказы в течение 1-2 дней. Доставка по всей России курьером или в пункт выдачи.",
  },
  {
    title: "Обмен и возврат",
    text: "Если вещь не подошла по размеру — обменяем без лишних вопросов в течение 14 дней.",
  },
];

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <h2>Почему Design Gang</h2>
        <div className="about__grid">
          {items.map((item, i) => (
            <div className="about__item" key={i}>
              <span className="about__number">{i + 1}</span>
              <div className="about__text">
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
