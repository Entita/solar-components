import FistIcon from '@/SVGs/FistIcon'
import LightningIcon from '@/SVGs/LightningIcon'
import ParachuteIcon from '@/SVGs/ParachuteIcon'
import React from 'react'

export default function ChooseUsIcon({ type }: { type: 'lightning' | 'fist' | 'parachute' }) {
  return (
    <>
      {type === 'parachute' ? <ParachuteIcon width={150} /> :
      type === 'fist' ? <FistIcon width={150} /> :
      <LightningIcon width={150} />}
    </>
  )
}
