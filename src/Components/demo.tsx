

// export default function Technologies() {
//   return (
//     <section className="min-h-screen bg-white px-6 py-8">

//       {/* Header */}
//       <div className="mb-7">
//         <h1 className="text-3xl font-bold text-slate-900">
//           Explore the{" "}
//           <span className="text-pink-500">Technologies</span>
//         </h1>

//         <p className="mt-1 text-sm text-slate-400">
//           Pick one technology per category to build your ideal stack.
//         </p>
//       </div>

//       {/* Main Layout */}
//       <div className="grid grid-cols-1 gap-5 lg:grid-cols-[1fr_165px]">

//         {/* Technology Cards */}
//         <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
//           {technologies.map((tech) => (
//             <div
//               key={tech.name}
//               className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
//             >

//               {/* Icon + Badge */}
//               <div className="flex items-start justify-between">
//                 <div className="flex h-9 w-9 items-center justify-center text-xl">
//                   {tech.icon}
//                 </div>

//                 {tech.badge && (
//                   <span
//                     className={`rounded-full px-2.5 py-1 text-[9px] font-medium ${tech.badgeColor}`}
//                   >
//                     {tech.badge}
//                   </span>
//                 )}
//               </div>

//               {/* Name */}
//               <h2 className="mt-3 text-base font-semibold text-slate-900">
//                 {tech.name}
//               </h2>

//               {/* Description */}
//               <p className="mt-1 min-h-[52px] text-[10px] leading-4 text-slate-400">
//                 {tech.description}
//               </p>

//               {/* Info */}
//               <div className="mt-3 flex items-center justify-between">

//                 <span className="rounded bg-slate-100 px-2 py-1 text-[9px] text-slate-500">
//                   {tech.category}
//                 </span>

//                 <span className="text-[9px] text-slate-400">
//                   {tech.level}
//                 </span>

//                 <span className="text-[10px]">
//                   <span className="text-yellow-400">★</span>{" "}
//                   {tech.rating}
//                 </span>

//               </div>

//               {/* Button */}
//               <button
//                 className="mt-3 w-full rounded-md bg-slate-950 py-2 text-[10px] font-medium text-white transition hover:bg-slate-800"
//               >
//                 Add to Stack
//               </button>

//             </div>
//           ))}
//         </div>

//         {/* Your Stack */}
//         <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
//           <h2 className="text-sm font-semibold text-slate-900">
//             Your Stack
//           </h2>

//           <p className="mt-1 text-[9px] text-slate-400">
//             No technologies selected yet.
//           </p>

//           <div className="mt-4 flex h-28 items-center justify-center rounded-lg border border-dashed border-slate-200">
//             <p className="text-[9px] text-slate-400">
//               Your stack is empty.
//             </p>
//           </div>
//         </div>

//       </div>
//     </section>
//   );
// }