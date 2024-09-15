import React from "react";

const Experience = () => {
  return (
    <>
      <div>
        <img
          src="https://images.unsplash.com/photo-1619659085779-29fcc0e41110?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Private Jet"
          className="w-full h-[600px] object-cover xl:h-[900px] 2xl:h-[1200px] items-center "
        />
      </div>

      <div class="mx-auto my-36 max-w-lg px-4 text-gray-600 md:max-w-screen-lg">
        <h2 class="mr-auto mb-4 text-3xl font-medium lg:text-4xl text-neutral-950">
          Our Experience in the Aviation
        </h2>
        {/* <a href="/" class="text-lg font-medium underline hover:text-blue-600">
            Market
          </a> */}

        <div class="flex flex-col md:flex-row">
          <div>
            <p class="mb-4 md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">
              JetLifly takes pride in providing personalized services that go
              beyond expectations. From the moment you express interest in
              booking a private jet to the completion of your journey, our
              dedicated team ensures every detail is taken care of with
              precision and care.
            </p>
            <p class="md:pr-10 md:text-xl md:leading-relaxed lg:pr-28">
              Our unrivaled expertise in the aviation industry allows us to
              redefine luxury travel. With a fleet of distinctive private jets,
              JetLifly offers an unparalleled experience characterized by
              opulence, cutting-edge technology, and luxurious interiors.
            </p>
          </div>
          <p class="hidden uppercase md:block md:text-7xl">
            Since <br />
            <span class="whitespace-nowrap text-teal-600">20 Years</span>
          </p>
        </div>
      </div>

      <section class="relative lg:max-w-[1200px] m-auto overflow-hidden rounded-[4rem] bg-gray-100 py-12 sm:py-16 lg:py-20">
        <div class="absolute h-72 w-72 scale-125 -right-8 -bottom-10">
          <div class="absolute h-60 w-60 rounded-2xl border-4 border-teal-600"></div>
          <div class="absolute h-60 w-60 translate-x-3 translate-y-3 rounded-2xl border-4 border-teal-600"></div>
          <div class="absolute h-60 w-60 translate-x-6 translate-y-6 rounded-2xl border-4 border-teal-600"></div>
        </div>
        <div class="mx-auto px-4 sm:px-6 lg:px-8">
          <div class="sm:text-center">
            <h2 class="text-3xl font-semibold leading-7 text-neutral-900  lg:text-5xl">
              We are <br class="sm:hidden" />
              growing rapidly
            </h2>
          </div>

          <div class="mx-auto mt-20 grid max-w-screen-lg grid-cols-1 gap-x-8 gap-y-12 text-center sm:text-left md:grid-cols-3">
            <div class="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
              <p class="relative text-5xl font-black text-teal-600">25M</p>
              <p class="relative mt-5 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores doloremque vel
              </p>
            </div>

            <div class="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
              <p class="relative text-5xl font-black text-teal-600">51%</p>
              <p class="relative mt-5 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores doloremque vel
              </p>
            </div>

            <div class="backdrop-blur-lg relative mb-3 rounded-3xl border bg-white/70 px-12 py-10 text-left shadow lg:px-12">
              <p class="relative m-0 text-5xl font-black text-teal-600">
                8529+
              </p>
              <p class="relative mt-5 text-gray-600">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores doloremque vel
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* -------------> <--------------------- */}

      <div class="py-16 lg:max-w-[1200px] m-auto">
        <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-16">
          <div class="lg:bg-gray-100 :lg:bg-er lg:p-16 rounded-[4rem] space-y-6 md:flex flex-row-reverse md:gap-6 justify-center md:space-y-0 lg:items-center">
            <div class="md:5/12 lg:w-1/2 ">
              <img
                src="https://images.pexels.com/photos/356808/pexels-photo-356808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt=""
                loading="lazy"
                width=""
                height=""
                class="w-full h-full object-cover rounded-[4rem]"
              />
            </div>
            <div class="md:7/12 lg:w-1/2">
              <h2 class="text-3xl font-bold text-gray-900 md:text-4xl ">
                Beyond the Basics Explore Unprecedented Comfort with JetLifly
              </h2>
              <p class="my-8 text-gray-600 :text-gray-300">
                Embark on an extraordinary journey with our private jet
                experiences, where opulence meets precision. Immerse <br />
                yourself in bespoke travel services, curated itineraries, <br />
                and seamless journeys tailored just for you.
              </p>
              <div class="divide-y space-y-4 divide-gray-100 :divide-gray-800">
                <div class="mt-8 flex gap-4 md:items-center">
                  <div class="w-12 h-12 flex gap-4 rounded-full bg-indigo-100 :bg-indigo-900/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      class="w-6 h-6 m-auto text-indigo-500 :text-indigo-400"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </div>
                  <div class="w-5/6">
                    <h4 class="font-semibold text-lg text-gray-700 :text-indigo-300">
                      Chat Anytime
                    </h4>
                    <p class="text-gray-500 :text-gray-400">
                      24/7 Chat Support – Connect Anytime, Anywhere.
                    </p>
                  </div>
                </div>
                <div class="pt-4 flex gap-4 md:items-center">
                  <div class="w-12 h-12 flex items-center justify-center gap-4 rounded-full bg-teal-100 :bg-teal-900/20">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-6 h-6 text-teal-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                      />
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                      />
                    </svg>
                  </div>
                  <div class="w-5/6">
                    <h4 class="font-semibold text-lg text-gray-700 :text-teal-300">
                      Elite Travel Solutions
                    </h4>
                    <p class="text-gray-500 :text-gray-400">
                      Elevate your journey, where luxury meets the clouds.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ----------------><----------------------- */}

      <div className="mt-12">
        <div class="relative mx-auto max-w-7xl ">
          <div class="text-center ">
            <h2 class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Wanderlust Chronicles
            </h2>
            <p class="mx-auto mt-3 max-w-2xl text-lg lg:text-2xl text-gray-500 sm:mt-4">
              Join us on a journey of words and wanderlust, as we share tales
              from around the globe.
            </p>
          </div>
        </div>
        <div className="flex  items-center justify-center px-6 py-6">
          <div class="h-96 w-[900px] relative  mx-auto   max-w-screen-lg overflow-hidden rounded-3xl py-32  text-center shadow-lg ">
            <p class="text-white">Published April 24, 2021</p>
            <h1 class="mt-2 text-3xl lg:text-5xl font-bold text-white">
              Aboard the Finest Private Jets
            </h1>
            <p class="mt-6 text-base lg:text-lg text-white">
              Navigating Global Destinations
            </p>
            <div class="mt-6 flex justify-center space-x-2">
              <button class="rounded-lg bg-gray-50 px-2 py-1 font-medium text-gray-900 hover:bg-gray-200">
                New York
              </button>
              <button class="rounded-lg bg-gray-50 px-2 py-1 font-medium text-gray-900 hover:bg-gray-200">
                California
              </button>
              <button class="rounded-lg bg-gray-50 px-2 py-1 font-medium text-gray-900 hover:bg-gray-200">
                Arizona
              </button>
            </div>
            <img
              class="-z-10 absolute top-0 left-0  h-full w-full object-cover "
              src="https://images.pexels.com/photos/4433099/pexels-photo-4433099.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
          </div>
        </div>

        <div class="py-16  ">
          <div class="xl:container m-auto px-6 text-gray-600 md:px-12 xl:px-6 lg:max-w-[1200px]">
            <div class="grid gap-12 md:gap-6 md:grid-cols-2 lg:gap-12">
              <div class="group space-y-6  py-6 px-6 bg-gray-100 rounded-[4rem]">
                <img
                  src="https://images.pexels.com/photos/2603850/pexels-photo-2603850.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-80 w-full rounded-[4rem] object-cover "
                />
                <h3 class="text-3xl font-semibold text-gray-800 :text-white">
                  How much luggage can I take on a private jet?
                </h3>
                <p class="text-gray-600 :text-gray-300">
                  The luggage capacity for a private jet aircraft is given as a
                  volume of cubic feet and as a general rule, this will equate
                  to at least one suitcase and one carry-on item per passenger –
                  based on the maximum number of passengers the aircraft can
                  carry. But many models have more space than this and, as most
                  private jet charter flights do not contain the aircraft’s
                  maximum number of passengers, you’ll usually be able to carry
                  more – including one or two sets of golf clubs even in small
                  jet.
                </p>
                <div class="flex gap-6 items-center">
                  <a
                    href="/"
                    class="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 :hover:bg-gray-800"
                  >
                    <img
                      class="w-8 h-8 object-cover rounded-full"
                      src="https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=1961&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <span class="hidden sm:block font-semibold text-base text-gray-600 :text-gray-200">
                      Sophia
                    </span>
                  </a>
                  <span class="w-max block font-light text-gray-500 sm:mt-0">
                    jan 07 2023
                  </span>
                  <div class="flex gap-2 items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 text-gray-400 :text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>2 min read</span>
                  </div>
                </div>
              </div>
              <div class="group space-y-6 py-6 px-6 bg-gray-100 rounded-[4rem]">
                <img
                  src="https://images.pexels.com/photos/1815384/pexels-photo-1815384.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                  alt="art cover"
                  loading="lazy"
                  width="1000"
                  height="667"
                  class="h-80 w-full rounded-[4rem] object-cover"
                />
                <h3 class="text-3xl font-semibold text-gray-800 :text-white">
                  Places to Travel With Friends, and Why Rent a Private Jet
                  Charter.
                </h3>
                <p class="text-gray-600 :text-gray-300">
                  Embarking on a journey with a group of friends is always a
                  thrilling prospect. The world is brimming with awe-inspiring
                  destinations that beckon with adventure and shared
                  experiences. While commercial flights are the norm, chartering
                  a private jet adds an extra layer of luxury and convenience,
                  elevating the entire travel experience.
                </p>
                <div class="flex flex-wrap gap-6 items-center">
                  <a
                    href="/"
                    class="-ml-1 p-1 rounded-full flex items-center gap-3 hover:bg-gray-50 :hover:bg-gray-800"
                  >
                    <img
                      class="w-8 h-8 object-cover rounded-full"
                      src="https://images.unsplash.com/photo-1496345875659-11f7dd282d1d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt=""
                    />
                    <span class="hidden sm:block font-semibold text-base text-gray-600 :text-gray-200">
                      Tom Helm
                    </span>
                  </a>
                  <span class="w-max block font-light text-gray-500 sm:mt-0">
                    Aug 27 2022
                  </span>
                  <div class="flex gap-2 items-center text-gray-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke-width="1.5"
                      stroke="currentColor"
                      class="w-5 h-5 text-gray-400 :text-gray-600"
                    >
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                    <span>2 min read</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Experience;
