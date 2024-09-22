import React, { useContext } from "react";
import useList from "../../hooks/useList";
import ListItem from "./ListItem";
import ListContext from "../../contexts/ListContext";

export default function List() {
  const { filter } = useContext(ListContext);
  const { filteredList, handleItemDelete } = useList(filter);

  return filteredList.length ? (
    <ol>
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
