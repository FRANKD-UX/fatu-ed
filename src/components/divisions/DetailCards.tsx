import s from "./Pages.module.scss";

type DetailCard = Readonly<{
  title: string;
  description: string;
}>;

export function DetailCards({ items }: { items: readonly DetailCard[] }) {
  return (
    <ul className={s.cards}>
      {items.map((item) => (
        <li key={item.title}>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </li>
      ))}
    </ul>
  );
}
