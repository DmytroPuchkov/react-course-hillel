import useList from "../../hooks/useList";
import ListItem from "./ListItem";

export default function List({ color, filter }) {
  const { filteredList, handleItemDelete } = useList(filter);

  return filteredList.length ? (
    <ol style={{ color }}>
      {filteredList.map((item) => (
        <ListItem
          key={item.id}
          item={item}
          handleClick={() => handleItemDelete(item.id)}
        />
      ))}
    </ol>
  ) : null;
}
