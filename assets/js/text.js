$(function () {
    var title = document.title
        , animSeq = ["/", "/", "\\", "|", "/"]
        , animIndex = 0
        , titleIndex = 0;

    function doInverseSpinZeroPitch() {
        var loadTitle = title.substring(0, titleIndex);
        if (titleIndex > title.length) {
            animIndex = 0;
            titleIndex = 0
        }
        if (animIndex > 3) {
            titleIndex++;
            animIndex = 0
        }
        document.title = loadTitle + animSeq[animIndex];
        animIndex++
    }
    window.setInterval(doInverseSpinZeroPitch, 150);
});
$(function () {
    $(".typed").typed({
        strings: ["17.09 π","Who i am ?","zxcdev", "πΏοΈποΈποΈπ·οΈπΎοΈπ½οΈ Developer", "coder HTML", "Music Lover..."],
        typeSpeed: 35,
        backSpeed: 0,
        cursorChar: ['β'],
        smartBackspace: true,
        fadeOut: true,
        loop: true,
    });
});
