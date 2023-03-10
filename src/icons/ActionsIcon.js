import * as React from "react"

const ActionsIcon = (props) => (
  <svg
    aria-hidden="true"
    height={16}
    width={16}
    data-view-component="true"
    className="octicon octicon-play UnderlineNav-octicon d-none d-sm-inline"
    {...props}
  >
    <path
      fillRule="evenodd"
      fill="#57606a"
      d="M1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0zM8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM6.379 5.227A.25.25 0 0 0 6 5.442v5.117a.25.25 0 0 0 .379.214l4.264-2.559a.25.25 0 0 0 0-.428L6.379 5.227z"
    />
  </svg>
)

export default ActionsIcon;