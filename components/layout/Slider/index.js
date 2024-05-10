import { useEffect, useState } from "react";

import Image from "next/image";
import Paragraph from "../../html/Paragraph";

const Slider = ({ relatedArtists }) => {
  return (
    <ul>
      <li>
        <Image />
        <Paragraph>related artist name</Paragraph>
      </li>
    </ul>
  );
};
export default Slider;
