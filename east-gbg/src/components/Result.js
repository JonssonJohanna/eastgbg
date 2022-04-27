import PropTypes from "prop-types";
const Result = ({ percentage, result }) => {
  return (
    <div>
      <p>{percentage} %</p>
      <p>{result}</p>
    </div>
  );
};

Result.propTypes = {
  percentage: PropTypes.string,
  result: PropTypes.string,
};

export default Result;
