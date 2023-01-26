import * as React from "react"

const InsightsIcon = (props) => (
  <svg
    aria-hidden="true"
    height={16}
    width={16}
    data-view-component="true"
    className="octicon octicon-graph UnderlineNav-octicon d-none d-sm-inline"
    {...props}
  >
    <path
      fillRule="evenodd"
      fill="#57606a"
      d="M1.5 1.75a.75.75 0 0 0-1.5 0v12.5c0 .414.336.75.75.75h14.5a.75.75 0 0 0 0-1.5H1.5V1.75zm14.28 2.53a.75.75 0 0 0-1.06-1.06L10 7.94 7.53 5.47a.75.75 0 0 0-1.06 0L3.22 8.72a.75.75 0 0 0 1.06 1.06L7 7.06l2.47 2.47a.75.75 0 0 0 1.06 0l5.25-5.25z"
    />
  </svg>
)

export default InsightsIcon;