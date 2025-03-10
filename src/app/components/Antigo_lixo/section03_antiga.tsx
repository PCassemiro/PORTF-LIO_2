// import { Image } from "@heroui/image";
// import { motion } from "framer-motion";
// import { Code, CodeXml } from "lucide-react";
// export default function ComponentSection03() {
//   return (
//     <section
//       id="section3"
//       className="h-screen snap-start flex  text-white text-3xl"
//     >
//       {/* Geral */}

//       <motion.div className="flex-col container mx-auto px-4 py-8">
//         <h1 className="text-4xl md:text-5xl font-bold text-blue-500 mb-8 border-b border-blue-500 pb-2 inline-block">
//           HABILIDADES
//         </h1>

//         <motion.div
//           className="grid grid-cols-3
//         "
//         >
//           {/* Habilidade 1 */}
//           <motion.div
//             className="flex flex-col h-full gap-48 px-4"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={{
//               hidden: { opacity: 0, y: 50 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: {
//                   staggerChildren: 0.2,
//                   delayChildren: 0.2,
//                 },
//               },
//             }}
//           >
//             {/* Cada filho agora é um motion.div com animações */}
//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, y: 50 }, // Começa invisível e deslocado para baixo
//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                   transition: { duration: 0.5 },
//                 }, // Anima para visível
//               }}
//             >
//               <p className="flex flex-row gap-2 text-orange-500">
//                 <Code className="text-white" />
//                 Html
//               </p>
//               <p className="text-lg text-orange-500">intermediario</p>
//             </motion.div>
//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                   transition: { delay: 0.5, duration: 0.5 },
//                 },
//               }}
//             >
//               <p className="flex flex-row gap-2 text-blue-500">
//                 <Code className="text-white" />
//                 CSS
//               </p>
//               <p className="text-lg text-blue-500">intermediario</p>
//             </motion.div>
//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                   transition: { delay: 1.0, duration: 0.5 },
//                 },
//               }}
//             >
//               <p className="flex flex-row gap-2 text-yellow-300">
//                 <Code className="text-white" />
//                 Javascrip/typescript
//               </p>
//               <p className="text-lg text-yellow-300">intermediario</p>
//             </motion.div>
//           </motion.div>
//           <motion.div className="w-full h-56">
//             <Image
//               alt="foco"
//               src={"/image/grafico.jpg"}
//               height={500}
//               width={600}
//               className="flex  h-auto justify-center items-center   w-[600px] "
//             />
//           </motion.div>

//           {/* Segunda coluna */}
//           <motion.div
//             className="flex flex-col h-full gap-48 px-4 items-end"
//             initial="hidden"
//             whileInView="visible"
//             viewport={{ once: true, amount: 0.2 }}
//             variants={{
//               hidden: { opacity: 0, y: 50 },
//               visible: {
//                 opacity: 1,
//                 y: 0,
//                 transition: {
//                   staggerChildren: 0.2,
//                   delayChildren: 0.2,
//                 },
//               },
//             }}
//           >
//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                   transition: { delay: 1.5, duration: 0.5 },
//                 },
//               }}
//             >
//               <p className="flex flex-row gap-2 text-red-600">
//                 <CodeXml className="text-white" />
//                 Java
//               </p>
//               <p className="text-lg text-blue-500">intermediario</p>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                   transition: { delay: 2.0, duration: 0.5 },
//                 },
//               }}
//             >
//               <p className="flex flex-row gap-2 text-blue-500">
//                 <CodeXml className="text-white" />
//                 Python
//               </p>
//               <p className="text-lg text-yellow-300">basico</p>
//             </motion.div>

//             <motion.div
//               variants={{
//                 hidden: { opacity: 0, y: 50 },
//                 visible: {
//                   opacity: 1,
//                   y: 0,
//                   transition: { delay: 2.5, duration: 0.5 },
//                 },
//               }}
//             >
//               <p className="flex flex-row gap-2 text-orange-500">
//                 <CodeXml className="text-white" />
//                 SQL
//               </p>
//               <p className="text-lg text-blue-500">intermediario</p>
//             </motion.div>
//           </motion.div>
//         </motion.div>
//       </motion.div>
//     </section>
//   );
// }
