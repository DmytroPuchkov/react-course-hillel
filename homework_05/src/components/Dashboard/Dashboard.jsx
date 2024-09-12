import { useState } from "react";
import List from "./../List/List";
import ColorPicker from "../ColorPicker/ColorPicker";
import Filter from "../Filter/Filter";
import "./style.css";

export default function Dashboard() {
  const [color, setColor] = useState();
  const [filter, setFilter] = useState();

  return (
    <div>
      <Filter liftingFilter={setFilter} />
      <ColorPicker liftingColor={setColor} />
      <List color={color} filter={filter} />
    </div>
  );
}
