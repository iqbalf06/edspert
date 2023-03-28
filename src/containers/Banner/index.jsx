import React from "react";
import { Container } from "react-bootstrap";
import style from "./banner.module.css";

function Banner() {
  return (
    <div>
      <div>
        <p
          className={
            "text-white position-absolute top-0 start-0 px-5 fs-1 w-50" +
            " " +
            style.textbanner1
          }
        >
          Jadi expert bersama edspert.id
        </p>
      </div>
      <div>
        <p
          className={
            "text-white position-absolute top-0 start-0 px-5 fs-5 w-50" +
            " " +
            style.textbanner2
          }
        >
          Tingkatkan skill dan pengetahuan bersama para mentor terbaik di
          bidangnya, untuk siapkan karir impian anda.
        </p>
      </div>
    </div>
  );
}

export default Banner;