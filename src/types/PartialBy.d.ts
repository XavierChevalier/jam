// @see https://github.com/jquense/yup/issues/1158#issuecomment-764627164
export type PartialBy<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>
