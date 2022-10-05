// Random Background Generator

function randomBG() {
    let viewportWidth = window.innerWidth;
    let viewportHeight = window.innerHeight;

    $('body').css('background-image', `url(https://picsum.photos/${viewportWidth}/${viewportHeight}/?blur=3)`);
}

$(document).ready( () => {
    $(".btn-click").on("click", () => {
        let current = $(".total-click").text();

        $(".total-click").text(parseInt(current) + 1);
    })
})

randomBG();