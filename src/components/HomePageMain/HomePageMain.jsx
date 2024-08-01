import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle, Col, Container, Row } from "reactstrap"

function HomePageMain () {
    return (
        <>

<Container style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', width: '100vw', height: '90vh', backgroundColor: '#faf7f2', paddingTop: '100px', gap: '20px' }}>
    <Row>
        <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: '18rem', color: 'white', backgroundImage: 'url(https://picsum.photos/200/300)', backgroundSize: 'cover' }}>
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>
        <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: '18rem', color: 'white', backgroundImage: 'url(https://picsum.photos/200/300)', backgroundSize: 'cover' }}>
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>
        <Col style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
            <Card style={{ width: '18rem', color: 'white', backgroundImage: 'url(https://picsum.photos/200/300)', backgroundSize: 'cover' }}>
                <CardBody>
                    <CardTitle tag="h5">Card title</CardTitle>
                    <CardSubtitle className="mb-2 text-muted" tag="h6">Card subtitle</CardSubtitle>
                    <CardText>Some quick example text to build on the card title and make up the bulk of the card‘s content.</CardText>
                    <Button>Button</Button>
                </CardBody>
            </Card>
        </Col>
    </Row>
</Container>

        </>
    )
}

export default HomePageMain