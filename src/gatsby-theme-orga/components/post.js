import React from 'react'
import Layout from '../../components/layout'
import { inspect } from 'util'
const print = o => {
  return inspect(o, false, null, false)
}

export default ({ post }) => {
  return (
    <Layout>
      <h1>{ post.metadata.title }</h1>
      <h5>metadata:</h5>
      <pre>{ print(post.metadata) }</pre>
      <div dangerouslySetInnerHTML={{ __html: post.html }} />
    </Layout>
  )
}
