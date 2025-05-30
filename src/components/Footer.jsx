import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import Logo from "./Logo";

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-white py-12 px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        <div>
          <Logo
            color="#FFFFFF"
            classStyles="w-[170px] h-[30px] sm:w-[253px] h-[44px]"
          />

          <p className="text-sm text-zinc-300 mb-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab nisi
            suscipit aspernatur veniam minima? Accusantium ipsa molestiae
            laudantium illum nemo tempora. Nesciunt accusantium tempora
            reprehenderit iusto porro cum dolore voluptas.
          </p>

          <div className="flex gap-4">
            <FaFacebookF className="hover:text-zinc-400 cursor-pointer" />
            <FaInstagram className="hover:text-zinc-400 cursor-pointer" />
            <FaTwitter className="hover:text-zinc-400 cursor-pointer" />
          </div>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Informação</h3>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li>Sobre Drip Store</li>
            <li>Segurança</li>
            <li>Wishlist</li>
            <li>Blog</li>
            <li>Trabalhe conosco</li>
            <li>Meus Pedidos</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold mb-4">Categorias</h3>
          <ul className="space-y-2 text-zinc-300 text-sm">
            <li>Camisetas</li>
            <li>Calças</li>
            <li>Bonés</li>
            <li>Headphones</li>
            <li>Tênis</li>
          </ul>
        </div>

        <div className="md:w-1/4">
          <h3 className="font-semibold mb-4">Contato</h3>
          <p className="text-sm text-zinc-300 mb-2">
            Av. Santos Dumont, 1510 - 1 andar - Aldeota, Fortaleza - CE,
            60150-161
          </p>
          <p className="text-sm text-zinc-300">(85) 3051-3411</p>
        </div>
      </div>

      <div className="border-t border-zinc-700 mt-10 pt-4 text-center text-sm text-zinc-300">
        © 2025 Geração Tech 2.0
      </div>
    </footer>
  );
};

export default Footer;
