import PropTypes from "prop-types";

function MovieCard(props) {
  const {title, year, imdbUrl} = props;

  return (
    <div>
      <h2>{title}</h2>
      <p>Year: {year}</p>
      <a href={imdbUrl}>Click here!</a>
    </div>
  )
}

MovieCard.propTypes = {
  title: PropTypes.string.isRequired,
  year: PropTypes.number.isRequired,
  imdbUrl: PropTypes.string.isRequired
}

export default MovieCard;