window.onload = () => {
    //slide images
    var myIndex = 0;
    carousel();

    function carousel() {
        var i;
        var x = document.getElementsByClassName("mySlides");
        for (i = 0; i < x.length; i++) {
            x[i].style.display = "none";
        }
        myIndex++;
        if (myIndex > x.length) { myIndex = 1 }
        x[myIndex - 1].style.display = "block";
        setTimeout(carousel, 2000); // Change image every 2 seconds
    }
    //slide images

    //show function
    const hiddenMenu = document.getElementById('hidden-menu')
    document.getElementById("close").onclick = () => {
        document.getElementById('main').style.display = 'flex'
        document.getElementById('content').style.display = 'none'
        document.getElementById('info-content').style.display = 'none'
        hiddenMenu.style.display = 'none'
    }
    
    handleClick = (e) => {
        console.log(e)
        document.getElementById('main').style.display = 'none'
        document.getElementById('content').style.display = 'block'
        hiddenMenu.style.display = 'flex'
        switch (e) {
            case 'info':
                document.getElementById('info-content').style.display = 'block'
                break;
            default:
                break;
        }
    }

    document.getElementById("info").onclick = () => handleClick('info')
    document.getElementById("hm-info").onclick = () => handleClick('info')
    //show function
}