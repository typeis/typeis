import {ITypeis} from "./ITypeis";

class Typeis implements ITypeis {
    value: any
    defaultTypes: string[]

    constructor(value: any) {
        this.value = value;
    }

    validate(type: string) {
        let format = this.type(type).toLowerCase()

        if (format === 'array') {
            console.warn(`Validate method has been validate only singular type check, please try "every" or "some" method`)
            return false
        }

        if (format === 'regexp') {
            return type.test(this.get())
        } else if (format === 'string') {
            if (this.defaultTypes.includes(type)) {
                return this.get().toLowerCase() === type.toLowerCase()
            } else if (Typeis.prototype.hasOwnProperty(type)) {
                return this[type]()
            } else {
                throw new Error(`${type} module not found, please install ${type}. npm install @typeis/${type}`)
            }
        }
    }

    every(type: string[]): boolean {
        return type.every(t => this.validate(t))
    }

    some(type: string[]): boolean {
        return type.some(t => this.validate(t))
    }

    get(): string {
        return this.type(this.value)
    }

    type(value: any): string {
        return Object.prototype.toString.call(value).replace(/^\[object |]$/gi, '')
    }

    static register({name, handler, deps}: { name: string, handler: () => any, deps?: string | string[] }): void {
        if (deps) {
            if (typeof deps === 'string') {
                if (!Typeis.prototype.hasOwnProperty(deps)) {
                    throw new Error(`${name} has required ${deps} module, please install before ${deps}. npm install @typeis/${deps}`)
                }
            } else if (Array.isArray(deps)) {
                let notExist = deps.filter(module => !Typeis.prototype.hasOwnProperty(module))
                if (notExist.length) {
                    if (notExist.length === 1) {
                        let depName = notExist[0]
                        throw new Error(`${name} has required ${depName} module, please install before ${depName}. npm install @typeis/${depName}`)
                    } else {
                        let depNames = notExist.join(',')
                        throw new Error(`${name} has required ${depNames} modules, please install before ${depNames}. npm install @typeis/{module-name}`)
                    }
                }
            }
        }

        if (typeof handler === 'function') {
            if (!Typeis.prototype.hasOwnProperty(name)) {
                (Typeis.prototype as any)[name] = handler
            }
        }
    }
}

Typeis.prototype.defaultTypes = ['undefined', 'null', 'boolean', 'number', 'string', 'function', 'array', 'object', 'date', 'regexp', 'symbol']

export default Typeis