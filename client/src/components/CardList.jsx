// eslint-disable-next-line import/no-unresolved
import CardComponent from './CardComponent';

const CardList = () => {
  const cardCount = 10;
  const cardArray = Array.from({ length: cardCount }, (_, index) => index);

  return (
    <div>
      {cardArray.map((index) => (
        <CardComponent key={index} />
      ))}
    </div>
  );
};

export default CardList;
