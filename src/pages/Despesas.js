import React, { Component } from 'react';
import { Container, Card, Spinner } from 'react-bootstrap'
import axios from 'axios'

class Despesas extends Component {
    state = {
        despesas: [],
        loading: false
    }


    async componentDidMount() {
        this.setState({ loading: true });
        const id = this.props.location.state.id;
        const url = `https://cors-anywhere.herokuapp.com/https://dadosabertos.camara.leg.br/api/v2/deputados/${id}/despesas?ordem=ASC&ordenarPor=ano`;

        const response = await axios.get(url)
        console.log(response.data)
        this.setState({ despesas: response.data.dados, loading: false });

    }

    render() {
        return (

            <Container>
                {this.state.loading ?
                    <div className="d-flex justify-content-center">
                        <Spinner animation="border" role="status">
                            <span className="sr-only">Loading...</span>
                        </Spinner>
                    </div>
                    :
                    <div>
                        <h1>Despesas</h1>
                        {this.state.despesas.map(despesa => (
                            <Card>
                                <Card.Body>
                                    {JSON.stringify(despesa)}
                                </Card.Body>
                            </Card>
                        ))}
                    </div>
                }
            </Container>
        );
    }
}

export default Despesas;