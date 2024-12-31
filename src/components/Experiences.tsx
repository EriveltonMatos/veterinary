import React from "react";
import { Calendar, MapPin, Building } from "lucide-react";

interface Experience {
  id: number;
  title: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  imageUrl: string;
}

export default function Experiences() {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Médica Veterinária Chefe",
      institution: "Hospital Veterinário ABC",
      period: "2020 - Presente",
      location: "São Paulo, SP",
      description:
        "Liderança da equipe clínica, realização de cirurgias complexas e atendimento especializado em casos críticos. Desenvolvimento de protocolos de tratamento e supervisão de residentes.",
      imageUrl: "/api/placeholder/400/300",
    },
    {
      id: 2,
      title: "Especialização em Cirurgia",
      institution: "Centro de Especialidades Veterinárias",
      period: "2018 - 2020",
      location: "Rio de Janeiro, RJ",
      description:
        "Realização de mais de 500 procedimentos cirúrgicos, com foco em cirurgias ortopédicas e tecidos moles. Participação em pesquisas e publicações científicas.",
      imageUrl: "/api/placeholder/400/300",
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Experiência Profissional
          </h2>
          <div className="w-20 h-1 bg-blue-500 mx-auto mb-6"></div>
          <p className="text-lg text-gray-600">
            Trajetória dedicada à medicina veterinária
          </p>
        </div>

        {/* Timeline de experiências */}
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-8 items-center`}
            >
              {/* Imagem */}
              <div className="w-full lg:w-1/2">
                <div className="relative group">
                  <div className="overflow-hidden rounded-xl shadow-lg">
                    <img
                      src={exp.imageUrl}
                      alt={exp.title}
                      className="w-full h-[300px] object-cover transform group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  {/* Overlay decorativo */}
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-blue-100 rounded-full -z-10"></div>
                </div>
              </div>

              {/* Conteúdo */}
              <div className="w-full lg:w-1/2 space-y-4">
                <div className="bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                    {exp.title}
                  </h3>

                  <div className="space-y-3 text-gray-600 mb-4">
                    <div className="flex items-center gap-2">
                      <Building className="w-5 h-5 text-blue-500" />
                      <span>{exp.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-5 h-5 text-blue-500" />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-blue-500" />
                      <span>{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed">
                    {exp.description}
                  </p>
                </div>

                {/* Indicador de linha do tempo */}
                <div className="hidden lg:block w-8 h-8 bg-blue-500 rounded-full mx-auto relative">
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicador de mais experiências */}
        <div className="text-center mt-12">
          <div className="inline-flex space-x-1">
            <span className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></span>
            <span className="w-2 h-2 bg-blue-400 rounded-full animate-bounce delay-100"></span>
            <span className="w-2 h-2 bg-blue-300 rounded-full animate-bounce delay-200"></span>
          </div>
        </div>
      </div>
    </section>
  );
}
