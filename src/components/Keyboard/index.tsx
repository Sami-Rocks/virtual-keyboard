import Key from "./../Key";
import { useEffect, useState } from "react";


function Keyboard() {

  const first_row = [
    "Q",
    "W",
    "E",
    "R",
    "T",
    "Y",
    "U",
    "I",
    "O",
    "P",
    "[",
    "]",
  ];
  const second_row = ["A", "S", "D", "F", "G", "H", "J", "K", "L", ";", "'"];
  const third_row = ["SHIFT","Z", "X", "C", "V", "B", "N", "M", ",", ".", "/", "SHIFT"];

  return (
    <div className="w-fit h-fit dark:bg-dark_grey border-4 border-white dark:border-dark_grey rounded-lg p-4 bg-black bg-opacity-10">
      <div className="flex gap-2 left-12 relative">
        {first_row.map((el: string) => (
          <Key key={el} figure={el} />
        ))}
      </div>
      <div className="relative left-20 flex gap-2 py-2">
        {second_row.map((el: string) => (
          <Key key={el} figure={el} />
        ))}
      </div>
      <div className="flex gap-2 ">
        {third_row.map((el: string) => (
          <Key key={el} figure={el} />
        ))}
      </div>
      <div className="mt-2 relative left-52" >
          <Key figure=" " />
      </div>
    </div>
  );
}

export default Keyboard;
