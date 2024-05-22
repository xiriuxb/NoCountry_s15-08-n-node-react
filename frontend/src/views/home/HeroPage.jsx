const HeroPage = () => {
  return (
    <main className="w-full bg-black min-h-screen text-white flex flex-col ">
      <header className="bg-red-500 w-full h-[80px] mb-4">
        {/* COLOCAR NAVBAR */}
      </header>
      <div className="w-full h-[85vh] flex flex-col items-center justify-between bg-blue-700">
        <article className="bg-red-800 w-full h-[60%] flex">
          <section className="bg-red-600 w-1/3"></section>
          <section className="bg-red-400 w-2/3 pr-20 py-8 flex flex-col items-start justify-center">
            <h1 className="font-poetsen text-5xl text-left font-bold">
              El contacto con la naturaleza
              <br />
              es la clave a la paz de uno mismo
            </h1>
            <button className="btn btn-outline btn-secondary mt-4">
              Unete a la comunidad de pescadores
            </button>
          </section>
        </article>
        <footer className="bg-red-200 w-full h-[40%] flex justify-start px-20 py-8  ">
          <div className="w-64 h-full bg-slate-400 mr-8 "></div>
          <div className="w-64 h-full bg-slate-400"></div>
        </footer>
      </div>
    </main>
  );
};

export default HeroPage;
