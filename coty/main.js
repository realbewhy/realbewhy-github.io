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
    // const hiddenMenu = document.getElementById('hidden-menu')
    const profile = document.getElementById('profile')
    const menu = document.getElementById('menu')

    document.getElementById("close").onclick = () => {
        profile.style.display = 'none'
        menu.style.display = 'flex'
    }

    handleClick = (e) => {
        closeContents()
        profile.style.display = 'block'
        menu.style.display = 'none'
        switch (e) {
            case 'info':
                document.getElementById('info-content').style.display = 'block'
                break;
            case 'photos':
                document.getElementById('photos-content').style.display = 'block'
                break
            case 'booking':
                document.getElementById('booking-content').style.display = 'block'
                break
            case 'prices':
                document.getElementById('prices-content').style.display = 'block'
                break
            default:
                break;
        }
    }

    closeContents = () => {
        document.getElementById('info-content').style.display = 'none'
        document.getElementById('photos-content').style.display = 'none'
        document.getElementById('booking-content').style.display = 'none'
        document.getElementById('prices-content').style.display = 'none'
    }

    document.getElementById("info").onclick = () => handleClick('info')
    document.getElementById("hm-info").onclick = () => handleClick('info')
    document.getElementById("photos").onclick = () => handleClick('photos')
    document.getElementById("hm-photos").onclick = () => handleClick('photos')
    document.getElementById("booking").onclick = () => handleClick('booking')
    document.getElementById("hm-booking").onclick = () => handleClick('booking')
    document.getElementById("prices").onclick = () => handleClick('prices')
    document.getElementById("hm-prices").onclick = () => handleClick('prices')
    //show function
}