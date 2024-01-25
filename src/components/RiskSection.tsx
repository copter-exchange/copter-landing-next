const RiskSection = () => {
  return (
    <section>
      <header className="text-white h-96 flex flex-col justify-center items-center space-y-8">
        <h1 className="text-6xl font-light">Política de riesgo</h1>
      </header>

      <main className="mt-10 mx-auto max-container text-white">
        <article className="space-y-8">
          <section className="space-y-3">
            <h3 className="text-4xl">Payex S.R.L no es un emisor</h3>
            <p>
              Payex S.R.L no emite monedas digitales a sus usuarios. Solo proporciona
              una plataforma que permite a los usuarios aprobados comprar,
              vender o intercambiar monedas digitales.
            </p>
          </section>
          <section className="space-y-3">
            <h3 className="text-4xl">Riesgo de clave privada</h3>
            <p>
              Se debe tener mucho cuidado al seleccionar, almacenar o transmitir
              claves privadas. Si otra persona se entera de su clave privada,
              puede robar sus fondos. Si olvida o pierde su clave privada o los
              detalles de su contraseña, Copter no puede proporcionar una copia
              de seguridad y esto puede resultar en la pérdida de sus monedas
              digitales. Le recomendamos encarecidamente que utilice
              almacenamiento frío seguro.
            </p>
          </section>
          <section className="space-y-6">
            <h3 className="text-4xl">No hay garantías</h3>
            <p>
              Ni Payex S.R.L, ni ninguna otra persona, garantiza o suscribe ninguna
              transacción realizada a través de los servicios, ni asume ninguna
              responsabilidad u obligación por cualquier pérdida en la que
              incurra al usar los servicios o acceder al Sitio.
            </p>{" "}
            <p>
              {" "}
              Nada en este sitio, incluido este documento o los Términos y
              Condiciones, es una solicitud de inversión ni se relaciona de
              ninguna manera con una oferta de valores en ninguna jurisdicción.
            </p>
          </section>
          <section className="space-y-3">
            <h3 className="text-4xl">No hay documento de oferta</h3>
            <p>
            Payex S.R.L no emite valores y no se ha preparado ni registrado ningún
              documento de oferta en relación con los servicios, las monedas
              digitales o el sitio de conformidad con la legislación de valores
              de ninguna jurisdicción.
            </p>
          </section>
          <section className="space-y-3">
            <h3 className="text-4xl">Los términos de uso pueden cambiar</h3>
            <p>
            Payex S.R.L tiene el derecho de cambiar los Términos y Condiciones y de
              cambiar o retirar los Servicios en determinadas circunstancias,
              incluso para cumplir con la ley o la guía del regulador. Debe
              consultar los Términos y condiciones y la Política de privacidad
              con regularidad. Si continúa accediendo al Sitio y utilizando los
              Servicios, estará sujeto a las modificaciones que se realicen.
              Consulte aquí para obtener copias de las últimas versiones de esos
              documentos.
            </p>
          </section>
          <section className="space-y-3">
            <h3 className="text-4xl">
              El acceso al servicio es bajo tu propio riesgo
            </h3>
            <p>
              Comprar, vender e intercambiar monedas digitales es una actividad
              muy arriesgada. Las divisas pueden experimentar una extrema
              volatilidad de precios. Deberías considerar cuidadosamente si el
              uso de los Servicios es adecuado y asequible para usted en vista
              de su circunstancias personales y recursos económicos. Una vez
              completada una transacción, es imposible revertirla. Payex S.R.L no
              ofrece ninguna garantía o representación en relación con ningún
              activo digital o cualquier red o software que subyace o es
              compatible con cualquier activo digital.
            </p>
          </section>
        </article>
      </main>
    </section>
  );
};

export default RiskSection;
