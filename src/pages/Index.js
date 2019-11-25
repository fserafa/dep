import React, { Component } from 'react';
import { Container, Card } from 'react-bootstrap'
import axios from 'axios'
class Index extends Component {
    state = {
        deps: []
    }

    async componentDidMount() {
        const url = `https://cors-anywhere.herokuapp.com/https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=ES&ordem=ASC&ordenarPor=nome`;

        const response = await axios.get(url)

        this.setState({ deps: response.data.dados });
    }

    handleClick = (id) => {
        this.props.history.push('/Despesas', {id: id})
    }

    render() {
        return (
            <Container>
                {this.state.deps.map(dep => (
                    <Card>
                        <Card.Body  key={dep.id} onClick={() => this.handleClick(dep.id)}>
                                {/* <img src={article.urlToImage} /> */}
                                <h1>{dep.nome}</h1>
                                <h1>{dep.id}</h1>
                                {/* <p>{article.content}</p>
                                <a href={article.url} target="_blank">Link</a> */}
                        </Card.Body>
                    </Card>
                ))}

            </Container>
           
        );
    }
}

export default Index;