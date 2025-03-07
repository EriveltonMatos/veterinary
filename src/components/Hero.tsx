"use client"
import Image from "next/image";
import { useState, useEffect } from "react";
import { BsArrowDownCircle } from "react-icons/bs";
import { FaPaw, FaHeart, FaStethoscope } from "react-icons/fa";
import { motion } from "framer-motion";
import heroImage from "../assets/none.svg";

export default function Hero() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const pawIcons = Array(6).fill(null);
  
  return (
    <section className="min-h-screen relative bg-gradient-to-br from-Accent/10 to-Accent/20 overflow-hidden">
      {/* Paw print background pattern */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {pawIcons.map((_, idx) => (
          <FaPaw 
            key={idx}
            className="absolute text-Accent"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              fontSize: `${Math.random() * 2 + 1}rem`,
              transform: `rotate(${Math.random() * 360}deg)`,
              opacity: Math.random() * 0.5 + 0.2
            }}
          />
        ))}
      </div>
      
      <div className="mx-auto h-full relative max-w-7xl">
        <div className="grid md:grid-cols-2 gap-8 h-full items-center pt-20 pb-8">
          {/* Left content */}
          <div className="relative z-20 flex flex-col items-center md:items-start text-center md:text-left space-y-6 px-6 md:px-10 md:ml-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6 }}
              className="inline-block"
            >
              <span className="text-sm font-medium text-Accent bg-Accent/10 px-4 py-1 rounded-full">
                Clínica Veterinária
              </span>
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tighter mt-4">
                <span className="text-Accent hover:text-Accent/90 transition-colors duration-300">
                  Dra. Glenda
                </span>{" "}
                <span className="block md:inline">Karollyne</span>
              </h1>
            </motion.div>

            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-700 max-w-lg leading-relaxed"
            >
              Cuidado veterinário especializado com amor e dedicação para seu melhor amigo. Oferecemos atendimento personalizado para garantir a saúde e felicidade do seu pet.
            </motion.p>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4 w-full md:w-auto"
            >
              <button className="bg-Accent hover:bg-Accent/90 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2 group">
                Entre em contato!
                <BsArrowDownCircle className="w-5 h-5 group-hover:animate-bounce" />
              </button>

              <button className="border-2 border-Accent text-Accent hover:bg-Accent/10 px-8 py-4 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                <FaStethoscope className="w-4 h-4" />
                Nossos serviços
              </button>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isLoaded ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-col items-center md:items-start gap-2 pt-6"
            >
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white overflow-hidden"
                  >
                    {/* Você pode adicionar imagens de pets aqui */}
                    <div className="w-full h-full bg-gradient-to-br from-Accent/40 to-Accent/20 flex items-center justify-center">
                      <FaPaw className="text-white text-opacity-80" />
                    </div>
                  </div>
                ))}
                <div className="w-12 h-12 rounded-full bg-Accent/20 border-2 border-white flex items-center justify-center text-Accent font-bold">
                  +50
                </div>
              </div>
              <div className="flex items-center gap-2">
                <FaHeart className="text-red-500" />
                <p className="text-sm text-gray-700 font-medium">
                  Mais de 1000 pets atendidos com amor e dedicação
                </p>
              </div>
            </motion.div>
          </div>

          {/* Right content - Veterinarian with pets */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isLoaded ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative h-[500px] md:h-[680px] w-full"
          >
            <div className="absolute inset-0 bg-Accent/90 rounded-l-[60px] overflow-hidden shadow-2xl">
              <div className="absolute inset-0 opacity-20">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.4),transparent)]" />
                
                {/* Padrão de círculos decorativos */}
                <div className="grid grid-cols-8 gap-4 p-8 h-full">
                  {Array(64)
                    .fill(null)
                    .map((_, i) => (
                      <div
                        key={i}
                        className="aspect-square rounded-full bg-white/20"
                      />
                    ))}
                </div>
              </div>

              {/* Imagem da veterinária com animais */}
              <div className="absolute w-[95%] h-[100%] bottom-0 left-[2.5%] transition-transform duration-500 hover:scale-105">
                <div className="absolute bottom-3 left-3 md:bottom-6 md:left-6 bg-white/90 backdrop-blur-sm rounded-lg p-3 shadow-lg z-10 max-w-[80%]">
                  <div className="flex items-center gap-2">
                    <div className="bg-Accent/20 rounded-full p-2">
                      <FaStethoscope className="text-Accent w-4 h-4" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-gray-800">Atendimento especializado</p>
                      <p className="text-xs text-gray-600">Consultas, exames e cirurgias</p>
                    </div>
                  </div>
                </div>
                
                <Image
                  src={heroImage} // Substitua por sua imagem
                  alt="Dra. Glenda Karollyne com pacientes"
                  fill
                  priority
                  className="object-cover object-center rounded-l-[60px] saturate-[1.1] brightness-105"
                  onLoad={() => setIsLoaded(true)}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
      
    </section>
  );
}