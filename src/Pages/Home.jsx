import React from "react";
import staff from "../data/staffconfig.json";
import projects from "../data/projectsconfig.json";
import logoWhite from "../images/logo_white.png";

const Home = () => {
  return (
    <div className="p-4 mt-16">
      <section class="bg-background-primary text-text-light py-16">
        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div class=" text-center md:text-left">
            <h1 class="text-4xl font-bold mb-4">Benvenuto in Overclocked</h1>
            <p class="text-xl mb-6">
              Un gruppo di amici che creano soluzioni innovative nel mondo della
              tecnologia. Siamo pronti a realizzare qualsiasi progetto insieme a
              te!
            </p>
            <button class="text-white text-base uppercase bg-gradient-to-l from-[#a531dc] via-[#de82f4] to-[#a531dc] bg-[length:200%] px-6 py-3 rounded-md font-semibold transition-all duration-400 ease-in-out hover:bg-right focus:ring-4 focus:ring-[#de82f4] z-10 border-none">
              Scopri di più
            </button>
          </div>

          <div class="p-16">
            <img src={logoWhite} alt="" />
          </div>
        </div>
      </section>

      {/* Sezione Staff */}
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-2">Il Nostro Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {staff.map((member) => (
            <div
              key={member.id}
              className="p-4 border rounded shadow-sm bg-white"
            >
              <img
                src={member.image}
                alt={member.name}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold">{member.name}</h3>
              <p className="text-gray-600">{member.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sezione Progetti */}
      <section>
        <h2 className="text-xl font-semibold mb-4">I Nostri Progetti</h2>
        <div className="flex overflow-x-scroll space-x-4 scrollbar-hide">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative w-[300px] flex-shrink-0 h-[400px] border rounded shadow-sm overflow-hidden"
            >
              {/* Immagine di sfondo */}
              <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Nome dell'autore */}
              <div className="absolute top-0 left-0 bg-black/60 text-white text-sm px-2 py-1 rounded-br-lg">
                {project.title}
              </div>

              {/* Overlay con blur */}
              <div className="absolute bottom-0 left-0 w-full bg-black/50 backdrop-blur-sm p-4 text-white h-24">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-sm line-clamp-2">{project.description}</p>
              </div>
            </div>
          ))}
          <div className="relative w-[300px] flex-shrink-0 h-[400px] border rounded shadow-sm overflow-hidden flex justify-center items-center hover:bg-primary-dark">
            <h3 className="text-5xl text-center">Scopri tutti i progetti</h3>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
