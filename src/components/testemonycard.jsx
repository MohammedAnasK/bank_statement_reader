import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  Card,
  CardBody,
  Typography,
  CardHeader,
} from "@material-tailwind/react";

function TestimonialCard({ img, client, title, clientInfo }) {
  return (
    <Card
      shadow={false}
      className="border-slate-700 shadow bg-gradient-to-br from-slate-800 to-slate-950 border-2  rounded-2xl p-6  text-center align-middle"
      data-aos="fade-up"
    >
      <CardHeader color="transparent" floated={false} shadow={false}>
        <Typography
          // color="blue-gray"
          className="lg:mb-20  text-2xl font-bold text-white align-middle"
        >
          &quot;{title}&quot;
        </Typography>
      </CardHeader>
      <CardBody className="px-4 py-0 flex flex-wrap-reverse gap-x-6 justify-between items-center">
        <div>
          <Typography variant="h6" className="text-white">
            {client}
          </Typography>
          <Typography variant="paragraph" className="font-normal !text-white">
            {clientInfo}
          </Typography>
        </div>
        {/* <img src={img} className="max-w-[8rem]" alt={client} /> */}
      </CardBody>
    </Card>
  );
}

const testimonials = [
  {
    title:
      "The team went above and beyond to ensure my issue was resolved quickly and efficiently. Truly outstanding!",
    client: "Jessica Devis",
    clientInfo: "Full Stack Developer @Netflix",
    img: "/image/netflix.svg",
  },
  {
    title:
      "It have broadened my horizons and helped me advance my career. The community is incredibly supportive.",
    client: "Marcell Glock",
    clientInfo: "Graphic Designer, @Coinbase",
    img: "https://www.material-tailwind.com/image/Logo-coinbase.svg",
  },
];

export function TestimonialSection16() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <section className="px-8 py-10 lg:py-28">
      <div className="container mx-auto">
        <Typography
          // Add the desired animation effect here
          variant="h2"
          // color="blue-gray"
          className="mb-4 text-white !text-2xl lg:!text-5xl font-extrabold"
        >
          The heartfelt testimonials of our customers
        </Typography>
        <Typography
          data-aos="fade-left" // Add the desired animation effect here
          variant="lead"
          className="max-w-3xl !text-gray-500 mb-10 lg:mb-20"
        ></Typography>
        <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 align-middle text-center">
          {testimonials.map((props, key) => (
            <TestimonialCard key={key} {...props} />
          ))}
        </div>

        <Card
          shadow={false}
          className="border-slate-700 shadow border-2 mt-8 bg-gradient-to-br from-slate-800 to-slate-950 text-center rounded-2xl p-6 "
          data-aos="fade-up" 
        >
          <CardHeader color="transparent" floated={false} shadow={false}>
            <Typography
              // color="blue-gray"
              className="mb-4 !text-2xl lg:!text-3xl max-w-4xl !leading-snug mx-auto font-bold text-white"
            >
              &quot;Its intuitive design and powerful features make it
              indispensable. I can&apos;t imagine going back to life before
              it!&quot;
            </Typography>
          </CardHeader>
          <CardBody className="items-center mx-auto py-2">
            {/* <img
              src="/image/spotify.svg"
              className="max-w-[8rem] mx-auto grayscale text-white"
              alt="spotify"
            /> */}
            <Typography variant="h6" className="text-white">
              Emma Roberts
            </Typography>
            <Typography variant="paragraph" className="font-normal !text-white">
              Chief Executive @Spotify
            </Typography>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default TestimonialSection16;
