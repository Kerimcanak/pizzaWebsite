import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from "reactstrap"

function HomePageMain () {
    return (
        <>

<div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'flex-start', width: '100vw', height: '200vh', backgroundColor: '#faf7f2', paddingTop: '100px', gap: '20px'}}>
 
                <Card
                style={{
                    width: '18rem',
                    color: 'white',
                    backgroundImage: 'url(https://picsum.photos/200/300)',
                    backgroundSize: 'cover'
                }}
                >
                <CardBody>
                    <CardTitle tag="h5">
                    Card title
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    Card subtitle
                    </CardSubtitle>
                    <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                    Button
                    </Button>
                </CardBody>
                </Card>

                <div style={{display: 'flex', flexDirection: 'column'}}>
                <Card
                style={{
                    width: '18rem',
                    color: 'white',
                    backgroundImage: 'url(https://picsum.photos/200/300)',
                    backgroundSize: 'cover'
                }}
                >
                <CardBody>
                    <CardTitle tag="h5">
                    Card title
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    Card subtitle
                    </CardSubtitle>
                    <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                    Button
                    </Button>
                </CardBody>
                </Card>

                <Card
                style={{
                    width: '18rem',
                    color: 'white',
                    backgroundImage: 'url(https://picsum.photos/200/300)',
                    backgroundSize: 'cover'
                }}
                >
                <CardBody>
                    <CardTitle tag="h5">
                    Card title
                    </CardTitle>
                    <CardSubtitle
                    className="mb-2 text-muted"
                    tag="h6"
                    >
                    Card subtitle
                    </CardSubtitle>
                    <CardText>
                    Some quick example text to build on the card title and make up the bulk of the card‘s content.
                    </CardText>
                    <Button>
                    Button
                    </Button>
                </CardBody>
                </Card>
                </div>

            </div>
        </>
    )
}

export default HomePageMain