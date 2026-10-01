import './App.css'
import heroImg from './assets/hero.png'
import reactImg from './assets/react.svg'
import viteImg from './assets/vite.svg'
import htmlImg from './assets/html.png'
import cssImg from './assets/css.png'
import javascriptImg from './assets/javascript.png'
import nodeImg from './assets/node.png'
import sqlImg from './assets/sql.png'
import gitImg from './assets/git.png'

function App() {
  return (
    <div>
      <header className="header">
        <h2>Desenvolvimento de Sistemas</h2>
        <nav>
          <a href="#inicio">Início</a>
          <a href="#sobre">Sobre</a>
          <a href="#aprendizados">Aprendizados</a>
          <a href="#tecnologias">Tecnologias</a>
          <a href="#mercado">Mercado</a>
          <a href="#projetos">Projetos</a>
        </nav>
      </header>

      <section id="inicio" className="hero">
        <div className="hero-texto">
          <h1>Transforme ideias em sistemas.</h1>
          <p>
            Desenvolva soluções, aprenda novas tecnologias e construa seu
            futuro na área de TI.
          </p>
          <button>Conheça o curso</button>
        </div>
        <img className="hero-img" src={heroImg} alt="Ilustração de camadas de tecnologia" />
      </section>

      <section id="sobre" className="secao">
        <h2>Sobre o curso</h2>
        <div className="cards">
          <div className="card">
            <h3>O que é</h3>
            <p>Área que cria programas, sites e aplicativos.</p>
          </div>
          <div className="card">
            <h3>Objetivo</h3>
            <p>Formar profissionais que desenvolvem sistemas.</p>
          </div>
          <div className="card">
            <h3>O que o profissional faz</h3>
            <p>Programa, testa e mantém sistemas.</p>
          </div>
        </div>
      </section>

      <section id="aprendizados" className="secao cinza">
        <h2>O que você aprende</h2>
        <div className="cards">
          <div className="card"><h3>Lógica de programação</h3></div>
          <div className="card"><h3>Desenvolvimento web</h3></div>
          <div className="card"><h3>Frontend</h3></div>
          <div className="card"><h3>Backend</h3></div>
          <div className="card"><h3>Banco de dados</h3></div>
          <div className="card"><h3>APIs</h3></div>
          <div className="card"><h3>Aplicativos</h3></div>
          <div className="card"><h3>Versionamento de código</h3></div>
        </div>
      </section>

      <section id="tecnologias" className="secao">
        <h2>Tecnologias</h2>
        <div className="tags">
          <span><img src={htmlImg} alt="" /> HTML</span>
          <span><img src={cssImg} alt="" /> CSS</span>
          <span><img src={javascriptImg} alt="" /> JavaScript</span>
          <span><img src={reactImg} alt="" /> React</span>
          <span><img src={nodeImg} alt="" /> Node.js</span>
          <span><img src={sqlImg} alt="" /> SQL</span>
          <span><img src={gitImg} alt="" /> Git</span>
          <span>
            <svg width="18" height="18" aria-hidden="true"><use href="/icons.svg#github-icon" /></svg> GitHub
          </span>
        </div>
      </section>

      <section id="mercado" className="secao cinza">
        <h2>Áreas de atuação</h2>
        <div className="cards">
          <div className="card"><h3>Desenvolvimento web</h3></div>
          <div className="card"><h3>Aplicativos</h3></div>
          <div className="card"><h3>Sistemas para empresas</h3></div>
          <div className="card"><h3>Banco de dados</h3></div>
        </div>
      </section>

      <section id="projetos" className="secao">
        <h2>Exemplos de projetos</h2>
        <div className="cards">
          <div className="card"><h3>Cadastro de clientes</h3></div>
          <div className="card"><h3>Sistema de estoque</h3></div>
          <div className="card"><h3>Agendamentos</h3></div>
          <div className="card"><h3>Loja virtual</h3></div>
          <div className="card"><h3>Dashboard administrativo</h3></div>
          <div className="card"><h3>Aplicativo de tarefas</h3></div>
        </div>
      </section>

      <section className="cta">
        <h2>Seu futuro na tecnologia pode começar aqui.</h2>
        <p>Conheça o curso Técnico em Desenvolvimento de Sistemas.</p>
        <button>Conhecer o curso</button>
      </section>

      <footer className="footer">
        <p>Técnico em Desenvolvimento de Sistemas - SENAI</p>
        <p>2026 - SEU NOME AQUI</p>
        <p className="feito-com">
          Feito com <img src={reactImg} alt="React" /> React e <img src={viteImg} alt="Vite" /> Vite
        </p>
      </footer>
    </div>
  )
}

export default App
