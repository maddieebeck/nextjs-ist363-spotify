import { useState, useEffect } from "react";
import { AnimatePresence } from "framer-motion";
import classnames from "classnames/bind";

import ShowcaseImages from "./Images";
import ShowcaseContent from "./Content";
import ShowcaseExpandedContent from "./ExpandedContent";

import styles from "./Showcase.module.scss";

const cx = classnames.bind(styles);

const Showcase = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [albums, setAlbums] = useState([]);
  const [isExpanded, setIsExpanded] = useState(false);
  const [relatedArtists, setRelatedArtists] = useState([]);

  useEffect(() => {
    //console.log("useEffect for showcase");
    //if (items.length > 0) {
    if (items.length > 0) {
      try {
        fetch(`/api/albums?id=${items[activeIndex].id}`)
          .then((res) => res.json())
          .then((data) => {
            setAlbums(data.items);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [activeIndex, items]);

  //console.log({ albums });

  useEffect(() => {
    if (items.length > 0) {
      try {
        fetch(`/api/related?id=${items[activeIndex].id}`)
          .then((res) => res.json())
          .then((data) => {
            console.log({ data });
            setRelatedArtists(data.artists);
          });
      } catch (error) {
        console.log(error);
      }
    }
  }, [activeIndex, items]);

  console.log({ relatedArtists });

  const showcaseClasses = cx({
    showcase: true,
    expanded: isExpanded,
  });

  return (
    <div className={showcaseClasses}>
      <AnimatePresence>
        <ShowcaseImages
          items={items}
          activeIndex={activeIndex}
          isExpanded={isExpanded}
        />
        {!isExpanded ? (
          <ShowcaseContent
            key="top"
            items={items}
            activeIndex={activeIndex}
            setActiveIndex={setActiveIndex}
            latestRelease={albums.length > 0 ? albums[0] : null}
            genre={items.genres}
            isExpanded={isExpanded}
            setIsExpanded={setIsExpanded}
          />
        ) : (
          <ShowcaseExpandedContent
            items={items}
            activeIndex={activeIndex}
            albums={albums}
            setIsExpanded={setIsExpanded}
            key="bottom"
            relatedArtists={relatedArtists}
          />
        )}
      </AnimatePresence>
    </div>
  );
};
export default Showcase;
