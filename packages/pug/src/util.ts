export function insertStyleSheet(href: string, parent: Node = document.head) {
  let link: HTMLLinkElement
  const loading = new Promise(resolve => {
    link = document.createElement('link')
    link.onload = resolve

    link.crossOrigin = 'anonymous'
    link.rel = 'stylesheet'
    link.href = href

    parent.appendChild(link)
  })

  return [
    () => {
      parent.removeChild(link)
    },
    loading,
  ] as const
}
