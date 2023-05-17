import Feed from "@components/Feed";

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
      <h1 className="head_text text-center">
        Descubri & Compartí
        <br className="max_md:hidden" />
        <span className="orange_gradient text-center">
          PROMPTS POTENCIADOS CON IA
        </span>
      </h1>
      <p className="desc text-center">
        Promptopolis es una herramienta de prompts de inteligencia artificial de
        código abierto para que el mundo moderno descubra, cree y comparta
        prompts creativos.
      </p>
      <Feed />
    </section>
  );
};

export default Home;
