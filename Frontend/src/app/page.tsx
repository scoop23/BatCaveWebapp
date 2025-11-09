
import RandomNumber from "../components/RandomNumber";
import HomeSearch from "../components/SearchBar/HomeSearch";


export default function Home() {

  return (
    <div className="home flex justify-center items-center w-full flex-col"> 
      <HomeSearch />
      <h1 className="font-(var(--font-Cinzel))">Explore Drinks</h1>
    </div>
  )
}
