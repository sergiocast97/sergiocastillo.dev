import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import Homepage from '../components/HomePage.vue'

describe('Homepage.vue', () => {
  it('renders the title and copy', () => {
    const wrapper = mount(Homepage)
    expect(wrapper.text()).toContain("Hi I'm Sergio")
    expect(wrapper.text()).toContain(
      "I'm a Software Engineer and UI Designer based in Glasgow, Scotland.",
    )
  })

  it('renders all navigation items', () => {
    const wrapper = mount(Homepage)
    const navLinks = wrapper.findAll('a')
    const expectedTitles = ['BlueSky', 'LinkedIn', 'GitHub', 'Behance']
    expectedTitles.forEach((title) => {
      expect(navLinks.some((link) => link.text() === title)).toBe(true)
    })
  })

  it('navigation links have correct hrefs', () => {
    const wrapper = mount(Homepage)
    const navLinks = wrapper.findAll('a')
    const expectedHrefs = [
      'https://bsky.app/profile/sergiocastillo.dev',
      'https://www.linkedin.com/in/sergiocast97',
      'https://github.com/sergiocast97/',
      'https://www.behance.net/sergiocast97',
    ]
    expectedHrefs.forEach((href) => {
      expect(navLinks.some((link) => link.attributes('href') === href)).toBe(true)
    })
  })

  it('toggles dark mode when button is clicked', async () => {
    const wrapper = mount(Homepage)
    const button = wrapper.find('#theme-toggle')
    const main = wrapper.find('main')
    const initialClass = main.classes().includes('dark')
    await button.trigger('click')
    const toggledClass = main.classes().includes('dark')
    expect(initialClass).not.toBe(toggledClass)
  })
})
