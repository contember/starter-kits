export type ContactMessage = {
	createdAt: string
	viewed: boolean
	firstName?: string
	lastName?: string
	email?: string
	phone?: string
	message?: string
	consent: 'yes'
}
