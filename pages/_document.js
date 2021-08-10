import Document, { Html, Head, Main, NextScript } from 'next/document'

function sendEmail(e) {
  e.preventDefault();

  emailjs.sendForm('service_qr1wtdh', 'template_6k9h3t6', e.target, 'user_bLI66a0dYU45fJPjLM9xz')
    .then((result) => {
        console.log(result.text);
    }, (error) => {
        console.log(error.text);
    });
}

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="pt-br">
        <Head />
            <title>Mãe Professora | Seja a primeira professora do seu filho.</title>
            <meta name="viewport" content="initial-scale=1.0, width=device-width"/>
            <meta name="description" content="Mãe Professora | Seja a primeira professora do seu filho."/>
            <link rel="icon" type="image/svg" href="\imgs\favicon\favicon.png"/>
        <Main />
        <header>
            <div className="PQjB">
                <a className="EvZV" href="/">
                    <img className="JMYj" src="\imgs\logo\maeprofessora-logo-small.webp"></img>
                </a>
                <div className="SUOE">
                        <div className="oqsn">
                        <div className="oGqq zlNW">
                            <a className="CNVI" href="/">Início</a>
                        </div>
                    </div>
                    <div className="oqsn">
                        <div className="oGqq">
                        <a className="CNVI" href="/artigos">Artigos</a>
                        </div>
                    </div>
                    <div className="oqsn">
                        <div className="oGqq">
                            <a className="CNVI" href="/stories">Web Stories</a>
                        </div>
                    </div>
                    <div className="oqsn">
                        <div className="oGqq">
                            <a className="CNVI" href="/curso" target="_blank">Curso</a>
                        </div>
                    </div>
                    <div className="oqsn">
                        <div className="oGqq">
                            <a className="CNVI" href="/contato">Contato</a>
                        </div>
                    </div>
                </div>
                <div className="JWZB">
                    <button className="qOMj">Curso Gratuito</button>
                </div>
            </div>
            <button className="ZWaC_mob" title="Menu" arial-label="Menu">
                <div className="OfBLa"></div>
                <div className="OfBLb"></div>
                <div className="OfBLc"></div>
            </button>
        </header>
        <body>
            <div className="Cbjw">
                <div className="FurC">
                    <a href="/" className="uqgR">
                        <div className="thVj">Início</div>
                    </a>
                    <a href="/artigos" className="uqgR">
                        <div className="thVj">Artigos</div>
                    </a>
                    <a href="/curso" target="_blank" className="uqgR">
                        <div className="thVj">Curso</div>
                    </a>
                    <div className="uqgR">
                        <div className="thVj">Curso Gratuito</div>
                    </div>
                    <a href="/contato" className="uqgR">
                        <div className="thVj">Contato</div>
                    </a>
                </div>
            </div>
          <div className="hOIP">
              <div className="DkWI">
                  <div className="fjpW">
                      <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12 11.293l10.293-10.293.707.707-10.293 10.293 10.293 10.293-.707.707-10.293-10.293-10.293 10.293-.707-.707 10.293-10.293-10.293-10.293.707-.707 10.293 10.293z"/></svg>
                  </div>
                  <div className="ROgK">
                      <div className="hVMc"><span className="Tiib">CONTEÚDO GRATUITO</span><br/>OS PRIMEIROS PASSOS PARA ENSINAR SEUS FILHOS EM CASA!</div>
                  </div>
                  <div className="sHLC">EXISTE UMA VAGA DISPONÍVEL!<br/>DIGITE SEU E-MAIL ABAIXO PARA RECEBER NOSSO CURSO GRATUITO.</div>
                  <form className="YWHO" onSubmit={sendEmail}>
                      <input className="lgVp" autoComplete="off" type="email" placeholder="Digite seu e-mail aqui" name="email"></input>
                      <button className="vMnz" disabled>
                          <span className="upup">RECEBER MATERIAL</span>
                      </button>
                  </form>
              </div>
          </div>
          <a className="XROm" href="https://web.whatsapp.com/send?phone=5511969520884&text=Boa%20tarde%2C%20vim%20pelo%20M%C3%A3e%20Professora." target="_blank">
            <svg className="wTPI" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/></svg>
          </a>
        </body>
        <footer>
            <div className="gIcu">
                <a className="PNxi" href="/">
                    <img className="zqDn" src="\imgs\logo\maeprofessora-logo-small.webp"></img>
                </a>
                <div className="xgDL">
                    <a className="uXPG"  href="/" target="_blank">
                        <div className="wRBf">
                            <svg  className="MMkV" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
                        </div>
                    </a>
                    <a className="uXPG" href="https://www.instagram.com/maeprofessoraoficial/" target="_blank">
                        <div className="wRBf">
                            <svg className="MMkV" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
                        </div>
                    </a>
                    <a className="uXPG"  href="/" target="_blank">
                        <div className="wRBf">
                            <svg className="MMkV" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
                    </div>
                    </a>
                    <a className="uXPG"  href="/" target="_blank">
                        <div className="wRBf">
                            <svg  className="MMkV" xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24"><path d="M18.384,22.779c0.322,0.228 0.737,0.285 1.107,0.145c0.37,-0.141 0.642,-0.457 0.724,-0.84c0.869,-4.084 2.977,-14.421 3.768,-18.136c0.06,-0.28 -0.04,-0.571 -0.26,-0.758c-0.22,-0.187 -0.525,-0.241 -0.797,-0.14c-4.193,1.552 -17.106,6.397 -22.384,8.35c-0.335,0.124 -0.553,0.446 -0.542,0.799c0.012,0.354 0.25,0.661 0.593,0.764c2.367,0.708 5.474,1.693 5.474,1.693c0,0 1.452,4.385 2.209,6.615c0.095,0.28 0.314,0.5 0.603,0.576c0.288,0.075 0.596,-0.004 0.811,-0.207c1.216,-1.148 3.096,-2.923 3.096,-2.923c0,0 3.572,2.619 5.598,4.062Zm-11.01,-8.677l1.679,5.538l0.373,-3.507c0,0 6.487,-5.851 10.185,-9.186c0.108,-0.098 0.123,-0.262 0.033,-0.377c-0.089,-0.115 -0.253,-0.142 -0.376,-0.064c-4.286,2.737 -11.894,7.596 -11.894,7.596Z"/></svg>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
        <NextScript />
        <script src="\static\scripts\scroll.js"></script>
        <script src="\static\scripts\newsletter.js"></script>
        <script src="\static\scripts\menu-mobile.js"></script>
        <script src="\static\scripts\downloads.js"></script>
      </Html>
    )
  }
}

export default MyDocument