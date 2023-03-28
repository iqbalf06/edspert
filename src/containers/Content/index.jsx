import React from 'react'
import Carousel from "better-react-carousel";
import { Container } from "react-bootstrap";
import Card from "../../components/Card";
import Flutter_icon from "../../assets/img/flutter_logo.png";

function Content() {
  return (
    <div style={{backgroundColor: "#EFF4FA"}}>
    <Container className="py-lg-5">
      <h1 className="text-center">List Bootcamp</h1>
      <div className="my-5">
        <Carousel cols={3} rows={1} gap={20}>
          <Carousel.Item>
            <Card
              logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png"
              type="Intensive Bootcamp"
              title="Programming Laravel"
              subtitle="Fullstack Development with Laravel 9"
              batch="Januari 2023"
              mentor="Mas William, Mas Farel"
              price="Rp 2.060.000"
              promo="Rp 560.000"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card
              logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              type="Intensive Bootcamp"
              title="Programming React JS"
              subtitle="Being Professional Front End Developer"
              batch="Februari 2023"
              mentor="Mas Ayyub, Mas Ade"
              price="Rp 2.090.000"
              promo="Rp 590.000"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card
              logo={Flutter_icon}
              type="Intensive Bootcamp"
              title="Programming Flutter"
              subtitle="Expert Mobile Development with Dart"
              batch="Meret 2023"
              mentor="Mas Candra, Mas Krisna"
              price="Rp 2.990.000"
              promo="Rp 420.000"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card
              logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
              type="Intensive Bootcamp"
              title="Programming Next JS"
              subtitle="Getting Started with Next JS"
              batch="Maret 2023"
              mentor="Mas Rian, Mas Abyan"
              price="Rp 3.100.000"
              promo="Rp 460.000"
            />
          </Carousel.Item>
        </Carousel>
      </div>
      <h1 className="text-center">Best Seller</h1>
      <div className="my-5">
        <Carousel cols={3} rows={1} gap={20}>
          <Carousel.Item>
            <Card
              logo="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Laravel.svg/985px-Laravel.svg.png"
              type="Intensive Bootcamp"
              title="Programming Laravel"
              subtitle="Mastering Fullstack Development Laravel 9"
              batch="Januari 2023"
              mentor="Mas William, Mas Farel"
              price="Rp 2.060.000"
              promo="Rp 560.000"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card
              logo="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
              type="Intensive Bootcamp"
              title="Programming React JS"
              subtitle="Getting Started with React JS"
              batch="Februari 2023"
              mentor="Mas Ayyub, Mas Ade"
              price="Rp 2.090.000"
              promo="Rp 590.000"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card
              logo={Flutter_icon}
              type="Intensive Bootcamp"
              title="Programming Flutter"
              subtitle="Getting Started with Flutter and Dart"
              batch="Maret 2023"
              mentor="Mas Candra, Mas Krisna"
              price="Rp 2.990.000"
              promo="Rp 420.000"
            />
          </Carousel.Item>
          <Carousel.Item>
            <Card
              logo="https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Nextjs-logo.svg/800px-Nextjs-logo.svg.png"
              type="Intensive Bootcamp"
              title="Programming Next JS"
              subtitle="Getting Started with Next JS"
              batch="Maret 2023"
              mentor="Mas Rian, Mas Abyan"
              price="Rp 3.100.000"
              promo="Rp 460.000"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </Container>
  </div>
  )
}
export default Content;
