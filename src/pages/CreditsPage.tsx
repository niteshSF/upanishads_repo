import Header from "@/components/shared/Header"
import BaseLayout from "@/layouts/BaseLayout"
import LargeHorizontalScroll from "@/assets/large_horizontal_scroll.png"
import { ExternalLink } from "lucide-react"


const credits = [
  {
    role: "Principal Investigator",
    name: "Dr. Amba Kulkarni",
    link: "https://sanskrit.uohyd.ac.in/faculty/amba/",
  },
  {
    role: "Co-investigator",
    name: "Dr. S Vidyashree",
    link: "https://samskritifoundation.org/about/organisation/",
  },
  {
    role: "Concept and Visualization",
    name: "Dr. M.A. Alwar",
    link: "https://samskritifoundation.org/about/organisation/",
  },
  {
    role: "Project Administrator",
    name: "Venkatesh R",
    link: "https://samskritifoundation.org/about/organisation/",
  },
  {
    role: "Software Developer",
    name: "Pranav K Bhaskar",
    link: "https://www.linkedin.com/in/pranav-k-bhaskar/",
  },
  {
    role: "Software Developer",
    name: "Dillibabu Dommaraju",
    link: "https://www.linkedin.com/in/dillibabu-dommaraju/",
  },
  {
    role: "Project Linguist",
    name: "Vinay Iyer",
    link: "https://samskritifoundation.org/about/organisation/",
  },
  {
    role: "Art Work",
    name: "L K Acharya",
    link: "https://samskritifoundation.org/about/organisation/",
  },
  {
    role: "Art Work",
    name: "Basavaraju",
    link: "https://samskritifoundation.org/about/organisation/",
  },
];



const CreditsPage = () => {
  return (
    <BaseLayout>
      <Header />
      <h1 className="mt-10 text-center font-bold text-4xl pb-4 text-darkorange underline capitalize">
        Credits
      </h1>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto py-4">
        {credits.map((credit, index) => (
          <a
            key={index}
            href={credit.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group no-underline"
          >
            <div
              className="transform transition-all duration-300 hover:scale-105 w-[350px] cursor-pointer"
              style={{
                backgroundImage: `url(${LargeHorizontalScroll})`,
                backgroundSize: "100% 100%",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="p-6 text-center">
                <h2 className="text-lg font-semibold text-orange-600 mb-2">
                  {credit.role}
                </h2>
                <div className="w-12 h-1 bg-orange-300 mx-auto mb-4"></div>
                <div className="flex items-center justify-center gap-2">
                  <p className="text-darkbrown font-medium text-center ml-4">
                    {credit.name}
                  </p>
                  <ExternalLink className="w-4 h-4 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </div>
            </div>
          </a>
        ))}
      </div>
    </BaseLayout>
  )
}

export default CreditsPage



// import Header from "@/components/shared/Header"
// import BaseLayout from "@/layouts/BaseLayout"
// import LargeHorizontalScroll from "@/assets/large_horizontal_scroll.png"
// import { ExternalLink } from "lucide-react"

// const credits = [
//   {
//     role: "Principal Investigator",
//     name: "Dr. Amba Kulkarni",
//     link: "https://sanskrit.uohyd.ac.in/faculty/amba/",
//   },
//   {
//     role: "Co-investigator",
//     name: "Dr. S Vidyashree",
//     link: "https://samskritifoundation.org/about/organisation/",
//   },
//   {
//     role: "Concept and Visualization",
//     name: "Dr. M.A. Alwar",
//     link: "https://samskritifoundation.org/about/organisation/",
//   },
//   {
//     role: "Project Administrator",
//     name: "Venkatesh R",
//     link: "https://samskritifoundation.org/about/organisation/",
//   },
//   {
//     role: "Software Developer",
//     name: "Dillibabu Dommaraju",
//     link: "https://www.linkedin.com/in/pranav-k-bhaskar/",
//   },
//   {
//     role: "Project Linguist",
//     name: "Vinay Iyer",
//     link: "https://samskritifoundation.org/about/organisation/",
//   },
//   {
//     role: "Art Work",
//     name: "L K Acharya",
//     link: "https://samskritifoundation.org/about/organisation/",
//   },
//   {
//     role: "Art Work",
//     name: "Basavaraju",
//     link: "https://samskritifoundation.org/about/organisation/",
//   },
// ]

// const CreditsPage = () => {
//   return (
//     <BaseLayout>
//       <Header />
//       <h1 className="mt-10 text-center font-bold text-4xl pb-4 text-darkorange underline capitalize">
//         Credits
//       </h1>
//       <div className="flex flex-wrap justify-center gap-6 max-w-6xl mx-auto py-4">
//         {credits.map((credit, index) => (
//           <a
//             key={index}
//             href={credit.link}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="group no-underline"
//           >
//             <div
//               className="transform transition-all duration-300 hover:scale-105 w-[350px] cursor-pointer"
//               style={{
//                 backgroundImage: `url(${LargeHorizontalScroll})`,
//                 backgroundSize: "100% 100%",
//                 backgroundRepeat: "no-repeat",
//               }}
//             >
//               <div className="p-6 text-center">
//                 <h2 className="text-lg font-semibold text-orange-600 mb-2">
//                   {credit.role}
//                 </h2>
//                 <div className="w-12 h-1 bg-orange-300 mx-auto mb-4"></div>
//                 <div className="flex items-center justify-center gap-2">
//                   <p className="text-darkbrown font-medium text-center ml-4">
//                     {credit.name}
//                   </p>
//                   <ExternalLink className="w-4 h-4 text-orange-600 opacity-0 group-hover:opacity-100 transition-opacity" />
//                 </div>
//               </div>
//             </div>
//           </a>
//         ))}
//       </div>
//     </BaseLayout>
//   )
// }

// export default CreditsPage
