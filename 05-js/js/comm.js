const headerEl = document.querySelector('#header');

window.addEventListener('scroll', function(
    'scroll',
    _.throttle(functions(){if(window.scrollY>200){
        gsap.to(headerEl,{
            y:-100,
            duration:0.5,

        })

    }else{gsap.to(headerEl,{
            y:,
            duration:0.5,

    }},300)
) {})