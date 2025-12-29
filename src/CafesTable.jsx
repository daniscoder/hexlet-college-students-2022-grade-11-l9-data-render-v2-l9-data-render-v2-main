import { useState, useEffect } from "react";
import axios from "axios";
import FilterCafes from "./FilterCafes.jsx";

const CafesTable = () => {
  const [cafes, setCafes] = useState([]);
  const [filter, setFilter] = useState("All");

  useEffect(() => {
    const fetchCafes = async () => {
      const response = await axios.get("/cafes");
      setCafes(response.data.cafes);
    };
    fetchCafes();
  }, []);

  const filteredCafes = filter === "All" 
    ? cafes 
    : cafes.filter((cafe) => cafe.subwayCode === filter);

  return (
    <div className="cafesTable">
      <FilterCafes filter={filter} setFilter={setFilter} />
      <ul className="cardsList">
        {filteredCafes.map((cafe) => (
          <li key={cafe.id} className="card">
            <img src={cafe.img || "https://via.placeholder.com/150"} alt="" />
            <h2>{cafe.name}</h2>
            <p>{cafe.desc}</p>
            <p>{cafe.address}</p>
            <p>Subway: {cafe.subwayCode}</p>
            <p>{cafe.workTime}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default CafesTable;
