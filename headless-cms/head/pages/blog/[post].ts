import { useRouter } from 'next/router'

function Post() {
	console.log('router', useRouter())
	
	return (
		"Post"
	)
}

export default Post
