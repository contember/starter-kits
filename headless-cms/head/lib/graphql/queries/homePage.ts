export const homePage = `#graphql
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
      blocks {
        id
        order
        type
        primaryText
        secondaryText
        content {
				id
				parts {
            id
            json
          }
        }
        buttons {
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
      }
      slug
      
    }
  }
`
