var fName = ''
if (location.protocol === 'file:') {
    fName = location.href.split('file:///')[1].split('/')
    fName = fName[fName.length - 2]
    while (fName.includes('%20')) {
        fName = fName.replace('%20', ' ')
    }
}
else {
    fName = location.host.split('.')[0]
}
document.title = fName

var main = document.querySelector('main')
setSize()
setInterval(setSize, 1)
function setSize() {
    if (window.innerHeight < (main.clientHeight + 102)) {
        main.style.height = 'calc(100% - 50px)'
        main.style.width = 'calc(calc(calc(100vh - 121px)/9)*16)'
    }
    if (window.innerWidth < (main.clientWidth + 100)) {
        main.style.height = 'calc(calc(calc(100vw - 71px)/16)*9)'
        main.style.width = 'calc(100% - 100px)'
    }
    let topD = document.querySelector('div.top')
    let midD = document.querySelector('div.middle')
    let botD = document.querySelector('div.bottom')
    let bSize = topD.clientHeight
    topD.querySelector('div.left').style.width = `${bSize}px`
    topD.querySelector('div.right').style.width = `${bSize}px`
    midD.querySelector('div.left').style.width = `${bSize}px`
    midD.querySelector('div.right').style.width = `${bSize}px`
    botD.querySelector('div.left').style.width = `${bSize}px`
    botD.querySelector('div.right').style.width = `${bSize}px`
}

var compIframe = document.body.querySelector('div.computer-inner').querySelector('div.middle').querySelector('div.center').querySelector('iframe')
var compAHref = document.body.querySelector('div.computer-inner').querySelector('div.top').querySelector('div.center').querySelector('a')
if (localStorage.getItem('homepage')) {
    compIframe.src = localStorage.getItem('homepage')
    compAHref.href = localStorage.getItem('homepage')
    compAHref.innerHTML = localStorage.getItem('homepage')
}

function setHomepage(page) {
    localStorage.setItem('homepage', page)
}