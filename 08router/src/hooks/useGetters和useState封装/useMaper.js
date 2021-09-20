/**
 * 此模块是对useGetter和useState的进一步封装
 */
import { computed } from 'vue'
import { useStore } from 'vuex'
export const useMaper = (maper, mapFn) => {
  const store = useStore()
  const storeStateFns = mapFn(maper)

  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({ $store: store })
    storeState[fnKey] = computed(fn)
  })

  return storeState
}