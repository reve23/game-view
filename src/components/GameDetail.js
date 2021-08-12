import react, { useEffect, useState } from "react";
import axios from "axios";

const GameDetail = ({match}) => {
  const [item, setItem] = useState([]);
  useEffect(() => {
    getGames();
    Object.entries(item).forEach(([key,value])=>{
      const arr = `${key}:${value}`
      console.log(arr)
  })
  }, []);
  
  const loc =window.location
  const data = loc.pathname.split("/")[2]
  const getGames = async () => {
    let res = await axios.get(`http://127.0.0.1:8000/games/${data}`);
    const states = res.data;
    // console.log(res.data);
    setItem(states);
  };
  return <>
        <div>
        </div>
  </>;
};

export default GameDetail;
