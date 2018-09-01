import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'

import Header from '../components/header'
import './index.css'

const Layout = ({ children, data }) => (
  <div>
    <Header siteTitle={"Placeholder"} />
    <div
      style={{
        margin: '0 auto',
        maxWidth: 960,
        padding: '8rem 1.0875rem 1.45rem',
      }}
    >
      {children()}
    </div>
  </div>
)

Layout.propTypes = {
  children: PropTypes.func,
}

export default Layout
