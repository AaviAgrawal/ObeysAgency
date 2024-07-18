function loadingAnimation() {
    var t1 = gsap.timeline();
    t1.from(".loader h1,.loader h2", {
        y: 120,
        stagger: 0.2,
        duration: .7,
        delay: .5
    })
    t1.to(".loader", {
        opacity: 0,
        delay: 1.8,
        stagger: -.2
    })
    t1.to("#loadpage", {
        y: "-100%",
        duration: 1,
        ease: "power4.out",
    })
    t1.from(".text h1", {
        y: 200,
        opacity: 0,
        stagger: {
            amount: 0.5
        }
    })
    t1.from("#nav", {
        opacity: 0,
        delay: -0.5
    })
    var grow = 0
    var loading = document.querySelector("#loading h5")
    var int = setInterval(function () {
        if (grow < 100) {
            grow++
            loading.innerHTML = grow
        }
        else {
            grow = 100
            setTimeout(() => {
                clearInterval(int)
            }, 2800);
        }
    }, 28)
}
loadingAnimation()

function page2Animation() {
    var videoC = document.querySelector("#video-container")
    videoC.addEventListener("mouseenter", function () {
        gsap.to(".mousefollower", {
            opacity: 0,
        })
    })
    videoC.addEventListener("mouseleave", function () {
        gsap.to(".mousefollower", {
            opacity: 1,
        })
        gsap.to("#play-btn", {
            left: "68%",
            top: "-7%",
        })
    })
    var videoVideo = document.querySelector("#video-container video")
    var flag = 0
    videoC.addEventListener("click", function () {
        if (flag == 0) {
            gsap.to(videoVideo, {
                opacity: 1
            })
            videoVideo.play();
            document.querySelector("#play-btn").innerHTML = `<i class="ri-pause-line"></i>`
            gsap.to("#play-btn", {
                scale: 0.7
            })
            flag = 1
        }
        else {
            gsap.to(videoVideo, {
                opacity: 0
            })
            videoVideo.pause();
            document.querySelector("#play-btn").innerHTML = `<i class="ri-play-fill"></i>`
            gsap.to("#play-btn", {
                scale: 1
            })
            flag = 0
        }

    })
    videoC.addEventListener("mousemove", function (dets) {
        gsap.to("#play-btn", {
            left: dets.x - 450,
            top: dets.y - 200
        })
    })
}
page2Animation()

function page4Animation() {
    Shery.mouseFollower();

    Shery.imageEffect(".image", {
        style: 6,
        // debug: true,
        gooey: true,
        config: { "noiseDetail": { "value": 9.92, "range": [0, 100] }, "distortionAmount": { "value": 5.5, "range": [0, 10] }, "scale": { "value": 44.27, "range": [0, 100] }, "speed": { "value": 0.79, "range": [0, 1] }, "zindex": { "value": "9996999", "range": [-9999999, 9999999] }, "aspect": { "value": 0.799994569354803 }, "ignoreShapeAspect": { "value": true }, "shapePosition": { "value": { "x": 0, "y": 0 } }, "shapeScale": { "value": { "x": 0.52, "y": 0.5 } }, "shapeEdgeSoftness": { "value": 0, "range": [0, 0.5] }, "shapeRadius": { "value": 0, "range": [0, 2] }, "currentScroll": { "value": 0 }, "scrollLerp": { "value": 0.07 }, "gooey": { "value": true }, "infiniteGooey": { "value": false }, "growSize": { "value": 4, "range": [1, 15] }, "durationOut": { "value": 1, "range": [0.1, 5] }, "durationIn": { "value": 1.5, "range": [0.1, 5] }, "displaceAmount": { "value": 0.5 }, "masker": { "value": true }, "maskVal": { "value": 1.31, "range": [1, 5] }, "scrollType": { "value": 0 }, "geoVertex": { "range": [1, 64], "value": 1 }, "noEffectGooey": { "value": true }, "onMouse": { "value": 0 }, "noise_speed": { "value": 0.38, "range": [0, 10] }, "metaball": { "value": 0.61, "range": [0, 2] }, "discard_threshold": { "value": 0.68, "range": [0, 1] }, "antialias_threshold": { "value": 0, "range": [0, 0.1] }, "noise_height": { "value": 0.5, "range": [0, 2] }, "noise_scale": { "value": 7.63, "range": [0, 100] } }
    });
}
page4Animation()

function endpageAnimation() {
    var end1 = document.querySelectorAll("#end .end1")
    end1.forEach(function (dets) {
        splittedEnd = dets.textContent.split("")
        var clutter = ""
        splittedEnd.forEach(function (e) {
            clutter += `<span>${e}</span>`
        })
        dets.innerHTML = clutter
    })
    var footerText = document.querySelector("#end")

    footerText.addEventListener("mouseenter", function () {
        gsap.to("#end h1 span", {
            opacity: 0,
            stagger: 0.1,
            duration: 0.5
        })
        gsap.to("#end h3 span", {
            opacity: 1,
            delay: 0.4,
            duration: 0.5,
            stagger: 0.1
        })
        gsap.to("#heading3 svg",{
            delay:1,
            left: 900
        })
    })
    footerText.addEventListener("mouseleave", function () {
        gsap.to("#end h3 span", {
            opacity: 0,
            stagger: 0.1,
            duration: 0.5
        })
        gsap.to("#end h1 span", {
            opacity: 1,
            delay: 0.4,
            duration: 0.5,
            stagger: 0.1
        })
        gsap.to("#heading3 svg",{
            delay:1,
            left: 850
        })
    })
}
endpageAnimation()

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});