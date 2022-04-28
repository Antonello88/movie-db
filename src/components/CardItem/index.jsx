import "./style.css";

function CardItem({ cardData }) {
  return (
    <div className="CardItem">
      
        <h2>{cardData.title}</h2>
      
      <p>{cardData.year}</p>
      <img src={cardData.poster} alt={cardData.title} />
      <p>{cardData.description}</p>
      <div className="genre">
        <ul>
          {cardData.genres &&
            cardData.genres.map((genre, i) => <li key={i}>{genre}</li>)}
        </ul>
      </div>
    </div>
  );
}

export default CardItem;