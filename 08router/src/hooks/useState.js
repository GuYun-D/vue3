import { computed } from 'vue'
import { mapState, useStore } from 'vuex'
export const useState = (maper) => {
  const store = useStore()
  const storeStateFns = mapState(maper)

  const storeState = {}
  Object.keys(storeStateFns).forEach(fnKey => {
    const fn = storeStateFns[fnKey].bind({$store: store})
    storeState[fnKey] = computed(fn)
  })

  return storeState
}