// ==UserScript==
// @name         make cats not covid
// @namespace    drunkathon@bloop.namespace
// @version      0.1
// @description  Does stuff
// @author       drunkathon@notreal.com
// @match        https://*/*
// @run-at       document-end
// ==/UserScript==

console.log('Hello!')

const observer = new MutationObserver(mutations => {
  console.log('Boop')
  for (let m of mutations) {
    const nodes = m.addedNodes || [];
    for (let n of nodes) {
    	checkElementsRecursive(n)
    }
  }
})

observer.observe(document.body, ({childList: true, subtree: true}))

checkElementsRecursive(document.body)

function checkElementsRecursive(el) {
  if (!el) return
  checkElementForCorona(el)
  ;(el.children || []).forEach(checkElementsRecursive)
}

function checkElementForCorona(el) {
  console.log('checking ', el)
}
