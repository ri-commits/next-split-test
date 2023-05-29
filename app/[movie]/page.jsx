import React from "react";

const IndividualMovie = async ({ params }) => {
  const { movie } = params;
  const image_path = "https://image.tmdb.org/t/p/original";
  const data = await fetch(
    `https://api.themoviedb.org/3/movie/${movie}?api_key=${process.env.API_KEY}`
  );
  const res = await data.json();
  return (
    <div>
      <div>
        <h2 className="text-4xl">{res.title}</h2>
      </div>
    </div>
  );
};

export default IndividualMovie;
