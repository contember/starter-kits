import type { Link } from './link'

export type Button = {
	id: string
	label?: string
	url?: Link
	type: "primary" | "secondary"
}
