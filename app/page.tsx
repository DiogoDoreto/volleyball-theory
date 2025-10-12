'use client'

import { useEffect, useRef, useState } from 'react'
import * as R from 'ramda'
import { AllRotations, AllStances, Rotation, Stance } from './lib/constants'
import { RadioButton } from './components/ui'
import { SvgCourt, SvgPlayer } from './components/svg'
import { plays } from './lib/plays'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faBars,
  faCode,
  faPrint,
  faXmark,
} from '@fortawesome/free-solid-svg-icons'

export default function Home() {
  const dialog = useRef<HTMLDialogElement>(null)
  const [rotation, setRotation] = useState(Rotation.R1)
  const [stance, setStance] = useState(Stance.Neutral)
  const itemsOnCanvas = R.groupBy(R.prop('kind'), plays[rotation][stance])
  const players = R.sortBy(R.prop('position'), itemsOnCanvas.player || [])

  useEffect(() => {
    document.addEventListener('keydown', ({ key }) => {
      if (['1', '2', '3', '4', '5', '6'].includes(key)) {
        setRotation(AllRotations[parseInt(key) - 1])
      }
      if (key === 'n') setStance(Stance.Neutral)
      if (key === 'd') setStance(Stance.Defense)
      if (key === 'a') setStance(Stance.Attack)
    })
  }, [])

  return (
    <main className="bg-marine min-h-screen max-h-screen flex flex-col items-center">
      <div className="w-full bg-royal flex items-center h-10">
        <h1
          className="grow px-4 font-medium text-lg"
          style={{ fontVariantCaps: 'small-caps' }}
        >
          Volleyball Theory
        </h1>
        <button
          title="Open menu"
          className="hover:bg-navy w-10 h-10"
          onClick={() => dialog.current?.showModal()}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
      </div>

      <dialog
        ref={dialog}
        className="min-h-screen mr-0 bg-navy text-white flex flex-col p-4 gap-4"
      >
        <button
          className="hover:bg-royal p-2 rounded-lg"
          onClick={() => dialog.current?.close()}
        >
          <FontAwesomeIcon icon={faXmark} className="mr-2" />
          Close
        </button>
        <a
          target="_blank"
          href="https://drive.google.com/file/d/1EhrO0MxBVK0NmYTvYrY7V2Bt9pxGOC7Z/view?usp=drive_link"
          className="border-white border-2 rounded-lg p-4 hover:bg-royal"
        >
          <FontAwesomeIcon icon={faPrint} className="mr-4" />
          Print version (PDF)
        </a>
        <a
          target="_blank"
          href="https://github.com/DiogoDoreto/volleyball-theory"
          className="border-white border-2 rounded-lg p-4 hover:bg-royal"
        >
          <FontAwesomeIcon icon={faCode} className="mr-4" />
          Source Code
        </a>
      </dialog>

      <svg className="grow w-full" viewBox="0 0 1250 1150">
        <g transform="translate(175,-700)">
          <SvgCourt />
          {players.map(({ x, y, position }) => (
            <SvgPlayer x={x} y={y} position={position} key={position} />
          ))}
        </g>
      </svg>

      <div className="w-full box-border flex flex-col gap-4 p-6">
        <div className="flex gap-2 items-stretch h-10">
          {AllRotations.map((value) => (
            <RadioButton
              name="rotation"
              value={value}
              key={value}
              checked={rotation === value}
              onChange={() => setRotation(value)}
              className="grow"
            />
          ))}
        </div>
        <div className="flex gap-2 items-stretch h-10">
          {AllStances.map((value) => (
            <RadioButton
              name="stance"
              value={value}
              key={value}
              checked={stance === value}
              onChange={() => setStance(value)}
              className="grow"
            />
          ))}
        </div>
      </div>
    </main>
  )
}
