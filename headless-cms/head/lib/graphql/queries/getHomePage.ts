import getFooterMenu from "../partials/getFooterMenu"
import getHeaderMenu from "../partials/getHeaderMenu"
import getSettting from "../partials/getSettings"

const getHomePage = `#graphql
  query {
    getPage(by: {role: homePage}) {
      id
      publishAt
      role
      seo {
        id
        title
        description
        ogTitle
        ogDescription
        ogImage {
          id
          url
          width
          height
          alt
        }
      }
      blocks(orderBy: {order: asc}) {
        id
        order
        type
        primaryText
        secondaryText
        content {
          id
          parts {
              json
              references {
                type
                primaryText
                text
              }
          }
        }
        buttons(orderBy: {order: asc}) {
          id
          order
          button {
            id
            label
            type
            url {
              id
              type
              url
              article {
                slug
              }
              page {
                slug
              }
            }
          }
        }
        image {
          url
          width
          height
          alt
        }
        images(orderBy: {order: asc}) {
          id
          order
          image {
            url
            width
            height
            alt
          }
        }
        featureList(orderBy: {order: asc}) {
          id
          order
          primaryText
          content {
            parts {
              json
              references {
                type
                primaryText
                text
              }
            }
          }
          icon {
            url
            width
            height
            alt
          }
        }
        testimonials(orderBy: {order: asc}) {
          id
          order
          content {
            parts {
              json
              references {
                type
                primaryText
                text
              }
            }
          }
          author {
            name
            title
            image {
              url
              width
              height
              alt
            }
          }
        }
      }
      slug
    }
    ${getHeaderMenu}
    ${getFooterMenu}
    ${getSettting}
  }
`

export default getHomePage
