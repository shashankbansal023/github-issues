import * as React from "react"

const CodeIcon = (props) => (
  <svg
    aria-hidden="true"
    height={16}
    width={16}
    data-view-component="true"
    className="octicon octicon-code UnderlineNav-octicon d-none d-sm-inline"
    {...props}
  >
    <path
      fillRule="evenodd"
      fill="#57606a"
      d="M4.72 3.22a.75.75 0 0 1 1.06 1.06L2.06 8l3.72 3.72a.75.75 0 1 1-1.06 1.06L.47 8.53a.75.75 0 0 1 0-1.06l4.25-4.25zm6.56 0a.75.75 0 1 0-1.06 1.06L13.94 8l-3.72 3.72a.75.75 0 1 0 1.06 1.06l4.25-4.25a.75.75 0 0 0 0-1.06l-4.25-4.25z"
    />
  </svg>
)

export default CodeIcon;