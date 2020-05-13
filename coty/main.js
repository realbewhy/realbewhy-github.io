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

    //show photos
    const photoList = [
        {
            name: '女孩日落',
            photos: [
                'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/p720x720/92022241_530341091190251_4280418807249371136_o.jpg?_nc_cat=106&_nc_sid=0be424&_nc_ohc=oaqYBqii048AX9xDf6L&_nc_ht=scontent.fsgn5-6.fna&_nc_tp=6&oh=c1d67eddeba8bfb37c692ea3c0418961&oe=5EE1E889',
                'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/p720x720/92463968_530341127856914_5276375401969483776_o.jpg?_nc_cat=110&_nc_sid=0be424&_nc_ohc=Pc43C3Zei1wAX_vWV8X&_nc_ht=scontent.fsgn5-3.fna&_nc_tp=6&oh=fdcc4778b2502b7cb009d8eace5a683b&oe=5EE1DA51',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p720x720/92344719_530341157856911_1358560926671831040_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=Ld4ojR5G4LYAX-xxNB3&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=cd4e42bd2974a7fa597d3a0b4aa0ea46&oe=5EE21651',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p720x720/91611295_530341214523572_1601005327950544896_o.jpg?_nc_cat=100&_nc_sid=0be424&_nc_ohc=acsNt6UGsx8AX8gJio-&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=1761aa5654955b572f38e83a8c7b560e&oe=5EE07C5C',
                'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/p720x720/92459561_530341257856901_2715464786241388544_o.jpg?_nc_cat=104&_nc_sid=0be424&_nc_ohc=5SAuaSldm6MAX87OdrL&_nc_ht=scontent.fsgn5-7.fna&_nc_tp=6&oh=cc8c84437e924a76031730af2dc85f8c&oe=5EE107DB',
                'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/p720x720/92647703_530341301190230_2187759948631375872_o.jpg?_nc_cat=111&_nc_sid=0be424&_nc_ohc=-SYJgKzHZkAAX-ApAJL&_nc_ht=scontent.fsgn5-7.fna&_nc_tp=6&oh=9ac6713715568605a275c4ae08316689&oe=5EE11070',
                'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/p720x720/91615733_530341357856891_1604785101034487808_o.jpg?_nc_cat=111&_nc_sid=0be424&_nc_ohc=7VoRNKyhJe0AX_4wRNU&_nc_ht=scontent.fsgn5-7.fna&_nc_tp=6&oh=45b6658752def189865dde2558e38724&oe=5EE12EC4',
                'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/p720x720/91605814_530341384523555_8368393577507586048_o.jpg?_nc_cat=101&_nc_sid=0be424&_nc_ohc=tvVDWZA-WiQAX-65SbM&_nc_ht=scontent.fsgn5-1.fna&_nc_tp=6&oh=4f71c9a4b705f68ef173c53fca982acf&oe=5EDF711E',
                'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/s960x960/91907625_530341431190217_257351210560913408_o.jpg?_nc_cat=110&_nc_sid=0be424&_nc_ohc=XfNlHQIimj0AX_1CAbg&_nc_ht=scontent.fsgn5-3.fna&_nc_tp=7&oh=39a5d8feeef08913b3a033c1c47455ec&oe=5EDF3BBE',
                'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/p720x720/91646749_530341471190213_7926341653479030784_o.jpg?_nc_cat=109&_nc_sid=0be424&_nc_ohc=pCk-vrMl6ugAX_Glwnv&_nc_ht=scontent.fsgn5-6.fna&_nc_tp=6&oh=7194c5784f035d464e0d30f9ec8f2269&oe=5EE18212',
                'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/p720x720/91625607_530341514523542_3617562678957965312_o.jpg?_nc_cat=111&_nc_sid=0be424&_nc_ohc=SKFwaZ4QIi8AX_w6td5&_nc_ht=scontent.fsgn5-7.fna&_nc_tp=6&oh=dd4cb8f7f1fbbcdf4c793b56c7278577&oe=5EE18EEE',
            ]
        },
        {
            name: 'LOST',
            photos: [
                'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/p960x960/83846217_487245695499791_247700908673073152_o.jpg?_nc_cat=101&_nc_sid=0be424&_nc_ohc=p41s6ltz6WYAX-4ZgkP&_nc_ht=scontent.fsgn5-1.fna&_nc_tp=6&oh=32a76d15adf1557a10d6e0b98144760c&oe=5EE1FEBE',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/p960x960/83313820_487245722166455_7267163851144036352_o.jpg?_nc_cat=104&_nc_sid=0be424&_nc_ohc=wWiLwoHn51QAX83g62S&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=6&oh=940e5a1a3c53b71cb0ad04605f15846b&oe=5EE12913',
                'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/p960x960/83834575_487245798833114_6241463224919654400_o.jpg?_nc_cat=111&_nc_sid=0be424&_nc_ohc=2axr0nYcgEoAX-qYvok&_nc_ht=scontent.fsgn5-3.fna&_nc_tp=6&oh=5770a619b66eb6c6bdb92417cdd641ad&oe=5EDF9209',
                'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/p960x960/83132964_487245848833109_1322116252264562688_o.jpg?_nc_cat=101&_nc_sid=0be424&_nc_ohc=g84C23khtvoAX-RFVQ9&_nc_ht=scontent.fsgn5-1.fna&_nc_tp=6&oh=f0d32c325ec7cc27064eaf563a16b24c&oe=5EE1B596',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p960x960/83209151_487245898833104_6879598380448743424_o.jpg?_nc_cat=100&_nc_sid=0be424&_nc_ohc=LDrISDekZWQAX-K4wRM&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=eec33ab06ae1aee4992b8acd456a79af&oe=5EE13A00',
                'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/p960x960/83718652_487246002166427_1257157577741959168_o.jpg?_nc_cat=110&_nc_sid=0be424&_nc_ohc=Y7r_n4UIcAMAX85W8oO&_nc_ht=scontent.fsgn5-3.fna&_nc_tp=6&oh=ff97c95075ffb4a985148ddddd725c01&oe=5EE0EB8F',
                'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/p960x960/84557882_487246055499755_6658225685724659712_o.jpg?_nc_cat=106&_nc_sid=0be424&_nc_ohc=AZt_vJFgr6kAX9iEnjK&_nc_ht=scontent.fsgn5-6.fna&_nc_tp=6&oh=9a57c704dca451e047c4329b7f960c5d&oe=5EE0046C',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p960x960/83817442_487246118833082_3786591413244788736_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=4Om_JSFdMcAAX9327Mq&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=d51915a5d6b994cdf563205a767edbac&oe=5EE12B03',
                'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/p960x960/83260948_487246148833079_8816537345709834240_o.jpg?_nc_cat=105&_nc_sid=0be424&_nc_ohc=xN77d7ifjG0AX-V58a6&_nc_ht=scontent.fsgn5-2.fna&_nc_tp=6&oh=d79b7e22ad6154047b1e8ebbe752ba54&oe=5EDF59F8',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p960x960/83963795_487246182166409_2636099429903368192_o.jpg?_nc_cat=100&_nc_sid=0be424&_nc_ohc=fkh86a9iQyMAX_pDr7b&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=0626525e3c6e84e2afc6e7a672ab498b&oe=5EE20644',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p960x960/83518623_487246222166405_5769454303433457664_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=Wlt0WtWdvocAX8X8I6L&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=8b30dbe508575d8880238a4c2cf4f0d1&oe=5EE0D290',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/s960x960/95699355_550409969183363_2577522707415433216_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=vYT1jegOjOYAX9jzXh3&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=7&oh=91e8cd679bc9778dc408c46c0743a241&oe=5EE115A0',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/s960x960/95093366_550410002516693_1038343974856687616_o.jpg?_nc_cat=104&_nc_sid=0be424&_nc_ohc=sSz1EzSn6vsAX_4bH1X&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=7&oh=21b3a6917484ff39fc425228561b54ac&oe=5EE2315C',
                'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/s960x960/95597470_550410039183356_8743582318255407104_o.jpg?_nc_cat=103&_nc_sid=0be424&_nc_ohc=Tg7W19p2MJ8AX-IMCtz&_nc_ht=scontent.fsgn5-7.fna&_nc_tp=7&oh=5ea75252c89df35b15f919ecd08c8b5b&oe=5EE0DA64',
                'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/s960x960/95810099_550410105850016_6644269228151013376_o.jpg?_nc_cat=107&_nc_sid=0be424&_nc_ohc=oeNbDiWSGA4AX-QBW_K&_nc_ht=scontent.fsgn5-2.fna&_nc_tp=7&oh=b266d67f6f8b340d3ac0893b5e63db61&oe=5EE0C90B',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/s960x960/94702501_550410145850012_421544739385376768_o.jpg?_nc_cat=102&_nc_sid=0be424&_nc_ohc=Ch6-WfmJAz0AX99twFA&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=7&oh=37d376fe7b1cdd1cbd486c864c04a3cf&oe=5EE2BA7C',
                'https://scontent.fsgn5-1.fna.fbcdn.net/v/t1.0-9/s960x960/94889540_550410189183341_382095417526976512_o.jpg?_nc_cat=101&_nc_sid=0be424&_nc_ohc=abCGSIN5UoAAX9yO8TN&_nc_ht=scontent.fsgn5-1.fna&_nc_tp=7&oh=5942a41ac1cba4ff4f1a9e8f61ca55a3&oe=5EDFF25E',
            ]
        },
        {
            name: 'W h i t e 🧦🌾📷',
            photos: [
                'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/p720x720/90761198_523026295255064_3660812376858427392_o.jpg?_nc_cat=105&_nc_sid=0be424&_nc_ohc=tCfHFhojDR4AX-Bf9Yy&_nc_ht=scontent.fsgn5-2.fna&_nc_tp=6&oh=bbaa1f710626e0f39ae21cb752af7dd3&oe=5EE0A11F',
                'https://scontent.fsgn5-3.fna.fbcdn.net/v/t1.0-9/p720x720/90744459_523026001921760_4370346622039621632_o.jpg?_nc_cat=111&_nc_sid=0be424&_nc_ohc=YYLVDr7z1dIAX8ZuNVs&_nc_ht=scontent.fsgn5-3.fna&_nc_tp=6&oh=590a764bd907b5b1b4ca7c2f1c6a56f7&oe=5EE1DA63',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/p720x720/91206150_523026188588408_4782861012296531968_o.jpg?_nc_cat=104&_nc_sid=0be424&_nc_ohc=sApbdaNgOHMAX8GBt-e&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=6&oh=c75695faa9e8e6e328aaf38cc07dfd99&oe=5EE20DE8',
                'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/p720x720/91135477_523026328588394_6977483412428816384_o.jpg?_nc_cat=107&_nc_sid=0be424&_nc_ohc=v0BS4gR4ymwAX9gg-Ba&_nc_ht=scontent.fsgn5-2.fna&_nc_tp=6&oh=0a49f71f404eb9eb8f5eb5c95fef0cda&oe=5EE03B8F',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/s960x960/90680600_523026585255035_3712953554709774336_o.jpg?_nc_cat=102&_nc_sid=0be424&_nc_ohc=gh01zAZzJvQAX9N8Sj1&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=7&oh=990cf5ea698cbabafa44905d97e4f7d2&oe=5EE33896',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/p720x720/91001858_523026425255051_7273068177045585920_o.jpg?_nc_cat=104&_nc_sid=0be424&_nc_ohc=eozJF3XohUMAX9XmoJV&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=6&oh=09884b055a8ad3d6cdfb6dc668d98d9a&oe=5EE1C1C5',
                'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/p720x720/90228210_523026451921715_4992598958443331584_o.jpg?_nc_cat=105&_nc_sid=0be424&_nc_ohc=N4jrfvAgg8wAX9cH3Ib&_nc_ht=scontent.fsgn5-2.fna&_nc_tp=6&oh=34889bc05ca1e234dc3f996970eb5a39&oe=5EDF4BFD',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/p720x720/90797708_523026665255027_3783934409036529664_o.jpg?_nc_cat=104&_nc_sid=0be424&_nc_ohc=O35eB_ziTqAAX-Tddxl&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=6&oh=01639eaaaed2a0233efc14677cadeac5&oe=5EE05AB2',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/p720x720/90330168_523026021921758_2966538300803776512_o.jpg?_nc_cat=102&_nc_sid=0be424&_nc_ohc=IrT1YiCVUJsAX_xOu7I&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=6&oh=f13c1ac7a68a3c77ab9856651713c3d4&oe=5EE09294',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p720x720/91013204_523026491921711_7232630029161594880_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=UY0IklswN_QAX8dMwWK&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=14dca00fc43b82ea858613a1e8b049a8&oe=5EDFEB19',
                'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/p720x720/90966294_523026071921753_881401682267734016_o.jpg?_nc_cat=109&_nc_sid=0be424&_nc_ohc=IBo4Oeq50-cAX-Fa8ku&_nc_ht=scontent.fsgn5-6.fna&_nc_tp=6&oh=2270118c69f005374797051c22117520&oe=5EE0EC62',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p720x720/90289947_523026358588391_1258027308619399168_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=dWVgjg-iGc8AX_nKRAD&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=03bca8805b8d4130e26b8de01e338853&oe=5EE27AE2',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p720x720/90751585_523026218588405_4382285879503224832_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=rNlF0xPQ964AX_8cFne&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=671b120230cc2957d654a61a1a7ef099&oe=5EE17B5E',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p720x720/91025401_523026608588366_5848012751380676608_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=50S_pmOL8LUAX-GAiXg&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=4353cdbf9b46dd9ca0595d4506af1d27&oe=5EE00584',
                'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/p720x720/91027959_523026528588374_373266966221160448_o.jpg?_nc_cat=107&_nc_sid=0be424&_nc_ohc=R8852yBuZeQAX-9w-lD&_nc_ht=scontent.fsgn5-2.fna&_nc_tp=6&oh=9938e6b85df63ab5283a475d6f0315c5&oe=5EE04B61',
                'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/p720x720/90244883_523026115255082_7580882367116476416_o.jpg?_nc_cat=105&_nc_sid=0be424&_nc_ohc=ZSSPACNFKNEAX99y-BA&_nc_ht=scontent.fsgn5-2.fna&_nc_tp=6&oh=98f6eb482571774095894398b24cb0c9&oe=5EE31A8F',
                'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/p720x720/90597096_523026151921745_1141663411776520192_o.jpg?_nc_cat=105&_nc_sid=0be424&_nc_ohc=e_EIUX3m-NMAX-i1FLo&_nc_ht=scontent.fsgn5-2.fna&_nc_tp=6&oh=eda1baf9be472b0c0f5a9602dea2a853&oe=5EE09AE7',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/s960x960/90022796_523026261921734_2834715760100638720_o.jpg?_nc_cat=102&_nc_sid=0be424&_nc_ohc=5isZGHO1tmYAX839enH&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=7&oh=fc8ab56273d0a9b3a9e6bec96c30d666&oe=5EE30689',
            ]
        },
        {
            name: 'P e a r l ✨',
            photos: [
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p720x720/90265357_518783055679388_799814865765007360_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=rJiH8OcSdnIAX9x1R-d&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=f7c6e9336494a639868f3a183b2b91ec&oe=5EE0ED87',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/p720x720/85112008_518783662345994_7444870261909749760_o.jpg?_nc_cat=104&_nc_sid=0be424&_nc_ohc=Ipw0Ux5N9FAAX-fFph_&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=6&oh=27593b97e501cc71e660ec74416a4e7a&oe=5EE2A0F6',
                'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/p720x720/90070928_518783515679342_6546635000786190336_o.jpg?_nc_cat=109&_nc_sid=0be424&_nc_ohc=ejkgFk1CDK4AX8xAxdd&_nc_ht=scontent.fsgn5-6.fna&_nc_tp=6&oh=8c80d817a5116e0675bdf50685ea65a2&oe=5EE0B208',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p720x720/89918644_518783472346013_1705635872356958208_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=G3tBhZZJ3W8AX947BYq&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=2563e5751f000fc4c8853d8cc5e27011&oe=5EDFF2CC',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p720x720/90117343_518783272346033_5721226785681571840_o.jpg?_nc_cat=100&_nc_sid=0be424&_nc_ohc=j8TOUzO0P3QAX-JGpAf&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=aca4e3bc78cf36d8ecfcc775a930e4be&oe=5EE1F4EE',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/p720x720/89702335_518783149012712_5177575898437648384_o.jpg?_nc_cat=102&_nc_sid=0be424&_nc_ohc=ywgh80iUeMEAX-Zmwrl&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=6&oh=fcfdcecf076c6645239807e3a69d2fa4&oe=5EE0C885',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/p720x720/90060899_518783229012704_8579070102857580544_o.jpg?_nc_cat=102&_nc_sid=0be424&_nc_ohc=dX--dPJoR1QAX_spZn1&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=6&oh=ded01b5dc7a7537dbdbfa4718c4b1c17&oe=5EE32DFA',
                'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/p720x720/90233506_518783099012717_152598779277606912_o.jpg?_nc_cat=109&_nc_sid=0be424&_nc_ohc=4aKb138-K-gAX9P2NqZ&_nc_ht=scontent.fsgn5-6.fna&_nc_tp=6&oh=1f46864c368f2866d45c3a4e564c6d0a&oe=5EE07A17',
                'https://scontent.fsgn5-7.fna.fbcdn.net/v/t1.0-9/p720x720/90022977_518783619012665_2421809290869211136_o.jpg?_nc_cat=103&_nc_sid=0be424&_nc_ohc=5QoeAFmytJQAX8e8SoA&_nc_ht=scontent.fsgn5-7.fna&_nc_tp=6&oh=4793f10c8d00b1384f4c673d03bb8b38&oe=5EE14EC6',
                'https://scontent.fsgn5-2.fna.fbcdn.net/v/t1.0-9/p720x720/89991510_518783425679351_7993978446269120512_o.jpg?_nc_cat=105&_nc_sid=0be424&_nc_ohc=2SLsgVNtnlwAX8mO2yK&_nc_ht=scontent.fsgn5-2.fna&_nc_tp=6&oh=373b7dfd12d08a798575646a45eacbe4&oe=5EDF77B1',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/p720x720/90117340_518783195679374_8540266752670433280_o.jpg?_nc_cat=104&_nc_sid=0be424&_nc_ohc=_trQp6Ms0rIAX9UECnz&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=6&oh=99f5116d22880e8816d487eda2d10c96&oe=5EE0250B',
                'https://scontent.fsgn5-4.fna.fbcdn.net/v/t1.0-9/p720x720/90298869_518783575679336_2032996076339855360_o.jpg?_nc_cat=104&_nc_sid=0be424&_nc_ohc=pNIdPHpieIAAX_VwlfX&_nc_ht=scontent.fsgn5-4.fna&_nc_tp=6&oh=94f032ac7a5586665596b342c8c2888c&oe=5EDFEF42',
                'https://scontent.fsgn5-5.fna.fbcdn.net/v/t1.0-9/p720x720/89931928_518783389012688_8484416819019382784_o.jpg?_nc_cat=108&_nc_sid=0be424&_nc_ohc=2iE0kE3Wgv0AX9bDYhw&_nc_ht=scontent.fsgn5-5.fna&_nc_tp=6&oh=7e5d573fa33ab8ac81cfb0d7f4ed3c74&oe=5EE2D4F5',
                'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/p720x720/89924911_518783302346030_4768261417730048000_o.jpg?_nc_cat=109&_nc_sid=0be424&_nc_ohc=-IEBF3phb4UAX_18Y17&_nc_ht=scontent.fsgn5-6.fna&_nc_tp=6&oh=22c6585aef84b57b549e8c4818a51413&oe=5EE2626C',
                'https://scontent.fsgn5-6.fna.fbcdn.net/v/t1.0-9/p720x720/90241636_518783359012691_596720499585712128_o.jpg?_nc_cat=106&_nc_sid=0be424&_nc_ohc=3CzgYvliHoMAX_nwSde&_nc_ht=scontent.fsgn5-6.fna&_nc_tp=6&oh=705042d4ddabaa2fd6c1f9352b8c74e5&oe=5EE3026D',
            ]
        }
    ]

    const albums = document.getElementById('albums')
    const photos = document.getElementById('photos-by-album')
    let i = 0

    photoList.forEach(element => {
        const div = document.createElement('DIV')
        div.classList.add('album')
        const p = document.createElement('SPAN')
        p.innerText = element.name
        const count = document.createElement('SPAN')
        count.innerText = element.photos.length + ' hình'
        const image = new Image()
        image.src = element.photos[0]
        div.appendChild(image)
        div.appendChild(p)
        div.appendChild(count)
        const divClick = document.createElement('DIV')
        divClick.id = i
        divClick.classList.add('click-div')
        div.appendChild(divClick)
        albums.appendChild(div)
        i++
    });

    const back = document.getElementById('back')

    albums.onclick = (e) => {
        const id = e.target.id
        const list = photoList[id]
        photos.innerText = ''
        if (list) {
            photos.style.display = 'block'
            albums.style.display = 'none'
            back.style.display = 'flex'
            list.photos.forEach(element => {
                const div = document.createElement('DIV')
                div.classList.add('image')
                const background = document.createElement('DIV')
                background.classList.add('background')
                background.style.backgroundImage = "url('" + element + "')"
                const image = new Image()
                image.src = element
                div.appendChild(background)
                div.appendChild(image)
                photos.appendChild(div)
            });
        }
    }

    back.onclick = () => {
        photos.style.display = 'none'
        albums.style.display = 'block'
        back.style.display = 'none'
    }

    //show photos
}