export function isFile(value: any): value is File {
    return value instanceof File;
}
