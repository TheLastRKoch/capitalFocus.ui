import Image from 'react-bootstrap/Image'
import Header from '../components/layout/Header'
import Meta from '../components/layout/Meta'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row'

const Dashboard = () => {
    const pageTitle = "Dashboard"
    const pageDescription = ""

    return (
        <Container>
            <Row>
                <Image
                    src="https://docs.looker.com/assets/images/mobile-dashboard-portrait-716.png"
                ></Image>
            </Row>
        </Container>

    );
}

export default Dashboard