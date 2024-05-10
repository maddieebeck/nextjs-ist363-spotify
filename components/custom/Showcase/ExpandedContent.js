import { useState } from "react";

import { motion } from "framer-motion";

import ButtonUI from "../../html/ButtonUI";
import Grid from "../../layout/Grid";
import Container from "../../layout/Container";
import Heading from "../../html/Heading";
import Slider from "../../layout/Slider";

import styles from "./Showcase.module.scss";

const ShowcaseExpandedContent = ({
  albums,
  activeIndex,
  items,
  setIsExpanded,
  relatedArtists,
}) => {
  const [isGridVisible, setIsGridVisible] = useState(false);

  const topVariants = {
    initial: {
      y: 50,
      opacity: 0,
    },
    animate: {
      y: 0,
      opacity: 1,
      transition: {
        delay: 0.75,
        duration: 0.25,
        ease: "linear",
      },
    },
    exit: {
      y: 50,
      opacity: 0,
    },
  };

  return (
    <section className={styles.showcase__expanded__content}>
      <ButtonUI
        icon="faXmark"
        clickHandler={() => {
          setIsExpanded(false);
        }}
      />
      <motion.div
        className={styles.showcase__expanded__content__top}
        variants={topVariants}
        initial="initial"
        animate="animate"
        exit="exit"
      >
        <h2 className={styles.showcase__artist__name}>
          {items[activeIndex].name}
        </h2>
        <ButtonUI
          label="View albums"
          icon="faAngleDown"
          clickHandler={() => {
            const slideTarget = document.getElementById("bottomContent");
            slideTarget.scrollIntoView({ behavior: "smooth" });

            setIsGridVisible(true);
          }}
        />
      </motion.div>
      <div
        className={styles.showcase__expanded__content__bottom}
        id="bottomContent"
      >
        {isGridVisible && (
          <Container>
            <Heading level={2} marginBottom={2} marginTop={4}>
              Albums
            </Heading>
            <Grid items={albums} />
            <Heading level={2}>Related Artists</Heading>
            <Slider items={relatedArtists} />
          </Container>
        )}
      </div>
    </section>
  );
};
export default ShowcaseExpandedContent;
