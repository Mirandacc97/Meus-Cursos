import React, { Component } from 'react'

class Feed extends Component {

    render() {
        return (
            <div >
                <div id={this.props.id}>
                    <p>Nome: {this.props.username} </p>
                    <text>Ele possui {this.props.curtidas} curtidas
                                e {this.props.comentarios} comentarios em suas
                                publicações no TikTok</text>
                </div>
                <div>
                    <a> {this.props.curtidas > 100 ? "Nossa, que animal famoso!" : "Esse animal tem um potencial para ser famoso!"} </a>
                </div>
            </div>
        )
    }
}

export default Feed;