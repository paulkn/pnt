import React from 'react'
import PropTypes from 'prop-types'
import { EventsPageTemplate } from '../../templates/donate-page'

const EventsPagePreview = ({ entry, widgetFor }) => (
  <EventsPageTemplate
    title={entry.getIn(['data', 'title'])}
    image={entry.getIn(['data', 'image'])}
    content={widgetFor('body')}
  />
)

EventsPagePreview.propTypes = {
  entry: PropTypes.shape({
    getIn: PropTypes.func,
  }),
  widgetFor: PropTypes.func,
}

export default EventsPagePreview
