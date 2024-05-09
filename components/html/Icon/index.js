import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
  faArrowRight,
  faAngleDown,
} from "@fortawesome/free-solid-svg-icons";

const icons = {
  faAngleLeft: faAngleLeft,
  faAngleRight: faAngleRight,
  faArrowRight: faArrowRight,
  faAngleDown: faAngleDown,
};

const Icon = ({ icon }) => {
  const matchingIcon = icons[icon];
  return <FontAwesomeIcon icon={matchingIcon} />;
};
export default Icon;
