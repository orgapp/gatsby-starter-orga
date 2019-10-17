import React from 'react'
import { Link } from 'gatsby'

export default ({ children }) => {
  return (
    <div>
      <Link to='/'>
        <pre>My Website</pre>
      </Link>
      <div style={{ display: 'flex' }}>
        <Link to='/cv'>View My CV</Link>
      </div>
      <main>
        { children }
      </main>
    </div>
  )
}
