import React from "react"
import { Link } from "gatsby"
import { graphql } from 'gatsby'


import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {

  console.log("DATA", data)
  const vilas = data.allRestApiApiWebProperties.edges
  console.log("vilas", vilas)
  return (

    <Layout>
      <SEO title="Home" />
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <div>
        <ul>
          {vilas.map((item) => {
            let newItem = item.next
            if (newItem)
              return <li>{JSON.stringify(newItem.title)}</li>
          })}
        </ul>
      </div>
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>)
}
export const query = graphql`
{
  allRestApiApiWebProperties {
    edges {
      next {
        id
        title
        description
      }
    }
  }
}
`
export default IndexPage

