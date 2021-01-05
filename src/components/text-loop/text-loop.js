import TextLoop from "react-text-loop";
import PropTypes from "prop-types";
import { Text } from "../index";

export default function MyTextLoop({ texts, ...props }) {
  return (
    <TextLoop>
      {texts?.map((text, index) => (
        <Text key={index} text={text} {...props}></Text>
      ))}
    </TextLoop>
  );
}

MyTextLoop.propTypes = {
  texts: PropTypes.array,
};
