import Bounded from "@/components/Bounded";
import Heading from "@/components/Heading";
import { Button } from "@/components/ui/button";
import { sanityFetch } from "@/sanity/lib/live";
import { POST_QUERY } from "@/sanity/lib/queries";
import Image from "next/image";

export default async function Home() {
  const { data: posts } = await sanityFetch({ query: POST_QUERY });
  return (
    <Bounded
      className="grid grid-cols-3 grid-rows-2 gap-5">

      <div
        className="col-span-full md:col-span-2">
        <Image
          src='/desktop.jpg'
          width={800}
          height={300}
          alt="hero image"
          priority
          className="hidden md:block"
        />

        <Image
          src='/mobile.jpg'
          width={500}
          height={500}
          alt="hero image"
          priority
          className="block md:hidden"
        />
      </div>

      <Heading
        className="font-bold text-black capitalize text-fs-600 col-span-full md:col-span-1 md:col-start-1 md:row-start-2">
        the bright future of web 3.0?
      </Heading>

      <div className="col-span-full md:col-span-1 md:col-start-2 flex flex-col gap-5">

        <p className="">
          We dive into the next evolution of the web that claims to put the power of the platforms back into the hands of the people. But is it really fulfilling its promise?
        </p>

        <Button
          className="rounded-none bg-brand-red text-black hover:bg-black hover:text-custom-white font-bold cursor-pointer">
          READ MORE
        </Button>
      </div>

      <div className="col-start-1 md:col-start-3 md:row-start-1 md:row-span-2 bg-black p-4">
        <Heading
          className="text-brand-orange font-bold text-fs-500">
          New
        </Heading>

        <div
          className="flex flex-col gap-5 justify-around items-center h-full pb-4">
          {posts.map(post => (
            <div
              key={post?.slug?.current}
            >
              <p className="font-semibold capitalize hover:text-brand-orange cursor-pointer">
                {post?.title}
              </p>

              <p className="text-fs-300">
                {post?.summary}
              </p>
            </div>
          ))}
        </div>


      </div>



    </Bounded>
  );
}
