import react, { useEffect, useState } from "react";
import axios from "axios";
import './games.css'
import {Link} from 'react-router-dom'

const Games = () => {
  const [game, setGame] = useState([]);
  useEffect(() => {
    getGame();
  }, []);

  const getGame = async () => {
    let res = await axios.get("http://127.0.0.1:8000/games");
    console.log(res.data);
    setGame(res.data);
  };
  return (
    <div className="main mx-4 d-flex flex-wrap">
      
      {game.map((elem,ind)=>{
        return (
          <div key={ind}>
          <Link to={`/games/${elem.id}`}>
          
            <div className="card m-3" style={{width: "18rem"}}>
                <img src={elem.image} className="card-img-top" alt="..."/>
                <div className="card-body">
                  <h5 className="card-title">{elem.name}</h5>
                  <p className="card-text">{elem.year}</p>
                
            </div>
            </div>
          </Link>
          </div>
        )
      })}
      
    </div>
  );
};

export default Games;
