import {useState} from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import DATA from "../public/data.json";


export default function Home() {
  const [companies, setCompanies] = useState(DATA);
  const [q, setQ] = useState("");
  const [animals, setAnimals] = useState("");
  const [nuclear, setNuclear] = useState("");
  const [coal, setCoal] = useState("");
  const [rainforest, setRainforest] = useState("");

  const handleAnimalCheckbox = () => {
    if(!animals) {
      setAnimals(true)
    } else {
      setAnimals("")
    }
  }
  const handleNuclearCheckbox = () => {
    if(!nuclear) {
      setNuclear(true)
    } else {
      setNuclear("")
    }
  }
  const handleCoalCheckbox = () => {
    if(!coal) {
      setCoal(true)
    } else {
      setCoal("")
    }
  }
  const handleRainforestCheckbox = () => {
    if(!rainforest) {
      setRainforest(true)
    } else {
      setRainforest("")
    }
  }
  const clearFilters = () => {
    setAnimals("")
    setNuclear("")
    setCoal("")
    setRainforest("")
  }
  const noActivities = () => {
    setAnimals(false)
    setNuclear(false)
    setCoal(false)
    setRainforest(false)
  }

  const filteredCompanies = companies.filter((company) => {
    return (
      company['Company Name'].toString().toLowerCase().indexOf(q.toLowerCase()) > -1 || company['Ticker Symbol'].toString().toLowerCase().indexOf(q.toLowerCase()) > -1
    )
  })
    .filter((company) => {
      return (
        company['Animal Testing'].toString().match(animals)
      )
    })
    .filter((company) => {
      return (
        company['Nuclear Weapons'].toString().match(nuclear)
      )
    })
    .filter((company) => {
      return (
        company['Coal Power'].toString().match(coal)
      )
    })
    .filter((company) => {
      return (
        company['Rainforest Destruction'].toString().match(rainforest)
      )
    })

  return (
    <div className="bg-stone-100 min-h-screen w-full">

      <Head>
        <title>Companies Social Impact</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>  
      <Navbar />  

      <div className="w-full md:w-2/3 lg:w-1/2 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto p-4">
        <fieldset className="border p-4 bg-stone-50 rounded-xl drop-shadow-md w-full">
          <legend className="drop-shadow-md font-semibold">Filters:</legend>
          <div>
            <div>
              <input type="search" name="search" id="search" placeholder="Search" value={q} onChange={(e) => setQ(e.target.value)} className="border shadow-inner py-2 px-4 rounded-xl w-full" />
              <button className="px-2 py-1 border-b mt-4 shadow-md hover:shadow-none mb-6 w-full" onClick={() => setQ(() => "")}>Clear Search</button>
            </div>
            <div className="space-x-1">
              <input type="checkbox" id="animalBox" checked={animals} value={animals} onClick={handleAnimalCheckbox} />
              <label id="animalBox">Animal Testing</label>
            </div>
            <div className="space-x-1">
              <input type="checkbox" id="nuclearBox" checked={nuclear} value={nuclear} onClick={handleNuclearCheckbox} />
              <label id="nuclearBox">Nuclear Weapons</label>
            </div>
            <div className="space-x-1">
              <input type="checkbox" id="coalBox" checked={coal} value={coal} onClick={handleCoalCheckbox} />
              <label id="coalBox">Coal Power</label>
            </div>
            <div className="space-x-1">
              <input type="checkbox" id="rainforestBox" checked={rainforest} value={rainforest} onClick={handleRainforestCheckbox} />
              <label id="rainforestBox">Rainforest Destruction</label>
            </div>
            <div className="flex flex-col">
              <button className="px-2 py-1 border-b mt-4 shadow-md hover:shadow-none" onClick={noActivities}>Show only companies with no destructive activities</button>
              <button className="px-2 py-1 border-b mt-4 shadow-md hover:shadow-none" onClick={clearFilters}>Clear Filters</button>
            </div>
          </div>
        </fieldset>
      </div>

      
      <ul>
        {filteredCompanies.map((company, i) => (
          <li key={i}>

          <div className="w-full md:w-2/3 lg:w-1/2 max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg mx-auto">
            <div className="border p-4 m-4 rounded-xl drop-shadow-md bg-stone-50">
              <div className="text-2xl font-bold">
                {company['Company Name']}
              </div>
              <div className="text-xl pb-3">
                {company['Ticker Symbol']}
              </div>
              <div>
                <p className="font-semibold">Item Count: </p>
              </div>
              <div>
                {company['Animal Testing'] &&
                  <p className="italic">Animal Testing</p>
                }
              </div>
              <div>
                {company['Nuclear Weapons'] &&
                  <p>Nuclear Weapons</p>
                }
              </div>
              <div>
                {company['Coal Power'] &&
                  <p>Coal Power</p>
                }
              </div>
              <div>
                {company['Rainforest Destruction'] &&
                  <p>Rainforest Destruction</p>
                }
              </div>
            </div>
          </div>
          </li>
        ))}
      </ul>
    </div>
  )
}
