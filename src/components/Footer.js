import '../components/Footer-style.css'
import logo from '../images/pacto-historico.png'

function Footer() {
  return (
    <footer className='footer'>
      <div>
        <img className='logo' src={logo} width={92} height={50}  alt='pacto-historico logo' />
      </div>
      <span className='footer-info'>Developed By 
        <a className='link-info' href='https://twitter.com/DayMrz_'>@DayMrz_</a>✌
      </span>
    </footer>
  )
}

export default Footer;

