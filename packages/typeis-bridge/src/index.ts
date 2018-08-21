declare const Typeis: any;
export default function (value: any, type?: string | string[], method: string = 'some') {
    let typeis = new Typeis(value)
    if (Array.isArray(type)) {
        method = method === 'every' ? 'every' : 'some'
        return typeis[method](type)
    }
    return type ? typeis.validate(type) : typeis.get()
}