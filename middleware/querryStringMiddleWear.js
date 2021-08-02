export function queryString(context, next) {
    if (context.querystring) {
        context.qs =
            context.querystring.split('&')
                .map(x => x.split('='))
                .reduce((a, [key, value]) => {
                    a[key] = value
                    return a
                }, {});
    }
    next()
}