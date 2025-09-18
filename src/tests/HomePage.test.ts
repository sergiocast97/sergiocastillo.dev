import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Homepage from '../page/HomePage.vue'

describe('Homepage.vue', () => {
  it('renders the title and copy', () => {
    const wrapper = mount(Homepage)
    expect(wrapper.text()).toContain("Hi I'm Sergio")
  })

  it('navigation links have non-empty text titles', () => {
    const wrapper = mount(Homepage)
    const navLinks = wrapper.findAll('a')
    navLinks.forEach((link) => {
      expect(typeof link.text()).toBe('string')
      expect(link.text().trim().length).toBeGreaterThan(0)
    })
  })

  it('navigation links are URLs https://', () => {
    const wrapper = mount(Homepage)
    const navLinks = wrapper.findAll('a')
    navLinks.forEach((link) => {
      expect(link.attributes('href')?.startsWith('https://')).toBe(true)
    })
  })
})
