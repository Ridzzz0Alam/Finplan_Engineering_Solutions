import { home } from "@/assets/data/dummydata";
import Banner from "@/components/Banner";
import Expertise from "@/components/Expertise";
import ShowCase from "@/components/ShowCase";
import Testimonial from "@/components/Testimonial";
import { Title, TitleLogo, TitleSm } from "@/components/common/Title";
import { BlogCard, Brand } from "@/components/router";
import React from "react";

const Hero = () => {
  return (
    <>
      <section className="hero">
        <div className="container">
          <TitleLogo
            title="FINPLAN   ENGINEERING   SOLUTIONS"
            caption=""
            className="logobg"
          />
          <h1 className="hero-title">WE BRING SOLUTIONS TO YOUR PROBLEM</h1>

          <div className="sub-heading">
            <TitleSm title="DESIGNING" /> <span>.</span>
            <TitleSm title="QUALITY CONTROL" /> <span>.</span>
            <TitleSm title="MANUFACTURING" />
          </div>
        </div>
      </section>
      <section className="hero-sec">
        <div className="container">
          <div className="heading-title">
            <Title title="Turning Blueprints into Reality with Precision & Innovation" />
            <p>
              Engineering excellence starts with superior design. At Finplan, we
              utilize the latest CAD software, simulation tools, and advanced
              engineering principles to develop mechanical solutions that
              optimize performance, reduce costs, and enhance functionality. Our
              expertise spans industries from automotive to industrial
              machinary, ensuring precision and innovation in every project.
            </p>
          </div>
          <div className="hero-content grid-4">
            {home.map((item, i) => (
              <div className="box" key={i}>
                <span className="green">{item.icon}</span> <br />
                <br />
                <h3>{item.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Expertise />
      <Banner />
      <Testimonial />
      <ShowCase />
      <Brand />

      <div className="text-center">
        {/*<Title title='Latest news & articles' />*/}
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
      </div>
      <BlogCard />
    </>
  );
};

export default Hero;
