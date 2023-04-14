import { Item } from "./item";

const items = [
  { text: "texto1", subtitle: "subtitle1", color: "blue" },
  { text: "texto2", subtitle: "subtitle2", color: "blue" },
  { text: "texto3", subtitle: "subtitle3", color: "red" },
  { text: "texto4", subtitle: "subtitle4", color: "red" },
  { text: "texto5", subtitle: "subtitle5", color: "green" },
];

export const ItemList = () => {
  return (
    <div>
      {items.map((item, indice) => {
        return <Item item={item} key={indice} indice={indice} />;
      })}
    </div>
  );
};
