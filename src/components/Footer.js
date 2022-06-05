import '../components/Footer-style.css'
import logo from '../images/pacto-historico.png'

function Footer() {
  return (
    <footer className='footer'>
      <div className='img-box'>
        <img src={logo} class='logo' alt='pacto-historico logo' />
      </div>
      <span className='footer-info'>Developed By DayMrz ✌</span>
      <span className='footer-info'>https://twitter.com/DayMrz_</span>
    </footer>
  )
}

export default Footer;

