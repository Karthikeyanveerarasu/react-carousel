import styled from "styled-components";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import { useState } from "react";
export default function App() {
  const [item, SetItem] = useState([1, 2, 3, 4, 5, 6, 7, 8]);
  const handleadd = () => {
    const newitem = item.length + 1;
    SetItem([...item, newitem]);
  };
  const handledel = () => {
    const index = item.length;
    const newitem = item.slice(0, index - 1);
    SetItem(newitem);
  };

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 550, itemsToShow: 2, itemsToScroll: 2 },
    { width: 768, itemsToShow: 3 },
    { width: 1200, itemsToShow: 4 }
  ];
  const But = styled.button`
    color: green;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
  `;
  const Del = styled.button`
    color: red;
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid #bf4f74;
    border-radius: 3px;
  `;
  return (
    <>
      <But onClick={handleadd}>Add</But>
      <Del onClick={handledel}>delete</Del>
      <Carousel breakPoints={breakPoints}>
        {item.map((data) => (
          <Item key={data}>{data}</Item>
        ))}
      </Carousel>
    </>
  );
}
