import { useDark, useToggle } from '@vueuse/core'
import { type Ref, type InjectionKey } from 'vue'

export interface DarkModeInjection {
  isDark: Ref<boolean>
  toggleDark: () => void
}

export const DarkModeKey: InjectionKey<DarkModeInjection> = Symbol('DarkMode')

export function useDarkMode() {
  const isDark = useDark({})
  const toggleDark = useToggle(isDark)

  return {
    isDark,
    toggleDark,
  }
}
