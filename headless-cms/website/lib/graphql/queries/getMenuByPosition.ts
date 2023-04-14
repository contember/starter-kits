const getMenu = `#graphql
	query($position: MenuPositions) {
		getMenu(by: { position: $position }) {
			id
			position
			items {
				id
				label
				target {
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
`

export default getMenu
