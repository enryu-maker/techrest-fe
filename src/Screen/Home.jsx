import React from "react";
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
function Home() {
  const [activeTab, setActiveTab] = React.useState("html");
  const data = [
    {
      label: "HTML",
      value: "html",
      desc: `Sure, here's a paragraph: "The world of technology is edjkamsdnjaksmndnsajkmdnaskdnaks,dnkjam,snfdmsfn kjfdmn,casjkmdnver-evolving, with advancements continuously reshaping our daily lives. From the rise of artificial intelligence to the proliferation of smart devices, innovation permeates every aspect of society. These changes bring both opportunities and challenges, requiring individuals and organizations to adapt and embrace new ways of thinking. As we navigate this digital landscape, it's essential to stay curious, open-minded, and proactive in learning. By embracing innovation and harnessing the power of technology, we can unlock endless possibilities and shape a brighter future for generations to come."`,
    },
    {
      label: "React",
      value: "react",
      desc: `Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Vue",
      value: "vue",
      desc: `We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.`,
    },
    {
      label: "Angular",
      value: "angular",
      desc: `Because it's about motivating the doers. Because I'm here to follow my dreams and inspire other people to follow their dreams, too.`,
    },
    {
      label: "Svelte",
      value: "svelte",
      desc: `We're not always in the position that we want to be at. We're constantly growing. We're constantly making mistakes. We're constantly trying to express ourselves and actualize our dreams.`,
    },
  ];
  const data1 = [
    {
      heading: "Fine Dine",
      dec: "The all-in-one Restaturant Managment Systme for all types of restaturant formats and food outlets",
      img: "/vegies.png",
    },
    {
      heading: "Fast Food",
      dec: "The all-in-one Restaturant Managment Systme for all types of restaturant formats and food outlets",
      img: "/burger.jpeg",
    },
    {
      heading: "Delicous Coffee",
      dec: "The all-in-one Restaturant Managment Systme for all types of restaturant formats and food outlets",
      img: "/coffee.png",
    },
  ];

  return (
    <div className="font-Rounded tracking-wide text-font-color">
      <section className="px-0 md:px-0">
        <div className="w-full h-screen grid grid-cols-1 md:grid-cols-2">
          <div className="flex w-full h-full bg-page-bg  md:w-full md:h-auto md:flex-col md:justify-center">
            <div className="m-auto p-4 md:p-16 text-center md:text-left text-font-color font-idk">
              <h1 className="text-4xl md:text-7xl">
                Take Our Service & Just Rest
              </h1>
              <p className="py-2 md:py-4 font-Rounded">
                Manages all your restaurant operations efficiently so that you
                <br />
                can focus on growing your brand, like a real boss!
              </p>

              <div className="py-5 md:py-10 flex flex-col md:flex-row items-center justify-center md:justify-start">
                <button className=" bg-idk p-2 md:p-3 px-4 md:px-6 rounded-full tracking-wide font-bold text-white md:mr-4">
                  Our Services
                </button>
                <button className="bg-transparent flex p-2 md:p-3 px-4 md:px-6 rounded-full tracking-wide font-bold text-idk mt-2 md:mt-0">
                  <img src="/play.png" alt="play" className="w-auto h-6 px-2" />
                  Watch Demo
                </button>
              </div>
            </div>
          </div>
          <div className="hidden md:block">
            <img
              src="/pic.jpg"
              alt="restaurant"
              className="h-screen w-full object-cover"
            />
          </div>
        </div>
      </section>

      <section className="px-0 md:px-0">
        <div className="w-full h-screen pl-0">
          <div className="items-center justify-center m-auto pt-10 md:pt-10">
            <h1 className="py-5 md:py-10 pt-0 text-3xl md:text-5xl text-center">
              Best way to manage your Restaurant
            </h1>
            <p className="text-lg text-center">
              A quick and easy-to-use restaurant billing software that makes
              <br />
              managing high order volumes butter smooth
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-5 md:p-10 ml-0 md:ml-0 pb-1">
              {data1.map(({ heading, img, dec }) => (
                <div
                  key={heading}
                  className="border-solid border-2 border-gray-200 p-4 md:p-10 rounded"
                >
                  <img
                    src={`${img}`}
                    alt={img}
                    className="w-auto h-20 flex m-auto items-center justify-center"
                  />
                  <p className="p-2 md:p-4 text-xl md:text-2xl font-semibold">
                    {heading}
                  </p>
                  <p className="text-sm md:text-base">{dec}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="pt-32 pb-0 md:py-0">
        <div className="w-full md:h-screen h-full bg-dark-brown p-4">
          <div className="items-center justify-center m-auto ">
            <h1 className="p-4 md:p-10 pl-0 md:pl-16 pr-0 pb-0 text-3xl md:text-5xl text-center md:text-start text-page-bg w-full">
              Add-ons to supercharge your Restaurant POS
            </h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-white">
              <div className="p-4 md:pl-16 pl-1 pr-0 pb-0 md:w-full">
                <p className="text-sm md:text-lg text-center md:text-start text-page-bg">
                  Bill payment is not the end of the service. That's why we've
                  built smart CRM tools that help you know your customers well
                  and deliver the best to win their trust and loyalty
                </p>
              </div>
              <div className="md:mr-16 flex justify-center md:py-5 md:justify-end">
                <button className="bg-idk px-8 md:px-10 rounded-full py-5 tracking-wide font-bold text-white">
                  Learn More
                </button>
              </div>
            </div>
            <hr className="border-red-600 w-full md:w-full mx-auto mt-4" />

            <div className="w-full pt-4 p-0 md:p-6 pl-0 md:pl-16">
              <Tabs value={activeTab}>
                <TabsHeader
                  className="rounded-none border-none bg-transparent p-0"
                  indicatorProps={{
                    className:
                      "bg-transparent border-b-2 border-gray-900 shadow-none border-idk rounded-none",
                  }}
                >
                  {data.map(({ label, value }) => (
                    <Tab
                      key={value}
                      value={value}
                      onClick={() => setActiveTab(value)}
                      className={
                        activeTab === value ? "text-idk" : "text-white"
                      }
                    >
                      {label}
                    </Tab>
                  ))}
                </TabsHeader>
                <TabsBody className="mt-2 md:mt-4 w-full">
                  {data.map(({ value, desc }) => (
                    <TabPanel
                      key={value}
                      value={value}
                      className="text-font-color bg-page-bg p-4 md:p-10 rounded"
                    >
                      {desc}
                    </TabPanel>
                  ))}
                </TabsBody>
              </Tabs>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
