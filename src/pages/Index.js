import React, { Component } from 'react';
import { Container, Card, Spinner } from 'react-bootstrap'
import axios from 'axios'
class Index extends Component {
    state = {
        deps: [],
        loading: false
    }

    async componentDidMount() {
        this.setState({ loading: true });
        const url = `https://cors-anywhere.herokuapp.com/https://dadosabertos.camara.leg.br/api/v2/deputados?siglaUf=ES&ordem=ASC&ordenarPor=nome`;

        const response = await axios.get(url)

        this.setState({ deps: response.data.dados, loading: false });
    }

    handleClick = (id) => {
        this.props.history.push('/Despesas', {id: id})
    }

    render() {
        return (
            <Container>
                {this.state.loading ?
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    : null

                }
                <h1>Deputados</h1>
                {this.state.deps.map(dep => (
                    <Card key={dep.id} onClick={() => this.handleClick(dep.id)}>
                        <Card.Body >
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