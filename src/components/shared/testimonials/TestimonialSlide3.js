import Image from "next/image";
import Link from "next/link";
import React from "react";

const TestimonialSlide3 = ({ slide, type }) => {
  const { name, desc, id, desig, img, rating = 5 } = slide;
  
  // Generate star rating
  const renderStars = () => {
    return (
      <div className="testimonial__rating">
        {[...Array(5)].map((_, index) => (
          <svg
            key={index}
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill={index < rating ? "#FFB800" : "#E0E0E0"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
          </svg>
        ))}
      </div>
    );
  };

  return (
    <div>
      <div className="testimonial__3__single__inner">
        <div
          className={`testimonial__3__content ${
            type == 2 ? "bg__pink" : ""
          } common__gradient__bg `}
        >
          {renderStars()}
          <p>{desc}</p>
        </div>
        <div className="testimonial__3__author">
          <div className="testimonial__3__img">
            <Image src={img} alt="" />
          </div>
          <div
            className={`testimonial__3__name ${
              type === 2 ? "color__black" : ""
            }`}
          >
            <h6>
              <Link href="#">{name}</Link>
            </h6>
            <p>{desig}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialSlide3;

