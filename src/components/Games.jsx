import PropTypes from "prop-types";

function Games({ gameList }) {
  return (
    <div className="mb-10">
      <h2 className="font-bold text-[30px] dark:text-white mt-5">
        Popular Games
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-7 ">
        {gameList.map((item) => (
          <div
            key={item.id}
            className="bg-[#76a8f75e] p-3 rounded-lg pb-10 h-full hover:scale-105 transition-all ease-in-out duration-300 cursor-pointer"
          >
            <img
              src={item.background_image}
              className="w-full h-[80%] object-cover rounded-lg"
              alt={item.name}
            />
            <h2 className="text-[20px] dark:text-white font-bold">
              {item.name}
              <span className="p-1 rounded-sm ml-2 text-[10px] bg-green-100 text-green-700 font-medium">
                {item.metacritic}
              </span>
            </h2>
            <h2 className="text-gray-500 ">
              <span className="p-2">⭐{item.rating} </span>
              <span className="p-2">💬{item.reviews_count}</span>
              <span className="p-2">🔥{item.suggestions_count}</span>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
}

Games.propTypes = {
  gameList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      background_image: PropTypes.string.isRequired,
      metacritic: PropTypes.number.isRequired,
      rating: PropTypes.number.isRequired,
      reviews_count: PropTypes.number.isRequired,
      suggestions_count: PropTypes.number.isRequired,
    })
  ).isRequired,
};

export default Games;
