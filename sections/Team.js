import { teamdata } from "@/assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import team from "@/pages/team";
import React from "react";

const Team = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="ABOUT US" />
            <p>
              We offer engineering solutions for design, manufacturing, and
              inspection processes, ensuring compliance with international
              standards and providing project-specific support to meet customer
              requirements.
            </p>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />
      </section>
    </>
  );
};

export default Team;
