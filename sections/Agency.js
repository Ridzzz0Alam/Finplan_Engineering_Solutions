import Banner from "@/components/Banner";
import Brand from "@/components/Brand";
import Slider from "@/components/Slider";
import Testimonial from "@/components/Testimonial";
import { Title, TitleSm } from "@/components/common/Title";

const Agency = () => {
  return (
    <>
      <section className="agency bg-top">
        <div className="container">
          <div className="heading-title">
            <TitleSm title="OUR SERVICES" /> <br />
            <br />
            <Title
              title="We provide various kinds of design, calculation and documentation analysis"
              className="title-bg"
            />
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Equipment sizing and performance calculations" />
              <p className="desc-p">
                <ol>
                  <li>
                    Performing equipment sizing and performance calculations
                    tailored to individual customer needs for optimal efficiency
                    and effectiveness.
                  </li>
                  <li>
                    Selecting equipment types that balance cost-efficiency, low
                    fouling tendencies, easy manufacturability, and high thermal
                    conductivity.
                  </li>
                  <li>
                    Utilizing the latest technologies and softwares to simulate
                    equipment performance, providing a predictive view of
                    operational outcomes.
                  </li>
                  <li>
                    Specializing in tubular heat exchanger sizing and
                    performance calculations, offering expert guidance and
                    solutions.
                  </li>
                  <li>
                    Extending performance and sizing calculations to a broad
                    range of equipment, meeting various customer specifications
                    and requirements.
                  </li>
                </ol>
              </p>
            </div>
            <div className="right w-40 ml">
              <Slider />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <Slider />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Design and strength calculations:" />

              <p className="desc-p">
                <ol>
                  <li>
                    Designing equipment using advanced 3D and 2D modeling
                    techniques, along with comprehensive manufacturing drawings.
                  </li>
                  <li>
                    Precisely designing all types of equipment to meet industry
                    needs and specifications.
                  </li>
                  <li>
                    Specializing in the design of heat exchangers, pressure
                    vessels, silos, and storage vessels.
                  </li>
                  <li>
                    Producing 3D models, manufacturing drawings, and conducting
                    strength calculations in compliance with key standards like
                    PED (2014/68/EU), ASME Section VIII, Div-1 for pressure
                    vessels, and EN 14015.
                  </li>
                  <li>
                    Conducting FEA modeling to analyse, predict, and enhance
                    equipment performance based on specific needs.
                  </li>
                  <li>
                    Developing comprehensive NDT testing plans to ensure
                    equipment integrity and safety.
                  </li>
                  <li>
                    Designing equipment according to customer-specific standards
                    and requirements.
                  </li>
                </ol>
              </p>
            </div>
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Welding coordinator support:" />
              <p className="desc-p">
                <ol>
                  <li>
                    Providing welding coordinator support to uphold high-quality
                    production standards in line with EN 3834-2.
                  </li>
                  <li>
                    Offering comprehensive support for WPQR, WPS and WPQ as
                    specified by EN 15614-1, EN 9606-1, EN 1090-3, and ASME
                    Section IX.
                  </li>
                  <li>
                    Providing welding coordinator support according to
                    project-specific needs.
                  </li>
                </ol>
              </p>
            </div>
            <div className="right w-40 ml">
              <Slider />
            </div>
          </div>

          <div className="content flex">
            <div className="left w-40 py">
              <Slider />
            </div>
            <div className="right w-60 ml">
              <TitleSm title="Quality control and documentation:" />
              <p className="desc-p">
                <ol>
                  <li>
                    Building and maintaining quality systems compliant with ISO
                    9001, ISO 14001, ISO 45001, EN 1090, and ISO 3834-2,
                    ensuring continuous improvement and regulatory adherence.
                  </li>
                  <li>
                    Ensuring all pressure equipment is documented according to
                    the Pressure Equipment Directive (PED 2014/68/EU), ASME
                    Section VIII, Div-1 for pressure vessels, EN 14015, and EN
                    1090-3.
                  </li>
                  <li>
                    Assisting with the implementation of ISO 9001, ASME Section
                    VIII, Div-1 for pressure vessels and EN 3834-2 standards.
                  </li>
                </ol>
              </p>
            </div>
          </div>

          <div className="content flex1">
            <div className="left w-60 py">
              <TitleSm title="Manufacturing control and inspection:" />
              <p className="desc-p">
                <ol>
                  <li>
                    Offering manufacturing control services on behalf of the
                    customer, ensuring that all production stages adhere to
                    predefined standards and specifications.
                  </li>
                  <li>
                    Performing final inspections in accordance with key
                    regulations including the Pressure Equipment Directive (PED
                    2014/68/EU), ASME Section VIII, Div-1, and EN 14015, to
                    verify compliance and quality before delivery.
                  </li>
                  <li>
                    Thoroughly following the customers ITP during all inspection
                    phases to ensure that all customer quality requirements are
                    met effectively.
                  </li>
                </ol>
                .
              </p>
            </div>
            <div className="right w-40 ml">
              <Slider />
            </div>
          </div>
        </div>
      </section>

      <br />
      <br />
      <br />
    </>
  );
};

export default Agency;
