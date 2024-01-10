import FistIcon from '@/SVGs/FistIcon'
import LightningIcon from '@/SVGs/LightningIcon'
import ParachuteIcon from '@/SVGs/ParachuteIcon'
import { Colors } from '@/utils/Colors'
import React from 'react'

export default function ChooseUsIcon({ type }: { type: 'lightning' | 'fist' | 'parachute' }) {
  return (
    <>
      {type === 'parachute' ? <ParachuteIcon width={150} color={Colors.main.orangish} /> :
      type === 'fist' ? <FistIcon width={150} color={Colors.main.orangish} /> :
      <LightningIcon width={150} color={Colors.main.orangish} />}
    </>
  )
}
