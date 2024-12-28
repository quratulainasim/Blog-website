"use client";
import React from "react";
import Image from "next/image";
import { notFound } from "next/navigation";
import Comments from "@/app/components/Comments";
interface Iblogs {
  id: number;
  title: string;
  description: string;
  img_url: string;
  date:string;
}

const blogs: Iblogs[] = [
  {
    id: 1,
    title: "Fuel Your Body,Fuel Your Life",
    description:
      "Our bodies thrive on the food we consume. Science highlights how a balanced diet—combining carbs, proteins, and fats—fuels metabolism and overall health. Natural foods like fruits, vegetables, and nuts provide essential nutrients, while vitamins and minerals boost immunity and energy. Staying hydrated is equally crucial, as water enhances focus and vitality.",
    img_url: "/p1.webp",
    date:"Published on: 20/10/2024",

  },
  {
    id: 2,
    title: "Nature Heals, Science Reveals",
    description:
      "Spending time in nature isn’t just relaxing; it’s transformative. Studies show that greenery reduces stress, sunlight boosts vitamin D for immunity, and outdoor walks improve blood pressure and mood. Taking time to unplug from gadgets can help you recharge and reconnect with yourself.",
    img_url: "/p2.webp",
    date:"Published on: 10/11/2024",
  },
  {
    id: 3,
    title: "Small Habits, Big Changes",
    description:
      "Exercise is a natural confidence booster. Physical activity releases endorphins, promoting happiness, while improved posture enhances self-assurance. Regular, light workouts are more effective long-term than intense bursts, and they also help reduce stress, giving clarity and mental focus.",
    img_url: "/p3.webp",
    date:"Published on: 23/12/2024",
  },
  {
    id: 4,
    title: "Think Healthy, Live Happy",
    description:
      "Positive thinking has a profound effect on the brain. Neuroplasticity shows that consistent self-talk and visualization shape a stronger self-image. Overcoming fears by understanding the brain’s reward system and adopting daily confidence-building habits can lead to a more fulfilled and courageous life.",
    img_url: "/p4.webp",
    date:"Published on: 30/12/2024",
  },
];

interface BlogDetailProps {
  params: { id: string };
}

const BlogDetail = ({ params }: BlogDetailProps) => {
  const blogId = parseInt(params.id, 10);
  const blog = blogs.find((b) => b.id === blogId);

  if (!blog) {
    notFound(); 
  }

  return (
    <div className="text-gray-600 body-font min-h-screen">
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <Image
          src={blog.img_url}
          alt={blog.title}
          className="object-cover object-center rounded-lg  hover:scale-105 transform transition-transform duration-300"
          width={600}
          height={400}
        />
        <div className="text-center lg:w-2/3 w-full mt-6">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            {blog.title}
          </h1>
          <p className="mb-8 leading-relaxed">{blog.description}</p>
          <p className="text-sm text-black mt-2 font-bold">{blog.date}</p>
        </div>
      </div>

      <Comments postId={String(blog.id)} />

    </div>
  );
};

export default BlogDetail;
