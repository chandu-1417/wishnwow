import React from 'react'
import StellarTheatre from '../components/hiteccity/StellarTheatre'
import PlatinumTheatre from '../components/hiteccity/PlatinumTheatre'
import MajesticTheatre from '../components/hiteccity/MajesticTheatre'
import CarnivalTheatre from '../components/hiteccity/CarnivalTheatre'
import ParadiseTheatre from '../components/hiteccity/ParadiseTheatre'
import ScarletTheatre from '../components/hiteccity/ScarletTheatre'


const HitecCity = () => {
  return (
    <div className='-z-10'>
         <StellarTheatre/>
        <PlatinumTheatre/>
        <MajesticTheatre/>
        <CarnivalTheatre/>
        <ParadiseTheatre/>
        <ScarletTheatre/>
    </div>
  )
}

export default HitecCity