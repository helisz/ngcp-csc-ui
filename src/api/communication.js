import { post } from 'src/api/common'
import _ from 'lodash'

export async function createFax (options) {
    const formData = new FormData()
    const fields = _.clone(options)
    delete fields.faxfile
    const json = JSON.stringify(fields)
    formData.append('json', json)
    if (options.faxfile) {
        formData.append('faxfile', options.faxfile)
    }
    return await post({
        resource: 'faxes',
        body: formData
    })
}
