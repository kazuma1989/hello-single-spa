// @ts-check
/**
 * @param {string} src
 * @param {Node} parent
 */
export async function insertScript(src, parent = document.head) {
  return new Promise(resolve => {
    const script = document.createElement('script')
    script.onload = resolve

    script.async = true
    script.src = src

    parent.appendChild(script)
  })
}
