const hotWords = {
  'coronavirus': 'cat',
  'covid-19': 'cat',
  'קורונה': 'חתולה',
  'נגיף': 'כרבול'
}

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
observer.observe(document.body, ({ childList: true, subtree: true }))

// check element for corona, and it's elements, recursively
function checkElementsRecursive(el) {
  if (!el) return

  checkElementForCorona(el)
  const childs = el.children || []
  for (let n of childs) checkElementsRecursive(n)

}

// CORONA LOGIC HERE
function checkElementForCorona(el) {
  let html = el.innerHTML
  if (html) {
    for (word in hotWords) {
      // replacing word to word. TODO: replace paragraph (innerText/innerContent didn't work).
      let reg = new RegExp(`(?<!_)(?<!\/)${word}(?!_)(?!\/)`, "mgiu");
      if (html.match(reg)) el.innerHTML = html.replace(reg, hotWords[word])
    }
  }
}
