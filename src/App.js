import { useState } from "react";
import CardProduct from "./components/CardProduct";

function App() {

  const [onlyAvailableCoffees, setOnlyAvailableCoffees] = useState(false)

  const handleAvailableCoffees = () => {
    setOnlyAvailableCoffees(true)
  }

  const handleAllCoffees = () => {
    setOnlyAvailableCoffees(false)
  }

  return (
    <main className="relative h-screen overflow-auto bg-blackBG font-DMS">
      <header className='w-full h-72'>
        <img className="w-full h-full object-cover" src="./assets/bg-cafe.jpg" alt="café" />
      </header>
      <section className="absolute top-32 left-1/4 right-1/4 flex flex-col items-center min-w-[240px] max-w-[440px] border-2 border-orange bg-lightBlack rounded-2xl py-14 px-6 sm:min-w-[440px] sm:max-w-[890px] xl:min-w-[900px] xl:max-w-[1100px]">
        <h1 className="text-white text-heading font-semibold">Our collection</h1>
        <p className="text-gray text-body font-semibold text-center py-6">Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.</p>
        <div className="flex gap-6 pt-4 pb-8">
          <button onClick={handleAllCoffees} className={`text-white ${!onlyAvailableCoffees ? "bg-gray" : ""} py-2 px-3 rounded-md font-semibold`}>All Products</button>
          <button onClick={handleAvailableCoffees} className={`text-white ${onlyAvailableCoffees ? "bg-gray" : ""} py-2 px-3 rounded-md font-semibold`}>Available Now</button>
        </div>
        <CardProduct onlyAvailableCoffees={onlyAvailableCoffees} />
      </section>
    </main>
  );
}

export default App;
