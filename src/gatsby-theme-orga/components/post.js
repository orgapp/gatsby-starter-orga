import React from 'react'
import Layout from '../../components/layout'
import { inspect } from 'util'
const print = o => {
  return inspect(o, false, null, false)
}

export default props => {
  const { title, date, body } = props
  return (
    <Layout>
      <h1>{ title }</h1>
      <pre>{ (new Date(date)).toLocaleString() }</pre>
      <h5>props</h5>
      <pre>{ print(props) }</pre>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </Layout>
  )
}
