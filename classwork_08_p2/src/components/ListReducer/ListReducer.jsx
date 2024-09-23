import React, { useReducer, useEffect } from "react";
import service from "./../../services/todos";

export default function ListReducer() {
  const initialArg = {
    list: [
      {
        title:
          "Ad saepe cumque magni sunt facilis hic praesentium sed consequuntur.",
        priority: false,
        id: "5",
      },
      {
        title:
          "Eligendi est reprehenderit reiciendis odio explicabo aspernatur a.",
        priority: true,
        id: "7",
      },
      {
        title:
          "Expedita doloremque assumenda iusto itaque quae necessitatibus.",
        priority: true,
        id: "9",
      },
      {
        title: "Ex accusantium vel dolorum totam temporibus non nisi.",
        priority: false,
        id: "11",
      },
      {
        title: "Corrupti similique quasi sit impedit delectus veniam.",
        priority: false,
        id: "12",
      },
      {
        title:
          "Nostrum ut doloremque aliquid saepe laboriosam exercitationem neque.",
        priority: false,
        id: "13",
      },
      {
        title: "Dignissimos aliquam assumenda modi aperiam veniam.",
        priority: true,
        id: "14",
      },
    ],
    sortedlist: [],
    color: `crimson`,
  };

  const LIST_ITEM_DELETE = "LIST_ITEM_DELETE";
  const LIST_ITEM_CHANGE = "LIST_ITEM_CHANGE";
  const LIST_SORT = "LIST_SORT";
  const LIST_SET = "LIST_SET";

  const reducer = (state, { title, payload }) => {
    switch (title) {
      case LIST_ITEM_DELETE:
        return {
          ...state,
          list: state.list.filter((item) => item.id !== payload),
        };
      case LIST_ITEM_CHANGE:
        return {
          ...state,
          list: state.list.map((item) => {
            if (item.id === payload.id) item = payload;
            return item;
          }),
        };
      case LIST_SORT:
        return {
          ...state,
          sortedlist: state.list.sort((a, b) => b.priority - a.priority),
        };
      case LIST_SET:
        return { ...state, list: payload };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, initialArg);

  const getList = async () => {
    const response = await service.get();
    const action = { title: LIST_SET, payload: response };
    dispatch(action);
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    const action = { title: LIST_SORT };
    dispatch(action);
  }, [state.list]);

  const handleItemDelete = async (id) => {
    await service.delete(id);
    getList();
  };

  const handleItemPriorityChange = (item) => {
    const action = {
      title: LIST_ITEM_CHANGE,
      payload: { ...item, priority: !item.priority },
    };
    dispatch(action);
  };

  return state.sortedlist.length ? (
    <ul>
      {state.sortedlist.map((item) => (
        <li style={{ color: item.priority ? state.color : `` }} key={item.id}>
          {item.title}{" "}
          <button onClick={() => handleItemDelete(item.id)}>Delete</button>
          <button onClick={() => handleItemPriorityChange(item)}>
            Change priority
          </button>
        </li>
      ))}
    </ul>
  ) : null;
}
