import * as React from 'react'
import { BooleanCell, DataGridPage, DateCell, EditPage, Field, Link, TextCell } from '@contember/admin'
import { ViewedMarker } from '../components/ViewedMarker'
import locale from '../locales'

const viewedDotStyle = {
	width: '0.5em',
	height: '0.5em',
	display: 'block',
	borderRadius: '50%',
	backgroundColor: 'rgb(var(--cui-theme-success-500))'
}

export const responseList = (
	<DataGridPage
		entities="Response"
		itemsPerPage={50}
		rendererProps={{ title: locale['Responses'] }}
	>
		
	</DataGridPage>
)
