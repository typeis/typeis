export class Typeis {
    private value: any;

    constructor(value: any) {
        this.value = value;
    }

    check(type: string | string[]): boolean {
        if (Array.isArray(type)) {
            type = type.join('|')
        }
        return new RegExp('^(' + type.toString() + ')$', 'i').test(this.get())
    }

    get(): string {
        return this.controller(this.value)
    }

    private controller(value: any): string {
        return Object.prototype.toString.call(value).replace(/^\[object |]$/gi, '')
    }
}

export function typeis(value: any, type?: string) {
    let typeis = new Typeis(value);
    return type ? typeis.check(type) : typeis.get()
}