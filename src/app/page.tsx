"use client";

import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import styles from "./page.module.css";
import CarCard from "./components/CarCard";

const CardSwiper: React.FC = () => {
  const [isMobile, setIsMobile] = useState(false);

  // Detect screen size
  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 900px)");

    const handleResize = () => setIsMobile(mediaQuery.matches);
    handleResize();

    mediaQuery.addEventListener("change", handleResize);
    return () => mediaQuery.removeEventListener("change", handleResize);
  }, []);

  const mobileCards = useMemo(
    () => [
      {
        id: 1,
        url: "./mbmw1.jpg",
        name: "BMW M4 Competition",
        content: `The BMW M4 Competition is a high-performance coupe that combines aggressive styling with track-ready engineering. It boasts a 3.0-liter twin-turbo inline-six engine producing 503 hp, paired with BMW's advanced M xDrive all-wheel-drive system.`,
      },
      {
        id: 2,
        url: "./mbmw2.jpg",
        name: "BMW X7 M60i",
        content: `The BMW X7 M60i is a luxury full-size SUV that delivers a refined driving experience with the power of a 4.4-liter V8 engine. It offers three-row seating, cutting-edge technology, and a commanding presence on the road.`,
      },
      {
        id: 3,
        url: "./mbmw3.jpg",
        name: "BMW i4 M50",
        content: `The BMW i4 M50 is a fully electric Gran Coupé that blends M performance with electric mobility. With dual motors producing 536 hp, it accelerates from 0-100 km/h in just 3.9 seconds and offers over 500 km of range.`,
      },
      {
        id: 4,
        url: "./mbmw4.jpg",
        name: "Range Rover Sport",
        content: `The Range Rover Sport is a luxurious and powerful SUV that combines off-road capability with refined comfort. Equipped with advanced suspension systems and a choice of powerful engines, it’s built for adventure and elegance alike.`,
      },
    ],
    []
  );

  const cards = useMemo(
    () => [
      {
        id: 3,
        url: "./bmw3.jpg",
        name: "BMW M5 CS",
        content: `The BMW M5 CS is the most powerful M5 ever built, featuring a 4.4-liter twin-turbo V8 with 627 hp. This limited-edition sports sedan delivers blistering performance, exclusive styling, and track-tuned handling.`,
      },
      {
        id: 4,
        url: "./bmw16.jpg",
        name: "BMW X5 xDrive40i",
        content: `The BMW X5 xDrive40i is a luxury midsize SUV blending performance and utility. With a turbocharged inline-six engine and all-wheel drive, it offers a smooth, confident ride for both city driving and off-road trails.`,
      },
      {
        id: 7,
        url: "./bmw9.jpg",
        name: "BMW 7 Series",
        content: `The BMW 7 Series is a flagship luxury sedan that embodies innovation and elegance. It features cutting-edge technology, a powerful engine lineup, and exceptional comfort for the ultimate driving experience.`,
      },
      {
        id: 8,
        url: "./bmw12.jpg",
        name: "BMW Z4 Roadster",
        content: `The BMW Z4 Roadster is a sporty convertible known for its sleek design and dynamic performance. With a turbocharged engine, responsive handling, and open-air driving excitement, it's built for pure driving pleasure.`,
      },
      {
        id: 9,
        url: "./bmw7.jpg",
        name: "BMW X6 M",
        content: `The BMW X6 M is a high-performance luxury SUV that combines coupe-like styling with M division power. It features a 617 hp twin-turbo V8 engine, aggressive design, and advanced driving dynamics.`,
      },
      {
        id: 10,
        url: "./bmw15.jpg",
        name: "Range Rover Velar",
        content: `The Range Rover Velar is a sleek luxury SUV offering refined design, advanced tech, and versatile performance. It bridges city elegance and off-road capability.`,
      },
    ],
    []
  );

  const selectedCards = useMemo(
    () => (isMobile ? mobileCards : cards),
    [isMobile, mobileCards, cards]
  );

  return (
    <div>
      <Swiper
        modules={[Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop
        speed={1200}
        autoplay={{ delay: 4000, disableOnInteraction: false }}
      >
        {selectedCards.map((card) => (
          <SwiperSlide key={card.id}>
            <div className={styles.main}>
              <CarCard url={card.url} name={card.name} content={card.content} />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Static cards below swiper */}
      <CarCard
        url="/thanos.jpg"
        name="THANOS"
        content={`"I am... inevitable" and "Dread it. Run from it. Destiny arrives all the same."`}
      />
      <CarCard
        url="/w1.jpg"
        name="Endgames"
        content="Heroes reunite post-snap, time-travel to reverse Thanos’ decimation, Tony sacrifices, Steve retires, epic conclusion unfolds."
      />
    </div>
  );
};

export default React.memo(CardSwiper);
