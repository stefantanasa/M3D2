

//

function showLessMore() {
    let a = document.getElementById("id-music-tabel")
    let numberClass = a.getElementsByClassName("show-less-more")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
        document.getElementById("show-less-more-text").style.display = "flex"
        document.getElementById("show-less-text").style.display = "none"
    }
}

function showLessMore1() {
    let a = document.getElementById("id-music-tabel")
    let numberClass = a.getElementsByClassName("show-less-more")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "flex";
        document.getElementById("show-less-more-text").style.display = "none"
        document.getElementById("show-less-text").style.display = "flex"
    }
}

function hideIconAddNum4() {
    document.getElementById("number-5").style.display = "inline-block"
    let a = document.getElementById("trow-5")
    let numberClass = a.getElementsByClassName("bi-play")
    for (let i = 0; i < numberClass.length; i++) {
        numberClass[i].style.display = "none";
    }
}


// header background change after 70px
let topBar = document.getElementById('topBar')
let mainContent = document.querySelector('#homeMainContent')

window.addEventListener('scroll', function () {

    if (window.pageYOffset < 70) {
        topBar.classList.remove('gradientBG')
    }
    if (topBar.classList.contains('gradientBG') && window.pageYOffset > 100) {
        return
    }
    if (window.pageYOffset > 70) {
        topBar.classList.add('gradientBG')
    }
}

)


// footer music change
function footerMusicChange() {
    let musicId = document.getElementById("music-name-1")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}

function footerMusicChange1() {
    let musicId = document.getElementById("music-name-2")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id-1")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}
function footerMusicChange2() {
    let musicId = document.getElementById("music-name-3")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id-2")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}
function footerMusicChange3() {
    let musicId = document.getElementById("music-name-4")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id-3")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}
function footerMusicChange4() {
    let musicId = document.getElementById("music-name-5")
    let artistNameId = document.getElementById("artist-name-id")
    let imageId = document.getElementById("artist-image-id-4")
    document.getElementById("footer-music-name").innerHTML = musicId.textContent
    document.getElementById("footer-artics-name").innerHTML = artistNameId.textContent
    document.getElementById("footer-image").src = imageId.src
}

// Extra
// Sidebar collapse
function collapseSidebar() {
    let spotifyIcon = document.getElementById("spotify-icon-id")
    spotifyIcon.style.display = "none"
    document.getElementById("small-spotify-icon").style.display = "flex"
    let sidebarWidth = document.getElementById("nav-sideBar")
    sidebarWidth.style.minWidth = "80px"
    sidebarWidth.style.maxWidth = "80px"
    document.getElementById("music-sidebar-id").style.display = "none"

    document.getElementById("sidebar-home-text").style.display = "none"
    document.getElementById("sidebar-search-text").style.display = "none"
    document.getElementById("sidebar-library-text").style.display = "none"
    document.getElementById("sidebar-playlist-text").style.display = "none"
    document.getElementById("sidebar-liked-songs-text").style.display = "none"
    document.getElementById("sidebar-install-apps").style.display = "none"
    document.getElementById("bi-left-icon").style.marginLeft = "80px"
}
function openSidebar() {
    let spotifyIcon = document.getElementById("spotify-icon-id")
    spotifyIcon.style.display = "flex"
    document.getElementById("small-spotify-icon").style.display = "none"
    let sidebarWidth = document.getElementById("nav-sideBar")
    sidebarWidth.style.minWidth = "232px"
    sidebarWidth.style.maxWidth = "232px"
    document.getElementById("music-sidebar-id").style.display = "flex"
    document.getElementById("sidebar-home-text").style.display = "flex"
    document.getElementById("sidebar-search-text").style.display = "flex"
    document.getElementById("sidebar-library-text").style.display = "flex"
    document.getElementById("sidebar-playlist-text").style.display = "flex"
    document.getElementById("sidebar-liked-songs-text").style.display = "flex"
    document.getElementById("sidebar-install-apps").style.display = "flex"
    document.getElementById("bi-left-icon").style.marginLeft = "230px"
}

window.onresize = collapseSidebar()

