import './Hero.css'
import Phone from './Phone'


import img1 from '../assets/img1.webp'
import img2 from '../assets/img2.webp'
import img3 from '../assets/img3.webp'
import img4 from '../assets/img4.webp'


const avatars = [img1, img2, img3, img4]

function Avatar({ img, index }) {
  const patternId = `img-pattern-${index}`

  return (
    <div className="av">
      <svg viewBox="0 0 40 40">
        <defs>
          <pattern id={patternId} width="1" height="1">
            <image
              href={img}
              width="40"
              height="40"
              preserveAspectRatio="xMidYMid slice"
            />
          </pattern>
        </defs>

        <circle cx="20" cy="20" r="20" fill={`url(#${patternId})`} />
      </svg>
    </div>
  )
}

export default function Hero() {
  return (
    <section className="hero">
    
      <div className="trust">
  <div className="avstack">
    {avatars.map((img, i) => (
      <Avatar key={i} img={img} index={i} />
    ))}

    <div className="av extra">
      <span>3k+</span>
    </div>
  </div>

  <span className="trust-text">
    Trusted by thousands of healthy families
  </span>
</div>


      <h1>The Safest Way to<br />Shop for Groceries</h1>

      <p>
        Use the Olive Food Scanner App to Instantly Eliminate
        Harmful Ingredients from Your Family&apos;s Diet and Get
        Expert-Backed Food Insights
      </p>

      <div className="cta">
        
        <button className="btn-ios" id="btn-ios">
          <svg viewBox="0 0 814 1000" xmlns="http://www.w3.org/2000/svg">
            <path d="M788.1 340.9c-5.8 4.5-108.2 62.2-108.2 190.5 0 148.4 130.3 200.9 134.2 202.2-.6 3.2-20.7 71.9-68.7 141.9-42.8 61.6-87.5 123.1-155.5 123.1s-85.5-39.5-164-39.5c-76 0-103.7 40.8-165.9 40.8s-105.3-57.8-155.5-127.9C46.7 790.7 0 663 0 541.8c0-207.8 130.3-320.2 259.1-320.2 70.3 0 128.7 46.5 165.9 46.5 36.8 0 94.7-49.1 165.9-49.1 31.3 0 108.2 4 168.6 80.6zM541.9 64.3c28.8-34.9 49.5-83.3 49.5-131.8 0-6.4-.6-12.8-1.9-18.6-47.5 1.9-104 32.2-138.1 72.6-25.6 29.5-50.6 77.9-50.6 127.9 0 7.1 1.3 14.2 1.9 16.5 3.2.6 8.4 1.3 13.6 1.3 43.2 0 100.7-28.8 125.6-67.9z" />
          </svg>
          Download for iOS
        </button>

        
      </div>
      <Phone />
    </section>
  )
}