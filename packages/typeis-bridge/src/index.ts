declare const Typeis: any;
export default function (value: any, type?: string) {
    let typeis = new Typeis(value);
    return type ? typeis.check(type) : typeis.get()
}