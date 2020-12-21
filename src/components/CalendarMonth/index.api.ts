import { DPMSHTTP } from '../../http/index'

export function getApptList() {
  return DPMSHTTP({
    url: '/crm/appt/list',
    method: 'get'
  })
}
