export default function Navbar() {
  return (
    <div className="flex justify-between">
      <div>
        <div>
          <h1 className="font-primary">Glenda Karollyne</h1>
        </div>
      </div>

      <div>
        <div className="flex gap-5 ml-5">
          <a href="#" className="font-primary text-xl">
            Home
          </a>
          <a href="#sobre" className="font-primary text-xl">
            Sobre
          </a>
          <a href="#contato" className="font-primary text-xl">
            Contato
          </a>
        </div>
      </div>
    </div>
  );
}
