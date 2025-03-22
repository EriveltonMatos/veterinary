import React from "react";
import { Calendar, MapPin, Building, Award, ChevronRight } from "lucide-react";
import experience1 from "../assets/experience1.jpeg";
import Image, { StaticImageData } from "next/image";

interface Experience {
  id: number;
  title: string;
  institution: string;
  period: string;
  location: string;
  description: string;
  imageUrl: string | StaticImageData;
  achievements?: string[];
}

export default function Experiences() {
  const experiences: Experience[] = [
    {
      id: 1,
      title: "Aula Prática de Semiologia",
      institution: "Equusclinc",
      period: "2025",
      location: "Fortaleza, CE",
      description:
        "Na aula prática de semiologia, aprendemos todos os primeiros passos para a avaliação física do animal.",
      imageUrl: experience1,
      achievements: [
        "Métodos de contenção: Aprendemos e aplicamos as principais técnicas para imobilizar o cavalo com segurança durante a avaliação.",
        "Avaliação do TPC: Realizamos o teste de tempo de preenchimento cutâneo, um indicador essencial da circulação sanguínea do animal.",
        "Ausculta clínica: Examinamos os sons pulmonares, cardíacos e intestinais para avaliar a saúde geral do cavalo.",
      ],
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
      achievements: [
        "Desenvolvimento de técnica inovadora para cirurgias ortopédicas em cães de pequeno porte",
        "Participação em equipe multidisciplinar para casos complexos",
        "Apresentação de resultados em 3 congressos internacionais",
      ],
    },
    {
      id: 3,
      title: "Residência em Clínica Médica",
      institution: "Universidade Federal Veterinária",
      period: "2016 - 2018",
      location: "Curitiba, PR",
      description:
        "Atendimento clínico geral e especializado, com foco em diagnóstico por imagem e tratamento de doenças crônicas. Participação em projetos de pesquisa e extensão.",
      imageUrl: "/api/placeholder/400/300",
      achievements: [
        "Desenvolvimento de protocolo de tratamento para doenças respiratórias em felinos",
        "Organização de campanha de vacinação que atendeu mais de 1000 animais",
        "Premiação como residente destaque do ano de 2017",
      ],
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-6xl mx-auto px-4">
        {/* Cabeçalho da seção com elementos decorativos */}
        <div className="relative text-center mb-16">
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-blue-100 rounded-full opacity-50 blur-xl"></div>
          <h2 className="text-4xl font-bold text-gray-800 mb-4 relative">
            Trajetória Profissional
          </h2>
          <div className="w-24 h-1 bg-Accent mx-auto mb-6"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Uma jornada dedicada à excelência na medicina veterinária,
            combinando conhecimento técnico, compaixão e inovação
          </p>
        </div>

        {/* Experiências em coluna alternando lados */}
        <div className="space-y-24">
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className={`flex flex-col ${
                index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
              } gap-12 items-center`}
            >
              {/* Imagem com efeitos */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-2xl transform rotate-3 scale-105 opacity-20 group-hover:opacity-30 transition-all duration-300"></div>
                <div className="overflow-hidden rounded-2xl shadow-2xl relative z-10">
                  <Image
                    src={exp.imageUrl}
                    alt={exp.title}
                    className="w-full h-[30rem] object-cover transform group-hover:scale-105 transition-transform duration-500"
                    width={1000}
                    height={1000}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-6 text-white">
                      <h3 className="text-2xl font-bold mb-2">{exp.title}</h3>
                      <p className="text-blue-200">{exp.institution}</p>
                    </div>
                  </div>
                </div>
                {/* Elementos decorativos */}
                <div
                  className={`absolute -bottom-6 ${
                    index % 2 === 0 ? "-right-6" : "-left-6"
                  } w-32 h-32 bg-blue-100 rounded-full -z-10`}
                ></div>
                <div
                  className={`absolute -top-4 ${
                    index % 2 === 0 ? "-left-4" : "-right-4"
                  } w-16 h-16 bg-purple-100 rounded-full -z-10`}
                ></div>
              </div>

              {/* Conteúdo detalhado */}
              <div className="w-full lg:w-1/2 space-y-8">
                <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                  <h3 className="text-3xl font-bold text-gray-800 mb-6">
                    {exp.title}
                  </h3>

                  <div className="space-x-4 flex  w-full text-gray-600 mb-6">
                    <div className="flex items-center gap-2">
                      <div className="bg-blue-100 p-2 rounded-full">
                        <Building className="w-5 h-5 text-blue-500" />
                      </div>
                      <span className="font-medium">{exp.institution}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-purple-100 p-2 rounded-full">
                        <Calendar className="w-5 h-5 text-purple-500" />
                      </div>
                      <span className="font-medium">{exp.period}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="bg-green-100 p-2 rounded-full">
                        <MapPin className="w-5 h-5 text-green-500" />
                      </div>
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-6">
                    {exp.description}
                  </p>

                  {/* Conquistas */}
                  <div className="mt-6">
                    <h4 className="text-lg font-semibold text-gray-800 mb-4 flex items-center">
                      <Award className="w-5 h-5 text-blue-500 mr-2" />
                      Habilidades Desenvolvidas
                    </h4>
                    <ul className="space-y-3">
                      {exp.achievements?.map((achievement, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <ChevronRight className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                          <span className="text-gray-600">{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
