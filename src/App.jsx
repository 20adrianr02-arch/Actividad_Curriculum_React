//IMPOTAR APP.CSS PARA DAR ESTILO A LA APP//
import './App.css'
// IMPORTAR MI FOTO PERFIL DESDE LA CARPETA ASSETS DEL PROYECTO
import fotoPerfil from './assets/fotoPerfil.png'

function App() {
  return (
    <div className="contenedor-principal">
      
      {/* HEADER CENTRADO PARA EL NOMBRE E INFORMACIÓN PERSONAL */}
      <div className="header">
        <img 
          src={fotoPerfil} 
          alt="Adrian Rodriguez Machado" 
          className="foto-perfil"
        />
        <div className="header-info">
          <h1>Adrian Rodriguez Machado</h1>
          <h2>Intern Software Developer en Ibercaja Gestión | DAM Student</h2>
          <p> adrian.rodriguez@ejemplo.com |  linkedin.com/in/adrianrodriguezdam |  Zaragoza, Aragón, España</p>
        </div>
      </div>

      {/* CONTENEDOR PARA 2 COLUMNAS */}
      <div className="cuerpo">
        
        {/* COLUMNA IZQUIERDA */}
        <div className="columna-izquierda">
          
          {/* INFORMACION SOBRE MÍ */}
          <div className="seccion">
            <h2 className="titulo-seccion">Sobre Mí</h2>
            <p>
              Estudiante de 2º de DAM en CPI Los Enlaces (Zaragoza) enfocado en desarrollo backend y soluciones multiplataforma, con especial interés en ingeniería de datos, ciberseguridad aplicada al software y orquestación de IA.
            </p>
          </div>

          {/* HABILIDADES */}
          <div className="seccion">
            <h2 className="titulo-seccion">Habilidades</h2>
            <div className="lista-habilidades">
              <div className="habilidad">C#</div>
              <div className="habilidad">.NET Core</div>
              <div className="habilidad">Java</div>
              <div className="habilidad">Orquestación de IA</div>
              <div className="habilidad">Amazon Web Services (AWS)</div>
              <div className="habilidad">Lógica de programación</div>
              <div className="habilidad">Resolución de problemas</div>
            </div>
          </div>

          {/* TODAS LAS DE LINKEDIN CERTIFICACIONES */}
          <div className="seccion">
            <h2 className="titulo-seccion">Certificaciones</h2>
            <div className="tarjeta-caja">
              <h3>Foundational C# with Microsoft</h3>
              <p className="empresa">freeCodeCamp & Microsoft</p>
              <span className="badge-fecha">Sept. 2026</span>
            </div>
          </div>

        </div>

        {/* COLUMNA DERECHA */}
        <div className="columna-derecha">
          
          {/* INFORMACION SOBRE  EXPERIENCIA */}
          <div className="seccion">
            <h2 className="titulo-seccion">Experiencia</h2>
            
            <div className="item-experiencia">
              <div className="item-encabezado">
                <h3>Intern Software Developer</h3>
                <span className="badge-fecha">Sept. 2026 - Actualidad</span>
              </div>
              <p className="empresa">Ibercaja Gestión (Contrato de formación)</p>
              <p>Desarrollo de software y soluciones técnicas backend en entorno financiero profesional presencial.</p>
            </div>

            <div className="item-experiencia">
              <div className="item-encabezado">
                <h3>Operador Logístico / Soporte Técnico</h3>
                <span className="badge-fecha">Mar. 2024 - Mar. 2026</span>
              </div>
              <p className="empresa">Inditex Plataforma Europa</p>
              <p>Operaciones y optimización de procesos logísticos en centro de distribución internacional de alta demanda.</p>
            </div>
          </div>

          {/* INFORMACION SOBRE PROYECTOS / LOGROS */}
          <div className="seccion">
            <h2 className="titulo-seccion">Proyectos Destacados</h2>
            <div className="tarjeta-caja">
              <div className="item-encabezado">
                <h3>OmniPress AI Architect</h3>
                <span className="badge-fecha">Feb. 2026</span>
              </div>
              <p className="empresa">Primer Premio - Hackatón STEAM Zaragoza</p>
              <p>II Congreso Nacional de Formación Profesional. Desarrollo de un orquestador inteligente de contenidos utilizando tecnologías en la nube (AWS).</p>
            </div>
          </div>

          {/* EDUCACIÓN */}
          <div className="seccion">
            <h2 className="titulo-seccion">Educación</h2>
            
            <div className="item-experiencia">
              <div className="item-encabezado">
                <h3>C.F.G.S. Desarrollo de Aplicaciones Multiplataforma (DAM)</h3>
                <span className="badge-fecha">2025 - 2027</span>
              </div>
              <p className="empresa">CPI Los Enlaces</p>
              <p>Formación técnica enfocada en el desarrollo, implantación y mantenimiento de aplicaciones informáticas en diversos entornos.</p>
            </div>

            <div className="item-experiencia">
              <div className="item-encabezado">
                <h3>Bachillerato</h3>
                <span className="badge-fecha">2020 - 2022</span>
              </div>
              <p className="empresa">IES Canarias Cabrera Pinto</p>
            </div>
          </div>

        </div>

      </div>

    </div>
  );
}

// PRINCIPAL QUE ESTE ARCHIVO ENTREGA HACIA EL 
// EXTERIOR, PERMITIENDO QUE OTROS ARCHIVOS 
// DEL PROYECTO PUEDAN IMPORTARLO Y RENDERIZARLO.
export default App;