import Link from "next/link";
import { TitleLogo } from "./Title";
import { BsFacebook } from "react-icons/bs";
import {
  AiOutlineWhatsApp,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import Image from "next/image";
import Logo from "/public/logo.svg";

const Footer = () => {
  return (
    <>
      <footer>
        <div className="container">
          <div className="grid-4">
            <div className="logo">
              <Image
                src={Logo}
                alt="Logo"
                width="400"
                height="200"
                className="cursor-pointer"
                priority
              />
              <br />
              <span>
                Questions? Reach us <br /> Monday – Friday from 9 am to 6 pm
              </span>
              <br />
              <br />
              <h3>+1 001 234 5678</h3>
              <br />
              <Link href="/contact">
                <button className="button-primary">
                  Request for a quotation
                </button>
              </Link>
            </div>
            <ul>
              <h3></h3>
              <li>
                <Link href="/"></Link>
              </li>
              <li>
                <Link href="/"></Link>
              </li>
              <li>
                <Link href="/"></Link>
              </li>
              <li>
                <Link href="/"></Link>
              </li>
              <li>
                <Link href="/"></Link>
              </li>
              <li>
                <Link href="/"></Link>
              </li>
            </ul>
            <ul>
              <h3>COMPANY</h3>
              <li>
                <Link href="/">About agency</Link>
              </li>
              <li>
                <Link href="/">Demo design system</Link>
              </li>
              <li>
                <Link href="/">Contact Us</Link>
              </li>
            </ul>
            <ul>
              <h3>CONNECT</h3>
              <div className="connect">
                <li>
                  <Link href="/">
                    <BsFacebook size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiOutlineWhatsApp size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillInstagram size={25} />
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <AiFillLinkedin size={25} />
                  </Link>
                </li>
              </div>
            </ul>
          </div>
          <div className="legal connect py">
            <div className="text">
              <span>
                © 2024 FINPLAN ENGINEERING SOLUTIONS. ALL RIGHTS RESERVED.
              </span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
