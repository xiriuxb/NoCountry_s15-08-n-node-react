const HeroPage = () => {
  return (
    <main className="w-full bg-black min-h-screen text-white flex flex-col ">
      <header className="bg-red-500 w-full h-[80px] mb-4">
        {/* COLOCAR NAVBAR */}
      </header>
      <div className="w-full h-[85vh] flex flex-col items-center justify-between bg-blue-700">
        <article className="bg-red-800 w-full h-[60%] flex">
          <section className="bg-red-600 w-1/3"></section>
          <section className="bg-red-400 w-2/3"></section>
        </article>
        <footer className="bg-red-200 w-full h-[40%] flex justify-start">
          <div className="w-64 h-64 bg-slate-400 m-4"></div>
          <div className="w-64 h-64 bg-slate-400 m-4"></div>
        </footer>
      </div>
    </main>
  );
};

export default HeroPage;
