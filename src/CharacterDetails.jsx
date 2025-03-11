import PropTypes from 'prop-types';

function CharacterDetails(props) {
  const {character} = props;
  const birth = character.birth ? character.birth : 'unknown';
  const death = character.death ? character.death : 'unknown';
  const gender = character.gender ? character.gender : 'unknown';
  const race = character.race ? character.race : 'unknown';
  let readMore;

  if (character.wikiUrl) {
    readMore = <p>Read more <a href={character.wikiUrl}>here</a></p>
  } else {
    readMore = '';
  }

  return (
    <div>
      <h2>{character.name}</h2>
      <h3>Birth: {birth}</h3>
      <h3>Death: {death}</h3>
      <h3>Gender: {gender}</h3>
      <h3>Race: {race}</h3>
      {readMore}
    </div>
  )
}

CharacterDetails.propTypes = {
  character: PropTypes.shape({
    name: PropTypes.string.isRequired,
    birth: PropTypes.string,
    death: PropTypes.string,
    gender: PropTypes.string,
    race: PropTypes.string,
    wikiUrl: PropTypes.string
  })
}

export default CharacterDetails;