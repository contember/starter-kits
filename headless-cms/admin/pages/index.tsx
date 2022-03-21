import { useRedirect } from '@contember/admin'
import { useEffect } from 'react'

export default () => {
	const redirect = useRedirect()
	useEffect(() => redirect('pageList'), [redirect])
	return null
}
