import React from "react";
// import bgfooter from "../../assets/img/footer.png";
// import { Image, Row, Col } from "react-bootstrap";
// import style from "./footer.module.css";
import logo from "../../assets/img/iconEdspert.png";
import style from "./footer.module.css";


function Footer() {
  return (
    // <>
    //   <div className="position-relative">
    //     <Image className={style.footer} src={bgfooter} />
    //     <div>
    //       <Image className={'position-absolute top-0 start-0 px-5'+ ' ' + style.logo} src={logo} />
    //       <p className={'position-absolute top-0 start-0 px-5' + ' ' + style.address}>Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581</p>
    //     </div>
    //     {/* <Row>
    //         <p>test</p>
    //         <Col>
    //         <p>test</p>
    //         </Col>
    //     </Row> */}
    //   </div>
    // </>
    <>
      
        <footer class="text-center text-lg-start bg-white text-muted">
          <section class="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
            <div class="me-5 d-none d-lg-block">
              {/* <span>Get connected with us on social networks:</span> */}
            </div>

            <div>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-facebook-f"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-twitter"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-google"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-instagram"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-linkedin"></i>
              </a>
              <a href="" class="me-4 link-secondary">
                <i class="fab fa-github"></i>
              </a>
            </div>
          </section>

          <section class="">
            <div class="container text-center text-md-start mt-5">
              <div class="row mt-3">
                <div class="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
                  <img className={style.logo} src={logo}/><span>Edspert</span>
                  {/* <h6 class="text-uppercase fw-bold mb-4">
                    <i class="fas fa-gem me-3 text-secondary">Edspert</i>
                  </h6> */}
                  <p>
                  Jl. Watugede No.58, Wonorejo, Sariharjo, Kec. Ngaglik, Kabupaten Sleman, Daerah Istimewa Yogyakarta 55581
                  </p>
                </div>

                <div class="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="fw-bold mb-4">Program</h6>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Online Course
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Mini Bootcamp
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Bootcamp
                    </a>
                  </p>
                </div>

                <div class="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
                  <h6 class="fw-bold mb-4">Bidang Ilmu</h6>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Digital Marketing
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Product Management
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      English
                    </a>
                  </p>
                  <p>
                    <a href="#!" class="text-reset text-decoration-none">
                      Programming
                    </a>
                  </p>
                </div>

                <div class="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
                  <h6 class="fw-bold mb-4">Tentang Edspert</h6>
                  <p>
                    <i class="fas fa-home me-3 text-secondary"></i> Bantuan
                  </p>
                  <p>
                    <i class="fas fa-envelope me-3 text-secondary"></i>
                    Kontak Kami
                  </p>
                  <p>
                    <i class="fas fa-phone me-3 text-secondary"></i>Media Sosial
                  </p>
                 
                </div>
              </div>
            </div>
          </section>

          <div
            class="text-center p-4"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.025)" }}
          >
            © 2023 Copyright
            <a class="text-reset text-decoration-none fw-bold" href="#">
              : edspert.id
            </a>
          </div>
        </footer>
     
    </>
  );
}

export default Footer;
