import React, { Component } from 'react';

class Membro extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nome: props.nome,
            status: 1,
            statuss: true,
        };
        this.entrar = this.entrar.bind(this);
        this.sair = this.sair.bind(this);
    }

    entrar() {
        this.setState({ nome: "Nathalia Luiza" })
        this.setState({ statuss: false })
    }

    sair() {
        this.setState({ nome: "Pessoa que não é Nathalia Luiza" })
        this.setState({ statuss: true })
    }

    render() {
        return (
            <div>
                <h2>Bem vindo(a) {this.state.nome}!</h2>

                {this.state.statuss ?
                    <div>
                        <button onClick={this.entrar}>
                            Entrar como Nathalia Luiza
                        </button>
                    </div> :

                    <div>
                        <button onClick={this.sair}>
                            Sair
                        </button>
                    </div>
                }
            </div>
        )
    }
}

export default Membro;