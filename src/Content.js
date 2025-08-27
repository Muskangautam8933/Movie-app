import React, { useState } from "react";
import axios from "axios";
import { apikey } from "./API";

const Content = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState({});

  const onSearchHandler = () => {
    if (!searchTerm) return;

    axios
      .get(`http://www.omdbapi.com/?t=${searchTerm}&apikey=${apikey}`)
      .then((response) => {
        console.log(response.data);
        setData(response.data);
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="h-full bg-slate-800 w-full">
      {/* Search Bar */}
      <div className="w-full flex bg-slate-800 p-4 items-center justify-center">
        <input
          type="text"
          placeholder="Type a movie name....."
          className="bg-white text-[19px] mr-4 outline-none rounded-xl p-2 w-[40%]"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <button
          onClick={onSearchHandler}
          className="border border-white rounded-md p-2 text-white font-bold w-20"
        >
          Search
        </button>
      </div>

      {/* Movie Card */}
      {data && Object.keys(data).length > 0 && (
        <div className="flex justify-center mt-10 bg-slate-800">
          <div className="max-w-2xl w-full bg-slate-800 shadow-lg rounded-2xl overflow-hidden">
            {/* Poster */}
            <img
              src={data.Poster}
              alt={data.Title}
              className="w-full h-96 p-6 bg-gray-600 rounded-2xl object-cover flex justify-center border align-center"
            />

            {/* Content */}
            <div className="p-6 space-y-3 bg-slate-900 rounded-2xl border border-black mt-5">
              <h1 className="text-2xl font-bold text-gray-500 text-center">
                {data.Title}
              </h1>
              <p className="text-white">
                <span className="font-semibold">Director:</span> {data.Director}
              </p>
              <p className="text-white">
                <span className="font-semibold">Genre:</span> {data.Genre}
              </p>
              <p className="text-white">
                <span className="font-semibold">Year:</span> {data.Year}
              </p>
              <p className="text-white">
                <span className="font-semibold">Country:</span> {data.Country}
              </p>
              <p className="text-white">
                <span className="font-semibold">Language:</span> {data.Language}
              </p>
              <p className="text-white">
                <span className="font-semibold">Rating:</span>{" "}
                <span className="text-yellow-500 font-bold">
                  {data.imdbRating}
                </span>
              </p>
              <p className="text-gray-600 leading-relaxed">{data.Plot}</p>

              {/* ✅ Extra Buttons */}
              <div className="flex justify-center gap-4 mt-4">
                {/* Watch/Download via IMDb */}
                <a
                  href={`https://www.imdb.com/title/${data.imdbID}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Watch / Download
                </a>

                {/* Download Poster */}
                <a
                  href={data.Poster}
                  download={`${data.Title}-poster.jpg`}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition"
                >
                  Download Poster
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Content;
