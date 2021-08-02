export function queryString(context, next) {
    let qs = {}
    if (context.querystring) {
        qs = context.querystring.split('&')
            .map(x => x.split('='))
            .reduce((a, [key, value]) => {
                a[key] = value
                return a
            }, {});
    }
    context.qs = qs

    next()
}