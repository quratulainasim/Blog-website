import React from "react";
import Image from "next/image";
import Link from "next/link";

interface Iblogs {
  id: number;
  title: string;
  description: string;
  img_url: string;
  date: string;
}

const blogs: Iblogs[] = [
  {
    id: 1,
    title: "Fuel Your Body,Fuel Your Life",
    description:
      "Our bodies thrive on the food we consume. Science highlights how a balanced diet—combining carbs, proteins, and fats—fuels metabolism and overall health. Natural foods like fruits, vegetables, and nuts provide essential nutrients, while vitamins and minerals boost immunity and energy. Staying hydrated is equally crucial, as water enhances focus and vitality.",
    img_url: "/p1.webp",
    date: "20/10/2024",
  },
  {
    id: 2,
    title: "Nature Heals, Science Reveals",
    description:
      "Spending time in nature is not just relaxing; it is transformative. Studies show that greenery reduces stress, sunlight boosts vitamin D for immunity, and outdoor walks improve blood pressure and mood. Taking time to unplug from gadgets can help you recharge and reconnect with yourself.",
    img_url: "/p2.webp",
    date: "10/11/2024",
  },
  {
    id: 3,
    title: "Small Habits, Big Changes",
    description:
      "Exercise is a natural confidence booster. Physical activity releases endorphins, promoting happiness, while improved posture enhances self-assurance. Regular, light workouts are more effective long-term than intense bursts, and they also help reduce stress, giving clarity and mental focus.",
    img_url: "/p3.webp",
    date: "23/12/2024",
  },
  {
    id: 4,
    title: "Think Healthy, Live Happy",
    description:
      "Positive thinking has a profound effect on the brain. Neuroplasticity shows that consistent self-talk and visualization shape a stronger self-image. Overcoming fears by understanding the brain is reward system and adopting daily confidence-building habits can lead to a more fulfilled and courageous life.",
    img_url: "/p4.webp",
    date: "30/12/2024",
  },
];

const Blogs = () => {
  return (
    <div className="container px-5 py-24 mx-auto">
      <div className="flex flex-wrap -mx-4 -mb-10 text-center">
        {blogs.map((data) => (
          <div key={data.id} className="p-4 md:w-1/2 w-full">
            <div className="h-full rounded-lg overflow-hidden">
              <Link href={`/blogs/${data.id}`}>
                <Image
                  src={data.img_url}
                  alt={data.title}
                  className="object-cover object-center w-full h-64"
                  width={1200}
                  height={500}
                />
              </Link>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-600 mb-3">
                  {data.title}
                </h2>
                <p className="leading-7 text-gray-500 text-base">
                  {data.description}
                </p>
                <p className="text-sm text-black mt-2 font-bold">{data.date}</p>
                <Link href={`/blogs/${data.id}`}>
                  <button className="px-2 py-3 mt-5 text-center border bg-slate-600 text-slate-50 rounded-md hover:bg-slate-400">
                    Read More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blogs;
