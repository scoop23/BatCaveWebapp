
import Image from "next/image";
import RandomNumber from "../components/RandomNumber";
import video from '../../public/videos/backgroundVideo.mp4'


export default function Home() {
  const randomNumber = 19;

  return (
    <div className=""> 
      <RandomNumber number1={randomNumber} />
    </div>
  )
}
