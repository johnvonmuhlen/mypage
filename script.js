document.addEventListener('DOMContentLoaded', function() {
    // When the user scrolls the page, execute myFunction
    window.onscroll = function() {myFunction()};

    // Get the navbar
    var navbar = document.getElementById("navbar");
    var section = document.querySelector('#hello');
    var portfolio = document.querySelector('#port-trigger');
    var contact = document.querySelector('#contact');
    var homea = document.querySelector('#homea')
    var abouta = document.querySelector('#abouta')
    var portfolioa = document.querySelector('#portfolioa')
    var contacta = document.querySelector('#contacta')
    var enol = document.querySelector('#enol')

    const items = document.querySelectorAll('.observe')

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            entry.target.classList.toggle("slide", entry.isIntersecting);
            if (entry.isIntersecting)
            {
                observer.unobserve(entry.target)
            }
        })
    }, {
        threshold:0
    })

    items.forEach(item => {
        observer.observe(item)
    })

    enol.addEventListener('click', () => {
        enol.innerHTML = 'Not Available At The Moment'
    })

    // Get the offset position of the navbar
    var sticky = navbar.offsetTop;

    // Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
        if (window.pageYOffset >= sticky) {
            navbar.classList.add("sticky")
            hello.style.marginTop = '65px'

        } else {
            navbar.classList.remove("sticky");
            hello.style.marginTop = '0px'

        }

        if (window.pageYOffset <= navbar.offsetTop)
        {
            homea.style.color = 'rgb(221, 52, 52)'
        }
        else
        {
            homea.style.transition = 'all 0.9s'
            homea.style.color = 'white'
        }

        if (window.pageYOffset >= navbar.offsetTop && window.pageYOffset <= portfolio.offsetTop)
        {
            abouta.style.color = 'rgb(221, 52, 52)'
        }
        else
        {
            abouta.style.transition = 'all 0.9s'
            abouta.style.color = 'white'
        }

        if (window.pageYOffset >= portfolio.offsetTop && window.pageYOffset <= contact.offsetTop)
        {
            portfolioa.style.color = 'rgb(221, 52, 52)'
        }
        else
        {
            portfolioa.style.transition = 'all 0.9s'
            portfolioa.style.color = 'white'
        }


        if (window.pageYOffset >= contact.offsetTop)
        {
            contacta.style.color = 'rgb(221, 52, 52)'
        }
        else
        {
            contacta.style.transition = 'all 0.9s'
            contacta.style.color = 'white'
        }
    }

    var item = document.getElementsByClassName("i fas");
    var item1 = document.getElementById("arrow-up");

    item1.addEventListener("mouseover", func2, false);
    item1.addEventListener("mouseout", func3, false);

    function func2()
    {
        item1.classList.add("fa-bounce")
    }
    function func3()
    {  
        item1.classList.remove("fa-bounce")
    }

    Array.from(item).forEach(element => {
        element.addEventListener("mouseover", func, false);
        element.addEventListener("mouseout", func1, false);

        function func()
        { 
            element.classList.add("fa-flip")
        }
    
        function func1()
        {  
            element.classList.remove("fa-flip")
        }
    
    });
})