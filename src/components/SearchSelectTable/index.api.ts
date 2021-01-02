import { DPMSHTTP } from '../../http/index'

export function getTemList(params) {
  return DPMSHTTP({
    url: 'patient/patient/home/list/regular',
    method: 'get',
    params
  })
}
