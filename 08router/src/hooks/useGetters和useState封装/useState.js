import { mapState } from 'vuex'
import {useMaper} from './useMaper'

export function useState(maper){
  return useMaper(maper, mapState)
}