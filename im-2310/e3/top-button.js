const button1 = document.querySelector("#topbutton");


button1.addEventListener("click", function () 

{
    window.scrollTo
    ({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
    
});

/* I have created a top button java script file, and used window.scrollTo fuction to redirect the website. I want the button 
to redirect the page into the top of the website using top: 0 property and using a smooth behaviour to create a smooth scroll up
navigation */
