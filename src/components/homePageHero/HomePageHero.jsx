import { Button, Card, CardImg, CardTitle } from "reactstrap";
import homebanner from "/home-banner.png";
import logo from "/logo.svg"
import "./HomePageHero.css"

function HomePageHero() {
    return (
        <>
            <Card className="bg-dark text-white" style={{border: 0, borderRadius: 0}}>
                <CardImg top width="100%" src={homebanner} alt="Card image cap" className="card-img" style={{border: 0, borderRadius: 0}}/>
                <div className="card-img-overlay d-flex flex-column justify-content-start">
                    <CardTitle tag="h5" className="text-center py-4">
                        <img src={logo} alt="logo" ></img>
                    </CardTitle>
                    <CardTitle className="CardTitle">
                    <span>fırsatı kaçırma</span>
                    <br />
                    KOD ACIKTIRIR
                    <br />
                    PIZZA, DOYURUR
                    </CardTitle>


                    <Button
                        className="mx-auto"
                        style={{
                            width: '10rem',
                            backgroundColor: '#fdc913',
                            color: 'black', // add this line for black text color
                            borderRadius: '1.5rem', // add this line for rounded corners
                            padding: '0.7rem 2rem',
                            fontFamily: "Barlow, sans-serif",
                            fontWeight: '600',
                        }}
                        href="#1">
                        ACIKTIM
                    </Button>                
                </div>
            </Card>


        </>
    )
}

export default HomePageHero;
