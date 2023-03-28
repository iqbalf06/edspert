import React from 'react'
import Hero from '../../assets/img/hero.png'
import { Image } from 'react-bootstrap'
import style from './header.module.css'
import Girl from '../../assets/img/girl.png'
import Banner from '../../containers/Banner'

function Header() {
  return (
    <>
    <div className='position-relative'>
        <Image className={'img-fluid mx-auto d-block' + ' ' + style.hero} src={Hero}/>
        <Image className={'img-fluid mx-auto position-absolute' + ' ' + style.girl}src={Girl}/>
    </div>
    <Banner />
    </>
  )
}

export default Header