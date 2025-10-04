// components/LayoutSection.tsx

import Image from "next/image";

export default function LayoutSection() {
  return (
    <section className="py-16 bg-white" id="layout">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-[#097199] mb-8 md:mb-12">Layout</h2>

        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 items-center">
          {/* Left: Layout Image + Caption */}
          <div className="bg-gray-50 rounded-xl shadow p-2">
            <Image
              src="/images/layout.png"
              alt="Master Layout"
              width={600}
              height={400}
              className="rounded-md mx-auto"
            />
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-800">
                Complete Development Layout
              </h3>
              <p className="text-gray-600 text-sm mt-1">
                Detailed master plan showing plot distribution, amenities
                placement, and infrastructure development
              </p>
            </div>
          </div>

          {/* Right: Specifications */}
          <div className="space-y-6">
            <div className="bg-white rounded-xl shadow p-6">
              <h4 className="text-xl font-semibold text-gray-800 mb-4">
                Plot Specifications
              </h4>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#097199] rounded-full mr-3"></span>
                  Various plot sizes available
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#097199] rounded-full mr-3"></span>
                  Road-touch premium plots
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#097199] rounded-full mr-3"></span>
                  Well-designed internal roads
                </li>
                <li className="flex items-center">
                  <span className="h-2 w-2 bg-[#097199] rounded-full mr-3"></span>
                  Clear titles and all approvals
                </li>
              </ul>
            </div>

            {/* Button Card */}
            <div className="bg-[#097199] rounded-xl shadow p-6 text-white">
              <h4 className="text-lg font-semibold mb-">
                Get Detailed Plot Information
              </h4>
              <p className="text-sm text-white mb-4">
                Download complete plot list with sizes, pricing, and availability
              </p>
                <a href="#contact">
                <button className="bg-white text-[#097199] font-semibold px-6 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer">
                    Request Plot Details
                </button>
                </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
