import React from "react";
import { Container } from "../Container";

const Cards = () => {
  return (
    <Container className="border">
      <div className="grid md:grid-cols-2 grid-rows-2 py-20">
        <div className="border rounded-3xl p-8 max-w-md my-4 bg-white mx-auto">
          <img src="/images/about/img1.png" />
          <h2 className="font-dmserif text-4xl font-lg tracking-tight mt-8 sm:text-6xl">
            Our Vision
          </h2>
          <p className="text-gray-600 mt-4">
            Our vision is to be employee-friendly organisation so that we can
            work as a strong team having modern problem solving approach to
            serve our clients with best financial solutions.
          </p>
        </div>
        <div className="border rounded-3xl p-8 max-w-md my-4 bg-white mx-auto">
          <img src="/images/about/img1.png" />
          <h2 className="font-dmserif text-4xl font-lg tracking-tight mt-8 sm:text-6xl">
            Our Vision
          </h2>
          <p className="text-gray-600 mt-4">
            Our vision is to be employee-friendly organisation so that we can
            work as a strong team having modern problem solving approach to
            serve our clients with best financial solutions.
          </p>
        </div>
        <div className="border rounded-3xl p-8 max-w-md my-4 bg-white mx-auto">
          <img src="/images/about/img1.png" />
          <h2 className="font-dmserif text-4xl font-lg tracking-tight mt-8 sm:text-6xl">
            Our Vision
          </h2>
          <p className="text-gray-600 mt-4">
            Our vision is to be employee-friendly organisation so that we can
            work as a strong team having modern problem solving approach to
            serve our clients with best financial solutions.
          </p>
        </div>
        <div className="border rounded-3xl p-8 max-w-md my-4 bg-white mx-auto">
          <img src="/images/about/img1.png" />
          <h2 className="font-dmserif text-4xl font-lg tracking-tight mt-8 sm:text-6xl">
            Our Vision
          </h2>
          <p className="text-gray-600 mt-4">
            Our vision is to be employee-friendly organisation so that we can
            work as a strong team having modern problem solving approach to
            serve our clients with best financial solutions.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Cards;
