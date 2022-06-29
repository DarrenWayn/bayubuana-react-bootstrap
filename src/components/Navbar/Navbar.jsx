import React from 'react'
import 
{ 
  BsFillPersonFill, 
  BsFillUnlockFill, 
  BsBoxArrowInRight, 
  BsQuestionCircleFill, 
  BsBell 
} from 'react-icons/bs'
import image from '../../assets/images/logobayubuana.png'

const Navbar = () => {
  return (
    <div className='navBar'>
      <div className='navBarHeader'>
        <div className='navBarLogoContainer'>
          <NavbarLogo />
          <NavbarHero />
        </div>
      </div>
    </div>
  )
}

const NavbarLogo = () => {
  return (
    <div className='logoContainer'>
      <img
        src={image} 
        alt='Bayu Buana Travel Services' 
      />
    </div>
  )
}

const NavbarHero = () => {
  return (
    <div className='navBarHero'>
      <BsQuestionCircleFill />
      <BsBell />
      <div className='profile'>
        <img src='' alt='' />
        <div className='profileDetail'>
          <div className='listOne'>
            <BsFillPersonFill />
            <p>My Profile</p>
          </div>
          <div className='listTwo'>
            <BsFillUnlockFill />
            <p>Change Password</p>
          </div>
          <div className='listThree'>
            <BsBoxArrowInRight />
            <p>Sign Out</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar