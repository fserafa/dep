import React, { Component } from 'react';
import { Container, Card, Spinner } from 'react-bootstrap'
import axios from 'axios'

class Despesas extends Component {
    state = {
        despesas: [],
        loading: false
    }


    async componentDidMount() {
        this.setState({ loading: false });
        const id = this.props.location.state.id;
        const url = `https://cors-anywhere.herokuapp.com/https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas?ordem=ASC&ordenarPor=ano`;

        const response = await axios.get(url)
        console.log(response.data)
        this.setState({ deps: response.data.dados, loading: false });

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

                <h1>Despesas</h1>
                {this.state.despesas.map(despesa => (
                    <Card>
                        <Card.Body>
                            {JSON.stringify(despesa)}
                        </Card.Body>
                    </Card>
                ))}
            </Container>
        );
    }
}

export default Despesas;