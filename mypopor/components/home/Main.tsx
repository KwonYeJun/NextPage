import React, { useState } from 'react';
import FirstLottie from './FirstLottie';
import SecondLottie from './SecondLottie';
import ThreeLottie from './ThreeLottie';
const contents = [
  {
    text: ['안녕하세요!', 'the developer of the fullstack'],
    Lottie: FirstLottie,
  },
  {
    text: 'Another text for the second content',
    Lottie: SecondLottie,
  },
  {
    text: 'Another text for the second content',
    Lottie: ThreeLottie,
  },
];

export default function Main() {
  const [index, setIndex] = useState(0);
  const { text, Lottie } = contents[index];

  return (
    <div>
      <section className="text-gray-600 body-font p-0" >
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col items-center text-center mb-16 md:mb-0">

            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900"> {Array.isArray(text) ? text.map((t, i) => <p key={i}>{t}</p>) : text}</h1>
            <div className="flex justify-center">
              <div className="inline-flex">
                <button
                  onClick={() => setIndex((index + contents.length - 1) % contents.length)}
                  className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg"
                >
                  Previous
                </button>
                <button
                  onClick={() => setIndex((index + 1) % contents.length)}
                  className="ml-4 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg"
                >
                  Next
                </button>
              </div>
            </div>

          </div>
          <div className="lg:max-w-lg lg:w-full md:w-half w-fifth-sixth">
            <Lottie />
          </div>
        </div>
      </section>
    </div>
  );
}
