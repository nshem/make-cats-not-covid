// ==UserScript==
// @name         make cats not covid
// @namespace    drunkathon@bloop.namespace
// @version      0.1.5
// @description  Does stuff
// @author       drunkathon@notreal.com
// @match        https://*/*
// @run-at       document-end
// ==/UserScript==

console.log('<SCRIPT START>')

// initial check for corona
checkElementsRecursive(document.body)

// any time anything changes on the page, check the new elements for corona
const observer = new MutationObserver(mutations => {
  for (let m of mutations) {
    const nodes = m.addedNodes || [];
    for (let i = 0; i < nodes.length; i++) {
    	checkElementsRecursive(nodes[i])
    }
  }
})
observer.observe(document.body, ({childList: true, subtree: true}))

// check element for corona, and it's elements, recursively
function checkElementsRecursive(el) {
  if (!el) return
  checkElementForCorona(el)
  const childs = el.children || []
  for (let n of childs)
    checkElementsRecursive(n)
}

// CORONA LOGIC HERE
function checkElementForCorona(el) {
  console.log('checking ', el)
}
