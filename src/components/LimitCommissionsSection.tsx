const LimitCommissionsSection = () => {
  return (
    <section>
      <header className="text-white h-96 flex flex-col justify-center items-center space-y-8">
        <h1 className="text-4xl md:text-6xl font-light">
          Límites y comisiones
        </h1>
      </header>
        <main className="mx-auto mb-10 max-container text-white">
          <h3 className="text-2xl md:text-4xl font-medium">Comisiones:</h3>
          <article className="mt-4">
            <p className="text-xl md:text-2xl font-medium">
              Comisiones por depósitos y retiros FIAT:
            </p>
            <div className="my-4 border-b-2">
              <div className="flex justify-between my-2 text-xs sm:text-base md:text-2xl">
                <div className="mt-4">
                  <p className="align-top font-semibold">Instrumento</p>
                  <p className="align-top mt-2">ARS</p>
                </div>
                <div className="mt-4">
                  <p className="align-top font-semibold">Comisión por depósito</p>
                  <p className="align-top mt-2">0,2&nbsp;%</p>
                </div>
                <div className="mt-4">
                  <p className="align-top font-semibold">Comisión por retiro</p>
                  <p className="align-top mt-2">$&nbsp;0</p>
                </div>
              </div>
            </div>
          </article>
        </main>
    </section>
  );
};
export default LimitCommissionsSection;
