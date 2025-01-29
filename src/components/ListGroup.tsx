import { useState } from "react";
interface Props {
  cities: string[];
  heading: string;
}
function ListGroup({ cities, heading }: Props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);

  return (
    <>
      <h1>{heading}</h1>
      <ul className="list-group">
        {cities.length == 0 && <p>"No items found"</p>}

        {cities.map((city, index) => (
          <li
            className={
              selectedIndex === index
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setSelectedIndex(index);
            }}
            key={city}
          >
            {city}
          </li>
        ))}
      </ul>
    </>
  );
}
export default ListGroup;
