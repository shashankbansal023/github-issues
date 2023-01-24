import * as React from "react"

const IssueIcon = (props) => (
  <svg
    className="octicon octicon-issue-opened open"
    width={16}
    height={16}
    aria-hidden="true"
    {...props}
  >
    <path d="M8 9.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z" />
    <path
      fillRule="evenodd"
      d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zM1.5 8a6.5 6.5 0 1 1 13 0 6.5 6.5 0 0 1-13 0z"
    />
  </svg>
)

export default IssueIcon;