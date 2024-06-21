import Image from "next/image";

import k1 from "@/public/images/k-1.webp";
import k2 from "@/public/images/k-2.webp";
import k3 from "@/public/images/k-3.webp";

export default function Zigzag() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-4 sm:px-6 container">
        <div className="py-12 md:py-20 border-t border-gray-800">
          {/* Section header */}
          <div className="max-w-3xl mx-auto text-center pb-12 md:pb-16">
            <div className="inline-flex text-sm font-semibold py-1 px-3 m-2 text-green-600 bg-green-200 rounded-full mb-4">
              Reach goals that matter
            </div>
            <h1 className="h2 mb-4">Một sản phẩm - Một thương hiệu</h1>
            <p className="text-xl text-gray-400">
              - Phong cách - Lịch lãm - Đa màu sắc -
            </p>
          </div>

          {/* Items */}
          <div className="row ">
            <div className="row grid grid-cols-12 py-3 gap-5">
              <div className="col col-span-12 md:col-span-6 md:order-1">
                <Image
                  className=""
                  src={k1}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>

              <div className="col col-span-12 md:col-span-6">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                  More speed. Less spend
                </div>
                <h3 className="h3 mb-3">Undercut</h3>
                <p className="text-xl text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="text-lg text-gray-400 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Hiện đại</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Phong cách</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Xu hướng</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row grid grid-cols-12 py-3 gap-5">
              <div className="col col-span-12 md:col-span-6 md:order-0">
                <Image
                  className=""
                  src={k2}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>

              <div className="col col-span-12 md:col-span-6">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                  More speed. Less spend
                </div>
                <h3 className="h3 mb-3">Side Part</h3>
                <p className="text-xl text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="text-lg text-gray-400 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Hiện đại</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Phong cách</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Xu hướng</span>
                  </li>
                </ul>
              </div>
            </div>
            <div className="row grid grid-cols-12 py-3 gap-5">
              <div className="col col-span-12 md:col-span-6 md:order-1">
                <Image
                  className=""
                  src={k3}
                  width={540}
                  height={405}
                  alt="Features 01"
                />
              </div>

              <div className="col col-span-12 md:col-span-6">
                <div className="font-architects-daughter text-xl text-purple-600 mb-2">
                  More speed. Less spend
                </div>
                <h3 className="h3 mb-3">Mullet </h3>
                <p className="text-xl text-gray-400 mb-4">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <ul className="text-lg text-gray-400 -mb-2">
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Hiện đại</span>
                  </li>
                  <li className="flex items-center mb-2">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Phong cách</span>
                  </li>
                  <li className="flex items-center">
                    <svg
                      className="w-3 h-3 fill-current text-green-500 mr-2 shrink-0"
                      viewBox="0 0 12 12"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M10.28 2.28L3.989 8.575 1.695 6.28A1 1 0 00.28 7.695l3 3a1 1 0 001.414 0l7-7A1 1 0 0010.28 2.28z" />
                    </svg>
                    <span>Xu hướng</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
