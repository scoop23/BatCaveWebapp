
import Image from "next/image";
import RandomNumber from "../components/RandomNumber";

export default function Home() {
  const randomNumber = 19;

  return (
    <div> 
      <RandomNumber number1={randomNumber} />
    </div>
  )
}
