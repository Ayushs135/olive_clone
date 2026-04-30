import './Phone.css'
import { useEffect, useRef, useState } from 'react'

import product6 from '../assets/product-6.webp'
import product8 from '../assets/product-8.webp'
import product9 from '../assets/product-9.webp'
import product2 from '../assets/product-2.webp'
import product3 from '../assets/product-3.webp'

const slides = [
  { img: product2,  name: 'Aged White Cheddar Crackers',       brand: 'The Good Crisp Co.',    score: 72, label: 'Good'  },
  { img: product6,  name: 'Sea Salt & Vinegar Potato Crisps',  brand: 'The Good Crisp Company', score: 39, label: 'Avoid' },
  { img: product8,  name: 'Fig and Olive Crackers',            brand: 'Lindsay Stowe',          score: 58, label: 'Okay'  },
  { img: product9,  name: 'Outback BBQ Crackers',              brand: 'The Good Crisp Co.',    score: 45, label: 'Avoid' },
  { img: product3,  name: 'Multigrain Rice Crackers',          brand: 'Wholesome Harvest',      score: 81, label: 'Good'  },
]

const oliverTexts = [
  '"This snack\'s low score is mainly due to processed sugars like maltodextrin and several additives that can be harmful, which don\'t align with your goal of avoiding processed foods."',
  '"This product scores well thanks to minimal ingredients and no artificial additives. A solid choice for health-conscious families."',
  '"Moderate score — contains some natural ingredients but watch out for the added sugars which add up quickly for kids."',
  '"High in sodium and saturated fats. Consider limiting consumption, especially for younger family members."',
  '"Great choice! Whole grains, no artificial colours or flavours — exactly what a healthy family diet looks like."',
]

function scoreColor(s) {
  if (s >= 70) return '#27ae60'
  if (s >= 50) return '#f39c12'
  return '#e74c3c'
}
 
export default function PhoneMockup() {
  const [active, setActive] = useState(0)
  const total = slides.length

  useEffect(() => {
    const id = setInterval(() => setActive(p => (p + 1) % total), 2500)
    return () => clearInterval(id)
  }, [total])

  const current = slides[active]
  const color   = scoreColor(current.score)

  function pos(i) {
    const diff = ((i - active) % total + total) % total
    if (diff === 0)          return 'center'
    if (diff === 1)          return 'right1'
    if (diff === total - 1)  return 'left1'
    if (diff === 2)          return 'right2'
    if (diff === total - 2)  return 'left2'
    return 'hidden'
  }

  return (
    <div className="mockup">

      {

      }
      <div className="carousel-wrap">
        <div className="carousel-track">
          {slides.map((s, i) => (
            <div key={i} className={`c-slide c-slide--${pos(i)}`}>
              <img src={s.img} alt={s.name} />
            </div>
          ))}
        </div>
        <div className="c-dots">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`c-dot${i === active ? ' c-dot--active' : ''}`}
              onClick={() => setActive(i)}
            />
          ))}
        </div>
      </div>

      
      <div className="phone">

        
        <div className="dynamic-island">
          <div className="di-cam" />
        </div>

       
        <div className="carousel-bg" />

       
        <div className="prod-body">
          <div className="prod-row">
            <div className="pthumb">
              <img src={current.img} alt="" />
            </div>
            <div className="pdetail">
              <div className="pname">{current.name}</div>
              <div className="pbrand">{current.brand}</div>
            </div>
          </div>

          <div className="srow">
            <span className="sdot" style={{ background: color }} />
            <span className="snum" style={{ color }}>{current.score}/100</span>
            <span className="slbl">{current.label}</span>
            <div className="sicons">
              <span>♡</span>
              <span>⤴</span>
            </div>
          </div>
        </div>

       
        <div className="oliver">
          <div className="olv-head">
            <div className="olv-av"></div>
            <span className="olv-name">Oliver Says:</span>
          </div>
          <p className="olv-text">
            {oliverTexts[active % oliverTexts.length]}
          </p>
        </div>

        <div className="bdown-lbl">Breakdown ›</div>

      </div>{ }
    </div>
  )
}