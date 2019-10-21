import { graphql } from 'gatsby'
import React from "react"

import Layout from "../components/layout"

const NotFoundPage = ({ data: { cv } }) => {
  const { title } = cv.metadata
  return (
    <Layout>
      <h1>{ title }</h1>
      <div dangerouslySetInnerHTML={{ __html: cv.html }} />
    </Layout>
  )
}

export default NotFoundPage

export const pageQuery = graphql`
query CV {
  cv: orgContent(absolutePath: { regex: "/cv.org/" }) {
    html
    metadata { title }
  }
}
`
