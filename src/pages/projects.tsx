import React from 'react'
import { Image } from 'react-bootstrap'
import { NavLink, useParams } from 'react-router-dom'

export default function Projects() {
  const { projeto } = useParams()

  const basePath = '/img/projetos/'

  const chaveValor = {
    loja: ['capa-loja.jpg', 'loja1.jpg', 'loja2.jpg'],
    escritorio: ['capa-escritorio.jpg', 'escritorio1.jpg', 'escritorio2.jpg'],
    estetica: ['estetica-capa.jpg', 'estetica1.jpg', 'estetica2.jpg'],
    gourmet: ['gourmet-capa.jpg', 'gourmet1.jpg', 'gourmet2.jpg'],
    cozinha: ['cozinha-capa.jpg', 'cozinha1.jpg', 'cozinha2.jpg'],
    laser: ['area-laser-capa.jpg', 'area-laser1.jpg', 'area-laser2.jpg'],
    area: ['area-gourmet-capa.jpg', 'area-gourmet1.jpg', 'area-gourmet2.jpg'],
    sacada: ['sacada-capa.jpg', 'sacada1.jpg', 'sacada2.jpg'],
    sala: ['sala-capa.jpg', 'sala1.jpg', 'sala2.jpg']
  }

  function getImages() {
    if (projeto && projeto in chaveValor) {
      return chaveValor[projeto].map(image => basePath + image)
    } else {
      return ['capa-loja.jpg', 'loja1.jpg', 'loja2.jpg']
    }
  }

  const images = getImages()

  return (
    <div className="project">
      <header className="header-area">
        <NavLink to="/inicio" className="logo-area">
          <Image src="/img/logo.png" alt="" />
        </NavLink>
        <div className="nav-switch">
          <i className="fa fa-bars"></i>
        </div>
        <div className="phone-number">
          <a href="https://api.whatsapp.com/send/?phone=553173422196&text&type=phone_number&app_absent=0">
            <i
              className="fa fa-whatsapp"
              style={{ fontSize: '22px', color: 'black' }}
            />
          </a>{' '}
          (31) 97342 2196
        </div>
        <nav className="nav-menu">
          <ul>
            <li className="active">
              <NavLink to="/sobre">Sobre nós</NavLink>
            </li>
            <li>
              <NavLink to="/orcamento">Orçamento</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <section
        className="page-header-section"
        style={{
          backgroundImage: `url(/img/bg.jpg)`
        }}
      >
        <div className="container">
          <h1 className="header-title">
            Projetos<span>.</span>
          </h1>
        </div>
      </section>
      <section className="intro-section spad">
        <div className="container">
          <div className="row">
            {' '}
            {images.map((item, index) => (
              <Image
                style={{ padding: '1vw' }}
                src={`${item}`}
                key={index}
              ></Image>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer-section">
        <div className="footer-social">
          <div className="social-links">
            <a href="https://br.pinterest.com/studioeliarq/">
              <i className="fa fa-pinterest"></i>
            </a>
            <a href="https://www.instagram.com/eliastudioarq/">
              <i className="fa fa-instagram"></i>
            </a>
            <a href="https://www.facebook.com/eliastudioarq">
              <i className="fa fa-facebook"></i>
            </a>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-9 offset-lg-3">
              <div className="row">
                <div className="col-md-4">
                  <div className="footer-item">
                    <ul>
                      <li>
                        <NavLink to="/">
                          {' '}
                          <a href="#">Início</a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/sobre">
                          {' '}
                          <a href="#">Sobre nós</a>
                        </NavLink>
                      </li>
                      <li>
                        <NavLink to="/orcamento">
                          {' '}
                          <a href="#">Orçamento</a>
                        </NavLink>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="footer-item">
                    <ul>
                      <li>
                        <a href="#">Terms & Conditions</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="copyright">
          Copyright &copy;{' '}
          <script>document.write(new Date().getFullYear());</script> All rights
          reserved. <br />
        </div>
      </footer>
    </div>
  )
}
