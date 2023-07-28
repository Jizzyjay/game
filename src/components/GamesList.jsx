import PropTypes from "prop-types";

function GamesList({ gameList }) {
  return (
    <div className="mt-5 hidden md:block">
      <h2 className="font-bold text-[30px] dark:text-white">Trending Games</h2>
      <div className="md:grid md:grid-cols-3 gap-3 lg:grid-cols-4">
        {gameList.map(
          (item, index) =>
            index < 4 && (
              <div
                key={item.id}
                className="bg-[#76a8f75e] rounded-lg group
                hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer"
              >
                <img
                  src={item.background_image}
                  className="h-[270px] rounded-t-lg object-cover"
                  alt={item.name}
                />
                <h2 className="dark:text-white text-[20px] p-4 font-bold">
                  {item.name}
                </h2>
              </div>
            )
        )}
      </div>
    </div>
  );
}

GamesList.propTypes = {
  gameList: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      name: PropTypes.string.isRequired,
      background_image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default GamesList;
