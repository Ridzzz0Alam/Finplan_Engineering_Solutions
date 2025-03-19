import React from "react";
import { Title, TitleLogo } from "./common/Title";

const Banner = () => {
  return (
    <>
      <section className="banner">
        <div className="container">
          <div>
            <Title title="Are you looking forward to start a new project" />{" "}
            <br />
            <TitleLogo title="Let us take your project to a next level" />
          </div>

          <div>
            <button className="button-primary" href="/contact">
              Contact Us
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Banner;
