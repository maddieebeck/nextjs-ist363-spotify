import Container from "../../layout/Container";
import Row from "../../layout/Row";
import Col from "../../layout/Col";

import styles from "./Showcase.module.scss";

const Showcase = () => {
  return (
    <div className={styles.showcase}>
      <div className={styles.showcase__images}>image goes here</div>
      <div className={styles.showcase__content}>
        <Container>
          <Row alignItems="flex-end" paddingBottom={2}>
            <Col md={1}>
              <span className={styles.showcase__counter}>01/10</span>
            </Col>
            <Col xs={3} md={5}>
              <span className={styles.showcase__number}>1</span>
            </Col>
            <Col xs={9} md={6}>
              <h2 className={styles.showcase__artist}>Taylor Swift</h2>
            </Col>
          </Row>
          <Row paddingBottom={2} paddingTop={2} borderTop={1}>
            <Col md={1}>
              <Row justifyContent="space-between">
                <button>prev</button>
                <button>next</button>
              </Row>
            </Col>
            <Col md={5}>latest releases</Col>
            <Col md={6}>
              <button>watch music video</button>
              <button>view artist page</button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};
export default Showcase;
