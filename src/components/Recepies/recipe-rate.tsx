import img from "@/../public/fork.png";
import Image from "next/image";
const RecipeRate = ({ difficulte }: { difficulte: number }) => {
  const renderForks = () => {
    const forks = [];

    for (let i = 0; i < difficulte; i++) {
      forks.push(
        <Image key={i} width={30} height={15} src={img} alt="Fourchette" />
      );
    }
    return forks;
  };

  return (
    <div className="flex flex-row gap-2">
      <p className="text-gray-20 text-xs">Difficulté</p>
      <div className="flex flex-row gap-2">{renderForks()}</div>
    </div>
  );
};

export default RecipeRate;
