import Link from "next/link";

const Movie = ({ title }) => {
  return (
    <div>
      <h1>{title}</h1>
      <h2>Releae date</h2>
      <Link href={`/ewf`}>
        <img src="" alt="" />
      </Link>
    </div>
  );
};

export default Movie;
