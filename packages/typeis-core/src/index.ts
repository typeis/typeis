class Typeis {
    private value: any;

    constructor(value: any) {
        this.value = value;
    }

    check(type: string | string[]): boolean {
        if (Array.isArray(type)) {
            type = type.join('|')
        }
        return new RegExp(`^(${type})$`, 'i').test(this.get())
    }

    get(): string {
        return this.type(this.value)
    }

    type(value: any): string {
        return Object.prototype.toString.call(value).replace(/^\[object |]$/gi, '')
    }

    static register(name: string, func: () => any) {
        if (typeof func === 'function' && !Typeis.prototype.hasOwnProperty(name)) {
            (Typeis.prototype as any)[name] = func
        }
    }
}

export default Typeis