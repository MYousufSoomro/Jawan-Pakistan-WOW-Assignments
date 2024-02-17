import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../config/store/slices/theme";

const Home = () => {
  const disptach = useDispatch();
  const state = useSelector((state) => state.theme);
  console.log(state.darkMode);

  const themeHandle = () => {
    disptach(toggleTheme(!state.darkMode));
  };

  return (
    <div>
      <h1>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nobis, neque.
      </h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut sapiente
        architecto quis unde, culpa magni ratione ipsa temporibus illum repellat
        obcaecati dicta suscipit repellendus dignissimos expedita amet cumque
        inventore provident?
      </p>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        reprehenderit veritatis natus saepe itaque cum! Quidem, placeat. Quos
        minima sapiente, sit suscipit enim officiis excepturi quo obcaecati
        aspernatur pariatur quae.
      </p>
      <Button onClick={themeHandle}>{state.darkMode ? "Light" : "Dark"}</Button>
    </div>
  );
};

export default Home;
