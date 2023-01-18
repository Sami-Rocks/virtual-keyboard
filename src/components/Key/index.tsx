type KeyType = {
  figure: string;
};

function Key({ figure }: KeyType) {
  return (
    <div className="rounded-md dark:bg-black bg-white w-16 h-16 flex justify-center items-center dark:text-white text-black">
      {figure}
    </div>
  );
}

export default Key;
