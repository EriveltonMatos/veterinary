import React from "react";
import { Award, Heart, GraduationCap, Stethoscope } from "lucide-react";
import AboutImage from "../assets/about.jpeg";
import Image from "next/image";

export default function About() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="h-[50rem] rounded-2xl overflow-hidden shadow-xl">
              <div className="w-full h-full bg-gray-200 flex items-center justify-center">
                <Image
                  src={AboutImage}
                  alt="Dra. Veterinária"
                  className="object-cover w-full h-full"
                />
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-blue-100 rounded-full -z-10"></div>
          </div>

          <div className="space-y-6">
            <div className="text-center mb-12">
              <h2 className="font-primary text-6xl font-bold text-gray-800 mb-4">
                Dra. Glenda Karollyne
              </h2>
              <div className="w-full h-1 bg-Accent mb-6"></div>
            </div>
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Experiência e Dedicação
            </h3>

            <p className="text-gray-600 leading-relaxed">
              Com mais de [X] anos de experiência na medicina veterinária,
              dedico minha vida profissional ao cuidado e bem-estar dos animais.
              Minha paixão pela medicina veterinária começou [história pessoal]
              e desde então venho me especializando continuamente para oferecer
              o melhor atendimento aos seus pets.
            </p>

            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-white rounded-lg shadow-md">
                <GraduationCap className="w-8 h-8 text-Accent mb-2" />
                <h4 className="font-semibold text-gray-800">Formação</h4>
                <p className="text-sm text-gray-600">Universidade [Nome]</p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-md">
                <Award className="w-8 h-8 text-Accent mb-2" />
                <h4 className="font-semibold text-gray-800">Especialização</h4>
                <p className="text-sm text-gray-600">[Área de especialidade]</p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-md">
                <Stethoscope className="w-8 h-8 text-Accent mb-2" />
                <h4 className="font-semibold text-gray-800">Experiência</h4>
                <p className="text-sm text-gray-600">[X] anos de atuação</p>
              </div>

              <div className="p-4 bg-white rounded-lg shadow-md">
                <Heart className="w-8 h-8 text-Accent mb-2" />
                <h4 className="font-semibold text-gray-800">Missão</h4>
                <p className="text-sm text-gray-600">
                  Cuidado com amor e dedicação
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h3 className="text-2xl font-semibold text-gray-800 mb-6">
            Áreas de Atuação
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Clínica Geral", "Cirurgia", "Dermatologia", "Ortopedia"].map(
              (area) => (
                <div
                  key={area}
                  className="p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <p className="font-medium text-gray-800">{area}</p>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
