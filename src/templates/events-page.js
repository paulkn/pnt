import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import Content, { HTMLContent } from '../components/Content'
import Hero from '../components/Hero'

export const EventsPageTemplate = ({ title, content, contentComponent, image }) => {
  const PageContent = contentComponent || Content

  return (
    <div className="events">
      <Hero title={title} image={image} />
      <section className="section section--gradient" style={{ marginTop: `-48px` }}>
          <div className="container">
            <div className="columns">
              <div className="column is-10 is-offset-1">
                <div className="section">
                  <PageContent className="content" content={content} />
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  )
}

EventsPageTemplate.propTypes = {
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
  title: PropTypes.string.isRequired,
  content: PropTypes.string,
  contentComponent: PropTypes.func,
}

const EventsPage = ({ data }) => {
  const { markdownRemark: post } = data

  return (
    <Layout>
      <EventsPageTemplate
        contentComponent={HTMLContent}
        image={post.frontmatter.image}
        title={post.frontmatter.title}
        content={post.html}
      />
    </Layout>
  )
}

EventsPage.propTypes = {
  data: PropTypes.object.isRequired,
}

export default EventsPage

export const eventsPageQuery = graphql`
  query EventsPage($id: String!) {
    markdownRemark(id: { eq: $id }) {
      html
      frontmatter {
        title
        image{
          childImageSharp {
            fluid(maxWidth: 2048, quality: 100) {
              ...GatsbyImageSharpFluid
            }
          }
        }  
      }
    }
  }
`
