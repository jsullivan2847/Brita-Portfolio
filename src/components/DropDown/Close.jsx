import React from 'react'
import './DropDown.css'

export default function Close({color}) {
  return (
    <svg
          className="close special "
          viewBox="0 0 128 123"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clip-path="url(#clip0_2_16)">
            <line
              x1="5"
              y1="115.309"
              x2="115.309"
              y2="5.00002"
              stroke={color}
              stroke-width="15"
              stroke-linecap="round"
            />
            <line
              x1="12.0711"
              y1="5"
              x2="122.38"
              y2="115.309"
              stroke={color}
              stroke-width="15"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_2_16">
              <rect width="128" height="122.38" fill="white" />
            </clipPath>
          </defs>
        </svg>
  )
}
