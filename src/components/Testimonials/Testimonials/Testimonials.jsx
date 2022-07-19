import React from 'react'
import s from './Testimonials.module.css'
import { FocusOnSelect } from './Slider'

const array = [
  {
    ContentCart:
      '‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’',
    infoPerson: 'Alexander F ',
    profession: 'IT Admin at Digital Group'
  },
  {
    ContentCart:
      '‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’',
    infoPerson: 'Robert B ',
    profession: 'Designer at Digital Group'
  },
  {
    ContentCart:
      '‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’',
    infoPerson: 'Vadim Z ',
    profession: '‘‘Executive at Digital Group'
  },
  {
    ContentCart:
      '‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’',
    infoPerson: 'Alexander F ',
    profession: 'IT Admin at Digital Group'
  },
  {
    ContentCart:
      '‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’',
    infoPerson: 'Robert B ',
    profession: 'Designer at Digital Group'
  },
  {
    ContentCart:
      '‘‘Nowadays, it isn’t great uncommon to see lenders rapidly adopting a digital lending strategy to make streamline the process’’',
    infoPerson: 'Vadim Z ',
    profession: 'Executive at Digital Group'
  }
]

const Testimonials = () => {
  return (
    <div className={s.Testimonials}>
      <div>
        <h2>What People Are Saying</h2>
      </div>
      <FocusOnSelect array={array} />
    </div>
  )
}

export default Testimonials
