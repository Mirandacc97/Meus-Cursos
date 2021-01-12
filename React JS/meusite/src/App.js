import React, { Component } from 'react';
import Membro from './components/Membro/Membro';
import Feed from './components/Feed/Feed';

const MensagemInicial = () => <text>Então né.... denovo</text>

class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            feed: [
                { id: 1, username: "Bruce", curtidas: 10, comentarios: 2 },
                { id: 2, username: "Noah", curtidas: 100, comentarios: 20 },
                { id: 3, username: "Nino", curtidas: 1000, comentarios: 200 },
            ],
            email: '',
            senha: '',
        };

        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSenha = this.trocaSenha.bind(this);
        this.trocaSexo = this.trocaSexo.bind(this);
    }

    trocaEmail(event) {
        let valorDigitado = event.target.value;
        this.setState({email : valorDigitado});
    }

    trocaSenha(event) {
        let valorDigitado = event.target.value;
        this.setState({senha : valorDigitado});
    }

    trocaSexo(event) {
        let valorSelecionado = event.target.value;
        this.setState({sexo : valorSelecionado});
    }

    render() {
        return (
            <div>
                <MensagemInicial/>
               <Membro nome="Visitante"/>
               <p/>
               
               <div>
                    <h1>MUNDO DOS ANIMAIS</h1>
                    <h2>Lista dos animais que aqui habitam</h2>
                    {this.state.feed.map((item=> {
                        return(
                            <Feed id={item.id}
                            username={item.username}
                            curtidas={item.curtidas}
                            comentarios={item.comentarios}/>
                        )
                    }))
                    }
                </div>
                <hr/>
                <div>
                    <h2>Login</h2>
                    Email:
                    <input type="email" name="email" value={this.state.email}
                    onChange={this.trocaEmail}/>
                    Senha:
                    <input type="password" name="senha" value={this.state.senha}
                    onChange={this.trocaSenha}/> <br/>
                    Sexo
                    <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Indefinido">Indefinido</option>
                    </select>

                    <text>Seja bem vindo! {this.state.email} , 
                    você entrou com a senha {this.state.senha} e 
                    seu sexo identificado foi {this.state.sexo}</text>
                </div>
                <hr/>
            </div>

            
        );
    }

}

export default App;