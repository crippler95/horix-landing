import { LegalPageWrapper } from '../../components/legal'

export function CookiePolicy() {
  return (
    <LegalPageWrapper
      title="Politica de Cookies"
      description="Informacion sobre el uso de cookies en nuestra plataforma"
    >
      <div className="bg-horix-darker rounded-2xl border border-horix-gray-dark/30 overflow-hidden">
        <div className="px-6 py-8 space-y-8">

          <section>
            <h2 className="text-2xl font-semibold text-horix-cream mb-4">
              QUE SON LAS COOKIES
            </h2>
            <p className="text-horix-gray leading-relaxed mb-4">
              Una cookie es un fichero que se descarga en su ordenador, telefono movil, tablet, etc, al acceder a determinados sitios web. Las cookies permiten a un sitio web, entre otras cosas, almacenar y recuperar informacion sobre los habitos de navegacion de un usuario o de su equipo.
            </p>
            <ul className="list-disc pl-6 space-y-2 text-horix-gray">
              <li>Desde un punto de vista tecnico, permiten que el sitio web funcione de forma mas agil y adaptado a las preferencias de los usuarios.</li>
              <li>Establecen niveles de proteccion y seguridad que impiden o dificultan ciberataques contra el sitio web o sus usuarios.</li>
              <li>Permiten que los gestores de los medios puedan conocer datos estadisticos recopilados para mejorar la calidad y experiencia de sus servicios.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-horix-cream mb-4">
              TIPOS DE COOKIES QUE EXISTEN
            </h2>

            <div className="space-y-6 text-horix-gray">
              <p>Segun quien sea la entidad que gestione el dominio desde donde se envian las cookies:</p>

              <div className="ml-4 space-y-3">
                <div>
                  <strong className="text-horix-cream">- Cookies Propias:</strong> Aquellas que se envian al equipo terminal del usuario desde un equipo o dominio gestionado por el propio editor.
                </div>
                <div>
                  <strong className="text-horix-cream">- Cookies de Terceros:</strong> Aquellas que se envian al equipo terminal del usuario desde un equipo o dominio que no es gestionado por el editor, sino por otra entidad.
                </div>
              </div>

              <p>Segun el plazo de tiempo que permanecen almacenadas:</p>

              <div className="ml-4 space-y-3">
                <div>
                  <strong className="text-horix-cream">- Cookies de Sesion:</strong> Disenadas para recabar y almacenar datos mientras el usuario accede a un sitio web.
                </div>
                <div>
                  <strong className="text-horix-cream">- Cookies Persistentes:</strong> Los datos siguen almacenados en el terminal y pueden ser accedidos durante un periodo definido.
                </div>
              </div>

              <p>Segun la finalidad:</p>

              <div className="ml-4 space-y-3">
                <div>
                  <strong className="text-horix-cream">- Cookies Tecnicas:</strong> Permiten la navegacion y la utilizacion de diferentes opciones o servicios del sitio.
                </div>
                <div>
                  <strong className="text-horix-cream">- Cookies de Personalizacion:</strong> Permiten al usuario acceder al servicio con caracteristicas predefinidas.
                </div>
                <div>
                  <strong className="text-horix-cream">- Cookies de Analisis:</strong> Permiten el seguimiento y analisis del comportamiento de los usuarios.
                </div>
                <div>
                  <strong className="text-horix-cream">- Cookies Publicitarias:</strong> Permiten la gestion de espacios publicitarios.
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-horix-cream mb-4">
              TIPOS DE COOKIES QUE SE UTILIZAN EN ESTA WEB
            </h2>

            <div className="space-y-4">
              <div className="border border-horix-gray-dark rounded-lg p-6">
                <h3 className="text-lg font-semibold text-horix-cream mb-3 flex items-center">
                  <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                  Cookies Tecnicas (Necesarias)
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-horix-gray-dark">
                        <th className="text-left py-2 font-medium text-horix-cream">Cookie</th>
                        <th className="text-left py-2 font-medium text-horix-cream">Proposito</th>
                        <th className="text-left py-2 font-medium text-horix-cream">Duracion</th>
                      </tr>
                    </thead>
                    <tbody className="text-horix-gray">
                      <tr className="border-b border-horix-gray-dark/50">
                        <td className="py-2 font-mono text-horix-gold">horix-cookie-consent</td>
                        <td className="py-2">Almacena las preferencias de cookies del usuario</td>
                        <td className="py-2">1 ano</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              <div className="border border-horix-gray-dark rounded-lg p-6">
                <h3 className="text-lg font-semibold text-horix-cream mb-3 flex items-center">
                  <div className="w-3 h-3 bg-purple-500 rounded-full mr-3"></div>
                  Cookies de Analisis
                </h3>
                <div className="overflow-x-auto">
                  <table className="min-w-full text-sm">
                    <thead>
                      <tr className="border-b border-horix-gray-dark">
                        <th className="text-left py-2 font-medium text-horix-cream">Cookie</th>
                        <th className="text-left py-2 font-medium text-horix-cream">Proposito</th>
                        <th className="text-left py-2 font-medium text-horix-cream">Duracion</th>
                      </tr>
                    </thead>
                    <tbody className="text-horix-gray">
                      <tr className="border-b border-horix-gray-dark/50">
                        <td className="py-2 font-mono text-horix-gold">_ga</td>
                        <td className="py-2">Google Analytics - Distingue usuarios unicos</td>
                        <td className="py-2">2 anos</td>
                      </tr>
                      <tr className="border-b border-horix-gray-dark/50">
                        <td className="py-2 font-mono text-horix-gold">_ga_*</td>
                        <td className="py-2">Google Analytics - Mantiene el estado de la sesion</td>
                        <td className="py-2">2 anos</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
                <p className="text-sm text-horix-gray mt-3">
                  <strong>Nota:</strong> Las cookies de analisis solo se activan si acepta las cookies de analisis.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-semibold text-horix-cream mb-4">
              COMO ELIMINAR LAS COOKIES DEL NAVEGADOR
            </h2>

            <p className="text-horix-gray mb-6">
              Todos los navegadores permiten hacer cambios para desactivar la configuracion de las cookies. El usuario dispone de la opcion de revocar en cualquier momento el consentimiento previamente otorgado.
            </p>

            <div className="space-y-4">
              <div className="border border-horix-gray-dark rounded-lg p-4">
                <h4 className="font-semibold text-horix-cream mb-2">Chrome</h4>
                <p className="text-horix-gray text-sm">
                  Configuracion → Privacidad y seguridad → Cookies y otros datos de sitios
                </p>
                <a href="https://support.google.com/chrome/answer/95647?hl=es" className="text-horix-gold text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                  Mas informacion
                </a>
              </div>

              <div className="border border-horix-gray-dark rounded-lg p-4">
                <h4 className="font-semibold text-horix-cream mb-2">Firefox</h4>
                <p className="text-horix-gray text-sm">
                  Opciones → Privacidad y Seguridad → Cookies y datos del sitio
                </p>
                <a href="https://www.mozilla.org/es-ES/privacy/websites/#cookies" className="text-horix-gold text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                  Mas informacion
                </a>
              </div>

              <div className="border border-horix-gray-dark rounded-lg p-4">
                <h4 className="font-semibold text-horix-cream mb-2">Safari</h4>
                <p className="text-horix-gray text-sm">
                  Preferencias → Privacidad → Gestionar datos de sitios web
                </p>
                <a href="https://support.apple.com/es-es/guide/safari/sfri11471/mac" className="text-horix-gold text-sm hover:underline" target="_blank" rel="noopener noreferrer">
                  Mas informacion
                </a>
              </div>
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
