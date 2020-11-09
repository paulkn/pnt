import React from 'react'
import PropTypes from 'prop-types'

const Hero = ({ title, image }) => (
  <div
    className="full-width-image-container margin-top-0"
    style={{
      backgroundImage: `url(${
        !!image.childImageSharp ? image.childImageSharp.fluid.src : image
      })`,
    }}
  >
    <h1
      className="has-text-weight-bold is-size-3-mobile is-size-2-tablet is-size-1-widescreen"
    >
      {title}
    </h1>
  </div>
)

Hero.propTypes = {
  title: PropTypes.string,
  image: PropTypes.oneOfType([PropTypes.object, PropTypes.string]),
}

export default Hero