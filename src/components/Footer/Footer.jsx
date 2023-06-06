import { Link } from "react-router-dom"

const Footer = () => {
    return (
        <div>
            <footer className='text-white py-4 bg-dark'>
                <div className='container'>
                    <nav className='row'>
                        <Link to='/' className='col-12 col-md-3 d-flex aling-items-center justify-content-center'>
                            <img src='./marvel-logo.png' className='mx-2' height='70' />
                        </Link>
                        <ul className='col-12 col-md-3 list-unstyled'>
                            <li className='text-center'>Marvel</li>
                            <li className='text-center'>En este sitio tendras informacion sobre Marvel</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                        <li>
                            <Link to='https://developer.marvel.com/' className='text-reset'>API-MARVEL</Link>
                            </li>
                            <li className='text-center'>De aqui se extrajo la API utilizada en el proyecto</li>
                        </ul>
                        <ul className='col-12 col-md-3 list-unstyled'>
                        <li>
                            <Link to='https://www.disneyplus.com/es-mx' className='text-reset'>Disney +</Link>
                            </li>
                        </ul>
                    </nav>
                </div>
            </footer>
        </div>
    )
}

export default Footer