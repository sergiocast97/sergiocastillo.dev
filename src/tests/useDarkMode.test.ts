import { describe, it, expect } from 'vitest'
import { useDarkMode } from '../composables/useDarkMode'

describe('useDarkMode', () => {
  it('returns a boolean ref and a toggle function', () => {
    const { isDark, toggleDark } = useDarkMode()
    expect(typeof isDark.value).toBe('boolean')
    expect(typeof toggleDark).toBe('function')
  })

  it('toggles the isDark value', () => {
    const { isDark, toggleDark } = useDarkMode()
    const initial = isDark.value
    toggleDark()
    expect(isDark.value).toBe(!initial)
    toggleDark()
    expect(isDark.value).toBe(initial)
  })
})
