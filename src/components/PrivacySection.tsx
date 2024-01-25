export const PrivacySection = () => {
  return (
    <section>
      <header className="text-white h-96 flex flex-col justify-center items-center space-y-8">
        <h1 className="text-6xl font-light">Privacidad</h1>
      </header>

      <main className="mt-10 mx-auto max-container text-white">
        <article className="space-y-8">
          <section className="space-y-3">
            <h3 className="text-4xl">Declaro:</h3>
            <p>
              Es mi exclusiva responsabilidad asegurarme de la viabilidad de la
              realización de transacciones en criptomonedas en mi jurisdicción.
            </p>
          </section>

          <section className="space-y-6">
            <h3 className="text-4xl">Acepto y garantizo:</h3>
            <ul className="list-disc ml-8 space-y-5">
              <li>He leído y aceptado estos Términos y Condiciones.</li>
              <li>
                Que poseo la capacidad legal completa de aceptar estos Términos
                y de realizar transacciones y transferencias en Payex S.R.L
              </li>
              <li>
                Que los fondos utilizados o que utilizaré en Payex S.R.L no
                provienen directa o indirectamente de actividades ilícitas
                contempladas por los delitos establecidos por las leyes vigentes
                en materia de Prevención de lavado de activos y Financiamiento
                del terrorismo.
              </li>
              <li>
              Que he provisto información fidedigna, real, completa y actualizada a Payex S.R.L
              </li>
              <li>
              Que tengo conocimiento acerca de la naturaleza, situación legal y volatilidad del valor de las criptomonedas y del Bitcoin en particular, y que asumo en forma completa el riesgo implícito en realizar transacciones con dichos activos.
              </li>
              <li>
              Que podría sancionarse normativa que prohíba y/o restrinja la realización de transacciones con criptomonedas en mi jurisdicción de residencia, o afectar la forma en las que se realizan las mismas.
              </li>
              <li>
              Que soy responsable de determinar si una Transacción específica es apropiada para mí, basándome en mis metas personales, estado financiero y voluntad de tomar riesgos.
              </li>
              <li>
              Que soy responsable de determinar si una transacción específica es apropiada para mí, basándome en la documentación presentada a Payex S.R.L que guarda relación con mi situación personal; patrimonial, económica y fiscal.
              </li>
              <li>
              Que Payex S.R.L podrá requerir mayor información y/o documentación en caso de considerarlo necesario, comprometiéndose el usuario a suministrar la misma en los plazos que Payex S.R.L establezca.
              </li>
              <li>
              Admito que cualquier omisión o inexactitud en estos documentos podrá ocasionar el rechazo de esta solicitud y la destrucción de la documentación suministrada.
              </li>
            </ul>
          </section>
        </article>
      </main>
    </section>
  );
};
