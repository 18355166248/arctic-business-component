import axios from '../../http'

export function getTemList() {
  return axios({
    url: '/crm/patient/list',
    method: 'get'
  })
}
