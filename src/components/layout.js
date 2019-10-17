import React from 'react'
import { Link } from 'gatsby'

export default ({ children }) => {
  return (
    <div>
      <Link to='/'>
        <pre>My org-mode Website</pre>
      </Link>
      <div style={{ display: 'flex' }}>
        <Link to='/cv'>
          <button>
            View My CV
          </button>
        </Link>
      </div>
      <main>
        { children }
      </main>
    </div>
  )
}
