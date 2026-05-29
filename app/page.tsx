import React from 'react';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#FFF0F0] text-black font-sans selection:bg-[#4ECDC4]">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white border-b-4 border-black p-4 md:px-8">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="text-2xl font-black uppercase tracking-tighter">
            YEONWOO.DEV
          </div>
          <div className="hidden md:flex gap-8 font-bold uppercase tracking-tight">
            <a href="#about" className="hover:underline decoration-4 underline-offset-4">About</a>
            <a href="#skills" className="hover:underline decoration-4 underline-offset-4">Skills</a>
            <a href="#projects" className="hover:underline decoration-4 underline-offset-4">Projects</a>
          </div>
          <button className="bg-[#FFE66D] border-2 border-black px-4 py-2 font-black uppercase shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-0.5 hover:translate-y-0.5 hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] active:shadow-none">
            Contact
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="px-4 py-16 md:py-32 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="bg-[#FF6B6B] border-2 border-black px-4 py-1 font-black uppercase text-sm shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] inline-block mb-6">
            Frontend Developer
          </span>
          <h1 className="text-6xl md:text-8xl font-black uppercase leading-none mb-8">
            Coding <br />
            <span className="text-[#6C5CE7]">With</span> <br />
            Vibe.
          </h1>
          <p className="text-xl md:text-2xl font-bold max-w-lg mb-10 leading-snug">
            안녕하세요! 바이브 코딩을 배우고 있는 대학생 이연우입니다. 
            창의적이고 도전적인 프론트엔드 세계에 푹 빠져 있습니다.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="bg-[#4ECDC4] border-4 border-black px-8 py-4 text-xl font-black uppercase shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-1 hover:translate-y-1 hover:shadow-none">
              Explore Projects
            </button>
          </div>
        </div>
        <div className="relative group">
          <div className="absolute -inset-4 bg-[#6C5CE7] border-4 border-black shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] transform rotate-3 group-hover:rotate-0 transition-transform"></div>
          <div className="relative aspect-square bg-white border-4 border-black flex items-center justify-center overflow-hidden">
            <span className="text-9xl grayscale group-hover:grayscale-0 transition-all duration-500 scale-125">👋</span>
          </div>
        </div>
      </header>

      {/* About Section */}
      <section id="about" className="bg-[#FFE66D] border-y-4 border-black py-20">
        <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-3xl font-black uppercase mb-4 underline decoration-4 underline-offset-4">Vision</h3>
            <p className="font-bold">단순히 코드를 짜는 것이 아니라, 사용자에게 즐거운 경험을 선사하는 아트를 만듭니다.</p>
          </div>
          <div className="bg-[#FF6B6B] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-3xl font-black uppercase mb-4 underline decoration-4 underline-offset-4 text-white">Passion</h3>
            <p className="font-bold text-white text-lg">새로운 기술을 배우고 적용하는 과정에서 가장 큰 도파민을 느낍니다.</p>
          </div>
          <div className="bg-[#4ECDC4] border-4 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <h3 className="text-3xl font-black uppercase mb-4 underline decoration-4 underline-offset-4">Action</h3>
            <p className="font-bold">생각만 하지 않고 바로 코드로 구현하며 배우는 실행력을 지향합니다.</p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 text-center">
          My <span className="text-[#FF6B6B]">Toolkit</span>
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {['Next.js', 'React', 'TypeScript', 'Tailwind', 'Git', 'Node.js', 'PostgreSQL', 'Figma'].map((skill, index) => (
            <div key={index} className="bg-white border-4 border-black p-6 shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:bg-[#FFE66D] transition-colors flex items-center justify-center">
              <span className="text-xl font-black uppercase">{skill}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-black py-20">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-5xl md:text-7xl font-black uppercase mb-16 text-center text-white">
            Selected <span className="text-[#4ECDC4]">Works</span>
          </h2>
          <div className="space-y-12">
            {[
              { title: "Personal Landing", color: "#FF6B6B", desc: "Next.js 16 & Tailwind 4 Neobrutalism Design" },
              { title: "Vibe Commerce", color: "#6C5CE7", desc: "Interactive Shopping Experience" },
              { title: "Code Lab", color: "#FFE66D", desc: "Open Source Contribution Hub" }
            ].map((project, index) => (
              <div key={index} className="group relative">
                <div className="bg-white border-4 border-black p-8 md:p-12 flex flex-col md:flex-row justify-between items-center gap-8 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] hover:translate-x-1 hover:translate-y-1 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all">
                  <div>
                    <h3 className="text-4xl md:text-5xl font-black uppercase mb-4" style={{ color: project.color }}>
                      {project.title}
                    </h3>
                    <p className="text-xl font-bold">{project.desc}</p>
                  </div>
                  <button className="border-4 border-black px-8 py-3 font-black uppercase hover:bg-black hover:text-white transition-colors">
                    View Project
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t-4 border-black p-8 md:p-16 text-center bg-white">
        <h2 className="text-4xl md:text-6xl font-black uppercase mb-8">Let&apos;s Create Something <span className="text-[#FF6B6B]">Epic</span></h2>
        <div className="flex flex-wrap justify-center gap-6 mb-12 font-black uppercase">
          <a href="#" className="hover:underline">GitHub</a>
          <a href="#" className="hover:underline">LinkedIn</a>
          <a href="#" className="hover:underline">Email</a>
        </div>
        <p className="font-bold">© 2026 YEONWOO LEE. ALL RIGHTS RESERVED.</p>
      </footer>
    </div>
  );
}
