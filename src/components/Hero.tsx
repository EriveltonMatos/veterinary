import Image from "next/image";
import heroImage from "../assets/none.svg";
import arrow from "../assets/hero/arrow.svg";
import { BsArrowDownCircle } from "react-icons/bs";

export default function Hero() {
  const animals = [{ id: 1, name: "cachorro", image: arrow.src }];

  return (
    <section className="min-h-screen relative bg-gradient-to-br from-Accent/5 to-Accent/10 overflow-hidden">
      <div className="mx-auto h-full relative">
        <div className="grid md:grid-cols-2 gap-8 h-full items-center pt-20 pb-8">
          {/* Left content */}
          <div className="relative z-20 flex flex-col items-center md:items-start text-center md:text-left space-y-6 px-4 ml-20">
            <div className="inline-block">
              <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter">
                <span className="text-Accent hover:text-Accent/90 transition-colors duration-300">
                  Glenda
                </span>{" "}
                <span className="block md:inline">Karollyne</span>
              </h1>
            </div>

            <p className="text-lg md:text-xl text-gray-700 max-w-lg leading-relaxed">
              Cuidado veterinário personalizado com amor, dedicação e
              experiência profissional para seu melhor amigo.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
              <button className="bg-Accent hover:bg-Accent/90 text-white px-8 py-3 rounded-xl font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                Entre em contato!
                <BsArrowDownCircle className="w-5 h-5 animate-bounce" />
              </button>

              <button className="border-2 border-Accent text-Accent hover:bg-Accent/10 px-8 py-3 rounded-xl font-semibold transition-all duration-300">
                Conheça nossos serviços
              </button>
            </div>

            {/* Social proof */}
            <div className="flex flex-col items-center md:items-start gap-2 pt-6">
              <div className="flex -space-x-4">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="w-12 h-12 rounded-full bg-gray-200 border-2 border-white"
                  />
                ))}
              </div>
              <p className="text-sm text-gray-600">
                +1000 pets atendidos com amor e carinho
              </p>
            </div>
          </div>

          {/* Right content */}
          <div className="relative h-[500px] md:h-[680px] w-full">
            <div className="absolute inset-0 bg-Accent rounded-l-[60px] overflow-hidden">
              {/* Decorative patterns */}
              <div className="absolute inset-0 opacity-10">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.2),transparent)]" />
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

              {/* Main image */}
              <div className="absolute w-[90%] h-[100%] bottom-0 left-[5%] transition-transform duration-500 hover:scale-105">
                <Image
                  src={heroImage}
                  fill
                  priority
                  className="object-contain "
                  alt="Dra. Glenda Karollyne"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
