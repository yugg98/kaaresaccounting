import React from "react";
import { Container } from "../Container";

const Cards = () => {
  return (
    <Container className="border border-y-0">
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
          <img src="/images/mission.svg" />
          <h2 className="font-dmserif text-4xl font-lg tracking-tight mt-8 sm:text-6xl">
            Our Mission
          </h2>
          <p className="text-gray-600 mt-4">
            Our mission is to provide the clients the time to focus on their
            core processes while we handling all their accounts and other
            compliances.
          </p>
        </div>
        <div className="border rounded-3xl p-8 max-w-md my-4 bg-white mx-auto">
          <img src="/images/team.svg" />
          <h2 className="font-dmserif text-4xl font-lg tracking-tight mt-8 sm:text-6xl">
            Our Team
          </h2>
          <p className="text-gray-600 mt-4">
            Our team of experienced professionals is dedicated to helping you
            navigate the complexities of financial management with ease,
            ensuring that your business remains compliant and financially sound.
          </p>
        </div>
        <div className="border rounded-3xl p-8 max-w-md my-4 bg-white mx-auto">
          <img src="/images/values.svg" />
          <h2 className="font-dmserif text-4xl font-lg tracking-tight mt-8 sm:text-6xl">
            Our Values
          </h2>
          <p className="text-gray-600 mt-4">
            We strive to build meaningful relationships with our clients. Our
            commitment to accuracy, confidentiality, and timeliness is
            unmatched, and our proactive approach to staying up-to-date with the
            latest tax laws and regulations ensures that you are always in
            compliance.
          </p>
        </div>
      </div>
    </Container>
  );
};

export default Cards;
