import Head from 'next/head'
import emailjs from 'emailjs-com'

function Home() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_qr1wtdh', 'template_6k9h3t6', e.target, 'user_bLI66a0dYU45fJPjLM9xz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
    return(
        <>
        <main>
            <section className="UQoM">
                <img className="IWAh" src="\imgs\home\mae-ensinando-a-filha.webp"></img>
                <div className="nzeY">
                    <div className="hUjx">
                        <div className="kdwg">
                            <div className="irZe">
                                <div className="qcXz">DESTAQUE DE HOJE</div>
                            </div>
                            <div className="TQRo">
                                <div className="fjKe">Seja a primeira professora do seu filho.</div>
                            </div>
                            <div className="ImMG">
                                <div className="PtxJ">Dê o primeiro passo para a alfabetização dos seus filhos com um cronograma prático e eficiente.</div>
                            </div>
                            <div className="KMna">
                                <button className="XOmQ">INSCREVA-SE</button>
                            </div>
                        </div>
                    </div>
                    <div className="ttbC">
                        <img className="tAbb" src="\imgs\home\mae-ensinando.webp"></img>
                    </div>
                </div>
            </section>
            <section className="Hfqa">
                <div className="MkSF">
                    <div className="xLUx">NOVIDADES</div>
                    <div className="fbmg">Aqui você encontrará nossos artigos mais recentes, contendo novidades e informações sobre os nossos cursos.</div>
                </div>
                <div className="OlMa">
                    <a className="XiWU" href="/artigos/8-perguntas-que-as-maes-tem-quanto-a-alfabetizacao">
                        <div className="tfCZ">
                            <img className="gOjU" src="\imgs\artigos\mae_infarta-1.webp"/>
                        </div>
                        <div className="CNTc">
                            <div className="Xrik">
                                <div className="GeEh">8 perguntas que as mães têm quanto a alfabetização.</div>
                            </div>
                            <div className="BiOD">LER O ARTIGO ➞</div>
                        </div>
                    </a>
                    <a className="XiWU" href="/artigos/10-brincadeiras-que-ensinam-matematica-de-forma-divertida">
                        <div className="tfCZ">
                            <img className="gOjU" src="\imgs\artigos\mae-e-filha-estudando-matematica-felizes-750x500-696x464.webp"/>
                        </div>
                        <div className="CNTc">
                            <div className="Xrik">
                                <div className="GeEh">10 brincadeiras que ensinam matemática de forma divertida.</div>
                            </div>
                            <div className="BiOD">LER O ARTIGO ➞</div>
                        </div>
                    </a>
                    <a className="XiWU" href="/artigos/aprendendo-na-cozinha">
                        <div className="tfCZ">
                            <img className="gOjU" src="\imgs\artigos\mae-ensinando-filho-a-preparar-comida_23-2148467057.webp"/>
                        </div>
                        <div className="CNTc">
                            <div className="Xrik">
                                <div className="GeEh">Aprendendo na cozinha.</div>
                            </div>
                            <div className="BiOD">LER O ARTIGO ➞</div>
                        </div>
                    </a>
                </div>
                <div className="OlMa hRaM">
                    <a className="XiWU" href="/artigos/concentracao-e-importante-como-ajudar-seu-filho-a-se-concentrar">
                        <div className="tfCZ">
                            <img className="gOjU" src="\imgs\artigos\mae-ensinando-criancas-na-aula-de-desenho-filha-e-filho-de-pintura-com-lapis-de-cor-em_10307-925.webp"/>
                        </div>
                        <div className="CNTc">
                            <div className="Xrik">
                                <div className="GeEh">Concentração é importante? Como ajudar seu filho a se concentrar?</div>
                            </div>
                            <div className="BiOD">LER O ARTIGO ➞</div>
                        </div>
                    </a>
                    <a className="XiWU" href="/artigos/ensinar-a-ler-um-passo-a-passo">
                        <div className="tfCZ">
                            <img className="gOjU" src="\imgs\artigos\kids-books.webp"/>
                        </div>
                        <div className="CNTc">
                            <div className="Xrik">
                                <div className="GeEh">Ensinar a ler: um passo a passo.</div>
                            </div>
                            <div className="BiOD">LER O ARTIGO ➞</div>
                        </div>
                    </a>
                    <a className="XiWU" href="/artigos/estudo-afirma-maes-exigentes-tem-filhos-bem-sucedidos">
                        <div className="tfCZ">
                            <img className="gOjU" src="\imgs\artigos\mae-usando-laptop-e-tablet-ensinando-com-o-filho-on-line-em-casa-no-quarto-dele_1328-3389.webp"/>
                        </div>
                        <div className="CNTc">
                            <div className="Xrik">
                                <div className="GeEh">Estudo afirma: Mães exigentes tem filhos bem sucedidos.</div>
                            </div>
                            <div className="BiOD">LER O ARTIGO ➞</div>
                        </div>
                    </a>
                </div>
                <div className="OlMa hRaM">
                    <a className="XiWU" href="/artigos/jogos-online-e-offline-para-ajudar-na-alfabetizacao">
                        <div className="tfCZ">
                            <img className="gOjU" src="\imgs\artigos\mulher-ensinando-criancas-a-brincar-com-um-jogo-colorido-durante-a-aula_23-2148633324.webp"/>
                        </div>
                        <div className="CNTc">
                            <div className="Xrik">
                                <div className="GeEh">Jogos Online e Offline para ajudar na alfabetizaçao.</div>
                            </div>
                            <div className="BiOD">LER O ARTIGO ➞</div>
                        </div>
                    </a>
                    <a className="XiWU" href="/artigos/o-que-dizer-no-lugar-de-nao-chore">
                        <div className="tfCZ">
                            <img className="gOjU" src="\imgs\artigos\Crying-at-Drop-Off-Preschool-Problems-article.webp"/>
                        </div>
                        <div className="CNTc">
                            <div className="Xrik">
                                <div className="GeEh">O que dizer no lugar de "não chore"?</div>
                            </div>
                            <div className="BiOD">LER O ARTIGO ➞</div>
                        </div>
                    </a>
                    <a className="XiWU" href="/artigos/vantagens-e-desvantagens-do-metodo-tradicional-de-ensino">
                        <div className="tfCZ">
                            <img className="gOjU" src="\imgs\artigos\unnamed.webp"/>
                        </div>
                        <div className="CNTc">
                            <div className="Xrik">
                                <div className="GeEh">Vantagens e desvantagens do método tradicional de ensino.</div>
                            </div>
                            <div className="BiOD">LER O ARTIGO ➞</div>
                        </div>
                    </a>
                </div>
                <a className="MGrm" href="/artigos">Veja Mais Artigos Aqui</a>
            </section>
            <section className="PZPT">
                <div className="xDZI">
                    <div className="BNUG">DOWNLOADS</div>
                    <div className="dfmm">Baixe nossos e-books gratuitamente e comece a ensinar seus filhos a aprender em casa! :)</div>
                </div>
                <div className="YwcI">
                    <div className="ylgb">
                        <div className="YQAU">
                            <div className="ulAq">
                                <img className="RwmS" src="\imgs\ebooks\apostila_de_pontilhados.webp"></img>
                            </div>
                            <div className="tVzn">Apostila de Pontilhados</div>
                            <button className="eeKi" href="/"><img className="Wlxm" src="\imgs\icons\download_white.svg"></img>Download Grátis</button>
                        </div>
                        <div className="YQAU kawT">
                            <div className="ulAq">
                                <img className="RwmS" src="\imgs\ebooks\os_primeiros_passos_para_ensinar_seu_filho.webp"></img>
                            </div>
                            <div className="tVzn">Os Primeiros Passos para Ensinar seu Filho a Ler</div>
                            <button className="eeKi" href="/"><img className="Wlxm" src="\imgs\icons\download_white.svg"></img>Download Grátis</button>
                        </div>
                    </div>
                    <div className="iGsS">
                        <div className="HpTs"></div>
                        <div className="HpTs nkSn"></div>
                    </div>
                    <div className="ylgb">
                        <div className="YQAU">
                            <div className="ulAq">
                                <img className="RwmS" src="\imgs\home\kid-ab.webp"></img>
                            </div>
                            <div className="tVzn">Por onde posso começar?</div>
                            <button className="eeKi" href="/"><img className="Wlxm" src="\imgs\icons\download_white.svg"></img>Download Grátis</button>
                        </div>
                        <div className="YQAU kawT">
                            <div className="ulAq">
                                <img className="RwmS" src="\imgs\home\kid-ab.webp"></img>
                            </div>
                            <div className="tVzn">Por onde posso começar?</div>
                            <button className="eeKi" href="/"><img className="Wlxm" src="\imgs\icons\download_white.svg"></img>Download Grátis</button>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lzaT">
                <div className="Ckpm">
                    <div className="hjvW">
                        <iframe className="nSOm" src="https://www.youtube.com/embed/10nJ4kLfG5k" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    </div>
                    <div className="jhOT">
                        <div className="QQgJ">
                            <div className="QseZ">O melhor canal do YouTube para ensinar seus filhos. Assista!</div>
                            <img className="CPWf" src="\imgs\icons\arrow.webp"></img>
                        </div>
                    </div>
                </div>
            </section>
            <section className="exSq">
                <div className="hamq">
                    <div className="zWNW">Quem Somos?</div>
                    <div className="FvyC">Somo três amigas com alguns pontos em comum: somos mães e também somos professoras.<br/><br/>Percebemos que muitas mães tem o desejo de ajudar seus filhos no princípio da educação e muitas vezes não sabem por onde começar e como prosseguir.<br/><br/>Foi então que juntas decidimos criar o Mãe Professora.<br/><br/>O propósito? Ajudar as muitas mães que também querem ser a primeira professora do seu filho(a).</div>
                </div>
                <div className="WaMZ">
                    <div className="DfQR">
                        <div className="veGN">
                            <img className="fvKk" src="\imgs\home\priscila-profile.webp"></img>
                        </div>
                        <div className="LzlP">Priscila Fernandes</div>
                        <div className="qEFM">Mãe da Isabela e do Gabriel</div>
                        <div className="qEFM aYTI">Formada em Pedagogia</div>
                    </div>
                    <div className="DfQR">
                        <div className="veGN">
                            <img className="fvKk" src="\imgs\home\erica-profile.webp"></img>
                        </div>
                        <div className="LzlP">Érica Fernandes</div>
                        <div className="qEFM">Mãe da Thais e da Emily</div>
                        <div className="qEFM aYTI">Formada em Pedagogia</div>
                    </div>
                    <div className="DfQR">
                        <div className="veGN">
                            <img className="fvKk" src="\imgs\home\priscila_c-profile.webp"></img>
                        </div>
                        <div className="LzlP">Priscila Cardozo</div>
                        <div className="qEFM">Mãe do Arthur e da Lyla</div>
                        <div className="qEFM aYTI">Formada em Letras</div>
                    </div>
                </div>
            </section>
        </main>
        </>
    );
}

export default Home;