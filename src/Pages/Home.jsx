import React from "react";
import staff from "../data/staffconfig.json";
import projects from "../data/projectsconfig.json";

const Home = () => {
  return (
    <div className="p-4">
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

          <div class="p-4">
            <h2 class="text-white">Colonna 2</h2>
            <p class="text-white">
              Contenuto della colonna 2. Questo va sotto nel mobile e a lato nel
              desktop.
            </p>
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
        <h2 className="text-xl font-semibold mb-2">I Nostri Progetti</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="p-4 border rounded shadow-sm bg-white"
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-32 object-cover rounded mb-2"
              />
              <h3 className="text-lg font-semibold">{project.title}</h3>
              <p className="text-gray-600">{project.description}</p>
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                Scopri di più
              </a>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
