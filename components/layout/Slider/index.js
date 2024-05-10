import { useEffect, useState } from "react";

import Image from "next/image";
import Paragraph from "../../html/Paragraph";

const Slider = ({ items }) => {
  console.log(items);
  return (
    <ul>
      {items?.map((item, index) => {
        return (
          <li key={index}>
            <Paragraph>{item.name}</Paragraph>
          </li>
        );
      })}
    </ul>
  );
};
export default Slider;
