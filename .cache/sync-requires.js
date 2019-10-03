const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---cache-dev-404-page-js": hot(preferDefault(require("/Users/kento/Programing/VScodeProjects/gatsby-netlify/.cache/dev-404-page.js"))),
  "component---src-pages-about-jsx": hot(preferDefault(require("/Users/kento/Programing/VScodeProjects/gatsby-netlify/src/pages/about.jsx"))),
  "component---src-pages-contact-jsx": hot(preferDefault(require("/Users/kento/Programing/VScodeProjects/gatsby-netlify/src/pages/contact.jsx"))),
  "component---src-pages-index-jsx": hot(preferDefault(require("/Users/kento/Programing/VScodeProjects/gatsby-netlify/src/pages/index.jsx"))),
  "component---src-pages-test-jsx": hot(preferDefault(require("/Users/kento/Programing/VScodeProjects/gatsby-netlify/src/pages/test.jsx")))
}

