"use client";
import React from "react";
import { Label } from "../components/ui/label";
import "./index.css";
import {  Slide } from "react-awesome-reveal";

const MainImage = () => {
  return (
    <>
      <Slide direction="up" duration={1300} triggerOnce={true}>
        <div className="main-image relative">
          <div className="pt-10 lg:px-20 md:px-20 sm:px-20 px-16 ">
            <Slide direction="up" duration={1700} className ="lg:mt-10">
              <Label
                htmlFor=""
                className="text-xl font-bold font-serif text-gray-300  "
              >
                Since 2023,
              </Label>

              <Label
                htmlFor=""
                className="lg:text-6xl md:text-4xl sm:text-4xl text-2xl font-bold font-serif dark:text-orange-500 "
              >
                <p className="lg:mt-4 sm:mt-10 text-gray-300">PAL </p>
                <p className="mt-2 text-gray-300">Consultancy</p>
                <p className="mt-2 text-gray-300">Services.</p>
              </Label>
            </Slide>
          </div>
        </div>
      </Slide>

    </>
  );
};

export default MainImage;
