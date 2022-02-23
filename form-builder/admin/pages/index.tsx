import { useRedirect } from '@contember/admin'
import { useEffect } from 'react'

export const index = () => {
	const redirect = useRedirect()
	useEffect(() => redirect('formList'), [redirect])
	return null
}
