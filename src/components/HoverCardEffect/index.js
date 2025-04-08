// "use client";
// import { useState } from "react";
// import { MinusIcon, PlusIcon } from "src/app/constants/svg";

// export default function AnimatedCard({ title, description }) {
//   const [hovered, setHovered] = useState(false);

//   return (
//     <div
//       className={`w-full rounded-2xl overflow-hidden transition-all duration-500 ease-in-out shadow-md cursor-pointer ${
//         hovered ? "bg-[#31767b] text-white h-[300px]" : "bg-[#eef8f9] text-black h-[140px]"
//       }`}
//       onMouseEnter={() => setHovered(true)}
//       onMouseLeave={() => setHovered(false)}
//     >
//       <div className="p-6 flex justify-between items-start">
//         <h3 className="font-semibold text-[18px] leading-snug font-poppins">
//           {title.split(" ").slice(0, -2).join(" ")} <br />
//           {title.split(" ").slice(-2).join(" ")}
//         </h3>
//         <span className="text-2xl">
//           {hovered ? <MinusIcon /> : <span className="text-[#31767b]"><PlusIcon /></span>}
//         </span>
//       </div>

//       {hovered && description.length > 0 && (
//         <div className="px-6 pb-4">
//           <ul className="list-disc list-inside text-sm mt-2 space-y-1">
//             {description.map((item, idx) => (
//               <li key={idx}>{item}</li>
//             ))}
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// }
