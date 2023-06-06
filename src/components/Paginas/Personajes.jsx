import { useState, useEffect } from "react"
import axios from 'axios'


// https://gateway.marvel.com:443/v1/public/characters?apikey=c0ad192fd6d3ad6b0f4d3d1e3cae2c19

//key publica c0ad192fd6d3ad6b0f4d3d1e3cae2c19
//key privada cd0df3abb01853d6b7692b98f246a727bdd5ba30

//ts: 1

// 1cd0df3abb01853d6b7692b98f246a727bdd5ba30c0ad192fd6d3ad6b0f4d3d1e3cae2c19

// hash: 4b0f21e70f8ba9dd61defa652adbf562

function App() {
  const [personajes, setPersonajes] = useState([])

  useEffect(() => {
    axios.get('https://gateway.marvel.com:443/v1/public/characters?ts=1&apikey=c0ad192fd6d3ad6b0f4d3d1e3cae2c19&hash=4b0f21e70f8ba9dd61defa652adbf562').then(res => {
      setPersonajes(res.data.data.results)

    })
  }, [])


  console.log(personajes)

  return (

    <div className="App" style={{ backgroundColor: " #f3f2f0 " }}>
    <h1 style={{ textAlign: "center" }}>Personajes </h1>


      <div className="row row-cols-1 row-cols-md-3 g-4">

        {personajes.map(per => (
          <div className="col" key={per.id}>
            <div className="card" style={{ width: "18rem", heigth: "25rem" }}>
              <img src={`${per.thumbnail.path}.${per.thumbnail.extension}`} className="card-img-top"
                style={{ width: "100%", height: "100%" }} />
              <div className="card-body">
                <p className="card-text">{per.name}</p>
                <p className="card-text"><small>{per.description}</small></p>
              </div>
            </div>
            <p></p>
          </div>
        ))
        
        }
      </div>
       
    </div>
  )
}

export default App
