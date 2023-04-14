import { isFile } from "./isFile"

export function hasValue(value: string | File) {
	if (isFile(value)) {
		return value.size > 0
	} else if (value !== '') {
		return value
	}
}
