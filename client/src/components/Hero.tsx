import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { FaGithub, FaArrowRight } from "react-icons/fa";

const techs = [
  "React",
  "Next.js",
  "TypeScript",
  "Node.js",
  "MongoDB",
  "Express",
  "Docker",
  "OpenAI"
];

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-black text-white">

      {/* Background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#00ff6620,transparent_70%)]"></div>

      {/* Matrix Overlay */}
      <div className="absolute inset-0 opacity-10 bg-[url('/matrix.png')] bg-cover"></div>

      <div className="relative z-10 container mx-auto px-6 min-h-screen flex items-center">

        <div className="grid lg:grid-cols-2 gap-16 items-center w-full">

          {/* Left */}

          <motion.div
            initial={{ opacity:0,x:-60 }}
            animate={{ opacity:1,x:0 }}
            transition={{ duration:1 }}
          >

            <p className="text-green-400 tracking-[4px] mb-6">
              // Welcome To My Portfolio
            </p>

            <h1 className="text-6xl lg:text-7xl font-black leading-tight">

              <span className="text-green-400">
                MS
              </span>

              <br/>

              Masud

            </h1>

            <div className="text-3xl mt-8 h-16">

              <TypeAnimation
                sequence={[
                  "Full Stack Developer",
                  2000,
                  "AI Automation Engineer",
                  2000,
                  "React Developer",
                  2000,
                  "Node.js Developer",
                  2000,
                ]}
                speed={50}
                repeat={Infinity}
              />

            </div>

            <p className="text-gray-400 mt-8 text-lg leading-8 max-w-xl">

              Building modern AI-powered web applications,
              automation systems and scalable SaaS products
              using React, Node.js, MongoDB and OpenAI.

            </p>

            <div className="flex gap-5 mt-10">

              <a
                href="https://github.com/aetherx-ai"
                target="_blank"
                className="px-8 py-4 bg-green-500 rounded-xl font-bold flex items-center gap-3 hover:scale-105 transition"
              >

                <FaGithub />

                GitHub

              </a>

              <button
                className="border border-green-500 px-8 py-4 rounded-xl flex items-center gap-3 hover:bg-green-500/10 transition"
              >

                Hire Me

                <FaArrowRight/>

              </button>

            </div>

            <div className="flex flex-wrap gap-3 mt-12">

              {techs.map((tech)=>(
                <span
                  key={tech}
                  className="border border-green-500/40 px-4 py-2 rounded-full text-sm hover:bg-green-500 hover:text-black transition"
                >
                  {tech}
                </span>
              ))}

            </div>

          </motion.div>

          {/* Right */}

          <motion.div
            initial={{ opacity:0,x:60 }}
            animate={{ opacity:1,x:0 }}
            transition={{ duration:1 }}
          >

            <div className="rounded-3xl border border-green-500/30 bg-[#07110a] p-8 shadow-[0_0_60px_rgba(0,255,100,.15)]">

<pre className="text-green-400 text-sm overflow-auto">

{`const developer = {

  name: "MASUD",

  role: "Full Stack Developer",

  skills: [
    "React",
    "Next.js",
    "Node.js",
    "MongoDB",
    "OpenAI"
  ],

  passion:"Building AI Products"

}`}

</pre>

            </div>

          </motion.div>

        </div>

      </div>

    </section>
  );
}