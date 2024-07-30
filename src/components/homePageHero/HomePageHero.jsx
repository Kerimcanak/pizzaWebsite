import { Card, CardBody, CardImg, CardText, CardTitle } from "reactstrap";
import homebanner from "/home-banner.png";
import logo from "/logo.svg"

function HomePageHero() {
    return (
        <>
        <Card className="bg-dark text-white" style={{border: 0, borderRadius: 0}}>
            <CardImg top width="100%" src={homebanner} alt="Card image cap" className="card-img" style={{border: 0, borderRadius: 0}}/>
            <div className="card-img-overlay d-flex flex-column justify-content-center">
                <CardTitle tag="h5" className="text-center">
                    <img src={logo} alt="logo" ></img>
                </CardTitle>
                <CardTitle tag="h5" className="text-center">
                    <img src={logo} alt="logo" ></img>
                </CardTitle>
                <CardText className="text-center">
                    <small className="text-muted">
                    Last updated 3 mins ago
                    </small>
                </CardText>
            </div>
        </Card>

        </>
    )
}

export default HomePageHero;
