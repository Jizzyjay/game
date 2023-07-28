// import { useEffect } from "react";

// function Banner({ gameBanner }) {
//   useEffect(() => {
//     console.log(gameBanner, "game");
//   }, []);

//   return (
//     <div className="relative">
//       <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
//         <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
//         <button className="bg-blue-600 text-white px-2 p-1">Get now</button>
//       </div>
//       <img
//         src={gameBanner.background_image}
//         className="md:h-[320px] w-full object-cover rounded-lg"
//         alt=""
//       />
//     </div>
//   );
// }

// export default Banner;


import PropTypes from "prop-types";

function Banner({ gameBanner }) {

  return (
    <div className="relative">
      <div className="absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full">
        <h2 className="text-[24px] text-white font-bold">{gameBanner.name}</h2>
        <button className="bg-blue-600 text-white px-2 p-1">Get now</button>
      </div>
      <img
        src={gameBanner.background_image}
        className="md:h-[320px] w-full object-cover rounded-lg"
        alt=""
      />
    </div>
  );
}

Banner.propTypes = {
  gameBanner: PropTypes.shape({
    name: PropTypes.string.isRequired,
    background_image: PropTypes.string.isRequired,
    // Add other required properties of gameBanner here, if any
  }).isRequired,
};

export default Banner;
