/** @jsx jsx */
import { jsx } from "theme-ui"

export default ({ ...props }) => (
  <svg
    width="42"
    height="38"
    viewBox="0 0 42 38"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    sx={{ mr: 1, minWidth: 40 }}
    {...props}
  >
    <rect y="9" width="24" height="10" rx="3" sx={{ fill: `grayPrimary` }} />
    <rect
      x="18"
      y="18"
      width="24"
      height="10"
      rx="3"
      sx={{ fill: `grayPrimary` }}
    />
    <g filter="url(#filter0_d)">
      <rect
        x="5"
        y="2"
        width="32"
        height="32"
        rx="6"
        sx={{ fill: `background` }}
      />
    </g>
    <rect x="9" y="6" width="24" height="24" rx="4" sx={{ fill: `primary` }} />
    <defs>
      <filter
        id="filter0_d"
        x="2"
        y="0"
        width="38"
        height="38"
        filterUnits="userSpaceOnUse"
        color-interpolation-filters="sRGB"
      >
        <feFlood flood-opacity="0" result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        />
        <feOffset dy="1" />
        <feGaussianBlur stdDeviation="1.5" />
        <feColorMatrix
          type="matrix"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
        />
        <feBlend
          mode="normal"
          in2="BackgroundImageFix"
          result="effect1_dropShadow"
        />
        <feBlend
          mode="normal"
          in="SourceGraphic"
          in2="effect1_dropShadow"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
)
