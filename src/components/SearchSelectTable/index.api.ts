import { DPMSHTTP } from '../../http/index'

export function getTemList() {
  return DPMSHTTP({
    url: '/crm/patient/list',
    method: 'get'
  })
}
