"use client"
import {
  Swiper as SwiperComponent,
  SwiperSlide,
  SwiperProps as SwiperComponentProps,
} from "swiper/react"
import { Testimonial, TestimonialItem } from "."

import "swiper/css"
import { FC } from "react"
import { cn } from "@/utils"

const testimonials: TestimonialItem[] = [
  {
    title: "Jack F",
    subtitle: "Ex Blackrock PM",
    description:
      "Love how Loch integrated portolio analytics and whale watching into one unified app.",
  },
  {
    title: "Yash P",
    subtitle: "Research, 3poch Crypto Hedge Fund",
    description:
      "I use Loch everyday now. I don't think I could analyze crypto whale trends markets without it. I'm addicted!",
  },
  {
    title: "Shiv S",
    subtitle: "Co-Founder Magik Labs",
    description:
      "Managing my own portfolio is helpful and well designed. What's really interesting is watching the whales though. No one else has made whale tracking so simple.",
  },
]

interface SwiperProps extends SwiperComponentProps {}

const Swiper: FC<SwiperProps> = ({ className, ...props }) => {
  const duplicatedTestimonials = [...testimonials, ...testimonials]

  return (
    <SwiperComponent
      className={cn("flex items-stretch overflow-hidden", className)}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      slidesPerView="auto"
      spaceBetween={10}
      loop
      {...props}
    >
      {duplicatedTestimonials.map((testimonial, index) => (
        <SwiperSlide
          style={{ width: "max-content" }}
          //
          key={index}
        >
          <Testimonial className="h-full" testimonial={testimonial} />
        </SwiperSlide>
      ))}

      {/* Dark on right and left fade */}
      {/* <div
        style={{ zIndex: 9999 }}
        className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-black/50 to-transparent z-10"
      />
      <div
        style={{ zIndex: 9999 }}
        className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-black/50 to-transparent z-10"
      /> */}
    </SwiperComponent>
  )
}

export default Swiper
