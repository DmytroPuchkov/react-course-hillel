import React from "react";
import { useNavigate } from "react-router-dom";

function NavigateButton({path, title}) {
  const navigation = useNavigate();

  return <button onClick={() => navigation(path)}>{title}</button>;
}

export default NavigateButton;
