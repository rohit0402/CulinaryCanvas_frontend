import React from "react";
import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa6";
import { MdAccountCircle } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";


const About = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">About CulinaryCanvas</h1>
      <p className="text-lg mb-4">
        Welcome to CulinaryCanvas, your go-to platform for discovering and exploring a world of culinary delights! We are passionate about food and are dedicated to bringing you an exceptional culinary experience right to your fingertips.
      </p>
      <p className="text-lg mb-4">
        At CulinaryCanvas, we believe that cooking is an art form, and every dish is a masterpiece waiting to be created. Whether you're an experienced chef or a cooking enthusiast, our platform is designed to inspire and empower you on your culinary journey.
      </p>
      <p className="text-lg mb-4">
        Our mission is simple: to provide you with access to a diverse collection of recipes, cooking techniques, and culinary resources that will elevate your cooking skills and expand your palate. From quick and easy weeknight dinners to elaborate gourmet meals, CulinaryCanvas has something for every taste and occasion.
      </p>
      <p className="text-lg mb-4">
        What sets us apart is our commitment to quality, authenticity, and creativity. We curate our recipes meticulously, ensuring that each one is tested, reliable, and guaranteed to impress. Our team of culinary experts is constantly exploring new flavors, ingredients, and cooking trends to bring you fresh and innovative recipes that will delight your senses.
      </p>
      <p className="text-lg mb-4">
        Join us on this culinary adventure and unleash your inner chef! Whether you're looking for inspiration, guidance, or just a delicious meal idea, CulinaryCanvas is here to guide you every step of the way.
      </p>
      <p className="text-lg mb-4">
        Thank you for choosing CulinaryCanvas. Happy cooking!
      </p>
      <div className="flex justify-center mt-8">
        <Link
          to="https://www.linkedin.com/in/rohit-sonar-3b3291273/"
          className="text-3xl mr-4 hover:text-gray-800"
        >
         <FaLinkedin />
        </Link>
        <Link
          to="https://github.com/rohit0402"
          className="text-3xl mr-4 hover:text-gray-800"
        >
          <FaGithubSquare />
        </Link>
        <Link
          to="/"
          className="text-3xl hover:text-gray-800"
        >
          <MdAccountCircle />
        </Link>
      </div>
    </div>
  );
};

export default About;
