import React from "react";
import bgfooter from "../../assets/img/footer.png";
import { Image, Row, Col } from "react-bootstrap";
import style from "./footer.module.css";
import logo from "../../assets/img/logo_Edspert.png";

function Footer() {
  return (
    <>
      <div className="position-relative">
        <Image className={style.footer} src={bgfooter} />
        <div>
          <Image className={'position-absolute top-0 start-0 px-5'+ ' ' + style.logo} src={logo} />
          <p className={'position-absolute top-0 start-0 px-5' + ' ' + style.address}>Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>
        </div>
        <Row>
            <p>test</p>
            <Col>
            <p>test</p>
            </Col>
        </Row>
      </div>
    </>
  );
}

export default Footer;
