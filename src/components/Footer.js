import '../components/Footer-style.css'
import logo from '../images/pacto-historico.png'

function Footer() {
  return (
    <footer className='footer'>
      <div>
        <img src={logo} class='logo' alt='pacto-historico logo' />
      </div>
      <span className='footer-info'>Developed By
        <a href='https://twitter.com/DayMrz_'>@DayMrz_</a>✌
      </span>
    </footer>
  )
}

export default Footer;

