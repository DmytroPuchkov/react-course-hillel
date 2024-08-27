import React, { useEffect, useState } from "react";
import "./List.css";

export default function List() {
  const [list, setList] = useState([
    { type: `turtle`, icon: `🐢` },
    { type: `octopus`, icon: `🐙` },
    { type: `fish`, icon: `🐠` },
    { type: `flamingo`, icon: `🦩` },
    { type: `penguin`, icon: `🐧` },
  ]);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const inactiveItems = list.filter((item) => !item.active);

      if (inactiveItems.length === 0) {
        clearInterval(intervalId);
        return;
      }

      const randomIndex = Math.floor(Math.random() * inactiveItems.length);
      const newList = structuredClone(list);
      const originalIndex = list.indexOf(inactiveItems[randomIndex]);

      console.log("Random item", newList[originalIndex]);

      newList[originalIndex].active = true;

      setList(newList);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [list]);

  return list.length ? (
    <table>
      <tbody>
        {list.map((item, index) => (
          <tr key={index} className={item.active ? "active" : null}>
            <td>{item.type}</td>
            <td>{item.icon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
}
