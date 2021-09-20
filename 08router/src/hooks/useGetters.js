import { computed } from 'vue'
import { mapGetters, useStore } from 'vuex'
export const useGetters = (maper) => {
  const store = useStore()
  const storeStateFns = mapGetters(maper)

  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store})
    storeState[fnKey] = computed(fn)
  })

  return storeState
}