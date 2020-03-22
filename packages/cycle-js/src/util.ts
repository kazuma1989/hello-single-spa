export function insertStyleSheet(
  href: string,
  parent: HTMLElement = document.head,
) {
  let link: HTMLLinkElement
  const loaded = new Promise(resolve => {
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
    loaded,
  ] as const
}
