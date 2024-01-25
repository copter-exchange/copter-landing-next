"use client"
import Link from "next/link";

const TermsSection = () => {
  const handleSendEmailClick = () => {
    const email = "support@exchangecopter.com";
    const subject = "Contacto desde Copter";
    const body = "Contenido del correo";

    const mailtoUrl = `mailto:${email}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.open(mailtoUrl);
  };
  return (
    <section>
      <header className="text-white h-96 flex flex-col justify-center items-center space-y-8">
        <h1 className="text-6xl font-light">Términos y condiciones</h1>
      </header>

      <main className="mt-10 mx-auto max-container text-white">
        <article className="space-y-8">
          <section className="space-y-3">
            <p>
              PAYEX (en adelante, la &quot;Entidad&quot;), con domicilio en Av Avellaneda
              1727 8B, Ciudad Autónoma de Buenos Aires y, la persona cuyos datos
              identificatorios surgen del formulario de solicitud (en adelante
              el &quot;Solicitante&quot;), convienen en celebrar el presente CONTRATO (en
              adelante, el &quot;Contrato&quot;) que se regirá por los términos y
              condiciones que se establecen a continuación (en adelante, los
                &quot;Términos y Condiciones&quot;). Excepto en caso de que resulten
              expresamente aplicables otros términos y condiciones especiales,
              los Términos y Condiciones regirán los derechos y obligaciones de
              las Partes respecto de cualquier producto y/o servicio ofrecido a
              través de la Billetera virtual (en adelante, los &quot;CVU&quot;). El
              Usuario se compromete a leer, comprender y aceptar todas las
              condiciones establecidas en este Acuerdo, previo a su registro
              como Usuario de la CVU(&quot;Copter&quot;). En caso de no encontrarse de
              acuerdo con los Términos y Condiciones, por favor, absténgase de
              utilizar los Servicios. Los presentes Términos y Condiciones se
              considerarán aceptados desde el momento en que el Usuario cree una
              Cuenta de Usuario o utilice los Servicios, lo que ocurra primero.
            </p>
          </section>
          <section className="space-y-3">
            <h3 className="text-4xl">1. Servicio</h3>
            <p className="ml-4">
              <span className="mr-4">1.1</span>
              El servicio que prestará la Entidad consistirá en la habilitación
              de la CVU que permite al Usuario transferir fondos y realizar
              operaciones de cambio de acuerdo a las regulaciones establecidas
              por el BCRA. La prestación del servicio se implementará mediante
              la entrega creación de una CVU a nombre del titular.
            </p>
            <p className="ml-4">
              <span className="mr-4">1.2</span>
              La CVU deberá ser suscripta por el Solicitante o Beneficiario y
              será nominada e intransferible, pudiendo ser utilizada únicamente
              por la persona cuya identidad se acredite mediante exhibición de
              documento de identidad (en adelante, el &quot;Titular&quot;), para realizar
              las operaciones y/o transacciones que en cada caso se prevea.
            </p>
            <p className="ml-4">
              <span className="mr-4">1.3</span>
              La Entidad se reserva la facultad de requerir al Solicitante
              documentación e información adicional a los efectos de cumplir con
              (i) la normativa de la Unidad de Información Financiera (en
              adelante, la &quot;UIF&quot;) y/o del Banco Central de la República
              Argentina ( en adelante, BCRA), de resultar aplicable, (ii) con el
              manual de procedimiento para la prevención de lavado de activos y
              financiación del terrorismo (en adelante, el &quot;Manual&quot;) y (iii) con
              cualquier otro recaudo adicional que pudiera exigir la Entidad a
              los efectos de cumplir con los objetivos previstos por la
              normativa.
            </p>
            <p className="ml-4">
              <span className="mr-4">1.4</span>
              El Beneficiario solamente podrá generar y utilizar la CVU a su
              nombre y si fuere mayor de edad. En el caso de Beneficiarios
              menores de edad, la CVU deberá ser requerida por un mayor de edad.
            </p>
          </section>
          <section className="space-y-6">
            <h3 className="text-4xl">2. Obligaciones - Responsabilidad</h3>
            <p className="ml-4">
              <span className="mr-4">2.1</span>
              El Solicitante toma conocimiento y, en su caso, se compromete a
              instruir al Beneficiario respecto de:
            </p>
            <p className="ml-4">
              <span className="mr-4">(i)</span>las condiciones que en lo
              sucesivo se establezcan respecto de la CVU;
            </p>
            <p className="ml-4">
              <span className="mr-4">(ii)</span>que la CVU sólo podrá ser
              utilizada para fines lícitos y de acuerdo a los presentes Términos
              y Condiciones, según éstos sean modificados posteriormente con un
              aviso cursado con 60 (sesenta) días de anticipación;
            </p>
            <p className="ml-4">
              <span className="mr-4">(iii)</span>que deberá mantener la
              confidencialidad de claves de acceso, PIN, ccv;
            </p>
            <p className="ml-4">
              <span className="mr-4">(iv)</span>que deberá notificar de
              inmediato la pérdida o sustracción de la CVU a los medios
              indicados y habilitados por la Entidad;
            </p>
            <p className="ml-4">
              <span className="mr-4">(v)</span>los costos, cargos y comisiones
              asociados a la CVU y al funcionamiento de la misma, que constan en
              el Anexo I del presente. Las modificaciones a las Comisiones serán
              informadas por la Entidad con 60 (sesenta) días de anticipación a
              su entrada en vigencia mediante los Medios de Comunicación
              Habilitados. Se entenderá por &quot;Medios de Comunicación Habilitados&quot;
              a los mails de la entidad con dominio exchangecopter.com, página
              web exchangecopter.com, notificaciones dentro de la plataforma web
              al cual accede el solicitante ; y
            </p>
            <p className="ml-4">
              <span className="mr-4">(vi)</span>que será responsabilidad
              exclusiva del Titular el manejo y resguardo de la CVU y de los
              fondos disponibles en la misma.
            </p>
            <p className="ml-4">
              <span className="mr-4">(vii)</span>Las condiciones establecidas en
              el acápite 1 del presente.
            </p>
          </section>

          <section className="space-y-6">
            <h3 className="text-4xl">3. Utilización - Funcionamiento</h3>
            <p className="ml-4">
              <span className="mr-4">3.1</span>
              Al momento de recibir la CVU, el Titular deberá habilitarla a
              través de la Aplicación web que la Entidad pondrá a disposición de
              los Titulares (la &quot;Aplicación&quot;). La CVU sólo podrá ser utilizada
              contra el saldo disponible, previamente cargado en la misma a
              través de los medios de carga que habilite la Entidad (los &quot;Medios
              de Carga&quot;), y con sujeción a los Términos y Condiciones, para:
            </p>
            <p className="ml-4">
              <span className="mr-4">(i)</span>transferir fondos a otro/s
              Titular/es de una CVU emitida por la Entidad bajo los presentes
              Términos y Condiciones;
            </p>
            <p className="ml-4">
              <span className="mr-4">(ii)</span>Realizar operaciones de cambio
              de monedas de acuerdo a las normas sobre exterior y cambios
              autorizadas o que autorice en el futuro el BCRA y
            </p>
            <p className="ml-4">
              <span className="mr-4">(iii)</span>cualquier otro uso que la
              Entidad habilite en el futuro.
            </p>
            <p className="ml-4">
              <span className="mr-4">3.2</span>
              Las órdenes cursadas mediante la utilización de la CVU que
              impliquen un pago a un tercero, no podrán ser en ningún caso
              revocadas o anuladas. La Entidad no verificará la existencia,
              calidad, estado, funcionamiento, integridad o cantidad de los
              bienes o servicios adquiridos utilizando el servicio de la CVU. El
              Titular exime de toda responsabilidad a la Entidad, sus
              controlantes, directores, empleados, agentes y/o apoderados por
              cualquier reclamo o acción legal que inicie algún tercero,
              vinculado con el uso de la CVU o el servicio.
            </p>
            <p className="ml-4">
              <span className="mr-4">3.3</span>
              Las operaciones realizadas con la CVU reducirán el saldo cargado
              disponible existente en ella. En ningún caso se podrán realizar
              operaciones con la CVU por un importe superior al saldo disponible
              al momento de realizar cada operación. El límite de utilización de
              la CVU estará determinado en cada momento por el saldo cargado y
              disponible. El Emisor podrá establecer límites a la carga de saldo
              a través de los Medios de Carga, conforme a las limitaciones y
              controles que establezcan las normas aplicables o sus políticas
              internas. El saldo disponible existente a cada momento podrá ser
              consultado a través de la Aplicación o del centro de atención
              telefónica de la Entidad. El Titular autoriza a la Entidad a hacer
              ajustes en su saldo para corregir un error en una acreditación o
              débito, en caso de resultar necesario.
            </p>
            <p className="ml-4">
              <span className="mr-4">3.4</span>
              El Titular conoce y acepta como prueba de las operaciones
              efectuadas por la CVU y los montos comprometidos en las mismas:
            </p>
            <p className="ml-4">
              <span className="mr-4">(i)</span>el respectivo comprobante emitido
              por la Entidad;
            </p>
            <p className="ml-4">
              <span className="mr-4">(ii)</span>todo comprobante que se haya
              validado con el número de PIN por parte del Titular mediante los
              mecanismos provistos, cuando dicha opción estuviere habilitada;
            </p>
            <p className="ml-4">
              <span className="mr-4">(ii)</span>todo comprobante electrónico y/o
              digital emitido por la Entidad, y/o servicios en transacciones,
              que no sean desconocidas previamente por el Titular.
            </p>
            <p className="ml-4">
              <span className="mr-4">3.5</span>
              La CVU no admitirá la realización de compras en cuotas, ni
              financiación del saldo.
            </p>
            <p className="ml-4">
              <span className="mr-4">3.6</span>
              La Entidad podrá suspender o cancelar de forma inmediata una CVU
              si ésta es usada de forma indebida, fraudulenta o si se encuentran
              indicios de movimientos sospechosos que puedan, conforme la
              normativa aplicable, ser indicativos de una violación a las
              disposiciones contra el lavado de activos, financiación del
              terrorismo o cualquier otra violación de la normativa vigente, o
              de actividades ilícitas.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">4. Cargas</h3>
            <p className="ml-4">
              <span className="mr-4">4.1</span>
              Una vez habilitada la CVU, el Titular podrá efectuar cargas de
              saldo a la CVU por los montos y canales que la Entidad tenga
              habilitados o incorpore en el futuro como Medios de Carga, que se
              indicarán a través de los Medios de Comunicación Habilitados,
              hasta alcanzar los límites establecidos la Entidad. El nuevo saldo
              estará disponible como máximo dentro de las 72 (setenta y dos)
              horas hábiles de realizada la recarga.
            </p>
            <p className="ml-4">
              <span className="mr-4">4.2</span>
              La comisión por carga se encuentra detallada en el Anexo I (en
              adelante, la &quot;Comisión por Carga&quot;). La Entidad podrá modificar la
              Comisión por Carga, comunicándolo a través de los Medios de
              Comunicación Habilitados, con 60 (sesenta) días de anticipación a
              la aplicación de la nueva Comisión por Carga, y ésta se debitará
              del saldo que sea cargado en la CVU con posterioridad a su entrada
              en vigencia.
            </p>
            <p className="ml-4">
              <span className="mr-4">4.3</span>
              La Entidad no tiene por actividad la captación de fondos, la
              prestación de servicios financieros, ni recibir depósitos
              bancarios. Los fondos cargados en la CVU no consisten en un
              depósito bancario o de otra índole, ni generará ningún interés. La
              Entidad mantendrá los fondos cargados por los Titulares en cuentas
              abiertas en entidades financieras del país a nombre de la Entidad.
              La Entidad no será responsable en ningún caso por la insolvencia
              de dichas entidades o cualquier cambio normativo que afecte las
              cuentas en las cuales los fondos sean depositados.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">5. Información sobre las operaciones</h3>
            <p>
              El Titular podrá verificar las operaciones efectuadas con la CVU
              mediante consulta a través de la Aplicación. También podrá
              verificar a través de la Aplicación los cargos, costos y
              comisiones que se hubieren generado en el período consultado.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">6. Operaciones en moneda extranjera</h3>
            <p>
              El monto de las operaciones realizadas y autorizadas en moneda
              extranjera con la CVU se convertirá a Pesos argentinos, a los
              efectos meramente indicativos, al tipo de cambio vigente al
              momento de realizada la operación. Dicho monto se convertirá de
              forma efectiva y definitiva a la moneda extranjera
              correspondiente, a la fecha en que el Comercio Adherido presente
              la operación realizada a MasterCard (la &quot;Fecha de Conversión&quot;). El
              Solicitante (i) reconoce que la fecha de la operación no
              necesariamente coincidirá con la Fecha de Conversión, y (ii)
              autoriza a la Entidad a debitarle del saldo de la CVU el monto
              equivalente como consecuencia de la diferencia del tipo de cambio
              que pudiera existir entre la fecha de la operación con la CVU y la
              Fecha de Conversión.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">7. Información - Datos personales</h3>
            <p className="ml-4">
              <span className="mr-4">7.1</span>
              La Entidad queda autorizada por el Solicitante a suministrar a la
              Entidad, al Banco central de la República Argentina, UIF, y a
              cualquier autoridad u organismo competente que lo solicite y/o a
              sus empresas filiales y/o subsidiarias, según corresponda, la
              totalidad de la información acerca del Solicitante y/o Titular y/o
              Beneficiario, que resulte necesaria para cubrir los requerimientos
              de las normas aplicables.
            </p>
            <p className="ml-4">
              <span className="mr-4">7.2</span>
              El Titular presta su consentimiento libre e informado para que los
              datos aquí suministrados sean almacenados en una base de datos
              administrada por Payex S.R.L con domicilio en Av Avellaneda 1727
              8B CABA. El suministro de los datos solicitados es facultativo,
              excepto por los campos indicados expresamente, respecto de los
              cuales el suministro de los datos requeridos es una condición para
              poder utilizar el servicio. El Titular autoriza a Payex S.R.L para
              que proceda al tratamiento de los datos proporcionados. Asimismo,
              el Titular autoriza a que los datos sean cedidos a otra persona
              que constituya una empresa parte del mismo grupo que la Entidad, y
              personas afiliadas o controladas de la Entidad, y presta su
              consentimiento libre e informado para que los datos proporcionados
              sean cedidos a terceros, incluso si dicha cesión implica una
              transferencia internacional de datos a cualquier otra
              jurisdicción. El titular de los datos personales tendrá la
              facultad de ejercer el derecho de acceso a los mismos en forma
              gratuita a intervalos no inferiores a seis meses, salvo que se
              acredite un interés legítimo al efecto conforme lo establecido en
              el artículo 14, inciso 3 de la Ley Nº 25.326. El Titular podrá
              solicitar, en cualquier momento, la actualización, rectificación
              y/o supresión de los datos personales oportunamente suministrados.
              A estos fines deberá remitir su solicitud por correo electrónico a&nbsp;
              <span onClick={handleSendEmailClick} className="hover:cursor-pointer font-semibold">support@exchangecopter.com</span> o por correo postal Av Avellaneda 1727
              8B CP 1406 , Ciudad Autónoma de Buenos Aires, Argentina. La
              AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, Órgano de Control de
              la Ley Nº 25.326, tiene la atribución de atender las denuncias y
              reclamos que se interpongan con relación al incumplimiento de las
              normas sobre re protección de datos personales.
            </p>
            <p className="ml-4">
              <span className="mr-4">7.3</span>
              Por medio del presente, en mi carácter de TITULAR DE LOS DATOS
              presto mi CONSENTIMIENTO para que Payex S.R.L en su carácter de
              CESIONARIO confronte mis datos personales que se indican en
              párrafo siguiente con la base de datos del RENAPER, conforme a las
              especificaciones que a continuación se detallan:
            </p>
            <p>Datos autorizados:</p>
            <p>
              El presente consentimiento para el tratamiento de mis datos
              personales alcanza a los incluidos en mi Documento Nacional de
              Identidad (INCLUYENDO DATOS BIOMETRICOS DE HUELLA DACTILAR Y DE
              RECONOCIMIENTO FACIAL) en confronte con lo que informa el web
              service del REGISTRO NACIONAL DE LAS PERSONAS.
            </p>
            <p>Información sobre el tratamiento:</p>
            <p className="ml-4">
              <span className="mr-4">(a)</span>todo comprobante que se haya
              validado con el número de PIN por parte del Titular mediante los
              mecanismos provistos, cuando dicha opción estuviere habilitada;
            </p>
            <p className="ml-4">
              <span className="mr-4">(b)</span>Los datos confrontados serán
              destruidos una vez verificada la validez del Documento Nacional de
              Identidad y validada la misma, no pudiendo ser almacenados.
            </p>
            <p className="ml-4">
              <span className="mr-4">(c)</span>Los datos son facilitados con
              carácter obligatorio, por cuanto es imprescindible identificar
              fehacientemente al titular, para asegurar el correcto proceso de
              identificación.
            </p>
            <p className="ml-4">
              <span className="mr-4">(d)</span>El titular de los datos podrá
              ejercer los derechos de acceso, rectificación y supresión de sus
              datos en cualquier momento y a su sola solicitud ante el RENAPER.
            </p>
            <p className="ml-4">
              <span className="mr-4">(e)</span>En cumplimiento de la Resolución
              AAIP Nº 14/2018, le hacemos saber que la AGENCIA DE ACCESO A LA
              INFORMACIÓN PÚBLICA, en su carácter de Órgano de Control de la Ley
              N° 25.326, tiene la atribución de atender las denuncias y reclamos
              que interpongan quienes resulten afectados en sus derechos por
              incumplimiento de las normas vigentes en materia de protección de
              datos personales.
            </p>
            <p className="font-semibold">
              Todos datos personales aquí incluidos son recogidos para ser
              incorporados y tratados en una base de datos, cuyo destinatario y
              titular es Payex S.R.L ,con domicilio en Av Avellaneda 1727 8B ,
              Rep. Argentina. Conforme a lo establecido en el Artículo 6 inciso
              (e) de la Ley 25.326 (Ley de Datos Personales), el Titular podrá
              en cualquier momento de ejercer los derechos de acceso,
              rectificación y supresión de sus datos.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">8. Extravío, robo o hurto de la CVU</h3>
            <p className="ml-4">
              <span className="mr-4">8.1</span>
              En caso de extravío, hurto, robo, duplicación o vulneración de la
              seguridad de la CVU, el Solicitante y/o en su caso el Titular
              deberá proceder a dar de inmediato aviso a través de la
              Aplicación, o a través de la página web de la Entidad. El
              Solicitante y/o en su caso el Titular será/n responsable/s de
              cualquier consumo que se efectúe con la CVU extraviada, hurtada,
              robada, duplicada o vulnerada en su seguridad, hasta la
              realización de la denuncia efectuada conforme lo previsto en la
              presente cláusula. En caso de omitir dicha denuncia, el
              Solicitante y/o en su caso el Titular será/n responsable/s de
              todas las compras que se efectúen con la CVU extraviada, hurtada,
              robada, duplicada o vulnerada en su seguridad, hasta su
              vencimiento o eventual recupero por la Entidad.
            </p>
            <p className="ml-4">
              <span className="mr-4">8.2</span>
              Al efectuar la denuncia en caso de pérdida, robo, extravío,
              duplicación o vulneración en su seguridad, el Solicitante y/o en
              su caso el Titular de la CVU deberá/n solicitar el bloqueo de la
              CVU. El bloqueo será procesado por la Entidad y efectivizado a
              partir de la hora cero del día de la denuncia, pero el Titular
              responderá ilimitadamente por los usos anteriores. La Entidad no
              responderá ni resarcirá al Titular de la CVU por los eventuales
              perjuicios que se le hubieren causado hasta la efectivización del
              bloqueo. Si el Titular recobrara la posesión de la CVU denunciada
              por cualquier circunstancia, dicha CVU no podrá ser usada,
              debiendo inutilizarse y ser entregada a la Entidad.
            </p>
            <p className="ml-4">
              <span className="mr-4">8.3</span>
              Una vez efectuada la denuncia, de manera automática (salvo
              manifestación en contrario), la Entidad emitirá una nueva CVU, que
              será entregada conforme las Formas de Entrega. Serán transferidos
              a la nueva CVU los saldos disponibles en la CVU denunciada.
            </p>
            <p className="ml-4">
              <span className="mr-4">8.4</span>
              La comisión de reposición de la CVU consignada en el Anexo I se
              deducirá del saldo disponible de la CVU. De no existir saldo
              disponible, la CVU no será repuesta, salvo solicitud expresa del
              Titular y el pago previo de dicha comisión por parte del Titular.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">9. Vigencia - Renovación</h3>
            <p className="ml-4">
              <span className="mr-4">9.1</span>
              El plazo de vigencia de la CVU será el indicado en su cuerpo, el
              cual será renovado automáticamente por idéntico plazo, salvo
              manifestación en contrario (i) del Solicitante efectuada con 30
              (treinta) días de anticipación al vencimiento de la CVU o (ii) de
              la Entidad efectuada con 60 (sesenta) días de anticipación al
              vencimiento de la CVU. La renovación automática de la CVU se
              producirá siempre y cuando ésta hubiera sido utilizada en los 12
              (doce) meses previos a su vencimiento. En caso contrario, la
              Entidad podrá dar de baja la CVU sin previo aviso.
            </p>
            <p className="ml-4">
              <span className="mr-4">9.2</span>
              El costo de la renovación, cuyo monto se encuentra consignado en
              el Anexo I, será descontado del saldo de la CVU. Si no existiere
              saldo disponible a tal efecto, no operará la renovación automática
              salvo solicitud expresa del Titular y el pago previo de la
              correspondiente comisión.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">10. Impuestos</h3>
            <p className="ml-4">
              <span className="mr-4">10.1</span>
              Es responsabilidad del Titular determinar qué tipo de tributos se
              aplican a los pagos que realiza y/o recibe, si es que los hay, así
              como también pagar dichos tributos a las autoridades
              correspondientes. La Entidad no se hace responsable de determinar
              si existen tributos que aplican a las operaciones, ni tampoco de
              retener o ingresar tributos. No obstante, en caso de disposición
              expresa imperativa de las autoridades tributarias competentes, la
              Entidad debitará o practicará las retenciones de los tributos que
              resulten aplicables.
            </p>
            <p className="ml-4">
              <span className="mr-4">10.2</span>
              Los tributos actuales y futuros que directa o indirectamente
              graven la CVU o las operaciones y los gastos que se efectúen con
              ella (incluyendo, sin limitación, su emisión, mantenimiento y la
              realización de consumos), estarán a cargo del Solicitante y/o
              Titular.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">11. Baja</h3>
            <p>
              De producirse la baja por decisión ajena al Solicitante, si la CVU
              tuviera algún saldo disponible remanente, la Entidad lo
              reintegrará en efectivo (en la medida en que los montos o mediante
              transferencia bancaria a la cuenta que el Solicitante informe).
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">12. Débitos</h3>
            <p>
              El Solicitante toma debido conocimiento y autoriza a que se
              efectúen los siguientes débitos del saldo disponible en la CVU:
            </p>
            <p className="ml-4">
              <span className="mr-4">(i)</span>las comisiones, gastos, y
              tributos que correspondan por la utilización y/o tenencia de la
              CVU y todos los cargos o sumas que correspondan de acuerdo los
              presentes Términos y Condiciones, el Anexo I;
            </p>
            <p className="ml-4">
              <span className="mr-4">(ii)</span>cualquier otro débito por
              conceptos que se establezcan en el futuro y sean debidamente
              comunicados al Solicitante mediante los Medios de Comunicación
              Habilitados.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">13. Uso personal y cuidado de la CVU</h3>
            <p>
              La CVU es personal e intransferible, y sólo podrá ser utilizada
              por el Titular. El Titular de la CVU deberá
            </p>
            <p className="ml-4">
              <span className="mr-4">(i)</span>utilizarla de acuerdo con los
              presentes Términos y Condiciones;
            </p>
            <p className="ml-4">
              <span className="mr-4">(ii)</span>solicitar a la Entidad o a la
              persona designada por ésta, toda la información que estime
              necesaria acerca del funcionamiento de la CVU, al acceder por
              primera vez al servicio, o ante cualquier duda que se le presente
              posteriormente;
            </p>
            <p className="ml-4">
              <span className="mr-4">(iii)</span>modificar y actualizar el
              código de identificación personal u otra forma de autenticación
              asignada por la Entidad, siguiendo las recomendaciones otorgadas
              por ésta;
            </p>
            <p className="ml-4">
              <span className="mr-4">(iv)</span>no divulgar el código de
              identificación personal por ningún medio y tomar las medidas
              adecuadas para garantizar su seguridad y confidencialidad;
            </p>
            <p className="ml-4">
              <span className="mr-4">(v)</span>guardar la CVU en un lugar seguro
              y verificar periódicamente su posesión;
            </p>
            <p className="ml-4">
              <span className="mr-4">(vi)</span>destruir o devolver a la Entidad
              la CVU cuando ésta hubiera vencido;
            </p>
            <p className="ml-4">
              <span className="mr-4">(vii)</span>no facilitar la CVU para uso de
              terceros;
            </p>
            <p className="ml-4">
              <span className="mr-4">(viii)</span>informar a la Entidad de forma
              inmediata sobre: (1) el robo o extravío de la CVU conforme lo
              previsto en los presentes Términos y Condiciones; y (2) cualquier
              falla o anomalía detectada en el uso de la CVU (incluyendo, sin
              limitación, la retención de CVUs, cualquier diferencia entre el
              monto dispensado y lo registrado en el respectivo comprobante, la
              falta de emisión de comprobantes, etc.);
            </p>
            <p className="ml-4">
              <span className="mr-4">(ix)</span>no utilizar la CVU cuando se
              encuentren indicios de situaciones de operación anormales; y
            </p>
            <p className="ml-4">
              <span className="mr-4">(x)</span>no responder a intentos de
              comunicación por medios y formas no acordados con la Entidad no
              incluidos como uno de los Medios de Comunicación Habilitados. El
              Titular deberá extremar sus precauciones en toda transacción que
              realice a través de Internet, utilizando sólo sitios seguros, como
              forma de protección contra fraudes.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">14. Transferencias</h3>
            <p className="ml-4">
              <span className="mr-4">14.1</span>
              El sistema permite realizar transferencias entre Titulares de
              diferentes CVUs en forma segura y rápida. A tal efecto, el monto
              de la transferencia será debitado del saldo disponible en la CVU
              de quién realiza la transferencia (el &quot;Transferente&quot;) al impartir
              una instrucción a tal efecto, y será acreditado en la cuenta
              asociada a la CVU de titularidad del beneficiario de la
              transferencia (el &quot;Destinatario&quot;).
            </p>
            <p className="ml-4">
              <span className="mr-4">14.2</span>
              La comisión por transferencia detallada en el Anexo I estará a
              cargo del Transferente y será debitada del saldo de la CVU de su
              titularidad al efectuarse la transferencia.
            </p>
            <p className="ml-4">
              <span className="mr-4">14.3</span>
              Los límites de transferencias serán fijados en cada caso por la
              Entidad y serán informados mediante los Medios de Comunicación
              Habilitados.
            </p>
            <p className="ml-4">
              <span className="mr-4">14.4</span>
              La Entidad no asume ningún tipo de responsabilidad con respecto a
              los posibles errores en los que el Transferente pudiera incurrir
              al realizar el ingreso de la información para la identificación
              del Destinatario a los efectos de la realización de la
              transferencia.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">15. Consulta de operaciones</h3>
            <p>
              El Usuario podrá consultar el saldo de su CVU y las operaciones
              realizadas a través la misma, ingresando a la aplicación web . Si
              la información consignada en dicho medio no fuere impugnada dentro
              de los 30 (treinta) días desde su publicación, las cuentas se
              considerarán aprobadas y liquidadas.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">
              16. Veracidad de la información. Bloqueo de la CVU
            </h3>
            <p>
              El Solicitante declara que toda la información suministrada en el
              presente Contrato, así como en el Formulario de Solicitud, es
              completa y veraz, y se obliga a notificar a la Entidad sobre
              cualquier modificación en la misma. En caso de que se comprobare
              la falsedad de la información proporcionada o el incumplimiento
              del deber de informar a la Entidad sobre modificaciones
              posteriores, la Entidad podrá proceder a la suspensión o
              cancelación de la CVU.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">
              17. Declaración jurada de origen de fondos
            </h3>
            <p>
              El Solicitante manifiesta que los fondos y valores con los que
              opera no provienen ni se vinculan directa o indirectamente a
              ninguna actividad ilícita y declara bajo juramento que los fondos
              y valores que se utilizan para realizar las operaciones provienen
              de actividades lícitas.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">18. Modificaciones</h3>
            <p>
              El Titular reconoce y acepta que las disposiciones, así como los
              cargos, comisiones, límites y precios previstos en el presente y
              su Anexo son variables ya que sufrirán modificaciones a lo largo
              de la vida del Contrato. Por lo cual las cláusulas y los cargos,
              comisiones, y precios aquí previstos podrán variar. Por
              consiguiente, el presente Contrato podrá ser modificado en la
              medida que se cumplan las siguientes condiciones:
            </p>
            <p className="ml-4">
              <span className="mr-4">(i)</span>notificación al Titular de la
              modificación con 60 (sesenta) días de anticipación a la entrada en
              vigencia de la modificación; y
            </p>
            <p className="ml-4">
              <span className="mr-4">(ii)</span>que la modificación no sea
              rechazada por escrito dentro del referido plazo de 60 (sesenta)
              días. Una vez transcurrido dicho plazo de 60 (sesenta) días y no
              habiendo sido rechazada la modificación por escrito, la misma se
              considerará aceptada y válida. El rechazo de la modificación
              propuesta importará la decisión de rescindir el Contrato.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">19. Entrega de copia del contrato</h3>
            <p>
              El Solicitante declara haber leído y aceptado el presente Contrato
              en oportunidad de su suscripción a través de la aplicación Copter
              CVU . Asimismo, reconoce haber sido informado en la forma
              prescripta por el at. 4 de la Ley 24.240 de Defensa del Consumidor
              de la totalidad de las condiciones y características del servicio,
              de la CVU, de sus costos, comisiones, cargos y gastos,
              presentando, en consecuencia, un consentimiento informado a la
              entrega de la CVU y los servicios asociados a ella.
            </p>
          </section>

          <section className="space-y-3">
            <h3 className="text-4xl">20. Ley apicable</h3>
            <p className="ml-4">
              <span className="mr-4">20.1</span>
              Estos Términos y Condiciones se encuentran regidos por las leyes
              de la República Argentina.
            </p>
            <p className="ml-4">
              <span className="mr-4">20.2</span>
              Usted puede consultar el “Régimen de Transparencia” elaborado por
              el Banco Central sobre la base de la información proporcionada por
              los sujetos obligados a fin de comparar los costos,
              características y requisitos de los productos y servicios
              financieros, ingresando a &nbsp;
              <Link href="http://www.bcra.gob.ar/BCRAyVos/Regimen_de_transparencia.asp" target="_blank" rel="noopener noreferrer" className="font-semibold">http://www.bcra.gob.ar/BCRAyVos/Regimen_de_transparencia.asp.</Link>
            </p>
            <p className="ml-4">
              <span className="mr-4">20.3</span>
              En caso de declararse la nulidad de alguna de las cláusulas del
              presente Contrato, tal nulidad no afectará a la validez de las
              restantes cláusulas, las cuales mantendrán su plena vigencia y
              efecto.
            </p>
            <p className="ml-4">
              <span className="mr-4">20.4</span>
              Se informa al Solicitante que el presente Contrato no se regirá
              por las prescripciones de la ley 25.065 de CVUs de Créditos, ya
              que el mismo no está alcanzado por dicha ley.
            </p>
            <p>
              Normas sobre exterior y cambios del BCRA, Com A6436, ampliatorias
              y modificatorias.
            </p>
            <p>
              Normas sobre Prevención de Lavado de Activos y Financiamiento del
              terrorismo emitida por la Unidad de Información Financiera,
              vigentes o a emitirse en el Futuro.
            </p>
          </section>

          <h3 className="text-xl font-semibold">Anexo I: COMISIONES</h3>

          <section className="border-b-2">
            <div className="flex justify-around my-2 text-base sm:text-base md:text-2xl">
              <div className="mt-4">
                <p className="align-top font-semibold">
                  Descripción del servicio
                </p>
                <p className="align-top mt-2">
                  Comision por gestion de pagos y cobros
                </p>
              </div>
              <div className="mt-4">
                <p className="align-top font-semibold">Costo</p>
                <p className="align-top mt-2">0,2&nbsp;%</p>
              </div>
            </div>
          </section>

          <h3 className="text-xl font-semibold">
            Anexo II: TERMINOS Y CONDICIONES
          </h3>

          <h3 className="underline underline-offset-8">
            TERMINOS Y CONDICIONES DE USO DEL SERVICIO DE PROCESAMIENTO DE PAGOS
          </h3>

          <section className="space-y-3">
            <p>
              Estos términos y condiciones constituyen un contrato entre los
              USUARIOS/AS de la plataforma (en adelante, &quot;Usuario/a&quot; ó &quot;Persona
              Usuaria&quot;) y SG FINANCIAL TECHNOLOGY S.A. (SG), a los fines del uso
              del servicio de procesamiento de pagos, mediante una cuenta de
              pago.
            </p>
            <p>
              REGISTRO. Todo Usuario/a que desee utilizar los Servicios debe
              registrarse y aceptar estos Términos y Condiciones de Uso. Para
              ello debe completar el formulario de registro en todos sus campos
              con datos válidos e información personal exacta, precisa y
              verdadera (&quot;Datos Personales&quot;).
            </p>
            <p>
              La Persona Usuaria asume el compromiso de actualizar los Datos
              Personales conforme resulte necesario. SG no se responsabiliza por
              la certeza de los Datos Personales provistos por sus Usuarios/as.
              Las Personas Usuarias garantizan y responden, en cualquier caso,
              por la veracidad, exactitud, integridad, vigencia y autenticidad
              de los Datos Personales ingresados. Toda la información y los
              Datos Personales ingresados por la Persona Usuaria tienen carácter
              de declaración jurada.
            </p>
            <p>
              SG se reserva el derecho de solicitar comprobantes y/o información
              adicional a efectos de corroborar la información entregada por una
              Persona Usuaria en materia de Datos Personales, así como de
              suspender temporal o definitivamente a aquellas Personas Usuarias
              cuyos datos no hayan podido ser confirmados.
            </p>
            <p>
              Asimismo, la Persona Usuaria presta consentimiento para que el
              intermediario (mutual o cooperativa o cualquier tercero cliente de
              SG que brinde una plataforma a la Persona Usuaria) comparta con SG
              los datos personales que SG requiera para dar cumplimiento a la
              Comunicación A 7328, la Resolución UIF 76/2019 y las restantes que
              luego dictare el BCRA o la Unidad de Información Financiera que le
              fueran aplicable.
            </p>
            <p>
              Se deja expresa constancia que la Persona Usuaria autoriza al
              Sujeto Obligado a compartir toda la información y documentación
              contenida en su legajo relativa a su identificación y el origen y
              licitud de los fondos, con otros sujetos obligados consignados en
              el artículo 20 de la Ley N° 25.246 o aquellas que la modifiquen,
              complementen o sustituyan.
            </p>
            <p>
              SG se reserva el derecho de rechazar una solicitud de registro o
              de cancelar o suspender, temporal o definitivamente una Cuenta
              (conforme es definida a continuación), en caso de detectar
              incongruencias o inconsistencias en la información provista por
              una Persona Usuaria o en caso de detectar actividades sospechosas,
              sin que tal decisión genere para la Persona Usuaria derechos de
              indemnización o resarcimiento.
            </p>
            <p>
              CUENTA DE USUARIO: Al registrarse, la Persona Usuaria solicitará
              la apertura de una cuenta en la plataforma, para lo cual SG
              generará una Clave Virtual Uniforme (CVU) vinculada a la Cuenta
              del/de la Usuario/a. la Persona Usuaria accederá a su Cuenta
              mediante el ingreso de su dirección de e-mail (usuario) y
              contraseña o clave personal elegida. la Persona Usuaria se obliga
              a mantener la confidencialidad de las mismas. En virtud de ello,
              la Persona Usuaria será la única y exclusiva responsable por todas
              las operaciones efectuadas en su Cuenta.
            </p>
            <div className="flex">
              <span>-</span>
              <p className="ml-4">
                Utilización del servicio por cuenta propia. La Cuenta es
                personal, única e intransferible, quedando prohibida su venta,
                cesión o transferencia. la Persona Usuaria no podrá permitir ni
                autorizar el uso de su Cuenta por terceras personas. Solamente
                se permite utilizar los servicios en nombre propio y no en
                representación y/o por cuenta de terceros.
              </p>
            </div>
            <div className="flex">
              <span>-</span>
              <p className="ml-4">
                Objeto. A través de su Cuenta la Persona Usuaria tendrá la
                posibilidad de recibir y efectuar pagos inmediatos acreditando
                fondos en otras CVU o CBU. La plataforma permitirá a la Persona
                Usuaria disponer de dichos fondos mediante la solicitud de
                procesamiento de pagos que efectuare.
              </p>
            </div>
            <div className="flex">
              <span>-</span>
              <p className="ml-4">
                SG es ajeno a la obligación que dio origen a la Solicitud de
                Procesamiento de Pago. SG no será responsable ni verificará las
                causas, importe o cualquier otra circunstancia relativa a dicha
                Solicitud, así como la capacidad para contratar de las Personas
                Usuarias y la veracidad de los datos personales por ellas
                ingresados. La Persona Usuaria será la única y exclusiva
                responsable por todas las operaciones efectuadas en su Cuenta.
                La Persona Usuaria se compromete a notificar a SG en forma
                inmediata y por medio idóneo y fehaciente, de cualquier uso no
                autorizado de su Cuenta, así como del ingreso o de intentos de
                ingreso por terceros no autorizados a la misma. SG no responderá
                por el uso indebido de la clave de ingreso. La Persona Usuaria
                se responsabiliza por las pérdidas que se originen si se
                impartieran instrucciones fraudulentas, duplicadas, no
                autorizadas o meramente erróneas, así como por los eventuales
                perjuicios que pueda causar a SG.
              </p>
            </div>
            <p>
              La Persona Usuaria será responsable por el pago de cualquier
              multa, tasa, penalidad, daño, costo, o reclamo, que sea aplicado a
              SG como resultado de contracargos relacionados con las
              transacciones hechas por el Usuario.
            </p>
            <div className="flex">
              <span>-</span>
              <p className="ml-4">
                Provisión de Servicio de Procesamiento de Pagos a Plataformas de
                otras Entidades. SG manifiesta que en aquellos casos de Cuentas
                abiertas a través de plataformas (Aplicativos de Billeteras
                Virtuales) correspondientes a otras entidades, a las cuales SG
                brinda el servicio de Procesamiento de Pagos, serán dichas
                entidades las que emitan a SG la Solicitud del procesamiento de
                un pago por cuenta y orden de la Persona Usuaria. En virtud de
                ello, la Persona Usuaria acepta que SG es ajeno y desconoce las
                causales que dieron origen a dicha solicitud y que SG no será
                responsable ni verificará las causas, importes y/o cualquier
                otra circunstancia asociada a las solicitudes de procesamiento
                de pagos que recibe de las entidades desarrolladoras de las
                Plataformas.
              </p>
            </div>
            <div className="flex">
              <span>-</span>
              <p className="ml-4">
                Fondos: Acreditaciones. Transferencias. Retiros. En su Cuenta la
                Persona Usuaria sólo puede recibir envíos de dinero o
                acreditaciones a través de las herramientas habilitadas en la
                Plataforma o aplicación móvil.
              </p>
            </div>
            <p>
              Los Fondos se acreditarán en la Cuenta de la la Persona Usuaria,
              quien podrá disponer de los fondos acreditados en forma inmediata
              para realizar las operaciones descriptas de acuerdo con lo
              establecido en estos Términos y Condiciones. Se aclara que la
              Persona Usuaria acuerda, acepta y autoriza recibir fondos que
              oportunamente envíen otros/as Usuarios/as a su Cuenta y que se le
              debite cualquier cargo que resulte aplicable.
            </p>
            <p>
              Los retiros de fondos se harán mediante transferencia a una cuenta
              bancaria o virtual indicada oportunamente por la Persona Usuaria,
              y conforme a sus instrucciones. A los efectos de cualquier
              movimiento de fondos solicitado por la Persona Usuaria, los mismos
              deberán pasar por la CVU creada por SG de titularidad del Usuario
              y a tales efectos. Dicha transferencia será ordenada de manera
              inmediata luego de recibida la solicitud del retiro de los fondos
              por la Persona Usuaria. Para la realización de la transferencia se
              utilizarán los canales más eficientes que se encuentren
              disponibles para transferencias de fondos en el sistema de pagos
              minorista. Cualquier gasto originado por la transferencia estará a
              cargo de la Persona Usuaria.
            </p>
            <div className="flex">
              <span>-</span>
              <p className="ml-4">
                Declaraciones del Usuario. Usos prohibidos. Indisponibilidad de
                fondos. La Persona Usuaria manifiesta que en el uso de la
                Plataforma no infringirá ninguna ley aplicable, ni lo utilizará
                por un servicio, venta o transmisión que está prohibida por la
                ley o estos Términos y Condiciones Generales y/o cualquier tipo
                de actividad que pueda ser considerada fraudulenta o ilegal o
                sospechosa de serlo. La Persona Usuaria no utilizará los
                servicios de SG para transmitir material que constituya un
                delito o bien que pueda dar lugar, directa o indirectamente a
                responsabilidades civiles o que infrinjan los presentes Términos
                y Condiciones Generales. Si SG considera que hay una sospecha o
                indicio de la utilización de la plataforma para alguna actividad
                prohibida por la ley o los presentes Términos y Condiciones
                Generales, podrá rechazar, cancelar o suspender cualquier
                procesamiento de pago, y/o bloquear temporalmente el acceso y
                uso de una Cuenta y/o la utilización o disponibilidad de
                funcionalidades y/o cancelar definitivamente una Cuenta. En tal
                caso, la Persona Usuaria responderá por los daños y perjuicios
                que pueda haber ocasionado a SG, sus funcionarios, empleados,
                directores, agentes, y/o empleados, a cuyos efectos SG se
                reserva el derecho de iniciar las acciones judiciales o
                extrajudiciales que estime pertinentes. La Persona Usuaria será
                exclusiva e ilimitadamente responsable por los perjuicios que su
                conducta pueda causar a SG o a los/las restantes Usuarios/as de
                los servicios de SG.
              </p>
            </div>
            <p>
              Asimismo, queda absolutamente prohibida efectuar cualquier
              operación que pueda considerarse adelanto de efectivo o préstamo,
              así como el ingreso de fondos sin tener un destino específico. SG
              considerará, sin limitación, adelanto de efectivo a aquella
              operación en la que detecte que una Persona Usuaria agrega Fondos
              a su Cuenta mediante la utilización de tarjetas de crédito y
              retira dichos Fondos; también se incluye dentro de esta actividad
              cuando una Persona Usuaria ingresa una Solicitud de Procesamiento
              de Pago a favor de otra, quien posteriormente realiza a su favor
              una nueva Solicitud de Procesamiento de Pago, quien finalmente
              solicita el retiro de tales fondos.
            </p>
            <p>
              Por razones de seguridad, los fondos que se acrediten en la Cuenta
              y/o que estén en proceso de ser acreditados (sin importar el medio
              de pago por el que se hubiera efectuado la transacción) podrán
              permanecer indeterminadamente indisponibles cuando, a exclusivo
              criterio de SG, existan fuertes sospechas de ilegalidades, fraude,
              excesiva cantidad de operaciones o transacciones que puedan ser
              fraudulentas y/o excesivos pedidos de devoluciones y/o
              contracargos, o cualquier otro acto contrario a los presentes
              Términos y Condiciones y/o sospechas de violación de preceptos
              legales por los cuales SG deba responder.
            </p>
            <div className="flex">
              <span>-</span>
              <p className="ml-4">
                SG no es entidad financiera. Se deja expresamente aclarado que
                SG no es una entidad financiera ni presta a la Persona Usuaria
                ningún servicio bancario o cambiario. SG sólo brinda un servicio
                de gestión de pagos por cuenta y orden de las Personas Usuarias
                según las condiciones establecidas en los Términos y Condiciones
                del Servicio de Uso del Servicio de Procesamiento de Pagos.
              </p>
            </div>
            <div className="flex">
              <span>-</span>
              <p className="ml-4">
                Limitación de responsabilidad por los fondos: De acuerdo a la
                normativa vigente del Banco Central de la República Argentina,
                SG es un Proveedor de Servicios de Pago y en tal carácter se
                limita a ofrecer servicios de pago y no se encuentra autorizado
                por el BCRA para operar como una entidad financiera en los
                términos de la Ley Nº 21.526. Los fondos depositados en las
                Cuentas Virtuales SG no constituyen depósitos en una entidad
                financiera y no cuentan con ninguna de las garantías que tales
                depósitos puedan gozar de acuerdo con las normas aplicables en
                materia de depósitos en entidades financieras. SG mantendrá los
                fondos de la Cuenta Virtual en cuentas bancarias de bancos del
                sistema financiero argentino de su elección.
              </p>
            </div>
            <div className="flex">
              <span>-</span>
              <p className="ml-4">
                Intereses. Los fondos acreditados en la Cuenta Virtual no
                generan intereses y la Persona Usuaria podrá disponer libremente
                de ellos para realizar las operaciones descriptas en el
                presente, ello una vez que se encuentren disponibles en su
                cuenta y conforme los plazos y mecanismos y reglas determinados
                por SG.
              </p>
            </div>
            <div className="flex">
              <span>-</span>
              <p className="ml-4">
                La Persona Usuaria brinda su consentimiento para vincular
                (&quot;enrolar&quot;) la/s cuenta/s de pago que usará en la Plataforma de
                PAYEX S.R.L, que opera a través de la billetera digital
                AGILPAGOS (S.G. FINANCIAL TECHNOLOGY S.A)
              </p>
            </div>
            <p>
              El cliente reconoce que la billetera digital es provista por
              AGILPAGOS (S.G. FINANCIAL TECHNOLOGY S.A).
            </p>
            <p>
              Asimismo, la Persona Usuaria declara y reconoce que todas las
              cuentas de pago enroladas son de su titularidad y provistas por
              S.G. FINANCIAL TECHNOLOGY S.A.
            </p>
            <p>
              Toda instrucción de pago o de débito ordenada por la Persona
              Usuaria mediante la billetera digital AGILPAGOS (S.G. FINANCIAL
              TECHNOLOGY S.A) se cursará mientras esté vigente el consentimiento
              o la autorización otorgada por la persona usuaria.
            </p>
            <p>
              CONFIDENCIALIDAD. SG no venderá, alquilará ni negociará con otras
              empresas la información personal de las Personas Usuarias. Estos
              datos serán utilizados para prestar el Servicio de Procesamiento
              de Pago. Sin embargo, SG podrá compartir dicha información con
              proveedores de servicios de valor agregado que se integren dentro
              del sitio o mediante links a otros sitios de Internet, para
              atender necesidades de los/as Usuarios/as relacionadas con los
              servicios que suministra SG o en el marco de lo estipulado en el
              apartado &quot;PREVENCIÓN DE ACTIVIDADES FRAUDULENTAS Y/O ESTAFAS&quot;. La
              Persona Usuaria conoce y acepta que SG acceda a la lista de
              contactos del dispositivo móvil empleado por la Persona Usuaria,
              pudiendo SG utilizar dicha información solamente para localizar
              números de teléfono o correos electrónicos de otros/as Usuarios/as
              o potenciales Usuarios/as. A su vez, la Persona Usuaria manifiesta
              poseer autorización para compartir dicha información con SG. En
              relación a las potenciales Personas Usuarias, SG no almacenará
              nombres, dirección, datos ni números de DNI ni ninguna información
              que permita identificar a una persona, sino que se limitará a
              números de teléfono y correos electrónicos, debiendo mantener la
              confidencialidad y seguridad de dichos datos.
            </p>
            <p>
              SG no responderá por perjuicios que se puedan derivar de la
              violación de dichas medidas por parte de terceros que utilicen las
              redes públicas o Internet para acceder a dicha información o en
              los casos en que haya habido culpa o negligencia de la Persona
              Usuaria.
            </p>
            <p>
              DATOS PERSONALES. La Persona Usuaria declara conocer el acuerdo
              arribado entre la Entidad a la cual se encuentra
              vinculado/asociado y SG, en virtud del cual ha solicitado acceder
              a la Plataforma. En consecuencia, brinda su consentimiento expreso
              a fin de que dicha Entidad brinde sus datos personales y los que
              tuviere en sus registros a SG y autoriza expresamente a la Entidad
              y a SG a efectuar el intercambio de datos e información necesarios
              para llevar a cabo la disposición de fondos mediante esta
              plataforma, una vez aceptados los presentes Términos y Condiciones
              de Uso. Con relación a los datos identificatorios recabados y
              registrados por SG y por la Entidad, de conformidad con la
              normativa de la Ley N° 25.326 de Protección de Datos Personales y
              en particular lo dispuesto por el Artículo 6, presta expresa
              conformidad para que los mismos sean utilizados para la
              consideración de productos y/o servicios que pueda ofrecer en el
              futuro, como así también para el procesamiento de las respectivas
              operaciones. Disp. 10 / 2008 DNPDP. &quot;El titular de los datos
              personales tiene la facultad de ejercer el derecho de acceso a los
              mismos en forma gratuita a intervalos no inferiores a seis meses,
              salvo que se acredite un interés legítimo al efecto conforme lo
              establecido en el artículo 14, inciso 3 de la Ley Nº 25.326&quot;. &quot;La
              DIRECCIÓN NACIONAL DE PROTECCIÓN DE DATOS PERSONALES, Órgano de
              Control de la Ley Nº 25.326, tiene la atribución de atender las
              denuncias y reclamos que se interpongan con relación al
              incumplimiento de las normas sobre protección de datos
              personales&quot;. A sus efectos se transcribe Art. 14 Ley 25.326
              (Derecho de acceso): &quot;1. El titular de los datos, previa
              acreditación de su identidad, tiene derecho a solicitar y obtener
              información de sus datos personales incluidos en los bancos de
              datos públicos, o privados destinados a proveer informes. 2. El
              responsable o usuario debe proporcionar la información solicitada
              dentro de los diez días corridos de haber sido intimado
              fehacientemente. Vencido el plazo sin que se satisfaga el pedido,
              o si evacuado el informe, éste se estimara insuficiente, quedará
              expedita la acción de protección de los datos personales o de
              hábeas data prevista en esta ley. 3. El derecho de acceso a que se
              refiere este artículo sólo puede ser ejercido en forma gratuita a
              intervalos no inferiores a seis meses, salvo que se acredite un
              interés legítimo al efecto. 4. El ejercicio del derecho al cual se
              refiere este artículo en el caso de datos de personas fallecidas
              le corresponderá a sus sucesores universales.&quot; SG hará sus mejores
              esfuerzos para mantener la confidencialidad y seguridad de que
              trata esta sección, pero no responderá por perjuicios que se
              puedan derivar de la violación de dichas medidas por parte de
              terceros que utilicen las redes públicas o Internet para acceder a
              dicha información o en los casos en que haya habido culpa o
              negligencia del Usuario.
            </p>
          </section>

          <section className="space-y-3">
            <h3>
              CONFRONTACIÓN DE DATOS PERSONALES CON RENAPER - CONSENTIMIENTO
              INFORMADO:
            </h3>
            <p>
              Por medio de la presente la Persona Usuaria, en su carácter de
              titular de sus datos personales, presta su conformidad para que SG
              confronte sus datos personales con la base de datos del RENAPER.
              El presente consentimiento para el tratamiento de datos personales
              alcanza a los incluidos en el Documento Nacional de Identidad
              (incluyendo datos biométricos de huella dactilar y de
              reconocimiento facial) en confronte con lo que informa el web
              service del REGISTRO NACIONAL DE LAS PERSONAS.
            </p>
            <p>
              En concordancia con lo mencionado en el párrafo anterior, se deja
              constancia que quien detente la titularidad de los datos podrá
              ejercer los derechos de acceso, rectificación y supresión de sus
              datos en cualquier momento y a su sola solicitud ante el RENAPER.
              Asimismo, en cumplimiento de la Resolución AAIP Nº 14/2018, se
              hace saber que la AGENCIA DE ACCESO A LA INFORMACIÓN PÚBLICA, en
              su carácter de Órgano de Control de la Ley N° 25.326, tiene la
              atribución de atender las denuncias y reclamos que interpongan
              quienes resulten afectados en sus derechos por incumplimiento de
              las normas vigentes en materia de protección de datos personales.
            </p>
            <h3>PREVENCIÓN DE ACTIVIDADES FRAUDULENTAS Y/O ESTAFAS:</h3>
            <p>
              SG no es responsable por el uso indebido de la plataforma y podrá
              llevar adelante todas las acciones enunciadas en el apartado
              &quot;Declaraciones del Usuario. Usos prohibidos. Indisponibilidad de
              fondos&quot; si detectara indicios de actividades fraudulentas y/o
              cualquier actividad presuntamente ilegal o maliciosa por parte de
              las Personas Usuarias, incluyendo el bloqueo de fondos transitorio
              y/o permanente o el cierre de la cuenta. Adicionalmente, SG es
              suscriptor de convenios de colaboración con otras entidades
              financieras y/o proveedores de servicios de pago en virtud de los
              cuales se comprometen a prestar cooperación recíproca en miras a
              realizar los mayores esfuerzos para tomar medidas oportunas y
              eficaces con el fin de detectar y prevenir fraudes, y cuidar los
              intereses económicos propios y de sus clientes. En consecuencia,
              SG podrá compartir información relativa a la Persona Usuaria y sus
              operaciones en esta entidad a otras entidades financieras y/o
              Proveedores de Servicios de Pago frente a requerimientos que
              reciba en el marco de denuncias o reclamos por presuntos fraudes o
              estafas y/o cualquier actividad con indicios de infringir las
              normativas y/o disposiciones de los presentes términos y
              condiciones, manifestando el Usuario su consentimiento expreso. Se
              deja constancia que la información compartida de acuerdo a lo
              mencionado no será utilizada en forma distinta a la expresamente
              autorizada por medio de la presente.
            </p>
            <h3>LIMITACIÓN DE RESPONSABILIDAD POR EL SERVICIO:</h3>
            <p>
              SG no garantiza el acceso y uso continuado o ininterrumpido de su
              plataforma. El sistema puede eventualmente no estar disponible
              debido a dificultades técnicas o fallas de Internet en los links o
              herramientas o por cualquier otra circunstancia ajena a SG, no
              siendo responsable SG de tales perjuicios resultantes de las
              mencionadas dificultades, así como por cualquier otra clase de
              daños, incluyendo daños indirectos, especiales o consecuentes que
              surjan o experimenten los Usuarios, incluso en el caso que dichas
              fallas afecten los montos que deban ser pagados o acreditados.
            </p>
            <h3>PROPIEDAD INTELECTUAL:</h3>
            <p>
              Todos los derechos intelectuales e industriales, sobre el Sitio,
              Códigos, desarrollo, software, hardware, dominio, logos, diseños,
              información, etc. son de propiedad de SG. En ningún caso se
              entenderá que la Persona Usuaria tendrá algún tipo de derecho
              sobre los mismos.
            </p>
            <h3>MODIFICACIÓN EN LOS TÉRMINOS Y CONDICIONES:</h3>
            <p>
              SG podrá modificar en cualquier momento estos Términos y
              Condiciones de Uso, a cuyo fin notificará los cambios a la Persona
              Usuaria publicando una versión actualizada de los mismos en el
              sitio con expresión de la fecha de la última modificación. Todos
              los términos modificados entrarán en vigor a los 10 (diez) días de
              su publicación. Dentro de los 10 (diez) días siguientes a la
              publicación de las modificaciones introducidas, la Persona Usuaria
              deberá comunicar por e-mail a consultasyreclamos@sgfintech.com.ar
              si no acepta las mismas; en ese caso quedará disuelto el vínculo
              contractual. Vencido este plazo, se considerará que la Persona
              Usuaria acepta los nuevos términos y el contrato continuará
              vinculando a ambas partes. Los Términos y Condiciones de Uso
              modificados serán aplicables a toda Solicitud de Procesamiento de
              Pagos que se celebre con posterioridad a la notificación al
              Usuario.
            </p>
            <h3>CESIÓN:</h3>
            <p>
              La Persona Usuaria no podrá ceder, transferir, delegar o disponer
              de los derechos u obligaciones derivados del presente Contrato,
              total o parcialmente. SG podrá ceder, transferir, delegar o
              disponer de los derechos u obligaciones derivados del presente o
              de su posición contractual, total o parcialmente, notificando
              dicho al acto a la Persona Usuaria mediante un aviso en el sitio,
              para lo cual la Persona Usuaria otorga su consentimiento de manera
              previa para la realización de dichas acciones.
            </p>
            <h3>TERMINACIÓN:</h3>
            <p>
              SG y la Persona Usuaria podrán en cualquier oportunidad de
              vigencia del presente contrato terminarlo sin expresión de causa
              alguna, lo que implicará el cierre de la Cuenta, pero no
              suspenderá el cumplimiento de las Solicitudes de Procesamiento de
              Pago ya autorizadas por la Persona Usuaria al momento de notificar
              la rescisión. A los efectos de ejercer esta facultad, es necesario
              que la parte que pretende la terminación del contrato no adeude a
              la otra ni a terceros involucrados en las operaciones el
              cumplimiento de alguna obligación.
            </p>
            <p>
              Cualquiera de las partes podrá, en caso de incumplimiento de la
              contraparte al presente contrato o a la legislación aplicable en
              la materia, dar por terminada la prestación de los Servicios sin
              ningún tipo de aviso, reservándose el derecho de reclamar los
              daños y perjuicios que tal incumplimiento haya causado.
            </p>
            <p>
              Se deja expresa constancia y la Persona Usuaria declara conocer
              que la vigencia de la CVU está ligada a la vigencia del contrato
              entre la entidad a la cual se vinculada y SG. En caso de que dicho
              contrato fuese rescindido o finalizara por cualquier causa, las
              CVU creadas en el marco del mismo serán cerradas observando las
              previsiones mencionadas en los párrafos precedentes.
            </p>
            <h3>DOCUMENTACIÓN:</h3>
            <p>
              La Persona Usuaria opta expresamente por que la documentación e
              información relacionada con el Contrato provista tenga soporte
              electrónico. La Persona Usuaria podrá hacer copias, incluso en
              soporte físico, de la documentación e información provista por SG
              relativa al Contrato. La Persona Usuaria autoriza en forma
              irrevocable a SG y/o a quien SG designe, a grabar las operaciones
              de la Persona Usuaria relativas a los servicios prestados, y a
              utilizar dichas grabaciones como medio probatorio. A tales
              efectos, la Persona Usuaria y SG acuerdan otorgarle valor
              probatorio a las constancias que se emitan como consecuencia de
              las aprobaciones o instrucciones dadas por la Persona Usuaria, con
              el alcance establecido en la legislación vigente.
            </p>
            <h3>NOTIFICACIONES:</h3>
            <p>
              Serán válidas todas las notificaciones realizadas a las Personas
              Usuarias a la dirección de correo electrónico principal registrada
              por éstos (domicilio especial electrónico), mediante la aplicación
              móvil y/o a la Cuenta de la Persona Usuaria.
            </p>
            <h3>DOMICILIOS:</h3>
            <p>
              Se fija como domicilio de SG Pueyrredón 870 de Rosario, Provincia
              de Santa Fe. El domicilio constituido por las Personas Usuarias a
              los fines del de la Solicitud de Procesamiento de Pagos es el
              domicilio registrado por los Usuarios ante SG.
            </p>
            <h3>JURISDICCIÓN Y LEY APLICABLE:</h3>
            <p>
              Este acuerdo estará regido en todos sus puntos por las leyes
              vigentes en la Argentina. Cualquier controversia derivada del
              presente acuerdo, su existencia, validez, interpretación, alcance
              o cumplimiento, será sometida a los tribunales provinciales de
              Rosario, Provincia de Santa Fe.
            </p>
          </section>
        </article>
      </main>
    </section>
  );
};
export default TermsSection;
