import { useEffect, useState } from "react";

import Image from "next/image";
import Paragraph from "../../html/Paragraph";

const Slider = ({ items }) => {
  console.log(items);
  return (
    <div>
      <ul>
        {items?.map((item, index) => {
          return (
            <li key={index}>
              <Image
                src={item.images[0].url}
                alt={item.name}
                width={item.images[0].width}
                height={item.images[0].height}
              />
              <Paragraph>{item.name}</Paragraph>
            </li>
          );
        })}
      </ul>
    </div>
  );
};
export default Slider;
