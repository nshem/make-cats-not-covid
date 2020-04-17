// ==UserScript==
// @name         make cats not covid
// @namespace    drunkathon@bloop.namespace
// @version      0.1.4
// @description  Does stuff
// @author       drunkathon@notreal.com
// @match        https://*/*
// @run-at       document-end
// ==/UserScript==

console.log('<SCRIPT START>')

const observer = new MutationObserver(mutations => {
  for (let m of mutations) {
    const nodes = m.addedNodes || [];
    for (let i = 0; i < nodes.length; i++) {
    	checkElementsRecursive(nodes[i])
    }
  }
})

observer.observe(document.body, ({childList: true, subtree: true}))

checkElementsRecursive(document.body)

function checkElementsRecursive(el) {
  if (!el) return
  checkElementForCorona(el)
  const childs = el.children || []
  for (let n of childs)
    checkElementsRecursive(n)
}

function checkElementForCorona(el) {
  console.log('checking ', el)
}
