import { motion } from "framer-motion";
import { GrArchlinux } from "react-icons/gr";

const JsonLine = ({ indent = 0, children }) => (
  <div className="whitespace-pre">
    {" ".repeat(indent * 2)}
    {children}
  </div>
);

const AboutJSON = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="bg-[#0d1117] text-[#c9d1d9] font-mono text-sm p-4 pt-10 rounded-2xl shadow-2xl w-full max-w-5xl mx-auto relative h-full"
    >
      {/* Mac-style window controls */}
      <div className="absolute top-3 left-4 flex gap-2">
        <span className="w-3 h-3 rounded-full bg-red-500"></span>
        <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
        <span className="w-3 h-3 rounded-full bg-green-500"></span>
      </div>

      {/* Linux logo */}
      <div className="absolute top-3 right-4 text-blue-400 text-xl">
        <GrArchlinux />
      </div>

      <div className="text-left overflow-x-auto">
        <JsonLine>{`{`}</JsonLine>
        <JsonLine indent={1}>
          <span className="text-blue-400">"name"</span>: <span className="text-green-400">"Ahmed"</span>,
        </JsonLine>
        <JsonLine indent={1}>
          <span className="text-blue-400">"role"</span>: <span className="text-green-400">"MERN Stack Developer"</span>,
        </JsonLine>
        <JsonLine indent={1}>
          <span className="text-blue-400">"location"</span>: <span className="text-green-400">"Egypt"</span>,
        </JsonLine>
        <JsonLine indent={1}>
          <span className="text-blue-400">"experience years"</span>: <span className="text-green-400">1</span>,
        </JsonLine>

        <JsonLine indent={1}>
          <span className="text-blue-400">"skills"</span>: {`{`}
        </JsonLine>
        <JsonLine indent={3}>
          <span className="text-blue-400">"frontend"</span>: [
        </JsonLine>
        <JsonLine indent={4}>
          <span className="text-green-400">"JavaScript"</span>, <span className="text-green-400">"TypeScript"</span>, <span className="text-green-400">"jQuery"</span>,
        </JsonLine>
        <JsonLine indent={4}>
          <span className="text-green-400">"Sass"</span>, <span className="text-green-400">"Bootstrap"</span>,
          <span className="text-green-400">"Tailwind CSS"</span>,
        </JsonLine>
        <JsonLine indent={4}>
          <span className="text-green-400">"React"</span>, <span className="text-green-400">"React Native"</span>, <span className="text-green-400">"Next.js"</span>, <span className="text-green-400">"Redux"</span>
        </JsonLine>
        <JsonLine indent={3}>],</JsonLine>

        <JsonLine indent={3}>
          <span className="text-blue-400">"backend"</span>: [
          <span className="text-green-400">"Node.js"</span>, <span className="text-green-400">"Express.js"</span>, <span className="text-green-400">"MongoDB"</span>
          ],
        </JsonLine>

        <JsonLine indent={3}>
          <span className="text-blue-400">"languages"</span>: [
        </JsonLine>
        <JsonLine indent={4}>
          <span className="text-green-400">"JavaScript"</span>, <span className="text-green-400">"TypeScript"</span>,
          <span className="text-green-400">"C/C++"</span>, <span className="text-green-400">"Python"</span>
        </JsonLine>
        <JsonLine indent={3}>],</JsonLine>

        <JsonLine indent={3}>
          <span className="text-blue-400">"tools"</span>: [
          <span className="text-green-400">"Git"</span>, <span className="text-green-400">"GitHub"</span>, <span className="text-green-400">"Bash"</span>, <span className="text-green-400">"Linux"</span>, <span className="text-green-400">"Vim"</span>
          ]
        </JsonLine>
        <JsonLine indent={2}>{`}, `}</JsonLine>
        <JsonLine>{`}`}</JsonLine>
        <JsonLine indent={1}>
          <span className="text-gray-500">// Have a great day! 😊</span>
        </JsonLine>
      </div>
    </motion.div>
  );
};

export default AboutJSON;
