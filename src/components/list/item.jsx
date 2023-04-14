export const Item = ({ item }) => {
  return (
    <div>
      <h3>{item.subtitle}</h3>
      <p style={{ color: item.color }}>{item.text}</p>
    </div>
  );
};
