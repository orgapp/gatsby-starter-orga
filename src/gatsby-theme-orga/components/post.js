import React from 'react'
import Layout from '../../components/layout'
import { inspect } from 'util'
const print = o => {
  return inspect(o, false, null, false)
}

export default props => {
  const { title, body } = props
  return (
    <Layout>
      <h1>{ title }</h1>
      <h5>data:</h5>
      <pre>{ print(props) }</pre>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Layout>
  )
}
