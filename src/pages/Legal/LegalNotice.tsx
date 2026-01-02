import { LegalPageWrapper } from '../../components/legal'

export function LegalNotice() {
  return (
    <LegalPageWrapper
      title="Aviso Legal"
      description="Terminos y condiciones de uso de la plataforma"
    >
      <div className="bg-horix-darker rounded-2xl border border-horix-gray-dark/30 overflow-hidden">
        <div className="px-6 py-8 space-y-8">

          <section>
            <p className="text-horix-gray leading-relaxed">
              ELEVATE STUDIO S.L, responsable del sitio web (en adelante responsable) y pone a disposicion de los usuarios la siguiente informacion,
              con la que pretende dar cumplimiento a las obligaciones dispuestas en la Ley 34/2002, de 11 de julio, de Servicios de la Sociedad
              de la Informacion y de Comercio Electronico (LSSICE), BOE No166, asi como informar a todos los usuarios del sitio web de cuales
              son las condiciones de uso.
            </p>
            <p className="text-horix-gray leading-relaxed mt-4">
              Toda persona que acceda a este sitio web, asume el papel de usuario, comprometiendose al cumplimiento riguroso de las disposiciones
              aqui dispuestas, asi como a cualquier otra disposicion legal que fuera de aplicacion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              Datos Identificativos del Responsable del Sitio Web
            </h2>
            <div className="bg-horix-dark rounded-lg p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <strong className="text-horix-cream">Denominacion Social:</strong>
                  <p className="text-horix-gray">ELEVATE STUDIO S.L</p>
                </div>
                <div>
                  <strong className="text-horix-cream">CIF:</strong>
                  <p className="text-horix-gray">B-75532226</p>
                </div>
                <div>
                  <strong className="text-horix-cream">Domicilio:</strong>
                  <p className="text-horix-gray">C/ MARACENA No3, 18101-BELICENA (GRANADA)</p>
                </div>
                <div>
                  <strong className="text-horix-cream">Telefono:</strong>
                  <p className="text-horix-gray">+34 684 053 267</p>
                </div>
                <div>
                  <strong className="text-horix-cream">E-mail:</strong>
                  <p className="text-horix-gray">info@elevate.com.es</p>
                </div>
                <div>
                  <strong className="text-horix-cream">Dominio Web:</strong>
                  <p className="text-horix-gray">www.horix.es</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              Derechos de la Propiedad Intelectual e Industrial
            </h2>
            <p className="text-horix-gray leading-relaxed mb-4">
              El sitio web, incluyendo a titulo enunciativo, pero no limitativo su programacion, edicion, compilacion y demas elementos
              necesarios para su funcionamiento, los disenos, logotipos, textos, etc, son propiedad del responsable, o si es el caso,
              dispone de licencia o autorizacion expresa por parte de los autores. Todos los contenidos de este sitio web, se encuentran
              debidamente protegidos por la normativa de propiedad intelectual e industrial.
            </p>
            <p className="text-horix-gray leading-relaxed">
              Independientemente de la finalidad para la que fueran destinados, la reproduccion total o parcial, uso, explotacion,
              distribucion y comercializacion, requiere en todo caso de la autorizacion por parte del responsable.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              Exencion de Responsabilidades
            </h2>
            <p className="text-horix-gray leading-relaxed">
              El responsable, se exime de cualquier tipo de responsabilidad derivada de la informacion publicada en su sitio web,
              siempre que esta informacion haya sido manipulada o introducida por un tercero ajeno al mismo.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              Ley Aplicable y Jurisdiccion
            </h2>
            <p className="text-horix-gray leading-relaxed">
              Para la resolucion de todas las controversias o cuestiones relacionadas con el presente sitio web o de las actividades
              en el desarrolladas, sera de aplicacion la legislacion espanola, a la que se someten expresamente las partes, siendo
              competentes para la resolucion de todos los conflictos derivados o relacionados con su uso los Juzgados y Tribunales
              del domicilio del usuario o, del lugar del cumplimiento de la obligacion.
            </p>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              Principios Aplicables al Tratamiento de los Datos Personales
            </h2>

            <div className="space-y-4">
              <div className="bg-horix-gold/10 border border-horix-gold/30 rounded-lg p-4">
                <h3 className="font-semibold text-horix-gold mb-2">Principio de licitud, lealtad y transparencia</h3>
                <p className="text-horix-gray text-sm">
                  Se requerira en todo momento el consentimiento del usuario previa informacion completamente transparente de los fines para los cuales se recogen los datos personales.
                </p>
              </div>

              <div className="bg-emerald-500/10 border border-emerald-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-emerald-400 mb-2">Principio de limitacion de la finalidad</h3>
                <p className="text-horix-gray text-sm">
                  Los datos personales seran recogidos con fines determinados, explicitos y legitimos.
                </p>
              </div>

              <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-blue-400 mb-2">Principio de minimizacion de datos</h3>
                <p className="text-horix-gray text-sm">
                  Los datos personales recogidos seran unicamente los estrictamente necesarios en relacion con los fines para los que son tratados.
                </p>
              </div>

              <div className="bg-purple-500/10 border border-purple-500/30 rounded-lg p-4">
                <h3 className="font-semibold text-purple-400 mb-2">Principio de integridad y confidencialidad</h3>
                <p className="text-horix-gray text-sm">
                  Los datos personales seran tratados de manera que se garantice su seguridad y confidencialidad.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-xl font-semibold text-horix-cream mb-4">
              Cuales son sus Derechos y Como Ejercitarlos
            </h2>
            <p className="text-horix-gray leading-relaxed mb-6">
              Como interesado que nos ha proporcionado sus datos personales, tiene pleno derecho para ejercitar los siguientes
              derechos que la normativa en materia de proteccion de datos le reconoce:
            </p>

            <div className="space-y-4">
              <div className="border border-horix-gray-dark rounded-lg p-4">
                <h3 className="font-semibold text-horix-cream mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-horix-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                  </svg>
                  Derecho de Acceso
                </h3>
                <p className="text-horix-gray text-sm">
                  El interesado tendra derecho a solicitar y obtener gratuitamente la informacion de sus datos de caracter personal sometidos a tratamiento.
                </p>
              </div>

              <div className="border border-horix-gray-dark rounded-lg p-4">
                <h3 className="font-semibold text-horix-cream mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-horix-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                  </svg>
                  Derecho de Rectificacion y Supresion
                </h3>
                <p className="text-horix-gray text-sm">
                  El responsable tendra la obligacion de hacer efectivo el derecho de rectificacion o supresion del interesado en el plazo de diez dias.
                </p>
              </div>

              <div className="border border-horix-gray-dark rounded-lg p-4">
                <h3 className="font-semibold text-horix-cream mb-2 flex items-center">
                  <svg className="w-5 h-5 mr-2 text-horix-gold" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 18.364A9 9 0 005.636 5.636m12.728 12.728L5.636 5.636" />
                  </svg>
                  Derecho de Oposicion
                </h3>
                <p className="text-horix-gray text-sm">
                  El interesado tendra derecho a oponerse en cualquier momento, por motivos relacionados con su situacion particular.
                </p>
              </div>
            </div>

            <div className="mt-6 bg-amber-500/10 border border-amber-500/30 rounded-lg p-4">
              <h3 className="font-semibold text-amber-400 mb-2">
                Reclamacion ante la AEPD
              </h3>
              <p className="text-horix-gray text-sm">
                En caso de que se haya vulnerado cualquiera de sus derechos, el interesado tiene derecho a presentar una reclamacion
                ante la Agencia Espanola de Proteccion de Datos (AEPD): <a href="http://www.aepd.es" className="text-horix-gold hover:underline">http://www.aepd.es</a>
              </p>
            </div>
          </section>

          <div className="mt-12 pt-8 border-t border-horix-gray-dark">
            <p className="text-sm text-horix-gray-dark">
              Ultima actualizacion: Enero 2025
            </p>
          </div>
        </div>
      </div>
    </LegalPageWrapper>
  )
}
