import img from "@/../public/fork.png";
import Image from "next/image";
const RecipeTime = ({ temps }: { temps: string }) => {
  return (
    <div className="flex flex-row gap-2">
      <p className="text-gray-20 text-xs">estimation temps:</p>
      <p className="text-gray-20 text-xs fond-bold">{temps}</p>
    </div>
  );
};

export default RecipeTime;
