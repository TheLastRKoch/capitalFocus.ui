import { Container } from 'react-bootstrap'

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <Container>
            <div className='starter-template text-center mt-5'>
                <footer className="text-center text-capitalize">
                    copyright RK-Workshop &copy; {year}
                </footer>
            </div>
        </Container>
    )
}

export default Footer;