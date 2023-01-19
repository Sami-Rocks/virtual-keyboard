import Key from "./../Key";
import { first_row, second_row, third_row } from "../../utils/constants";


function KeyboardLayout() {

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
        {third_row.map((el: string, index:number) => (
          <Key key={el+index} figure={el} />
        ))}
      </div>
      <div className="mt-2 relative left-[265px]" >
          <Key figure=" " />
      </div>
    </div>
  );
}

export default KeyboardLayout;
