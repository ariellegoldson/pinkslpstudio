import { SVGProps } from 'react'

// Watering Can Sticker
export const WateringCanSticker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="80"
    height="80"
    viewBox="0 0 80 80"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="sticker"
    {...props}
  >
    <circle cx="40" cy="40" r="38" fill="#f5bcd6" stroke="#e9a1c2" strokeWidth="2" />
    <path
      d="M25 45c0-5 3-8 8-8h20c3 0 5 2 5 5v8c0 3-2 5-5 5H33c-5 0-8-3-8-10z"
      fill="#7f988a"
    />
    <path
      d="M53 42h8c2 0 4 2 4 4s-2 4-4 4h-8"
      stroke="#7f988a"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <circle cx="30" cy="35" r="2" fill="#98b1a3" />
    <circle cx="35" cy="32" r="1.5" fill="#98b1a3" />
    <circle cx="32" cy="30" r="1" fill="#98b1a3" />
  </svg>
)

// Bunny Sticker
export const BunnySticker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="70"
    height="70"
    viewBox="0 0 70 70"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="sticker"
    {...props}
  >
    <circle cx="35" cy="35" r="33" fill="#f9d9e7" stroke="#f5c7db" strokeWidth="2" />
    <ellipse cx="35" cy="42" rx="12" ry="15" fill="#ffffff" />
    <ellipse cx="28" cy="25" rx="4" ry="12" fill="#ffffff" />
    <ellipse cx="42" cy="25" rx="4" ry="12" fill="#ffffff" />
    <ellipse cx="28" cy="23" rx="2" ry="8" fill="#f5c7db" />
    <ellipse cx="42" cy="23" rx="2" ry="8" fill="#f5c7db" />
    <circle cx="32" cy="38" r="2" fill="#1f2937" />
    <circle cx="38" cy="38" r="2" fill="#1f2937" />
    <path
      d="M33 44c1 1 2 1 4 0"
      stroke="#1f2937"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
)

// Key Sticker
export const KeySticker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="75"
    height="75"
    viewBox="0 0 75 75"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="sticker"
    {...props}
  >
    <circle cx="37.5" cy="37.5" r="35.5" fill="#e8f0ea" stroke="#b7cdbf" strokeWidth="2" />
    <circle cx="50" cy="30" r="8" fill="none" stroke="#7f988a" strokeWidth="2" />
    <line x1="42" y1="35" x2="25" y2="52" stroke="#7f988a" strokeWidth="2" />
    <line x1="25" y1="48" x2="30" y2="48" stroke="#7f988a" strokeWidth="2" />
    <line x1="27" y1="52" x2="32" y2="52" stroke="#7f988a" strokeWidth="2" />
  </svg>
)

// Ribbon Sticker
export const RibbonSticker = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width="85"
    height="85"
    viewBox="0 0 85 85"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="sticker"
    {...props}
  >
    <circle cx="42.5" cy="42.5" r="40.5" fill="#fdebf3" stroke="#f5c7db" strokeWidth="2" />
    <path
      d="M20 35c0-5 4-9 9-9h27c5 0 9 4 9 9v10c0 5-4 9-9 9H29c-5 0-9-4-9-9V35z"
      fill="#f5bcd6"
    />
    <path
      d="M25 30l8 8 8-8 8 8 8-8v20l-8-8-8 8-8-8-8 8V30z"
      fill="#e9a1c2"
    />
  </svg>
)

// Welcome Plaque Component
export const WelcomePlaque = ({ className = '' }: { className?: string }) => (
  <div className={`relative inline-block ${className}`}>
    <svg
      width="200"
      height="80"
      viewBox="0 0 200 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="drop-shadow-md"
    >
      <path
        d="M20 10h160c10 0 18 8 18 18v24c0 10-8 18-18 18H20c-10 0-18-8-18-18V28c0-10 8-18 18-18z"
        fill="rgba(255, 255, 255, 0.95)"
        stroke="#f5c7db"
        strokeWidth="2"
      />
      <text
        x="100"
        y="48"
        textAnchor="middle"
        className="font-script text-2xl fill-pink-600"
      >
        Welcome
      </text>
    </svg>
  </div>
)