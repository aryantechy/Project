import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className=" flex  gap-20">
        <div>
          <Image
            src={"/home.png"}
            alt="image"
            height={500}
            width={500}
            className="  rounded-xl   shadow-inner"
          />
        </div>
        <div className="flex flex-wrap items-center justify-center ">
          <div className="">
            <h1 className=" text-5xl text-gray-400  font-bold">
              {" "}
              Your Safety{" "}
            </h1>
          </div>
          <div>
            <h1 className=" text-5xl  text-gray-500 font-bold">
              Our Responsibility
            </h1>
          </div>
        </div>
      </div>
    </main>
  );
}
