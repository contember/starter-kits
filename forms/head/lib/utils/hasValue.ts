export function hasValue(value: string | File) {
	if (typeof value === 'object') {
		return value.size > 0
	} else if (value !== '') {
		return value
	}
}
