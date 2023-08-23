import { Button } from "@/components/button";
import Image from "next/image";

export default function Home() {
  return (
    <main
      className="min-h-screen mx-auto space-y-48 p-8"
    >
      <section className="relative min-h-[60vh] flex flex-col gap-32 justify-center md:px-20" id="hero">
        <svg className="-rotate-[70deg] absolute -top-60 md:-top-52 -left-32 h-[400px] w-[400px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="sw-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0%" stopColor="rgba(62, 184, 249, 1)"></stop>
              <stop offset="100%" stopColor="rgba(113, 209, 230, 1)"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient)"
            stroke="url(#sw-gradient)"
            strokeWidth="0"
            d="M18.8-32.3c5.9 3.2 11.5 7.4 15.1 13C37.6-13.8 39.3-6.9 40 .4c.7 7.3.4 15-3.3 20.6-3.6 5.5-10.5 8.9-17.2 10-6.7 1-13.1-.3-18.8-1.4-5.8-1.2-10.8-2.3-15.8-4.3-4.9-2.1-9.8-5.1-12.6-9.5-2.8-4.3-3.4-10.1-2.9-15.5.6-5.4 2.4-10.4 3.6-17.5 1.3-7.1 1.9-16.2 6.3-20.3 4.4-4.1 12.5-3.2 19.8-1.7 7.3 1.5 13.7 3.7 19.7 6.9z"
            transform="translate(50 50)"
            style={{
              WebkitTransition: "all 0.3s ease 0s",
              transition: "all 0.3s ease 0s",
            }}
          ></path>
        </svg>
        <div className="relative md:w-3/5 text-center md:self-end mt-28">
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quaerat aspernatur aperiam, illo laborum libero cumque facere velit.</p>
        </div>
        <div className="md:w-3/5 space-y-20 flex flex-col items-center">
          <p className="italic text-center md:text-left">&quot;Lorem ipsum, dolor sit amet consectetur adipisicing elit.&quot;</p>
          <Image src="/images/value-1.svg" width={280} height={280} alt="Value 1" />
        </div>
        <svg className="hidden md:block absolute left-[55%] -bottom-[40%]" width={1000} height={1000} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
          <defs>
            <linearGradient id="hero-gradient" x1="0" x2="1" y1="1" y2="0">
              <stop offset="0%" stopColor="rgba(49, 109, 245, 1)"></stop>
              <stop offset="100%" stopColor="rgba(190, 149, 222, 1)"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#hero-gradient)"
            stroke="url(#hero-gradient)"
            strokeWidth="0"
            d="M15.9-26.2c4.4 1.2 7.5 6 8.9 11 1.4 5 1 10.1 3.1 16.4 2 6.3 6.5 13.8 4.2 17.2-2.2 3.4-11.2 2.8-17.7 6C7.9 27.7 4 34.8-.6 35.8c-4.5 1-9.6-4.1-15.7-7.6-6.1-3.4-13.2-5.2-18.8-9.7-5.5-4.4-9.5-11.4-6.3-16.6 3.3-5.2 13.7-8.6 20.3-11.1 6.7-2.5 9.6-4.1 12.4-6.2 2.9-2.2 5.8-4.7 10.1-7.2s10.1-4.9 14.5-3.6z"
            transform="translate(50 50)"
            style={{
              WebkitTransition: "all 0.3s ease 0s",
              transition: "all 0.3s ease 0s",
            }}
          ></path>
        </svg>
      </section>
      <section className="max-w-6xl mx-auto text-center space-y-24 py-10 scroll-mt-24" id="about">
        <div className="space-y-10">
          <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#316DF5] to-[#BE95DE]">About Us</h2>
          <hr className="border-2 border-[#57C8EE] w-32 mx-auto" />
          <p className="text-lg font-semibold md:px-20">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit, laborum. Expedita sunt commodi recusandae molestiae ipsum repellat minus asperiores non</p>
        </div>
        <div className="w-full space-y-20">
          <p className="text-3xl">Our Values</p>
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:flex-1 h-52 w-52 md:w-full relative">
              <Image src="/images/value-1.svg" fill alt="Value 1" />
            </div>
            <div className="flex-1 text-left space-y-4">
              <h4>Delivering Optimal Efficiency for Your Enterprise</h4>
              <p className="text-justify">At Efficient Excellence, we understand the power of streamlined operations. Our ERP solutions are designed to elevate your enterprise&apos;s efficiency to unprecedented levels.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-20 items-center">
            <div className="md:flex-1 h-52 w-52 md:w-full relative">
              <Image src="/images/value-2.svg" fill alt="Value 1" />
            </div>
            <div className="flex-1 text-left space-y-4">
              <h4>Trustworthy ERP Solutions for Uninterrupted Operations</h4>
              <p className="text-justify">Reliability is the backbone of every successful enterprise. At Reliability Unleashed, our commitment to robust ERP systems ensures that your business processes continue without interruption.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-20 items-center">
            <div className="md:flex-1 h-52 w-52 md:w-full relative">
              <Image src="/images/value-3.svg" fill alt="Value 1" />
            </div>
            <div className="flex-1 text-left space-y-4">
              <h4>Fostering Collaboration and Connectivity Across Your Enterprise</h4>
              <p className="text-justify">In today&apos;s interconnected business landscape, collaboration is key. At Collaborate Nexus, our ERP solutions are more than tools – they&apos;re enablers of seamless collaboration.</p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row-reverse gap-20 items-center">
            <div className="md:flex-1 h-52 w-52 md:w-full relative">
              <Image src="/images/value-4.svg" fill alt="Value 1" />
            </div>
            <div className="flex-1 text-left space-y-4">
              <h4>Empowering Informed Decision-Making Through Data-Driven Insights</h4>
              <p className="text-justify">Innovation thrives on informed decision-making. At Innovative Insights, we transform raw data into actionable intelligence. Our ERP solutions don&apos;t just manage information; they turn it into a strategic advantage.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="mx-auto text-center py-10 scroll-mt-24" id="pricing">
        <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#316DF5] to-[#BE95DE]">Pricing</h2>
        <hr className="border-2 border-[#57C8EE] mt-10 mb-20 w-32 mx-auto" />
        <div className="flex flex-col md:flex-row items-center md:items-stretch gap-8 justify-evenly px-8">
          <div className="flex flex-col shrink-0 md:basis-1/3 min-w-[320px] md:min-w-[unset] max-w-[320px] gap-4 p-5 border border-gray-300 rounded-2xl">
            <h3 className="mt-2">Basic Plan</h3>
            <p className="ml-3">
              <span className="text-4xl font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#316DF5] to-[#BE95DE]">
                $10
              </span>/month
            </p>
            <hr />
            <ul className="flex-1 space-y-2 mb-16 text-left">
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Mencatat barang masuk
              </li>
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Mencatat barang keluar
              </li>
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Mencatat hasil keuntungan
              </li>
            </ul>
            <Button className="w-full py-3" variant="primary">Sign up</Button>
          </div>
          <div className="flex flex-col shrink-0 md:basis-1/3 min-w-[320px] md:min-w-[unset] max-w-[320px] gap-4 p-5 border border-gray-300 rounded-2xl">
            <h3 className="mt-2">Business Plan</h3>
            <p className="ml-3">
              <span className="text-4xl font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#316DF5] to-[#BE95DE]">
                $30
              </span>/month
            </p>
            <hr />
            <ul className="flex-1 space-y-2 mb-16 text-left">
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Mencatat barang masuk
              </li>
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Mencatat barang keluar
              </li>
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Mencatat hasil keuntungan
              </li>
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Dapat menganalisa hasil penjualan dengan Chart
              </li>
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Support 7x24 jam
              </li>
            </ul>
            <Button className="w-full py-3" variant="primary">Sign up</Button>
          </div>
          <div className="flex flex-col shrink-0 md:basis-1/3 min-w-[320px] md:min-w-[unset] max-w-[320px] gap-4 p-5 border border-gray-300 rounded-2xl">
            <h3 className="mt-2">Entreprenuer Plan</h3>
            <p className="ml-3">
              <span className="text-4xl font-semibold inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#316DF5] to-[#BE95DE]">
                $100
              </span>/month
            </p>
            <hr />
            <ul className="flex-1 space-y-2 mb-16 text-left">
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Mencatat barang masuk
              </li>
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Mencatat barang keluar
              </li>
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Mencatat hasil keuntungan
              </li>
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Dapat menganalisa hasil penjualan dengan Chart
              </li>
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Support 7x24 jam
              </li>
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                Export data
              </li>
              <li className="flex items-center gap-2">
                <svg className="shrink-0 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="m10.5 16.2l-4-4l1.4-1.4l2.6 2.6l5.6-5.6l1.4 1.4l-7 7Z"></path></svg>
                AI prediksi penghasilan
              </li>
            </ul>
            <Button className="w-full py-3" variant="primary">Sign up</Button>
          </div>
        </div>
      </section>
      <section className="max-w-5xl pb-40 flex flex-col justify-center items-center mx-auto text-center space-y-10 py-10 scroll-mt-24" id="contact">
        <h2 className="inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#316DF5] to-[#BE95DE]">Contact</h2>
        <hr className="border-2 border-[#57C8EE] w-32 mx-auto" />
        <p className="text-3xl">Let&apos;s discuss on something cool toghether</p>
        <div className="flex items-center gap-4">
          <input type="email" className="border-b-2 border-gray-200 focus:border-blue-200 focus:placeholder:text-gray-300 transition-colors p-4 min-w-[350px] text-lg text-center" placeholder="your-email@example.com" />
          <button className="text-3xl border-2 border-gray-100 hover:border-blue-300 transition-colors rounded-full aspect-square py-2 pl-3 pr-2">
            <svg className="text-[#57C8EE] hover:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M4.4 19.425q-.5.2-.95-.088T3 18.5V14l8-2l-8-2V5.5q0-.55.45-.838t.95-.087l15.4 6.5q.625.275.625.925t-.625.925l-15.4 6.5Z"></path></svg>
          </button>
        </div>
      </section>
    </main>
  )
}
