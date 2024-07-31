import { Button, Card, CardBody, CardImg, CardText, CardTitle, Col, Container, Row } from "reactstrap"

function HomePageMainBottom () {
    return (
        <>
                <Container style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
                    {Array.from({ length: 6 }).map((_, index) => (
                    <Button key={index} color="white" style={{ color: 'black', margin: '0 5px' }}>
                        Button {index + 1}
                    </Button>
                    ))}
                </div>
                <Row>
                    {Array.from({ length: 4 }).map((_, index) => (
                    <Col sm="3" key={index}>
                        <Card>
                        <CardImg top width="100%" src={`https://picsum.photos/200/150?random=${index}`} alt="Card image cap" />
                        <CardBody>
                            <CardTitle tag="h5">Card Title {index + 1}</CardTitle>
                            <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
                            <Button>Button</Button>
                        </CardBody>
                        </Card>
                    </Col>
                    ))}
                </Row>
                </Container>
        </>
    )
}

export default HomePageMainBottom