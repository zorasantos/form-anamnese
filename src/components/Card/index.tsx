import data from '../../api/cards.json';

const Card = () => {
  return (
    <>
      {data.data.map((item) => {
        return (
          <button
            key={item.id}
            value={item.id}
            className="w-full border-2 col-start-4 col-end-4 ml-auto text-center bg-red-600"
          >
            <h3>{item.name}</h3>
          </button>
        );
      })}
    </>
  );
};

export default Card;
