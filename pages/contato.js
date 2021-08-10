import emailjs from 'emailjs-com'

function contato() {
    function sendEmail(e) {
        e.preventDefault();
    
        emailjs.sendForm('service_qr1wtdh', 'template_lenhjqt', e.target, 'user_bLI66a0dYU45fJPjLM9xz')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
    }
    return(
        <>
        <section className="TonN">
            <form className="pZEm" onSubmit={sendEmail}>
                <div className="ICLb">PRECISA ENTRAR EM CONTATO CONOSCO?<br/>BASTA NOS ENVIAR UMA MENSAGEM!</div>
                <div className="rZaS">
                    <div className="fCAn">
                        <div className="SohH">Nome</div>
                        <input className="aNmy" type="name" name="nome" placeholder="Escreva seu nome"></input>
                    </div>
                    <div className="fCAn">
                        <div className="SohH">E-mail</div>
                        <input className="aNmy" type="email" name="email" placeholder="Escreva seu e-mail"></input>
                    </div>
                </div>
                <div className="rZaS">
                    <div className="fCAn ITSE">
                        <div className="SohH">Mensagem</div>
                        <input className="aNmy daUV" type="message" name="mensagem" placeholder="Escreva sua mensagem"></input>
                    </div>
                </div>
                <button className="Wmxs">Enviar</button>
            </form>
        </section>
        </>
    )
}

export default contato;