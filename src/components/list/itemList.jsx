import { Item } from "./item";

const items = [
  { text: "texto1", subtitle: "subtitle1", color: "blue" },
  { text: "texto2", subtitle: "subtitle2", color: "blue" },
  { text: "texto3", subtitle: "subtitle3", color: "red" },
  { text: "texto4", subtitle: "subtitle4", color: "red" },
  { text: "texto5", subtitle: "subtitle5", color: "green" },
];

export const ItemList = () => {
  // const a = items.map((item, index) => {
  //   return index + "-" + item.text;
  // });
  // console.log(a);
  return (
    <div>
      {items.map((item, indice) => {
        console.log(item, indice);
        return <Item item={item} key={indice} />;
      })}
    </div>
  );
};
