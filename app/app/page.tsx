"use client";
import Link from "next/link";
import reviews from "./reviews";

export default function Page() {
  return (
    <div className="flex flex-wrap justify-center items-center min-h-screen w-full bg-gray-100 p-4">
      {reviews.map((movie) => (
        <Link 
          key={movie.id} 
          href="/movie" 
          className="w-full sm:w-1/2 md:w-1/3 lg:w-1/4 p-0 border-none bg-transparent cursor-pointer"
        >
          <div className="flex flex-col items-center justify-center p-6 m-2 w-full bg-white rounded-lg shadow-lg hover:opacity-75 transition-opacity duration-200">
            <img 
              src={movie.imageSrc} 
              alt={movie.movieName} 
              className="w-full h-48 object-cover rounded-t-lg mb-4" 
            />
            <h2 className="text-xl font-bold mb-2">{movie.movieName}</h2>
            <p className="text-gray-600 mb-1">Rating: {movie.rating}</p>
            <p className="text-gray-600 mb-1">Status: {movie.status}</p>
            <p className="text-gray-500">{movie.movieDescription}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}
