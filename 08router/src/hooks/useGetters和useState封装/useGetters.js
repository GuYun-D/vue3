import { mapGetters } from 'vuex'
import {useMaper} from './useMaper'

export function useGetters(maper){
  return useMaper(maper, mapGetters)
}