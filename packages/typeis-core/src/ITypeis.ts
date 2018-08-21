export interface ITypeis {
    value: any
    defaultTypes: string[]

    validate(type: string | string[]): any

    every(type: string[]): boolean

    some(type: string[]): boolean

    get(): string

    type(value: any): string
}