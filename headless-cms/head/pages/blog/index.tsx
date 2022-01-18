import { useRouter } from 'next/router'

function Blog() {
	console.log('router', useRouter())

	return (
		"Test"
	)
}

export default Blog
