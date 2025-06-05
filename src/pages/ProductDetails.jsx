import CarouselSlider from "../components/Carousel/CarouselSlider";

const ProductDetails = ({ category, marca, modelo }) => {
  return (
    <main className=" flex flex-col rgba(71,71,71,1) p-[20px]">
      <div className="mb-[20px]">
        <p className="font-medium text-xs leading-[18px] tracking-[0.5px]">
          <span className="font-bold leading-[24px] tracking-0.75px]">
            Home
          </span>{" "}
          / Produtos / Tênis / Nike /{" "}
        </p>
        <p className="font-medium text-xs leading-[18px] tracking-[0.5px]">
          Tênis Nike Revolution 6 Next Nature Masculino
        </p>
      </div>
      <CarouselSlider />
      <div>
          <h4>Tênis Nike Revolution 6 Next Nature Masculino</h4>
          <p>Casual | Nike | REF:38416711</p>
          <div></div> {/*Avaliação de Produtos */}
          <div></div> {/*Preços */} 
          <div>
            <h4>Descrição do Produto</h4>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Autem excepturi saepe dignissimos placeat cum voluptatem dolor soluta necessitatibus! Laborum veritatis itaque repellat doloremque blanditiis et inventore. Soluta aliquid voluptates ex.</p>
          </div>
          <div>
            <h4>Tamanho</h4>
            <ul className="flex gap-[10px]">
                <li className="p-[12px] rounded-[4px] border border-[rgba(204,204,204,1)]">39</li>
                <li className="p-[12px] rounded-[4px] border border-[rgba(204,204,204,1)]">40</li>
                <li className="p-[12px] rounded-[4px] border border-[rgba(204,204,204,1)]">41</li>
                <li className="p-[12px] rounded-[4px] border border-[rgba(204,204,204,1)]">42</li>
                <li className="p-[12px] rounded-[4px] border border-[rgba(204,204,204,1)]">43</li>
            </ul>
          </div>
          <div>
            <h4>Cor</h4>
            <ul className="flex gap-[20px]">
                <li className="w-[30px] h-[30px] rounded-full bg-[rgba(111,238,255,1)]"></li>
                <li className="w-[30px] h-[30px] rounded-full bg-[rgba(255,105,105,1)]"></li>
                <li className="w-[30px] h-[30px] rounded-full bg-[rgba(94,94,94,1)]"></li>
                <li className="w-[30px] h-[30px] rounded-full bg-[rgba(109,112,183,1)]"></li>
            </ul>
          </div>
      </div>
    </main>
  );
};

export default ProductDetails;
