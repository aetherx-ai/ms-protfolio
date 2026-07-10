import { supabase } from "@/lib/supabase";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Github,
  ExternalLink,
  Mail,
  Download,
  Briefcase,
  Code2,
  Smartphone,
  Headphones,
} from "lucide-react";
import { useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";

/**
 * Design Philosophy: Cyberpunk Minimalism
 * - Dark terminal-inspired aesthetic with neon green/cyan accents
 * - High contrast, geometric precision, asymmetric layouts
 * - Monospace typography for technical authenticity
 * - 3D animated background for visual depth
 */

export default function Home() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  const { error } = await supabase.from("contacts").insert([
    {
      name: formData.name,
      email: formData.email,
      message: formData.message,
    },
  ]);

  if (error) {
    console.error(error);
    alert("Message send failed!");
    return;
  }

  setSubmitted(true);

  setFormData({
    name: "",
    email: "",
    message: "",
  });
};

  const handleResumeDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'MS Masud Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* 3D Animated Background */}
      <AnimatedBackground />

      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-sm border-b border-[#333333] z-50">
        <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
          <div className="font-mono text-lg font-bold neon-glow">Ms</div>
          <div className="flex gap-6 font-mono text-sm">
            <a href="#projects" className="hover:text-[#00FF41] transition-neon">Projects</a>
            <a href="#skills" className="hover:text-[#00FF41] transition-neon">Skills</a>
            <a href="#contact" className="hover:text-[#00FF41] transition-neon">Contact</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
        <div 
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: "url('https://d2xsxph8kpxj0f.cloudfront.net/310519663227209456/kcAA5xRVEU7Tqage8GVBvg/hero-bg-cyberpunk-mYVTsvCoQRcnY9PmKZnUQf.webp')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/60 z-1" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="animate-fade-in-up">
              <div className="font-mono text-[#64748B] text-sm mb-4">// Welcome to my portfolio</div>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-4 font-mono neon-glow leading-tight">
                MS Masud
              </h1>
              <p className="text-xl md:text-2xl text-[#94a3b8] mb-6 font-mono">
                Full Stack Web Developer
                AI Automation Developer.
              </p>
              <p className="text-base md:text-lg text-[#94a3b8] mb-8 leading-relaxed max-w-lg">
                I build modern web applications, AI agents, automation systems, and SaaS products using React, Next.js, Node.js, MongoDB, and OpenAI APIs.
              </p>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <a href="https://github.com/aetherx-ai" target="_blank" rel="noopener noreferrer">
                  <Button className="w-full sm:w-auto bg-[#00FF41] text-black hover:bg-[#00FF41]/80 font-mono font-bold transition-neon">
                    <Github className="mr-2 h-4 w-4" />
                    GitHub
                  </Button>
                </a>
                <a href="#contact">
                  <Button variant="outline" className="w-full sm:w-auto border-[#00FF41] text-[#00FF41] hover:bg-[#00FF41]/10 font-mono font-bold transition-neon">
                    Get in Touch
                  </Button>
                </a>
              </div>

              {/* Tech Stack Icons */}
              <div className="font-mono text-sm text-[#64748B] mb-4">// Tech Stack</div>
              <div className="flex flex-wrap gap-3">
                {["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "Express.js", "Docker", "MongoDB","AWS"].map((tech) => (
                  <span key={tech} className="px-3 py-1 bg-[#0a0a0a] border border-[#333333] rounded text-[#00FF41] text-xs font-mono hover:neon-border transition-neon">
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Side - Code Block Animation */}
            <div className="hidden lg:block">
              <div className="bg-[#0a0a0a] border border-[#333333] rounded p-6 font-mono text-sm neon-border">
                <div className="text-[#64748B]">
                  <div className="mb-4">
                    <span className="text-[#00FFFF]">const</span> <span className="text-[#00FF41]">developer</span> = {"{"}
                  </div>
                  <div className="ml-4 space-y-2">
                    <div><span className="text-[#94a3b8]">name:</span> <span className="text-[#00FF41]">"MS MASUD"</span>,</div>
                    <div><span className="text-[#94a3b8]">role:</span> <span className="text-[#00FF41]">" Full Stack Web Developer & AI Automation Developer."</span>,</div>
                    <div><span className="text-[#94a3b8]">skills:</span> [<span className="text-[#00FF41]">"React",Next.js",
                    "Node.js","Python","OpenAI","n8n"</span>],</div>
                    <div><span className="text-[#94a3b8]">passion:</span> <span className="text-[#00FF41]">"Building AI Solutions"</span></div>
                  </div>
                  <div>{"}"}</div>
                </div>
                <div className="mt-4 text-[#00FF41] cursor-blink">▌</div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
{/* Premium Stats Section */}
<section className="relative py-20 bg-gradient-to-b from-black via-[#050505] to-black border-y border-[#1f1f1f] overflow-hidden">

  {/* Background Glow */}
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(0,255,65,0.08),transparent_70%)]" />

  <div className="relative max-w-7xl mx-auto px-6">

    <div className="text-center mb-14">
      <p className="text-[#00FF41] font-mono uppercase tracking-[6px] text-sm">
        // Achievements
      </p>

      <h2 className="text-4xl md:text-5xl font-bold mt-3">
        Numbers That Matter
      </h2>

      <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
        Building high-performance web applications, AI solutions, and scalable
        backend systems.
      </p>
    </div>

    <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">

      {[
        {
          number: "25+",
          title: "Projects",
          desc: "Completed Successfully",
        },
        {
          number: "10+",
          title: "Technologies",
          desc: "Modern Stack",
        },
        {
          number: "100%",
          title: "Responsive",
          desc: "All Devices",
        },
        {
          number: "24/7",
          title: "Support",
          desc: "Quick Response",
        },
      ].map((item) => (
        <div
          key={item.title}
          className="group relative overflow-hidden rounded-2xl border border-[#222] bg-[#0a0a0a]/70 backdrop-blur-md p-8 text-center transition-all duration-300 hover:border-[#00FF41] hover:-translate-y-2"
        >
          {/* Neon Line */}
          <div className="absolute top-0 left-0 h-1 w-full bg-[#00FF41] scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />

          <h3 className="text-5xl font-extrabold text-[#00FF41] mb-3">
            {item.number}
          </h3>

          <h4 className="text-xl font-semibold text-white">
            {item.title}
          </h4>

          <p className="text-gray-400 mt-2 text-sm">
            {item.desc}
          </p>
        </div>
      ))}

    </div>

  </div>
</section>

{/* Services Section */}
<section id="services" className="py-20">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <h2 className="text-4xl font-bold text-[#00FF41]">
        Services
      </h2>
      <p className="text-gray-400 mt-3">
        What I can do for you
      </p>
    </div>

    <div className="grid md:grid-cols-3 gap-6">

      <div className="border border-[#00FF41]/30 rounded-xl p-6 bg-black/40">
        <h3 className="text-xl font-bold text-[#00FF41] mb-3">
          🌐 Full Stack Development
        </h3>
        <p className="text-gray-400">
          Modern websites using React, Next.js, Node.js and MongoDB.
        </p>
      </div>

      <div className="border border-[#00FF41]/30 rounded-xl p-6 bg-black/40">
        <h3 className="text-xl font-bold text-[#00FF41] mb-3">
          🤖 AI Automation
        </h3>
        <p className="text-gray-400">
          AI Chatbots, AI Agents and business automation solutions.
        </p>
      </div>

      <div className="border border-[#00FF41]/30 rounded-xl p-6 bg-black/40">
        <h3 className="text-xl font-bold text-[#00FF41] mb-3">
          ⚡ API & Database
        </h3>
        <p className="text-gray-400">
          REST API development with Express.js and MongoDB.
        </p>
      </div>

    </div>
  </div>
</section>
      {/* Projects Section */}
      <section id="projects" className="py-20 bg-black relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <div className="font-mono text-[#00FF41] text-sm mb-2">// Featured Work</div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 neon-glow">Projects</h2>
            <div className="w-16 h-1 bg-[#00FF41]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              {
                title: "E-Commerce Platform",
                description: "Full-stack e-commerce solution with real-time inventory management, payment processing, and admin dashboard.",
                tech: ["React", "Node.js", "PostgreSQL", "Stripe"],
                demo: "#",
                repo: "#"
              },
              {
                title: "Task Management App",
                description: "Collaborative task management tool with real-time updates, team collaboration features, and analytics.",
                tech: ["React", "Firebase", "Tailwind CSS"],
                demo: "#",
                repo: "#"
              },
              {
                title: "AI Content Generator",
                description: "SaaS application for generating marketing content using machine learning with subscription management.",
                tech: ["Next.js", "OpenAI API", "Supabase"],
                demo: "#",
                repo: "#"
              },
              {
                title: "Data Visualization Dashboard",
                description: "Real-time analytics dashboard with interactive charts, data filtering, and export capabilities.",
                tech: ["React", "D3.js", "Express", "MongoDB"],
                demo: "#",
                repo: "#"
              }
            ].map((project, idx) => (
              <Card key={idx} className="bg-[#0a0a0a] border-[#333333] hover:border-[#00FF41] transition-neon p-6 group">
                <h3 className="text-lg md:text-xl font-bold font-mono mb-3 text-[#00FF41] group-hover:neon-glow transition-neon">
                  {project.title}
                </h3>
                <p className="text-[#94a3b8] mb-4 text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 bg-[#1e293b] text-[#00FFFF] rounded font-mono">
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3">
                  <a href={project.demo} className="flex items-center gap-2 text-[#00FF41] hover:text-[#00FFFF] transition-neon font-mono text-sm">
                    <ExternalLink className="h-4 w-4" /> Demo
                  </a>
                  <a href={project.repo} className="flex items-center gap-2 text-[#00FF41] hover:text-[#00FFFF] transition-neon font-mono text-sm">
                    <Github className="h-4 w-4" /> Code
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-[#0a0a0a] relative">
        <div className="max-w-6xl mx-auto px-4">
          <div className="mb-16">
            <div className="font-mono text-[#00FF41] text-sm mb-2">// Technical Arsenal</div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 neon-glow">Skills & Expertise</h2>
            <div className="w-16 h-1 bg-[#00FF41]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                category: "Frontend",
                skills: [
                  { name: "React", level: 95 },
                  { name: "TypeScript", level: 90 },
                  { name: "Tailwind CSS", level: 92 }
                ]
              },
              {
                category: "Backend",
                skills: [
                  { name: "Node.js", level: 88 },
                  { name: "Express", level: 85 },
                  { name: "PostgreSQL", level: 87 }
                ]
              },
              {
                category: "DevOps & Tools",
                skills: [
                  { name: "Docker", level: 82 },
                  { name: "AWS", level: 80 },
                  { name: "Git", level: 95 }
                ]
              }
            ].map((skillGroup, idx) => (
              <div key={idx} className="bg-black border border-[#333333] rounded p-6 hover:border-[#00FF41] transition-neon">
                <h3 className="text-lg font-bold font-mono text-[#00FF41] mb-6">{skillGroup.category}</h3>
                <div className="space-y-4">
                  {skillGroup.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2 font-mono text-sm">
                        <span className="text-[#94a3b8]">{skill.name}</span>
                        <span className="text-[#00FF41]">{skill.level}%</span>
                      </div>
                      <div className="w-full bg-[#1e293b] rounded h-2 overflow-hidden">
                        <div
                          className="bg-[#00FF41] h-full transition-all duration-500 rounded"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
<section id="testimonials" className="py-20">
  <div className="max-w-6xl mx-auto px-6">

    <h2 className="text-4xl font-bold text-center mb-12">
      Testimonials
    </h2>

    <div className="grid md:grid-cols-2 gap-6">

      <div className="border rounded-xl p-6 border-[#00FF41]/30 bg-black/40">
        <p className="text-gray-300">
          "Outstanding work. Fast communication and excellent quality."
        </p>

        <h3 className="mt-4 font-bold text-[#00FF41]">
          Demo Client
        </h3>
      </div>

      <div className="border rounded-xl p-6 border-[#00FF41]/30 bg-black/40">
        <p className="text-gray-300">
          "Highly recommended for React and AI projects."
        </p>

        <h3 className="mt-4 font-bold text-[#00FF41]">
          Demo Startup
        </h3>
      </div>

    </div>

  </div>
    <section id="faq" className="py-20 bg-black">
  <div className="max-w-5xl mx-auto px-4">

    <div className="mb-12 text-center">
      <div className="font-mono text-[#00FF41] text-sm mb-2">
        // Frequently Asked Questions
      </div>

      <h2 className="text-4xl md:text-5xl font-bold font-mono neon-glow">
        FAQ
      </h2>
    </div>

    <div className="space-y-6">

      <div className="bg-[#0a0a0a] border border-[#333333] rounded-xl p-6 hover:border-[#00FF41] transition-all">
        <h3 className="text-[#00FF41] font-bold text-xl mb-3">
          🚀 How long does a website take?
        </h3>

        <p className="text-gray-400">
          Usually 3–7 days depending on the project size and requirements.
        </p>
      </div>

      <div className="bg-[#0a0a0a] border border-[#333333] rounded-xl p-6 hover:border-[#00FF41] transition-all">
        <h3 className="text-[#00FF41] font-bold text-xl mb-3">
          🤖 Do you build AI applications?
        </h3>

        <p className="text-gray-400">
          Yes. I develop AI Chatbots, AI Agents, Automation Systems and AI SaaS applications.
        </p>
      </div>

      <div className="bg-[#0a0a0a] border border-[#333333] rounded-xl p-6 hover:border-[#00FF41] transition-all">
        <h3 className="text-[#00FF41] font-bold text-xl mb-3">
          📱 Is the website mobile responsive?
        </h3>

        <p className="text-gray-400">
          Yes. Every website is fully responsive for Mobile, Tablet and Desktop.
        </p>
      </div>

      <div className="bg-[#0a0a0a] border border-[#333333] rounded-xl p-6 hover:border-[#00FF41] transition-all">
        <h3 className="text-[#00FF41] font-bold text-xl mb-3">
          🔥 Do you provide support?
        </h3>

        <p className="text-gray-400">
          Yes. I provide support after project delivery.
        </p>
      </div>

      <div className="bg-[#0a0a0a] border border-[#333333] rounded-xl p-6 hover:border-[#00FF41] transition-all">
        <h3 className="text-[#00FF41] font-bold text-xl mb-3">
          💻 What technologies do you use?
        </h3>

        <p className="text-gray-400">
          React, Next.js, Node.js, Express.js, MongoDB, Tailwind CSS, TypeScript and OpenAI API.
        </p>
      </div>

    </div>

  </div>
</section>
</section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-[#0a0a0a] relative">
        <div className="max-w-4xl mx-auto px-4">
          <div className="mb-16 text-center">
            <div className="font-mono text-[#00FF41] text-sm mb-2">// Get in Touch</div>
            <h2 className="text-4xl md:text-5xl font-bold font-mono mb-4 neon-glow">Contact Me</h2>
            <p className="text-[#94a3b8] max-w-2xl mx-auto text-sm md:text-base">
              Have a project in mind or want to collaborate? I'd love to hear from you. Drop me a message and I'll get back to you as soon as possible.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="bg-black border border-[#333333] rounded p-6 neon-border">
              <div className="flex items-center gap-4 mb-4">
                <Mail className="h-6 w-6 text-[#00FF41]" />
                <div>
                  <h3 className="font-mono font-bold text-[#00FF41]">Email</h3>
                  <p className="text-[#94a3b8] text-sm">masudmim0725@gmail.com</p>
                </div>
              </div>
            </div>
            <div className="bg-black border border-[#333333] rounded p-6 neon-border">
              <div className="flex items-center gap-4 mb-4">
                <Github className="h-6 w-6 text-[#00FF41]" />
                <div>
                  <h3 className="font-mono font-bold text-[#00FF41]">GitHub</h3>
                  <p className="text-[#94a3b8] text-sm">github.com/aetherx-ai</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="bg-black border border-[#333333] rounded p-6 md:p-8 neon-border">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block font-mono text-[#00FF41] text-sm mb-2">Name</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  className="w-full bg-[#0a0a0a] border border-[#333333] rounded px-4 py-2 text-white font-mono text-sm focus:border-[#00FF41] focus:outline-none transition-neon"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block font-mono text-[#00FF41] text-sm mb-2">Email</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full bg-[#0a0a0a] border border-[#333333] rounded px-4 py-2 text-white font-mono text-sm focus:border-[#00FF41] focus:outline-none transition-neon"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label className="block font-mono text-[#00FF41] text-sm mb-2">Message</label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                className="w-full bg-[#0a0a0a] border border-[#333333] rounded px-4 py-2 text-white font-mono text-sm focus:border-[#00FF41] focus:outline-none transition-neon resize-none"
                rows={5}
                placeholder="Your message..."
              />
            </div>
            <Button type="submit" className="w-full bg-[#00FF41] text-black hover:bg-[#00FF41]/80 font-mono font-bold transition-neon">
              Send Message
            </Button>
            {submitted && (
              <div className="mt-4 p-4 bg-[#0a0a0a] border border-[#00FF41] rounded text-[#00FF41] text-sm font-mono text-center">
                Message sent successfully! I'll get back to you soon.
              </div>
            )}
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-[#333333] py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-mono font-bold text-[#00FF41] mb-4">Quick Links</h3>
              <ul className="space-y-2 font-mono text-sm text-[#94a3b8]">
                <li><a href="#projects" className="hover:text-[#00FF41] transition-neon">Projects</a></li>
                <li><a href="#skills" className="hover:text-[#00FF41] transition-neon">Skills</a></li>
              </ul>
            </div>
            <div>
  <h3 className="font-mono font-bold text-[#00FF41] mb-4">Social</h3>
  <ul className="space-y-2 font-mono text-sm text-[#94a3b8]">
    <li>
      <a
        href="https://github.com/aetherx-ai"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#00FF41] transition-neon"
      >
        GitHub
      </a>
      </li>

      

          <li>
            <a
              href="https://www.facebook.com/profile.php?id=61572088803171"
            target="_blank"
            rel="noopener noreferrer"
             className="hover:text-[#00FF41] transition-neon"
             >
             Facebook
            </a>
            </li>
              </ul>
            </div>
            <div>
              <h3 className="font-mono font-bold text-[#00FF41] mb-4">Resume</h3>
              <Button 
                onClick={handleResumeDownload}
                className="w-full bg-[#00FF41] text-black hover:bg-[#00FF41]/80 font-mono font-bold transition-neon"
              >
                <Download className="mr-2 h-4 w-4" />
                Download Resume
              </Button>
            </div>
          </div>
          <div className="border-t border-[#333333] pt-8 text-center font-mono text-sm text-[#64748B]">
            <p>© 2026 MS Masud. Built with React & Tailwind CSS.</p>
            <p className="mt-2 text-[#00FF41]">// Keep coding, stay curious</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
