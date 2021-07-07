
import VueResource from 'vue-resource'
import {
    getJwt,
    hasJwt
} from 'src/auth'

export default ({ Vue, app }) => {
    Vue.use(VueResource)
    Vue.http.options.root = app.$appConfig.baseHttpUrl
    Vue.http.interceptors.push(function (request, next) {
        if (hasJwt()) {
            request.headers.set('Authorization', 'Bearer ' + getJwt())
        }
        if (request.method === 'POST' && (request.body === undefined || request.body === null)) {
            request.body = {}
        }
        next()
    })
}
