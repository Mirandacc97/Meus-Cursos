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
            nome: '',
            email: '',
            senha: '',

            form: {
                nome: 'Felipe',
                email: 'felipeml1000@gmail.com',
                senha: '123',
                sexo: 'Masculino'
            }
        };

        this.cadastrar = this.cadastrar.bind(this);
        this.trocaNome = this.trocaNome.bind(this);
        this.trocaEmail = this.trocaEmail.bind(this);
        this.trocaSenha = this.trocaSenha.bind(this);
        this.trocaSexo = this.trocaSexo.bind(this);
        this.dadosForm = this.dadosForm.bind(this);
    }

    dadosForm() {

    }

    cadastrar(event) {
        if(this.state.nome !== '' && this.state.email !== '' && this.state.senha !== '') {
            alert(`${this.state.nome} aguarde! Cadastrando seu perfil!`);
            alert(`Login: ${this.state.email} \n Senha: ${this.state.senha}`);
            <h1>Cadastro realizado com sucesso, senhor(a) {this.state.nome}</h1>;
            <text>Seu email cadastrado é: {this.state.email}</text>;
            <br/>;
            <text>Sua senha cadastrado é: {this.state.senha}</text>;
        } else {
            alert("Falha no login!");
        }

        event.preventDefault();
        //Para evitar que a página atualize após a confirmação do cadastro
        
    }

    dadosForm(event) {
        let form = this.state.form;
        form[event.target.name] = event.target.value;
        this.setState({form: form})
    }

    trocaEmail(event) {
        let valorDigitado = event.target.value;
        this.setState({ email: valorDigitado });
    }

    trocaSenha(event) {
        let valorDigitado = event.target.value;
        this.setState({ senha: valorDigitado });
    }

    trocaSexo(event) {
        let valorSelecionado = event.target.value;
        this.setState({ sexo: valorSelecionado });
    }

    trocaNome(event) {
        let valorSelecionado = event.target.value;
        this.setState({ nome: valorSelecionado });
    }

    render() {
        return (
            <div>
                <MensagemInicial />
                <Membro nome="Visitante" />
                <p />

                <div>
                    <h1>MUNDO DOS ANIMAIS</h1>
                    <h2>Lista dos animais que aqui habitam</h2>
                    {this.state.feed.map((item => {
                        return (
                            <Feed id={item.id}
                                username={item.username}
                                curtidas={item.curtidas}
                                comentarios={item.comentarios} />
                        )
                    }))
                    }
                </div>
                <hr />
                <div>
                    <h2>Login</h2>
                    Email:
                    <input type="email" name="email" value={this.state.email}
                        onChange={this.trocaEmail} />
                    <br />

                    Senha:
                    <input type="password" name="senha" value={this.state.senha}
                        onChange={this.trocaSenha} />
                    <br />

                    Sexo
                    <select name="sexo" value={this.state.sexo} onChange={this.trocaSexo}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Indefinido">Indefinido</option>
                    </select>
                    <br />

                    <text>Seja bem vindo! {this.state.email} ,
                    você entrou com a senha {this.state.senha} e
                    seu sexo identificado foi {this.state.sexo}</text>
                </div>
                <hr />
                <div>
                    <h1>Novo usuário</h1>

                    <form onSubmit={this.cadastrar}>
                        <label>Nome:</label>
                        <input type="text" value={this.state.nome}
                            onChange={this.trocaNome} />
                        <br />

                        <label>Email</label>
                        <input type="email" value={this.state.email}
                                onChange={this.trocaEmail} />
                        <br />

                        <label>Senha</label>
                        <input type="password" value={this.state.senha}
                                onChange={this.trocaSenha} />
                        <br />
                        <button type="submit">Cadastrar</button>
                    </form>
                </div>
                <hr/>
                <div>  
                <h2>Login versão 2.0</h2>
                    Nome:
                    <input type="text" name="nome2" value={this.state.form.nome} onChange={this.dadosForm} />
                    <br />
                    
                    Email:
                    <input type="email" name="email2" value={this.state.form.email} onChange={this.dadosForm} />
                    <br />

                    Senha:
                    <input type="password" name="senha2" value={this.state.form.senha} onChange={this.dadosForm} />
                    <br />

                    Sexo
                    <select name="sexo" 
                        value={this.state.form.sexo} 
                        onChange={this.dadosForm}>
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                        <option value="Indefinido">Indefinido</option>
                    </select>
                    <br />
                </div>
                <hr/>
                <div>
                    <img src={require('./assets/biscoito.png')} />
                </div>
            </div>


        );
    }

}

export default App;