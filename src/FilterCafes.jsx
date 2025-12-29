const subways = [
  { name: "Арбатская", code: "Arbat" },
  { name: "Александровский сад", code: "Alexanders Garden" },
  { name: "Московская", code: "Moscow" },
  { name: "Парк Культуры", code: "Culture" },
  { name: "Театральная", code: "Theater" },
];

const FilterCafes = ({ filter, setFilter }) => {
  const handleChange = (e) => {
    setFilter(e.target.value);
  };

  return (
    <div className="controls">
      <select name="subway" id="subway" value={filter} onChange={handleChange}>
        <option value="All">Все</option>
        {subways.map((subway) => (
          <option key={subway.code} value={subway.code}>
            {subway.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FilterCafes;
