

var width = $(window).width();

var height = $(window).height();
$(document).ready(function () {

    $('#screen').attr('style', "transform: scale(" + height / 830 + ");")

})



$(window).resize(function () {
    var width = $(window).width();

    var height = $(window).height();
    $(document).ready(function () {
        $('#screen').attr('style', "transform: scale(" + height / 830 + ");")

    })


});

clickerupgrade = 0

playersclickstotal = 0
toucan = 1
cage = 0
palmier = 0
foret = 0
ile = 0
zoo = 0
continent = 0
planette = 0
systemesolaire = 0
galaxie = 0
troublanc = 0
univers = 0
espacetmps = 0
antimatieretoucan = 0



cagelvl = 1
palmierlvl = 1
foretlvl = 1
ilelvl = 1
zoolvl = 1
continentlvl = 1
planettelvl = 1
systemesolairelvl = 1
galaxielvl = 1
troublanclvl = 1
universlvl = 1
espacetmpslvl = 1
antimatieretoucanlvl = 1

cagefacteur = 1
palmierfacteur = 1
foretfacteur = 1
ilefacteur = 1
zoofacteur = 1
continentfacteur = 1
planettefacteur = 1
systemesolairefacteur = 1
galaxiefacteur = 1
troublancfacteur = 1
universfacteur = 1
espacetmpsfacteur = 1
antimatieretoucanfacteur = 1

cagepricebase = 15
palmierpricebase = 100
foretpricebase = 1100
ilepricebase = 12000
zoopricebase = 130000
continentpricebase = 1400000
planettepricebase = 20000000
systemesolairepricebase = 330000000
galaxiepricebase = 5100000000
troublancpricebase = 75000000000
universpricebase = 1000000000000
espacetmpspricebase = 14000000000000
antimatieretoucanpricebase = 170000000000000

cageprice = (Math.pow(1.15, cage)) * cagepricebase
palmierprice = (Math.pow(1.15, palmier)) * palmierpricebase
foretprice = (Math.pow(1.15, foret)) * foretpricebase
ileprice = (Math.pow(1.15, ile)) * ilepricebase
zooprice = (Math.pow(1.15, zoo)) * zoopricebase
continentprice = (Math.pow(1.15, continent)) * continentpricebase
planetteprice = (Math.pow(1.15, planette)) * planettepricebase
systemesolaireprice = (Math.pow(1.15, systemesolaire)) * systemesolairepricebase
galaxieprice = (Math.pow(1.15, galaxie)) * galaxiepricebase
troublancprice = (Math.pow(1.15, troublanc)) * troublancpricebase
universprice = (Math.pow(1.15, univers)) * universpricebase
espacetmpsprice = (Math.pow(1.15, espacetmps)) * espacetmpspricebase
antimatieretoucanprice = (Math.pow(1.15, antimatieretoucan)) * antimatieretoucanpricebase


console.log(toucan)
///Remover()
prodUpadate()
function prodUpadate() {

    prodcage = 0.1 * cagefacteur
    prodpalmier = 1 * palmierfacteur
    prodforet = 8 * foretfacteur
    prodile = 47 * ilefacteur
    prodzoo = 260 * zoofacteur
    prodcontinent = 1400 * continentfacteur
    prodplanette = 7800 * planettefacteur
    prodsystemesolaire = 44000 * systemesolairefacteur
    prodgalaxie = 260000 * galaxiefacteur
    prodtroublanc = 1600000 * troublancfacteur
    produnivers = 10000000 * universfacteur
    prodespacetmps = 65000000 * espacetmpsfacteur
    prodantimatieretoucan = 430000000 * antimatieretoucanfacteur
}


function nFormatter(num, digits) {
    const lookup = [
        { value: 1, symbol: "" },
        { value: 1e3, symbol: "K" },
        { value: 1e6, symbol: "M" },
        { value: 1e9, symbol: "Mrd" },
        { value: 1e12, symbol: "B" },
        { value: 1e15, symbol: "Brd" },
        { value: 1e18, symbol: "T" }
    ];
    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
    var item = lookup.slice().reverse().find(function (item) {
        return num >= item.value;
    });
    return item ? (num / item.value).toFixed(2).replace(rx, "$1") + item.symbol : "0";
}
$(document).ready(function () {


    $("#clickerupgrade").on("click", function () {
        if (toucan >= clickerupgradeprice) {
            prodclickerupgrade = 1000 * (1 + 100 * clickerupgrade)
            if (playersclickstotal >= prodclickerupgrade) {
                clickerupgrade = clickerupgrade + 1
                console.log("clickerupgrade : " + clickerupgrade)
                toucan = toucan - clickerupgradeprice
                clickerupgradeprice = 50000 * (1 + Math.pow(100, clickerupgrade))
                $("#clickerupgradeprice").html(nFormatter(clickerupgradeprice) + "⠀toucans <br> +1% ⠀ PAR ⠀ click");
                $("#clickerupgradecount").html(nFormatter(clickerupgrade));
                console.log(clickerupgradeprice + "  " + clickerupgrade)
            }

        }
    })





    $("#cage").on("click", function () {
        if (toucan >= cageprice) {
            cage = cage + 1
            console.log("cage : " + cage)
            toucan = toucan - cageprice
            cageprice = (Math.pow(1.15, cage)) * cagepricebase
            $("#cageprice").html(nFormatter(cageprice) + "⠀toucans");
            $("#cagecount").html(nFormatter(cage));
        }
    })

    $("#palmier").on("click", function () {
        if (cage >= 1) {

            if (toucan >= palmierprice) {
                palmier = palmier + 1
                console.log("palmier : " + palmier)
                toucan = toucan - palmierprice
                palmierprice = (Math.pow(1.15, palmier)) * palmierpricebase
                $("#palmierprice").html(nFormatter(palmierprice) + "⠀toucans");
                $("#palmiercount").html(nFormatter(palmier));
            }

        }
    })

    $("#foret").on("click", function () {
        if (palmier >= 1) {

            if (toucan >= foretprice) {
                foret = foret + 1
                console.log("foret : " + foret)
                toucan = toucan - foretprice
                foretprice = (Math.pow(1.15, foret)) * foretpricebase
                $("#foretprice").html(nFormatter(foretprice) + "⠀toucans");
                $("#foretcount").html(nFormatter(foret));
            }

        }
    })

    $("#ile").on("click", function () {
        if (foret >= 1) {


            if (toucan >= ileprice) {
                ile = ile + 1
                console.log("ile : " + ile)
                toucan = toucan - ileprice
                ileprice = (Math.pow(1.15, ile)) * ilepricebase
                $("#ileprice").html(nFormatter(ileprice) + "⠀toucans");
                $("#ilecount").html(nFormatter(ile));
            }


        }
    })

    $("#zoo").on("click", function () {
        if (ile >= 1) {

            if (toucan >= zooprice) {
                zoo = zoo + 1
                console.log("zoo : " + zoo)
                toucan = toucan - zooprice
                zooprice = (Math.pow(1.15, zoo)) * zoopricebase
                $("#zooprice").html(nFormatter(zooprice) + "⠀toucans");
                $("#zoocount").html(nFormatter(zoo));
            }

        }
    })

    $("#continent").on("click", function () {
        if (zoo >= 1) {

            if (toucan >= continentprice) {
                continent = continent + 1
                console.log("continent : " + continent)
                toucan = toucan - continentprice
                continentprice = (Math.pow(1.15, continent)) * continentpricebase
                $("#continentprice").html(nFormatter(continentprice) + "⠀toucans");
                $("#continentcount").html(nFormatter(continent));
            }

        }
    })

    $("#planette").on("click", function () {
        if (continent >= 1) {

            if (toucan >= planetteprice) {
                planette = planette + 1
                console.log("planette : " + planette)
                toucan = toucan - planetteprice
                planetteprice = (Math.pow(1.15, planette)) * planettepricebase
                $("#planetteprice").html(nFormatter(planetteprice) + "⠀toucans");
                $("#planettecount").html(nFormatter(planette));
            }

        }
    })

    $("#systemesolaire").on("click", function () {
        if (planette >= 1) {


            if (toucan >= systemesolaireprice) {
                systemesolaire = systemesolaire + 1
                console.log("systemesolaire : " + systemesolaire)
                toucan = toucan - systemesolaireprice
                systemesolaireprice = (Math.pow(1.15, systemesolaire)) * systemesolairepricebase
                $("#systemesolaireprice").html(nFormatter(systemesolaireprice) + "⠀toucans");
                $("#systemesolairecount").html(nFormatter(systemesolaire));
            }

        }
    })

    $("#galaxie").on("click", function () {
        if (systemesolaire >= 1) {

            if (toucan >= galaxieprice) {
                galaxie = galaxie + 1
                console.log("galaxie : " + galaxie)
                toucan = toucan - galaxieprice
                galaxieprice = (Math.pow(1.15, galaxie)) * galaxiepricebase
                $("#galaxieprice").html(nFormatter(galaxieprice) + "⠀toucans");
                $("#galaxiecount").html(nFormatter(galaxie));
            }

        }
    })

    $("#troublanc").on("click", function () {
        if (galaxie >= 1) {

            if (toucan >= troublancprice) {
                troublanc = troublanc + 1
                console.log("troublanc : " + troublanc)
                toucan = toucan - troublancprice
                troublancprice = (Math.pow(1.15, troublanc)) * troublancpricebase
                $("#troublancprice").html(nFormatter(troublancprice) + "⠀toucans");
                $("#troublanccount").html(nFormatter(troublanc));
            }

        }
    })

    $("#univers").on("click", function () {
        if (troublanc >= 1) {

            if (toucan >= universprice) {
                univers = univers + 1
                console.log("univers : " + univers)
                toucan = toucan - universprice
                universprice = (Math.pow(1.15, univers)) * universpricebase
                $("#universprice").html(nFormatter(universprice) + "⠀toucans");
                $("#universcount").html(nFormatter(univers));
            }


        }

    })

    $("#espacetmps").on("click", function () {
        if (univers >= 1) {

            if (toucan >= espacetmpsprice) {
                espacetmps = espacetmps + 1
                console.log("espacetmps : " + espacetmps)
                toucan = toucan - espacetmpsprice
                espacetmpsprice = (Math.pow(1.15, espacetmps)) * espacetmpspricebase
                $("#espacetmpsprice").html(nFormatter(espacetmpsprice) + "⠀toucans");
                $("#espacetmpscount").html(nFormatter(espacetmps));
            }


        }

    })




    $("#antimatieretoucan").on("click", function () {
        if (espacetmps >= 1) {

            if (toucan >= antimatieretoucanprice) {
                antimatieretoucan = antimatieretoucan + 1
                console.log("antimatieretoucan : " + antimatieretoucan)
                toucan = toucan - antimatieretoucanprice
                antimatieretoucanprice = (Math.pow(1.15, antimatieretoucan)) * antimatieretoucanpricebase
                $("#antimatieretoucanprice").html(nFormatter(antimatieretoucanprice) + "⠀toucans");
                $("#antimatieretoucancount").html(nFormatter(antimatieretoucan));
            }


        }

    })

    if (univers >= 1) {

    }
})


function setCookie(name, value, days) {
    var expires = "";
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        expires = "; expires=" + date.toUTCString();
    }
    const daysToExpire = new Date(2147483647 * 1000).toUTCString();
    document.cookie = name + '=' + value + '; expires=' + daysToExpire;
}
function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}
function eraseCookie(name) {
    document.cookie = name + '=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
$(document).ready(function () {
    setInterval(function () {
        Saver()
        console.log("saved")
    }, 1000);


})
function Saver() {

    setCookie('saved', "yes");


    setCookie('cage', cage);
    setCookie('palmier', palmier);
    setCookie('foret', foret);
    setCookie('ile', ile);
    setCookie('zoo', zoo);
    setCookie('continent', continent);
    setCookie('planette', planette);
    setCookie('systemesolaire', systemesolaire);
    setCookie('galaxie', galaxie);
    setCookie('troublanc', troublanc);
    setCookie('univers', univers);
    setCookie('espacetmps', espacetmps);
    setCookie('antimatieretoucan', antimatieretoucan);

    setCookie('cagelvl', cagelvl);
    setCookie('palmierlvl', palmierlvl);
    setCookie('foretlvl', foretlvl);
    setCookie('ilelvl', ilelvl);
    setCookie('zoolvl', zoolvl);
    setCookie('continentlvl', continentlvl);
    setCookie('planettelvl', planettelvl);
    setCookie('systemesolairelvl', systemesolairelvl);
    setCookie('galaxielvl', galaxielvl);
    setCookie('troublanclvl', troublanclvl);
    setCookie('universlvl', universlvl);
    setCookie('espacetmpslvl', espacetmpslvl);
    setCookie('antimatieretoucanlvl', antimatieretoucanlvl);

    setCookie('cagefacteur', cagefacteur);
    setCookie('palmierfacteur', palmierfacteur);
    setCookie('foretfacteur', foretfacteur);
    setCookie('ilefacteur', ilefacteur);
    setCookie('zoofacteur', zoofacteur);
    setCookie('continentfacteur', continentfacteur);
    setCookie('planettefacteur', planettefacteur);
    setCookie('systemesolairefacteur', systemesolairefacteur);
    setCookie('galaxiefacteur', galaxiefacteur);
    setCookie('troublancfacteur', troublancfacteur);
    setCookie('universfacteur', universfacteur);
    setCookie('espacetmpsfacteur', espacetmpsfacteur);
    setCookie('antimatieretoucanfacteur', antimatieretoucanfacteur);


    setCookie('playersclickstotal', playersclickstotal);
    setCookie('clickerupgrade', clickerupgrade);

    setCookie('toucan', toucan);
}


function Remover() {

    eraseCookie('saved');


    eraseCookie('cage');
    eraseCookie('palmier');
    eraseCookie('foret');
    eraseCookie('ile');
    eraseCookie('zoo');
    eraseCookie('continent');
    eraseCookie('planette');
    eraseCookie('systemesolaire');
    eraseCookie('galaxie');
    eraseCookie('troublanc');
    eraseCookie('univers');
    eraseCookie('espacetmps');
    eraseCookie('antimatieretoucan');


    eraseCookie('cagelvl');
    eraseCookie('palmierlvl');
    eraseCookie('foretlvl');
    eraseCookie('ilelvl');
    eraseCookie('zoolvl');
    eraseCookie('continentlvl');
    eraseCookie('planettelvl');
    eraseCookie('systemesolairelvl');
    eraseCookie('galaxielvl');
    eraseCookie('troublanclvl');
    eraseCookie('universlvl');
    eraseCookie('espacetmpslvl');
    eraseCookie('antimatieretoucanlvl');

    eraseCookie('cagefacteur');
    eraseCookie('palmierfacteur');
    eraseCookie('foretfacteur');
    eraseCookie('ilefacteur');
    eraseCookie('zoofacteur');
    eraseCookie('continentfacteur');
    eraseCookie('planettefacteur');
    eraseCookie('systemesolairefacteur');
    eraseCookie('galaxiefacteur');
    eraseCookie('troublancfacteur');
    eraseCookie('universfacteur');
    eraseCookie('espacetmpsfacteur');
    eraseCookie('antimatieretoucanfacteur');



    eraseCookie('playersclickstotal');
    eraseCookie('clickerupgrade');



    eraseCookie('toucan');
}



function Loader() {
    saved = getCookie('saved');
    if (saved == "yes") {

        if (!parseInt(getCookie('cage'))) {
        } else {
            cage = parseInt(getCookie('cage'));
        }
        if (!parseInt(getCookie('palmier'))) {
        } else {
            palmier = parseInt(getCookie('palmier'));
        }
        if (!parseInt(getCookie('foret'))) {
        } else {
            foret = parseInt(getCookie('foret'));
        }
        if (!parseInt(getCookie('ile'))) {
        } else {
            ile = parseInt(getCookie('ile'))
        }
        if (!parseInt(getCookie('zoo'))) {
        } else {
            zoo = parseInt(getCookie('zoo'))
        }
        if (!parseInt(getCookie('continent'))) {
        } else {
            continent = parseInt(getCookie('continent'))
        }
        if (!parseInt(getCookie('planette'))) {
        } else {
            planette = parseInt(getCookie('planette'))
        }
        if (!parseInt(getCookie('systemesolaire'))) {
        } else {
            systemesolaire = parseInt(getCookie('systemesolaire'))
        }
        if (!parseInt(getCookie('galaxie'))) {
        } else {
            galaxie = parseInt(getCookie('galaxie'))
        }
        if (!parseInt(getCookie('troublanc'))) {
        } else {

            troublanc = parseInt(getCookie('troublanc'))
        }
        if (!parseInt(getCookie('univers'))) {
        } else {
            univers = parseInt(getCookie('univers'))
        }
        if (!parseInt(getCookie('espacetmps'))) {
        } else {
            espacetmps = parseInt(getCookie('espacetmps'))
        }
        if (!parseInt(getCookie('antimatieretoucan'))) {
        } else {
            antimatieretoucan = parseInt(getCookie('antimatieretoucan'))
        }



        if (!parseInt(getCookie('cagelvl'))) {
        } else {
            cagelvl = parseInt(getCookie('cagelvl'))
        }
        if (!parseInt(getCookie('palmierlvl'))) {
        } else {
            palmierlvl = parseInt(getCookie('palmierlvl'))
        }
        if (!parseInt(getCookie('foretlvl'))) {
        } else {
            foretlvl = parseInt(getCookie('foretlvl'))
        }
        if (!parseInt(getCookie('ilelvl'))) {
        } else {
            ilelvl = parseInt(getCookie('ilelvl'))
        }
        if (!parseInt(getCookie('zoolvl'))) {
        } else {
            zoolvl = parseInt(getCookie('zoolvl'))
        }
        if (!parseInt(getCookie('continentlvl'))) {
        } else {
            continentlvl = parseInt(getCookie('continentlvl'))
        }
        if (!parseInt(getCookie('planettelvl'))) {
        } else {
            planettelvl = parseInt(getCookie('planettelvl'))
        }
        if (!parseInt(getCookie('systemesolairelvl'))) {
        } else {
            systemesolairelvl = parseInt(getCookie('systemesolairelvl'))
        }
        if (!parseInt(getCookie('galaxielvl'))) {
        } else {
            galaxielvl = parseInt(getCookie('galaxielvl'))
        }
        if (!parseInt(getCookie('troublanclvl'))) {
        } else {
            troublanclvl = parseInt(getCookie('troublanclvl'))
        }
        if (!parseInt(getCookie('universlvl'))) {
        } else {
            universlvl = parseInt(getCookie('universlvl'))
        }
        if (!parseInt(getCookie('espacetmpslvl'))) {
        } else {
            espacetmpslvl = parseInt(getCookie('espacetmpslvl'))
        }
        if (!parseInt(getCookie('antimatieretoucanlvl'))) {
        } else {
            antimatieretoucanlvl = parseInt(getCookie('antimatieretoucanlvl'))
        }








        if (!parseInt(getCookie('cagefacteur'))) {
        } else {
            cagefacteur = parseInt(getCookie('cagefacteur'))

        }
        if (!parseInt(getCookie('palmierfacteur'))) {
        } else {
            palmierfacteur = parseInt(getCookie('palmierfacteur'))
        }
        if (!parseInt(getCookie('foretfacteur'))) {
        } else {
            foretfacteur = parseInt(getCookie('foretfacteur'))
        }
        if (!parseInt(getCookie('ilefacteur'))) {
        } else {
            ilefacteur = parseInt(getCookie('ilefacteur'))
        }
        if (!parseInt(getCookie('zoofacteur'))) {
        } else {
            zoofacteur = parseInt(getCookie('zoofacteur'))
        }
        if (!parseInt(getCookie('continentfacteur'))) {
        } else {
            continentfacteur = parseInt(getCookie('continentfacteur'))
        }
        if (!parseInt(getCookie('planettefacteur'))) {
        } else {
            planettefacteur = parseInt(getCookie('planettefacteur'))
        }
        if (!parseInt(getCookie('systemesolairefacteur'))) {
        } else {
            systemesolairefacteur = parseInt(getCookie('systemesolairefacteur'))
        }
        if (!parseInt(getCookie('galaxiefacteur'))) {
        } else {
            galaxiefacteur = parseInt(getCookie('galaxiefacteur'))
        }
        if (!parseInt(getCookie('troublancfacteur'))) {
        } else {
            troublancfacteur = parseInt(getCookie('troublancfacteur'))
        }
        if (!parseInt(getCookie('universfacteur'))) {
        } else {
            universfacteur = parseInt(getCookie('universfacteur'))
        }
        if (!parseInt(getCookie('espacetmpsfacteur'))) {
        } else {
            espacetmpsfacteur = parseInt(getCookie('espacetmpsfacteur'))
        }
        if (!parseInt(getCookie('antimatieretoucanfacteur'))) {
        } else {
            antimatieretoucanfacteur = parseInt(getCookie('antimatieretoucanfacteur'))
        }





        if (!parseInt(getCookie('playersclickstotal'))) {
        } else {
            playersclickstotal = parseInt(getCookie('playersclickstotal'))
        }
        if (!parseInt(getCookie('clickerupgrade'))) {
        } else {
            clickerupgrade = parseInt(getCookie('clickerupgrade'))
        }

        prodUpadate()


        toucan = (parseInt(getCookie('toucan')));

    } else {
        console.log("zre")
    }


}
Loader()


cageprice = (Math.pow(1.15, cage)) * cagepricebase
palmierprice = (Math.pow(1.15, palmier)) * palmierpricebase
foretprice = (Math.pow(1.15, foret)) * foretpricebase
ileprice = (Math.pow(1.15, ile)) * ilepricebase
zooprice = (Math.pow(1.15, zoo)) * zoopricebase
continentprice = (Math.pow(1.15, continent)) * continentpricebase
planetteprice = (Math.pow(1.15, planette)) * planettepricebase
systemesolaireprice = (Math.pow(1.15, systemesolaire)) * systemesolairepricebase
galaxieprice = (Math.pow(1.15, galaxie)) * galaxiepricebase
troublancprice = (Math.pow(1.15, troublanc)) * troublancpricebase
universprice = (Math.pow(1.15, univers)) * universpricebase
espacetmpsprice = (Math.pow(1.15, espacetmps)) * espacetmpspricebase
antimatieretoucanprice = (Math.pow(1.15, antimatieretoucan)) * antimatieretoucanpricebase


$(document).ready(function () {
    // $("#cps").html("clicks⠀ par⠀ secondes⠀ :⠀ " + tps);
    $("#playersclickstotal").html("toucans⠀ du⠀ joueur⠀ :⠀ " + nFormatter(playersclickstotal));
    clickerupgradeprice = 50000 * (1 + Math.pow(100, clickerupgrade))
    console.log(clickerupgradeprice + "  " + clickerupgrade)
    $(document).ready(function () {
        $("#clickerupgradeprice").html(nFormatter(clickerupgradeprice) + "⠀toucans <br> +1% ⠀ PAR ⠀ click");
        $("#clickerupgradecount").html(nFormatter(clickerupgrade));
    })
    $(".pixellvl").on({
        mouseenter: function () {
            upgradePriceUpdater()
        },
    });
})











$(document).ready(function () {


    $("#cageprice").html(nFormatter(cageprice) + "⠀toucans");
    $("#cagecount").html(nFormatter(cage));

    $("#palmierprice").html(nFormatter(palmierprice) + "⠀toucans");
    $("#palmiercount").html(nFormatter(palmier));

    $("#foretprice").html(nFormatter(foretprice) + "⠀toucans");
    $("#foretcount").html(nFormatter(foret));

    $("#ileprice").html(nFormatter(ileprice) + "⠀toucans");
    $("#ilecount").html(nFormatter(ile));

    $("#zooprice").html(nFormatter(zooprice) + "⠀toucans");
    $("#zoocount").html(nFormatter(zoo));

    $("#continentprice").html(nFormatter(continentprice) + "⠀toucans");
    $("#continentcount").html(nFormatter(continent));

    $("#planetteprice").html(nFormatter(planetteprice) + "⠀toucans");
    $("#planettecount").html(nFormatter(planette));

    $("#systemesolaireprice").html(nFormatter(systemesolaireprice) + "⠀toucans");
    $("#systemesolairecount").html(nFormatter(systemesolaire));

    $("#galaxieprice").html(nFormatter(galaxieprice) + "⠀toucans");
    $("#galaxiecount").html(nFormatter(galaxie));

    $("#troublancprice").html(nFormatter(troublancprice) + "⠀toucans");
    $("#troublanccount").html(nFormatter(troublanc));

    $("#universprice").html(nFormatter(universprice) + "⠀toucans");
    $("#universcount").html(nFormatter(univers));

    $("#espacetmpsprice").html(nFormatter(espacetmpsprice) + "⠀toucans");
    $("#espacetmpscount").html(nFormatter(espacetmps));

    $("#antimatieretoucanprice").html(nFormatter(antimatieretoucanprice) + "⠀toucans");
    $("#antimatieretoucancount").html(nFormatter(antimatieretoucan));









    $('#cagehover').click(function () {
        console.log('test')
        $("#statdisplay").show();
        $("#subjectname").html("CAGE");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + cage);
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + Math.round((prodcage * cage) * 100) / 100);
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + prodcage);
        hoveringstats = 1
    });
    $('#palmierhover').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("palmier");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + palmier);
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + Math.round((prodpalmier * palmier) * 100) / 100);
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + prodpalmier);
        hoveringstats = 1
    });
    $('#forethover').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("foret");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + foret);
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + Math.round((prodforet * foret) * 100) / 100);
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + prodforet);
        hoveringstats = 1
    });
    $('#ilehover').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("ile");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(ile));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodile * ile) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodile));
        hoveringstats = 1
    });
    $('#zoohover').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("zoo");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(zoo));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodzoo * zoo) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodzoo));
        hoveringstats = 1
    });
    $('#continenthover').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("continent");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(continent));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodcontinent * continent) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodcontinent));
        hoveringstats = 1
    });
    $('#planettehover').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("planette");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(planette));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodplanette * planette) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodplanette));
        hoveringstats = 1
    });
    $('#systemesolairehover').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("systeme solaire");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(systemesolaire));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodsystemesolaire * systemesolaire) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodsystemesolaire));
        hoveringstats = 1
    });
    $('#galaxiehover').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("galaxie");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(galaxie));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodgalaxie * galaxie) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodgalaxie));
        hoveringstats = 1
    });

    $('#troublanchover').click(function () {

        $("#statdisplay").show();
        $("#subjectname").html("trou<br>blanc");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(troublanc));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodtroublanc * troublanc) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodtroublanc));
        hoveringstats = 1
    });
    $('#univershover').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("univers");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(univers));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((produnivers * univers) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(produnivers));
        hoveringstats = 1
    });
    $('#espacetmpshover').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("espace temps");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(espacetmps));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodespacetmps * espacetmps) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodespacetmps));
        hoveringstats = 1
    });
    $('#antimatieretoucanhover').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("Toucan d'anti matiere");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(antimatieretoucan));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodantimatieretoucan * antimatieretoucan) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodantimatieretoucan));
        hoveringstats = 1
    });
















    $('.upcage').click(function () {
        console.log('test')
        $("#statdisplay").show();
        $("#subjectname").html("CAGE");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + cage);
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + Math.round((prodcage * cage) * 100) / 100);
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + prodcage);
        hoveringstats = 1
    });
    $('.uppalmier').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("palmier");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + palmier);
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + Math.round((prodpalmier * palmier) * 100) / 100);
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + prodpalmier);
        hoveringstats = 1
    });
    $('.upforet').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("foret");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + foret);
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + Math.round((prodforet * foret) * 100) / 100);
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + prodforet);
        hoveringstats = 1
    });
    $('.upile').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("ile");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(ile));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodile * ile) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodile));
        hoveringstats = 1
    });
    $('.upzoo').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("zoo");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(zoo));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodzoo * zoo) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodzoo));
        hoveringstats = 1
    });
    $('.upcontinent').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("continent");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(continent));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodcontinent * continent) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodcontinent));
        hoveringstats = 1
    });
    $('.upplanette').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("planette");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(planette));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodplanette * planette) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodplanette));
        hoveringstats = 1
    });
    $('.upsystemesolaire').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("systeme solaire");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(systemesolaire));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodsystemesolaire * systemesolaire) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodsystemesolaire));
        hoveringstats = 1
    });
    $('.upgalaxie').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("galaxie");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(galaxie));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodgalaxie * galaxie) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodgalaxie));
        hoveringstats = 1
    });

    $('.uptroublanc').click(function () {

        $("#statdisplay").show();
        $("#subjectname").html("trou<br>blanc");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(troublanc));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodtroublanc * troublanc) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodtroublanc));
        hoveringstats = 1
    });
    $('.upunivers').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("univers");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(univers));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((produnivers * univers) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(produnivers));
        hoveringstats = 1
    });
    $('.upespacetmps').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("espace temps");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(espacetmps));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodespacetmps * espacetmps) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodespacetmps));
        hoveringstats = 1
    });
    $('.upantimatieretoucan').click(function () {
        $("#statdisplay").show();
        $("#subjectname").html("Toucan d'anti matiere");
        $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(antimatieretoucan));
        $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodantimatieretoucan * antimatieretoucan) * 100) / 100));
        $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodantimatieretoucan));
        hoveringstats = 1
    });

})


















toucanavant = 0
$(document).ready(function () {
    $('#palmierprice').css("font-family", "ching");
    $('#palmiertext').css("font-family", "ching");

    $('#foretprice').css("font-family", "ching");
    $('#forettext').css("font-family", "ching");

    $('#ileprice').css("font-family", "ching");
    $('#iletext').css("font-family", "ching");

    $('#zooprice').css("font-family", "ching");
    $('#zootext').css("font-family", "ching");

    $('#continentprice').css("font-family", "ching");
    $('#continenttext').css("font-family", "ching");

    $('#planetteprice').css("font-family", "ching");
    $('#planettetext').css("font-family", "ching");

    $('#systemesolaireprice').css("font-family", "ching");
    $('#systemesolairetext').css("font-family", "ching");

    $('#galaxieprice').css("font-family", "ching");
    $('#galaxietext').css("font-family", "ching");

    $('#troublancprice').css("font-family", "ching");
    $('#troublanctext').css("font-family", "ching");

    $('#universprice').css("font-family", "ching");
    $('#universtext').css("font-family", "ching");

    $('#espacetmpsprice').css("font-family", "ching");
    $('#espacetmpstext').css("font-family", "ching");

    $('#antimatieretoucanprice').css("font-family", "ching");
    $('#antimatieretoucantext').css("font-family", "ching");





    $('.uppalmier').hide()
    $('.palmieracheter').hide()

    $('.upforet').hide()
    $('.foretacheter').hide()

    $('.upile').hide()
    $('.ileacheter').hide()

    $('.upzoo').hide()
    $('.zooacheter').hide()

    $('.upcontinent').hide()
    $('.continentacheter').hide()

    $('.upplanette').hide()
    $('.planetteacheter').hide()

    $('.upsystemesolaire').hide()
    $('.systemesolaireacheter').hide()

    $('.upgalaxie').hide()
    $('.galaxieacheter').hide()

    $('.uptroublanc').hide()
    $('.troublancacheter').hide()

    $('.upunivers').hide()
    $('.universacheter').hide()

    $('.upespacetmps').hide()
    $('.espacetmpsacheter').hide()

    $('.upantimatieretoucan').hide()
    $('.antimatieretoucanacheter').hide()





    $('#clictoucan').click(function () {

        musicStrat()
        $("#toucan").attr("src", "../images/toucancontent.png");
        toucan = toucan + 1 + (1 * 0.01 * clickerupgrade * tps)

        newclick = 1 + (1 * 0.01 * clickerupgrade * tps)
        console.log(newclick)
        playersclickstotal = playersclickstotal + newclick

        //////////////////////////////////////////////////////////////////////////////////////////////////        //////////////////////////////////////////////////////////////////////////////////////////////////        //////////////////////////////////////////////////////////////////////////////////////////////////        //////////////////////////////////////////////////////////////////////////////////////////////////
        setTimeout(() => {
            $("#toucan").attr("src", "../images/toucannormal.png");
        }, 250);
    })
    ToucanUpdater()
    StatsUpdater()
    function ToucanUpdater() {
        setInterval(function () {
            function nFormatter(num, digits) {
                numarr = ~~num
                if (numarr.toString().length <= 6) {
                    const lookup = [
                        { value: 1, symbol: "" },
                        { value: 1e3, symbol: "k" },
                        { value: 1e6, symbol: "M" },
                        { value: 1e9, symbol: "Mrd" },
                        { value: 1e12, symbol: "B" },
                        { value: 1e15, symbol: "Brd" },
                        { value: 1e18, symbol: "T" }
                    ];
                    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
                    var item = lookup.slice().reverse().find(function (item) {
                        return num >= item.value;
                    });
                    return item ? (num / item.value).toFixed(2).replace(rx, "$1") + item.symbol : "0";
                } else {
                    const lookup = [
                        { value: 1, symbol: "" },
                        { value: 1e3, symbol: "k" },
                        { value: 1e6, symbol: "M" },
                        { value: 1e9, symbol: "Mrd" },
                        { value: 1e12, symbol: "B" },
                        { value: 1e15, symbol: "Brd" },
                        { value: 1e18, symbol: "T" }
                    ];
                    const rx = /\.0+$|(\.[0-9]*[1-9])0+$/;
                    var item = lookup.slice().reverse().find(function (item) {
                        return num >= item.value;
                    });
                    return item ? (num / item.value).toFixed(2).replace(rx, "$1") + item.symbol : "0";
                }

            }


            $("#toucans").html(nFormatter(toucan));
            toucan = toucan + ((prodcage / 20) * cage)
            toucan = toucan + ((prodpalmier / 20) * palmier)
            toucan = toucan + ((prodforet / 20) * foret)
            toucan = toucan + ((prodile / 20) * ile)
            toucan = toucan + ((prodzoo / 20) * zoo)
            toucan = toucan + ((prodcontinent / 20) * continent)
            toucan = toucan + ((prodplanette / 20) * planette)
            toucan = toucan + ((prodsystemesolaire / 20) * systemesolaire)
            toucan = toucan + ((prodgalaxie / 20) * galaxie)
            toucan = toucan + ((prodtroublanc / 20) * troublanc)
            toucan = toucan + ((produnivers / 20) * univers)
            toucan = toucan + ((prodespacetmps / 20) * espacetmps)
            toucan = toucan + ((prodantimatieretoucan / 20) * antimatieretoucan)
            BuildingsUnlocker()
            upgradePriceUpdater()
        }, 50);
    }

    function BuildingsUnlocker() {
        stage = 0
        $(document).ready(function () {
            if (stage == 0) {
                if (cage >= 1) {
                    stage = 1
                    $('#palmierprice').css("font-family", "erzer");
                    $('#palmiertext').css("font-family", "erzer");
                    $("#palmierprice").html(nFormatter(palmierprice) + "⠀toucans");

                    $('.palmieracheter').show()
                    $(function () {
                        $('#cagehover').mouseenter(function () {
                            //       setInterval(function () {
                            $("#statdisplay").show();
                            $("#subjectname").html("CAGE");
                            $("#subjectnumber").html("Nombre⠀ :⠀ " + cage);
                            $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + Math.round((prodcage * cage) * 100) / 100);
                            $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + prodcage);
                            hoveringstats = 1
                            //         }, 100);

                        });

                        $('#cagehover').mouseleave(function () {

                            hoveringstats = 0
                        });
                    });
                }
            }


            if (stage == 1) {
                if (palmier >= 1) {
                    stage = 2
                    $('#foretprice').css("font-family", "erzer");
                    $('#forettext').css("font-family", "erzer");
                    $("#foretprice").html(nFormatter(foretprice) + "⠀toucans");

                    $('.foretacheter').show()
                    $(function () {
                        $('#palmierhover').mouseenter(function () {
                            $("#statdisplay").show();
                            $("#subjectname").html("palmier");
                            $("#subjectnumber").html("Nombre⠀ :⠀ " + palmier);
                            $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + Math.round((prodpalmier * palmier) * 100) / 100);
                            $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + prodpalmier);
                            hoveringstats = 1
                        });
                        $('#palmierhover').mouseleave(function () {

                            hoveringstats = 0
                        });
                    });
                }

            }


            if (stage == 2) {
                if (foret >= 1) {
                    stage = 3
                    $('#ileprice').css("font-family", "erzer");
                    $('#iletext').css("font-family", "erzer");
                    $("#ileprice").html(nFormatter(ileprice) + "⠀toucans");

                    $('.ileacheter').show()
                    $(function () {
                        $('#forethover').mouseenter(function () {
                            $("#statdisplay").show();
                            $("#subjectname").html("foret");
                            $("#subjectnumber").html("Nombre⠀ :⠀ " + foret);
                            $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + Math.round((prodforet * foret) * 100) / 100);
                            $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + prodforet);
                            hoveringstats = 1
                        });
                        $('#forethover').mouseleave(function () {

                            hoveringstats = 0
                        });
                    });
                }

            }

            if (stage == 3) {
                if (ile >= 1) {
                    stage = 4
                    $('#zooprice').css("font-family", "erzer");
                    $('#zootext').css("font-family", "erzer");
                    $("#zooprice").html(nFormatter(zooprice) + "⠀toucans");

                    $('.zooacheter').show()
                    $(function () {
                        $('#ilehover').mouseenter(function () {
                            $("#statdisplay").show();
                            $("#subjectname").html("ile");
                            $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(ile));
                            $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodile * ile) * 100) / 100));
                            $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodile));
                            hoveringstats = 1
                        });
                        $('#ilehover').mouseleave(function () {

                            hoveringstats = 0
                        });
                    });
                }
            }


            if (stage == 4) {
                if (zoo >= 1) {
                    stage = 5
                    $('#continentprice').css("font-family", "erzer");
                    $('#continenttext').css("font-family", "erzer");
                    $("#continentprice").html(nFormatter(continentprice) + "⠀toucans");

                    $('.continentacheter').show()
                    $(function () {
                        $('#zoohover').mouseenter(function () {
                            $("#statdisplay").show();
                            $("#subjectname").html("zoo");
                            $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(zoo));
                            $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodzoo * zoo) * 100) / 100));
                            $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodzoo));
                            hoveringstats = 1
                        });
                        $('#zoohover').mouseleave(function () {

                            hoveringstats = 0
                        });
                    });
                }
            }




            if (stage == 5) {
                if (continent >= 1) {
                    stage = 6
                    $('#planetteprice').css("font-family", "erzer");
                    $('#planettetext').css("font-family", "erzer");
                    $("#planetteprice").html(nFormatter(planetteprice) + "⠀toucans");

                    $('.planetteacheter').show()
                    $(function () {
                        $('#continenthover').mouseenter(function () {
                            $("#statdisplay").show();
                            $("#subjectname").html("continent");
                            $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(continent));
                            $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodcontinent * continent) * 100) / 100));
                            $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodcontinent));
                            hoveringstats = 1
                        });
                        $('#continenthover').mouseleave(function () {

                            hoveringstats = 0
                        });
                    });
                }
            }


            if (stage == 6) {
                if (planette >= 1) {
                    stage = 7
                    $('#systemesolaireprice').css("font-family", "erzer");
                    $('#systemesolairetext').css("font-family", "erzer");
                    $("#systemesolaireprice").html(nFormatter(systemesolaireprice) + "⠀toucans");

                    $('.systemesolaireacheter').show()
                    $(function () {
                        $('#planettehover').mouseenter(function () {
                            $("#statdisplay").show();
                            $("#subjectname").html("planette");
                            $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(planette));
                            $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodplanette * planette) * 100) / 100));
                            $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodplanette));
                            hoveringstats = 1
                        });
                        $('#planettehover').mouseleave(function () {

                            hoveringstats = 0
                        });
                    });

                }
            }


            if (stage == 7) {
                if (systemesolaire >= 1) {
                    stage = 8
                    $('#galaxieprice').css("font-family", "erzer");
                    $('#galaxietext').css("font-family", "erzer");
                    $("#galaxieprice").html(nFormatter(galaxieprice) + "⠀toucans");

                    $('.galaxieacheter').show()

                    $(function () {
                        $('#systemesolairehover').mouseenter(function () {
                            $("#statdisplay").show();
                            $("#subjectname").html("systeme solaire");
                            $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(systemesolaire));
                            $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodsystemesolaire * systemesolaire) * 100) / 100));
                            $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodsystemesolaire));
                            hoveringstats = 1
                        });
                        $('#systemesolairehover').mouseleave(function () {

                            hoveringstats = 0
                        });
                    });
                }
            }



            if (stage == 8) {
                if (galaxie >= 1) {
                    stage = 9
                    $('#troublancprice').css("font-family", "erzer");
                    $('#troublanctext').css("font-family", "erzer");
                    $("#troublancprice").html(nFormatter(troublancprice) + "⠀toucans");

                    $('.troublancacheter').show()

                    $(function () {
                        $('#galaxiehover').mouseenter(function () {
                            $("#statdisplay").show();
                            $("#subjectname").html("galaxie");
                            $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(galaxie));
                            $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodgalaxie * galaxie) * 100) / 100));
                            $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodgalaxie));
                            hoveringstats = 1
                        });
                        $('#galaxiehover').mouseleave(function () {

                            hoveringstats = 0
                        });
                    });
                }
            }


            if (stage == 9) {
                if (troublanc >= 1) {
                    stage = 10
                    $('#universprice').css("font-family", "erzer");
                    $('#universtext').css("font-family", "erzer");
                    $("#universprice").html(nFormatter(universprice) + "⠀toucans");

                    $('.universacheter').show()
                    $(function () {
                        $('#troublanchover').mouseenter(function () {

                            $("#statdisplay").show();
                            $("#subjectname").html("trou<br>blanc");
                            $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(troublanc));
                            $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodtroublanc * troublanc) * 100) / 100));
                            $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodtroublanc));
                            hoveringstats = 1
                        });
                        $('#troublanchover').mouseleave(function () {

                            hoveringstats = 0
                        });
                    });

                }
            }


            if (stage == 10) {
                if (univers >= 1) {
                    stage = 11
                    $('#espacetmpsprice').css("font-family", "erzer");
                    $('#espacetmpstext').css("font-family", "erzer");
                    $("#espacetmpsprice").html(nFormatter(espacetmpsprice) + "⠀toucans");

                    $('.espacetmpsacheter').show()
                    $(function () {
                        $('#univershover').mouseenter(function () {
                            $("#statdisplay").show();
                            $("#subjectname").html("univers");
                            $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(univers));
                            $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((produnivers * univers) * 100) / 100));
                            $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(produnivers));
                            hoveringstats = 1
                        });
                        $('#univershover').mouseleave(function () {

                            hoveringstats = 0
                        });
                    });
                }
            }


            console.log(stage + "rzegiojeruigeriogherh")


            if (stage == 11) {
                if (espacetmps >= 1) {
                    stage = 12
                    $('#antimatieretoucanprice').css("font-family", "erzer");
                    $('#antimatieretoucantext').css("font-family", "erzer");
                    $("#antimatieretoucanprice").html(nFormatter(antimatieretoucanprice) + "⠀toucans");

                    $('.antimatieretoucanacheter').show()
                    $(function () {
                        $('#espacetmpshover').mouseenter(function () {
                            $("#statdisplay").show();
                            $("#subjectname").html("espace temps");
                            $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(espacetmps));
                            $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodespacetmps * espacetmps) * 100) / 100));
                            $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodespacetmps));
                            hoveringstats = 1
                        });
                        $('#espacetmpshover').mouseleave(function () {

                            hoveringstats = 0
                        });
                    });
                }
            }




            if (stage == 12) {
                if (antimatieretoucan >= 1) {
                    stage = 13
                    $(function () {
                        $('#antimatieretoucanhover').mouseenter(function () {
                            $("#statdisplay").show();
                            $("#subjectname").html("Toucan d'anti matiere");
                            $("#subjectnumber").html("Nombre⠀ :⠀ " + nFormatter(antimatieretoucan));
                            $("#subjectprodtotal").html("Par⠀ Secondes⠀ :⠀ " + nFormatter(Math.round((prodantimatieretoucan * antimatieretoucan) * 100) / 100));
                            $("#subjectprod").html("Par⠀ Usines⠀ :⠀ " + nFormatter(prodantimatieretoucan));
                            hoveringstats = 1
                        });
                        $('#antimatieretoucanhover').mouseleave(function () {

                            hoveringstats = 0
                        });
                    });
                }
            }
        })

        /*    jQuery(function ($) {
    
    
              $(document).mousemove(function (e) {
    
                try {
                  if (hoveringstats == 1) {
                    $("#statdisplay").css({ left: (e.pageX - 300) + "px", top: (e.pageY - 90) + "px" });
                  }
                } catch {
    
                }
    
              });
            }); 
    
            $(function () {
              var moveLeft = 20;
              var moveDown = 10;
    
              $(document).mousemove(function (e) {
                $("#statdisplay").css('top', e.pageY + moveDown).css('left', e.pageX + moveLeft);
              });
    
            });*/


    }

    function StatsUpdater() {
        setInterval(function () {
            tps = prodcage * cage * cagefacteur
                + prodpalmier * palmier * palmierfacteur
                + prodforet * foret * foretfacteur
                + prodile * ile * ilefacteur
                + prodzoo * zoo * zoofacteur
                + prodcontinent * continent * continentfacteur
                + prodplanette * planette * planettefacteur
                + prodsystemesolaire * systemesolaire * systemesolairefacteur
                + prodgalaxie * galaxie * galaxiefacteur
                + prodtroublanc * troublanc * troublancfacteur
                + produnivers * univers * universfacteur
                + prodespacetmps * espacetmps * espacetmpsfacteur
                + prodantimatieretoucan * antimatieretoucan * antimatieretoucanfacteur


            $("#cps").html("toucans⠀ par⠀ secondes⠀ :⠀ " + tps);
            $("#playersclickstotal").html("toucans⠀ du⠀ joueur⠀ :⠀ " + nFormatter(playersclickstotal));
            prodclickerupgrade = 1000 * (1 + 100 * clickerupgrade)
            if (playersclickstotal >= prodclickerupgrade) {
                $("#clickerupgradehover").show()
            } else {
                $("#clickerupgradehover").hide()
            }


        }, 500);
    }

})






$('.upcage').hide()
$('.uppalmier').hide()
$('.upforet').hide()
$('.upile').hide()
$('.upzoo').hide()
$('.upcontinent').hide()
$('.upplanette').hide()
$('.upsystemesolaire').hide()
$('.upgalaxie').hide()
$('.uptroublanc').hide()
$('.upunivers').hide()
$('.upespacetmps').hide()
$('.upantimatieretoucan').hide()



$(document).ready(function () {
    $(".pixellvl").on({
        mouseenter: function () {
            upgradePriceUpdater()
        },
    });
})

//1 ; 5 ; 25; 50; 100; 150; 200; 250; 300; 350; 400
function upgradePriceUpdater() {
    if (cagelvl == 1) {
        cageupgradeprice = 100
    } if (cagelvl == 2) {
        cageupgradeprice = 500
    } if (cagelvl == 3) {
        cageupgradeprice = 10000
    } if (cagelvl == 4) {
        cageupgradeprice = 100000
    } if (cagelvl == 5) {
        cageupgradeprice = 10000000
    } if (cagelvl == 6) {
        cageupgradeprice = 100000000
    }
    $("#cageupgradeprice").html(nFormatter(cageupgradeprice) + "⠀ TOUCANS <br> PRODUCTION ⠀ DOUBLE");


    if (palmierlvl == 1) {
        palmierupgradeprice = 1000
    } if (palmierlvl == 2) {
        palmierupgradeprice = 5000
    } if (palmierlvl == 3) {
        palmierupgradeprice = 50000
    } if (palmierlvl == 4) {
        palmierupgradeprice = 5000000
    } if (palmierlvl == 5) {
        palmierupgradeprice = 500000000
    } if (palmierlvl == 6) {
        palmierupgradeprice = 50000000000
    }
    $("#palmierupgradeprice").html(nFormatter(palmierupgradeprice) + "⠀ TOUCANS <br> PRODUCTION ⠀ DOUBLE");


    if (foretlvl == 1) {
        foretupgradeprice = 11000
    } if (foretlvl == 2) {
        foretupgradeprice = 55000
    } if (foretlvl == 3) {
        foretupgradeprice = 550000
    } if (foretlvl == 4) {
        foretupgradeprice = 55000000
    } if (foretlvl == 5) {
        foretupgradeprice = 5500000000
    } if (foretlvl == 6) {
        foretupgradeprice = 550000000000
    }
    $("#foretupgradeprice").html(nFormatter(foretupgradeprice) + "⠀ TOUCANS <br> PRODUCTION ⠀ DOUBLE");


    if (ilelvl == 1) {
        ileupgradeprice = 120000
    } if (ilelvl == 2) {
        ileupgradeprice = 600000
    } if (ilelvl == 3) {
        ileupgradeprice = 6000000
    } if (ilelvl == 4) {
        ileupgradeprice = 600000000
    } if (ilelvl == 5) {
        ileupgradeprice = 60000000000
    } if (ilelvl == 6) {
        ileupgradeprice = 6000000000000
    }
    $("#ileupgradeprice").html(nFormatter(ileupgradeprice) + "⠀ TOUCANS <br> PRODUCTION ⠀ DOUBLE");


    if (zoolvl == 1) {
        zooupgradeprice = 1300000
    } if (zoolvl == 2) {
        zooupgradeprice = 6500000
    } if (zoolvl == 3) {
        zooupgradeprice = 65000000
    } if (zoolvl == 4) {
        zooupgradeprice = 6500000000
    } if (zoolvl == 5) {
        zooupgradeprice = 650000000000
    } if (zoolvl == 6) {
        zooupgradeprice = 65000000000000
    }
    $("#zooupgradeprice").html(nFormatter(zooupgradeprice) + "⠀ TOUCANS <br> PRODUCTION ⠀ DOUBLE");


    if (continentlvl == 1) {
        continentupgradeprice = 14000000
    } if (continentlvl == 2) {
        continentupgradeprice = 70000000
    } if (continentlvl == 3) {
        continentupgradeprice = 700000000
    } if (continentlvl == 4) {
        continentupgradeprice = 70000000000
    } if (continentlvl == 5) {
        continentupgradeprice = 7000000000000
    } if (continentlvl == 6) {
        continentupgradeprice = 700000000000000
    }
    $("#continentupgradeprice").html(nFormatter(continentupgradeprice) + "⠀ TOUCANS <br> PRODUCTION ⠀ DOUBLE");


    if (planettelvl == 1) {
        planetteupgradeprice = 200000000
    } if (planettelvl == 2) {
        planetteupgradeprice = 1000000000
    } if (planettelvl == 3) {
        planetteupgradeprice = 10000000000
    } if (planettelvl == 4) {
        planetteupgradeprice = 1000000000000
    } if (planettelvl == 5) {
        planetteupgradeprice = 100000000000000
    } if (planettelvl == 6) {
        planetteupgradeprice = 10000000000000000
    }
    $("#planetteupgradeprice").html(nFormatter(planetteupgradeprice) + "⠀ TOUCANS <br> PRODUCTION ⠀ DOUBLE");


    if (systemesolairelvl == 1) {
        systemesolaireupgradeprice = 3300000000
    } if (systemesolairelvl == 2) {
        systemesolaireupgradeprice = 16500000000
    } if (systemesolairelvl == 3) {
        systemesolaireupgradeprice = 165000000000
    } if (systemesolairelvl == 4) {
        systemesolaireupgradeprice = 16500000000000
    } if (systemesolairelvl == 5) {
        systemesolaireupgradeprice = 1650000000000000
    } if (systemesolairelvl == 6) {
        systemesolaireupgradeprice = 165000000000000000
    }
    $("#systemesolaireupgradeprice").html(nFormatter(systemesolaireupgradeprice) + "⠀ TOUCANS <br> PRODUCTION ⠀ DOUBLE");


    if (galaxielvl == 1) {
        galaxieupgradeprice = 51000000000
    } if (galaxielvl == 2) {
        galaxieupgradeprice = 255000000000
    } if (galaxielvl == 3) {
        galaxieupgradeprice = 2550000000000
    } if (galaxielvl == 4) {
        galaxieupgradeprice = 255000000000000
    } if (galaxielvl == 5) {
        galaxieupgradeprice = 25500000000000000
    } if (galaxielvl == 6) {
        galaxieupgradeprice = 2550000000000000000
    }
    $("#galaxieupgradeprice").html(nFormatter(galaxieupgradeprice) + "⠀ TOUCANS <br> PRODUCTION ⠀ DOUBLE");


    if (troublanclvl == 1) {
        troublancupgradeprice = 750000000000
    } if (troublanclvl == 2) {
        troublancupgradeprice = 3750000000000
    } if (troublanclvl == 3) {
        troublancupgradeprice = 37500000000000
    } if (troublanclvl == 4) {
        troublancupgradeprice = 3750000000000000
    } if (troublanclvl == 5) {
        troublancupgradeprice = 375000000000000000
    } if (troublanclvl == 6) {
        troublancupgradeprice = 37500000000000000000
    }
    $("#troublancupgradeprice").html(nFormatter(troublancupgradeprice) + "⠀ TOUCANS <br> PRODUCTION ⠀ DOUBLE");


    if (universlvl == 1) {
        universupgradeprice = 10000000000000
    } if (universlvl == 2) {
        universupgradeprice = 50000000000000
    } if (universlvl == 3) {
        universupgradeprice = 500000000000000
    } if (universlvl == 4) {
        universupgradeprice = 50000000000000000
    } if (universlvl == 5) {
        universupgradeprice = 5000000000000000000
    } if (universlvl == 6) {
        universupgradeprice = 500000000000000000000
    }
    $("#universupgradeprice").html(nFormatter(universupgradeprice) + "⠀ TOUCANS <br> PRODUCTION ⠀ DOUBLE");


    if (espacetmpslvl == 1) {
        espacetmpsupgradeprice = 140000000000000
    } if (espacetmpslvl == 2) {
        espacetmpsupgradeprice = 700000000000000
    } if (espacetmpslvl == 3) {
        espacetmpsupgradeprice = 7000000000000000
    } if (espacetmpslvl == 4) {
        espacetmpsupgradeprice = 700000000000000000
    } if (espacetmpslvl == 5) {
        espacetmpsupgradeprice = 70000000000000000000
    } if (espacetmpslvl == 6) {
        espacetmpsupgradeprice = 7000000000000000000000
    }
    $("#espacetmpsupgradeprice").html(nFormatter(espacetmpsupgradeprice) + "⠀ TOUCANS <br> PRODUCTION ⠀ DOUBLE");



    if (antimatieretoucanlvl == 1) {
        antimatieretoucanupgradeprice = 1700000000000000
    } if (antimatieretoucanlvl == 2) {
        antimatieretoucanupgradeprice = 8500000000000000
    } if (antimatieretoucanlvl == 3) {
        antimatieretoucanupgradeprice = 85000000000000000
    } if (antimatieretoucanlvl == 4) {
        antimatieretoucanupgradeprice = 8500000000000000000
    } if (antimatieretoucanlvl == 5) {
        antimatieretoucanupgradeprice = 850000000000000000000
    } if (antimatieretoucanlvl == 6) {
        antimatieretoucanupgradeprice = 85000000000000000000000
    }
    $("#antimatieretoucanupgradeprice").html(nFormatter(antimatieretoucanupgradeprice) + "⠀ TOUCANS <br> PRODUCTION ⠀ DOUBLE");

}



$(document).ready(function () {
    $(".cageacheter").on("click", function (clickupdat) {
        clickupdat.preventDefault();
        cagelvlchecker()
        console.log(cagelvl)
    })
    cagelvlchecker()
    function cagelvlchecker() {
        console.log("TERUIHGEUITHREUIHGERIUGHERIOUHGO")
        if (cage >= 1 && cagelvl == 1) {
            $('.upcage').show()
            $(".upcage").on("click", function (clickupdat) {

                if (cage >= 1 && cagelvl == 1) {
                    console.log("1231232312")
                    clickupdat.preventDefault();
                    cageupdater = 2
                    cageLvlUpdater()
                }
            })
        } else if (cage >= 5 && cagelvl == 2) {
            $('.upcage').show()
            $(".upcage").on("click", function (clickupdat) {
                if (cage >= 5 && cagelvl == 2) {
                    console.log("789978978789789")
                    clickupdat.preventDefault();
                    cageupdater = 3
                    cageLvlUpdater()
                }
            })
        } else if (cage >= 25 && cagelvl == 3) {

            $('.upcage').show()
            $(".upcage").on("click", function (clickupdat) {
                if (cage >= 25 && cagelvl == 3) {
                    clickupdat.preventDefault();
                    cageupdater = 4
                    cageLvlUpdater()
                }
            })
        } else if (cage >= 50 && cagelvl == 4) {
            $('.upcage').show()
            $(".upcage").on("click", function (clickupdat) {
                if (cage >= 50 && cagelvl == 4) {
                    clickupdat.preventDefault();
                    cageupdater = 5
                    cageLvlUpdater()
                }
            })
        } else if (cage >= 100 && cagelvl == 5) {
            $('.upcage').show()
            $(".upcage").on("click", function (clickupdat) {
                if (cage >= 100 && cagelvl == 5) {
                    clickupdat.preventDefault();
                    cageupdater = 6
                    cageLvlUpdater()
                }
            })
        } else {
            $('.upcage').hide()
        }
    }

    function cageLvlUpdater() {
        console.log("fff3" + cageupgradeprice)
        upgradePriceUpdater()
        if (cageupgradeprice < toucan) {
            console.log("fff4")
            console.log("acheté pour : " + cageupgradeprice)
            toucan = toucan - cageupgradeprice
            cagefacteur = cagefacteur * 2
            cagelvl = cageupdater
            console.log("facteur cage : " + cagefacteur)
            $('.upcage').hide()
            setTimeout(() => { cagelvlchecker() }, 1000);

            prodUpadate()
        }
    }
})












$(document).ready(function () {
    $(".palmieracheter").on("click", function (clickupdat) {
        clickupdat.preventDefault();
        palmierlvlchecker()
        console.log(palmierlvl)
    })
    palmierlvlchecker()
    function palmierlvlchecker() {


        if (palmier >= 1 && palmierlvl == 1) {
            console.log("showed1")
            $('.uppalmier').show()
            $(".uppalmier").on("click", function (clickupdat) {
                if (palmier >= 1 && palmierlvl == 1) {
                    clickupdat.preventDefault();
                    palmierupdater = 2
                    palmierLvlUpdater()
                }
            })
        } else if (palmier >= 5 && palmierlvl == 2) {
            console.log("showed2")
            $('.uppalmier').show()
            $(".uppalmier").on("click", function (clickupdat) {
                if (palmier >= 5 && palmierlvl == 2) {
                    clickupdat.preventDefault();
                    palmierupdater = 3
                    palmierLvlUpdater()
                }
            })
        } else if (palmier >= 25 && palmierlvl == 3) {

            $('.uppalmier').show()
            $(".uppalmier").on("click", function (clickupdat) {
                if (palmier >= 25 && palmierlvl == 3) {
                    clickupdat.preventDefault();
                    palmierupdater = 4
                    palmierLvlUpdater()
                }
            })
        } else if (palmier >= 50 && palmierlvl == 4) {
            $('.uppalmier').show()
            $(".uppalmier").on("click", function (clickupdat) {
                if (palmier >= 50 && palmierlvl == 4) {
                    clickupdat.preventDefault();
                    palmierupdater = 5
                    palmierLvlUpdater()
                }
            })
        } else if (palmier >= 100 && palmierlvl == 5) {
            $('.uppalmier').show()
            $(".uppalmier").on("click", function (clickupdat) {
                if (palmier >= 100 && palmierlvl == 5) {
                    clickupdat.preventDefault();
                    palmierupdater = 6
                    palmierLvlUpdater()
                }
            })
        } else {
            $('.uppalmier').hide()

        }
    }

    function palmierLvlUpdater() {
        if (palmierupgradeprice < toucan) {
            toucan = toucan - palmierupgradeprice
            palmierfacteur = palmierfacteur * 2
            palmierlvl = palmierupdater
            console.log("facteur palmier : " + palmierfacteur)
            $('.uppalmier').hide()
            setTimeout(() => { palmierlvlchecker() }, 1000);
            prodUpadate()
        }
    }
})











$(document).ready(function () {

    $(".foretacheter").on("click", function (clickupdat) {
        clickupdat.preventDefault();
        foretlvlchecker()
        console.log(foretlvl)
    })
    foretlvlchecker()
    function foretlvlchecker() {

        if (foret >= 1 && foretlvl == 1) {
            $('.upforet').show()
            $(".upforet").on("click", function (clickupdat) {
                if (foret >= 1 && foretlvl == 1) {
                    clickupdat.preventDefault();
                    foretupdater = 2
                    foretLvlUpdater()
                }
            })
        } else if (foret >= 5 && foretlvl == 2) {
            $('.upforet').show()
            $(".upforet").on("click", function (clickupdat) {
                if (foret >= 5 && foretlvl == 2) {
                    clickupdat.preventDefault();
                    foretupdater = 3
                    foretLvlUpdater()
                }
            })
        } else if (foret >= 25 && foretlvl == 3) {

            $('.upforet').show()
            $(".upforet").on("click", function (clickupdat) {
                if (foret >= 25 && foretlvl == 3) {
                    clickupdat.preventDefault();
                    foretupdater = 4
                    foretLvlUpdater()
                }
            })
        } else if (foret >= 50 && foretlvl == 4) {
            $('.upforet').show()
            $(".upforet").on("click", function (clickupdat) {
                if (foret >= 50 && foretlvl == 4) {
                    clickupdat.preventDefault();
                    foretupdater = 5
                    foretLvlUpdater()
                }
            })
        } else if (foret >= 100 && foretlvl == 5) {
            $('.upforet').show()
            $(".upforet").on("click", function (clickupdat) {
                if (foret >= 100 && foretlvl == 5) {
                    clickupdat.preventDefault();
                    foretupdater = 6
                    foretLvlUpdater()
                }
            })
        } else {
            $('.upforet').hide()
        }
    }

    function foretLvlUpdater() {
        if (foretupgradeprice < toucan) {
            toucan = toucan - foretupgradeprice
            foretfacteur = foretfacteur * 2
            foretlvl = foretupdater
            console.log("facteur foret : " + foretfacteur)
            $('.upforet').hide()
            setTimeout(() => { foretlvlchecker() }, 1000);
            prodUpadate()
        }
    }
})











$(document).ready(function () {
    $(".ileacheter").on("click", function (clickupdat) {
        clickupdat.preventDefault();
        ilelvlchecker()
        console.log(ilelvl)
    })
    ilelvlchecker()
    function ilelvlchecker() {

        if (ile >= 1 && ilelvl == 1) {
            $('.upile').show()
            $(".upile").on("click", function (clickupdat) {
                if (ile >= 1 && ilelvl == 1) {
                    clickupdat.preventDefault();
                    ileupdater = 2
                    ileLvlUpdater()
                }
            })
        } else if (ile >= 5 && ilelvl == 2) {
            $('.upile').show()
            $(".upile").on("click", function (clickupdat) {
                if (ile >= 5 && ilelvl == 2) {
                    clickupdat.preventDefault();
                    ileupdater = 3
                    ileLvlUpdater()
                }
            })
        } else if (ile >= 25 && ilelvl == 3) {

            $('.upile').show()
            $(".upile").on("click", function (clickupdat) {
                if (ile >= 25 && ilelvl == 3) {
                    clickupdat.preventDefault();
                    ileupdater = 4
                    ileLvlUpdater()
                }
            })
        } else if (ile >= 50 && ilelvl == 4) {
            $('.upile').show()
            $(".upile").on("click", function (clickupdat) {
                if (ile >= 50 && ilelvl == 4) {
                    clickupdat.preventDefault();
                    ileupdater = 5
                    ileLvlUpdater()
                }
            })
        } else if (ile >= 100 && ilelvl == 5) {
            $('.upile').show()
            $(".upile").on("click", function (clickupdat) {
                if (ile >= 100 && ilelvl == 5) {
                    clickupdat.preventDefault();
                    ileupdater = 6
                    ileLvlUpdater()
                }
            })
        } else {
            $('.upile').hide()
        }
    }

    function ileLvlUpdater() {
        if (ileupgradeprice < toucan) {
            toucan = toucan - ileupgradeprice
            ilefacteur = ilefacteur * 2
            ilelvl = ileupdater
            console.log("facteur ile : " + ilefacteur)
            $('.upile').hide()
            setTimeout(() => { ilelvlchecker() }, 1000);
            prodUpadate()
        }
    }
})












$(document).ready(function () {
    $(".zooacheter").on("click", function (clickupdat) {
        clickupdat.preventDefault();
        zoolvlchecker()
        console.log(zoolvl)
    })
    zoolvlchecker()
    function zoolvlchecker() {

        if (zoo >= 1 && zoolvl == 1) {
            $('.upzoo').show()
            $(".upzoo").on("click", function (clickupdat) {
                if (zoo >= 1 && zoolvl == 1) {
                    clickupdat.preventDefault();
                    zooupdater = 2
                    zooLvlUpdater()
                }
            })
        } else if (zoo >= 5 && zoolvl == 2) {
            $('.upzoo').show()
            $(".upzoo").on("click", function (clickupdat) {
                if (zoo >= 5 && zoolvl == 2) {
                    clickupdat.preventDefault();
                    zooupdater = 3
                    zooLvlUpdater()
                }
            })
        } else if (zoo >= 25 && zoolvl == 3) {

            $('.upzoo').show()
            $(".upzoo").on("click", function (clickupdat) {
                if (zoo >= 25 && zoolvl == 3) {
                    clickupdat.preventDefault();
                    zooupdater = 4
                    zooLvlUpdater()
                }
            })
        } else if (zoo >= 50 && zoolvl == 4) {
            $('.upzoo').show()
            $(".upzoo").on("click", function (clickupdat) {
                if (zoo >= 50 && zoolvl == 4) {
                    clickupdat.preventDefault();
                    zooupdater = 5
                    zooLvlUpdater()
                }
            })
        } else if (zoo >= 100 && zoolvl == 5) {
            $('.upzoo').show()
            $(".upzoo").on("click", function (clickupdat) {
                if (zoo >= 100 && zoolvl == 5) {
                    clickupdat.preventDefault();
                    zooupdater = 6
                    zooLvlUpdater()
                }
            })
        } else {
            $('.upzoo').hide()
        }
    }

    function zooLvlUpdater() {
        if (zooupgradeprice < toucan) {
            toucan = toucan - zooupgradeprice
            zoofacteur = zoofacteur * 2
            zoolvl = zooupdater
            console.log("facteur zoo : " + zoofacteur)
            $('.upzoo').hide()
            setTimeout(() => { zoolvlchecker() }, 1000);
            prodUpadate()
        }
    }
})










$(document).ready(function () {
    $(".continentacheter").on("click", function (clickupdat) {
        clickupdat.preventDefault();
        continentlvlchecker()
        console.log(continentlvl)
    })
    continentlvlchecker()
    function continentlvlchecker() {

        if (continent >= 1 && continentlvl == 1) {
            $('.upcontinent').show()
            $(".upcontinent").on("click", function (clickupdat) {
                if (continent >= 1 && continentlvl == 1) {
                    clickupdat.preventDefault();
                    continentupdater = 2
                    continentLvlUpdater()
                }
            })
        } else if (continent >= 5 && continentlvl == 2) {
            $('.upcontinent').show()
            $(".upcontinent").on("click", function (clickupdat) {
                if (continent >= 5 && continentlvl == 2) {
                    clickupdat.preventDefault();
                    continentupdater = 3
                    continentLvlUpdater()
                }
            })
        } else if (continent >= 25 && continentlvl == 3) {

            $('.upcontinent').show()
            $(".upcontinent").on("click", function (clickupdat) {
                if (continent >= 25 && continentlvl == 3) {
                    clickupdat.preventDefault();
                    continentupdater = 4
                    continentLvlUpdater()
                }
            })
        } else if (continent >= 50 && continentlvl == 4) {
            $('.upcontinent').show()
            $(".upcontinent").on("click", function (clickupdat) {
                if (continent >= 50 && continentlvl == 4) {
                    clickupdat.preventDefault();
                    continentupdater = 5
                    continentLvlUpdater()
                }
            })
        } else if (continent >= 100 && continentlvl == 5) {
            $('.upcontinent').show()
            $(".upcontinent").on("click", function (clickupdat) {
                if (continent >= 100 && continentlvl == 5) {
                    clickupdat.preventDefault();
                    continentupdater = 6
                    continentLvlUpdater()
                }
            })
        } else {
            $('.upcontinent').hide()
        }
    }

    function continentLvlUpdater() {
        if (continentupgradeprice < toucan) {
            toucan = toucan - continentupgradeprice
            continentfacteur = continentfacteur * 2
            continentlvl = continentupdater
            console.log("facteur continent : " + continentfacteur)
            $('.upcontinent').hide()
            setTimeout(() => { continentlvlchecker() }, 1000);
            prodUpadate()
        }
    }
})










$(document).ready(function () {
    $(".planetteacheter").on("click", function (clickupdat) {
        clickupdat.preventDefault();
        planettelvlchecker()
        console.log(planettelvl)
    })
    planettelvlchecker()
    function planettelvlchecker() {

        if (planette >= 1 && planettelvl == 1) {
            $('.upplanette').show()
            $(".upplanette").on("click", function (clickupdat) {
                if (planette >= 1 && planettelvl == 1) {
                    clickupdat.preventDefault();
                    planetteupdater = 2
                    planetteLvlUpdater()
                }
            })
        } else if (planette >= 5 && planettelvl == 2) {
            $('.upplanette').show()
            $(".upplanette").on("click", function (clickupdat) {
                if (planette >= 5 && planettelvl == 2) {
                    clickupdat.preventDefault();
                    planetteupdater = 3
                    planetteLvlUpdater()
                }
            })
        } else if (planette >= 25 && planettelvl == 3) {

            $('.upplanette').show()
            $(".upplanette").on("click", function (clickupdat) {
                if (planette >= 25 && planettelvl == 3) {
                    clickupdat.preventDefault();
                    planetteupdater = 4
                    planetteLvlUpdater()
                }
            })
        } else if (planette >= 50 && planettelvl == 4) {
            $('.upplanette').show()
            $(".upplanette").on("click", function (clickupdat) {
                if (planette >= 50 && planettelvl == 4) {
                    clickupdat.preventDefault();
                    planetteupdater = 5
                    planetteLvlUpdater()
                }
            })
        } else if (planette >= 100 && planettelvl == 5) {
            $('.upplanette').show()
            $(".upplanette").on("click", function (clickupdat) {
                if (planette >= 100 && planettelvl == 5) {
                    clickupdat.preventDefault();
                    planetteupdater = 6
                    planetteLvlUpdater()
                }
            })
        } else {
            $('.upplanette').hide()
        }
    }

    function planetteLvlUpdater() {
        if (planetteupgradeprice < toucan) {
            toucan = toucan - planetteupgradeprice
            planettefacteur = planettefacteur * 2
            planettelvl = planetteupdater
            console.log("facteur planette : " + planettefacteur)
            $('.upplanette').hide()
            setTimeout(() => { planettelvlchecker() }, 1000);
            prodUpadate()
        }
    }
})










$(document).ready(function () {
    $(".systemesolaireacheter").on("click", function (clickupdat) {
        clickupdat.preventDefault();
        systemesolairelvlchecker()
        console.log(systemesolairelvl)
    })
    systemesolairelvlchecker()
    function systemesolairelvlchecker() {

        if (systemesolaire >= 1 && systemesolairelvl == 1) {
            $('.upsystemesolaire').show()
            $(".upsystemesolaire").on("click", function (clickupdat) {
                if (systemesolaire >= 1 && systemesolairelvl == 1) {
                    clickupdat.preventDefault();
                    systemesolaireupdater = 2
                    systemesolaireLvlUpdater()
                }
            })
        } else if (systemesolaire >= 5 && systemesolairelvl == 2) {
            $('.upsystemesolaire').show()
            $(".upsystemesolaire").on("click", function (clickupdat) {
                if (systemesolaire >= 5 && systemesolairelvl == 2) {
                    clickupdat.preventDefault();
                    systemesolaireupdater = 3
                    systemesolaireLvlUpdater()
                }
            })
        } else if (systemesolaire >= 25 && systemesolairelvl == 3) {

            $('.upsystemesolaire').show()
            $(".upsystemesolaire").on("click", function (clickupdat) {
                if (systemesolaire >= 25 && systemesolairelvl == 3) {
                    clickupdat.preventDefault();
                    systemesolaireupdater = 4
                    systemesolaireLvlUpdater()
                }
            })
        } else if (systemesolaire >= 50 && systemesolairelvl == 4) {
            $('.upsystemesolaire').show()
            $(".upsystemesolaire").on("click", function (clickupdat) {
                if (systemesolaire >= 50 && systemesolairelvl == 4) {
                    clickupdat.preventDefault();
                    systemesolaireupdater = 5
                    systemesolaireLvlUpdater()
                }
            })
        } else if (systemesolaire >= 100 && systemesolairelvl == 5) {
            $('.upsystemesolaire').show()
            $(".upsystemesolaire").on("click", function (clickupdat) {
                if (systemesolaire >= 100 && systemesolairelvl == 5) {
                    clickupdat.preventDefault();
                    systemesolaireupdater = 6
                    systemesolaireLvlUpdater()
                }
            })
        } else {
            $('.upsystemesolaire').hide()
        }
    }

    function systemesolaireLvlUpdater() {
        if (systemesolaireupgradeprice < toucan) {
            toucan = toucan - systemesolaireupgradeprice
            systemesolairefacteur = systemesolairefacteur * 2
            systemesolairelvl = systemesolaireupdater
            console.log("facteur systemesolaire : " + systemesolairefacteur)
            $('.upsystemesolaire').hide()
            setTimeout(() => { systemesolairelvlchecker() }, 1000);
            prodUpadate()
        }
    }
})










$(document).ready(function () {
    $(".galaxieacheter").on("click", function (clickupdat) {
        clickupdat.preventDefault();
        galaxielvlchecker()
        console.log(galaxielvl)
    })
    galaxielvlchecker()
    function galaxielvlchecker() {

        if (galaxie >= 1 && galaxielvl == 1) {
            $('.upgalaxie').show()
            $(".upgalaxie").on("click", function (clickupdat) {
                if (galaxie >= 1 && galaxielvl == 1) {
                    clickupdat.preventDefault();
                    galaxieupdater = 2
                    galaxieLvlUpdater()
                }
            })
        } else if (galaxie >= 5 && galaxielvl == 2) {
            $('.upgalaxie').show()
            $(".upgalaxie").on("click", function (clickupdat) {
                if (galaxie >= 5 && galaxielvl == 2) {
                    clickupdat.preventDefault();
                    galaxieupdater = 3
                    galaxieLvlUpdater()
                }
            })
        } else if (galaxie >= 25 && galaxielvl == 3) {

            $('.upgalaxie').show()
            $(".upgalaxie").on("click", function (clickupdat) {
                if (galaxie >= 25 && galaxielvl == 3) {
                    clickupdat.preventDefault();
                    galaxieupdater = 4
                    galaxieLvlUpdater()
                }
            })
        } else if (galaxie >= 50 && galaxielvl == 4) {
            $('.upgalaxie').show()
            $(".upgalaxie").on("click", function (clickupdat) {
                if (galaxie >= 50 && galaxielvl == 4) {
                    clickupdat.preventDefault();
                    galaxieupdater = 5
                    galaxieLvlUpdater()
                }
            })
        } else if (galaxie >= 100 && galaxielvl == 5) {
            $('.upgalaxie').show()
            $(".upgalaxie").on("click", function (clickupdat) {
                if (galaxie >= 100 && galaxielvl == 5) {
                    clickupdat.preventDefault();
                    galaxieupdater = 6
                    galaxieLvlUpdater()
                }
            })
        } else {
            $('.upgalaxie').hide()
        }
    }

    function galaxieLvlUpdater() {
        if (galaxieupgradeprice < toucan) {
            toucan = toucan - galaxieupgradeprice
            galaxiefacteur = galaxiefacteur * 2
            galaxielvl = galaxieupdater
            console.log("facteur galaxie : " + galaxiefacteur)
            $('.upgalaxie').hide()
            setTimeout(() => { galaxielvlchecker() }, 1000);
            prodUpadate()
        }
    }
})










$(document).ready(function () {
    $(".troublancacheter").on("click", function (clickupdat) {
        clickupdat.preventDefault();
        troublanclvlchecker()
        console.log(troublanclvl)
    })
    troublanclvlchecker()
    function troublanclvlchecker() {

        if (troublanc >= 1 && troublanclvl == 1) {
            $('.uptroublanc').show()
            $(".uptroublanc").on("click", function (clickupdat) {
                if (troublanc >= 1 && troublanclvl == 1) {
                    clickupdat.preventDefault();
                    troublancupdater = 2
                    troublancLvlUpdater()
                }
            })
        } else if (troublanc >= 5 && troublanclvl == 2) {
            $('.uptroublanc').show()
            $(".uptroublanc").on("click", function (clickupdat) {
                if (troublanc >= 5 && troublanclvl == 2) {
                    clickupdat.preventDefault();
                    troublancupdater = 3
                    troublancLvlUpdater()
                }
            })
        } else if (troublanc >= 25 && troublanclvl == 3) {

            $('.uptroublanc').show()
            $(".uptroublanc").on("click", function (clickupdat) {
                if (troublanc >= 25 && troublanclvl == 3) {
                    clickupdat.preventDefault();
                    troublancupdater = 4
                    troublancLvlUpdater()
                }
            })
        } else if (troublanc >= 50 && troublanclvl == 4) {
            $('.uptroublanc').show()
            $(".uptroublanc").on("click", function (clickupdat) {
                if (troublanc >= 50 && troublanclvl == 4) {
                    clickupdat.preventDefault();
                    troublancupdater = 5
                    troublancLvlUpdater()
                }
            })
        } else if (troublanc >= 100 && troublanclvl == 5) {
            $('.uptroublanc').show()
            $(".uptroublanc").on("click", function (clickupdat) {
                if (troublanc >= 100 && troublanclvl == 5) {
                    clickupdat.preventDefault();
                    troublancupdater = 6
                    troublancLvlUpdater()
                }
            })
        } else {
            $('.uptroublanc').hide()
        }
    }

    function troublancLvlUpdater() {
        if (troublancupgradeprice < toucan) {
            toucan = toucan - troublancupgradeprice
            troublancfacteur = troublancfacteur * 2
            troublanclvl = troublancupdater
            console.log("facteur troublanc : " + troublancfacteur)
            $('.uptroublanc').hide()
            setTimeout(() => { troublanclvlchecker() }, 1000);
            prodUpadate()
        }
    }
})










$(document).ready(function () {
    $(".universacheter").on("click", function (clickupdat) {
        clickupdat.preventDefault();
        universlvlchecker()
        console.log(universlvl)
    })
    universlvlchecker()
    function universlvlchecker() {

        if (univers >= 1 && universlvl == 1) {
            $('.upunivers').show()
            $(".upunivers").on("click", function (clickupdat) {
                if (univers >= 1 && universlvl == 1) {
                    clickupdat.preventDefault();
                    universupdater = 2
                    universLvlUpdater()
                }
            })
        } else if (univers >= 5 && universlvl == 2) {
            $('.upunivers').show()
            $(".upunivers").on("click", function (clickupdat) {
                if (univers >= 5 && universlvl == 2) {
                    clickupdat.preventDefault();
                    universupdater = 3
                    universLvlUpdater()
                }
            })
        } else if (univers >= 25 && universlvl == 3) {

            $('.upunivers').show()
            $(".upunivers").on("click", function (clickupdat) {
                if (univers >= 25 && universlvl == 3) {
                    clickupdat.preventDefault();
                    universupdater = 4
                    universLvlUpdater()
                }
            })
        } else if (univers >= 50 && universlvl == 4) {
            $('.upunivers').show()
            $(".upunivers").on("click", function (clickupdat) {
                if (univers >= 50 && universlvl == 4) {
                    clickupdat.preventDefault();
                    universupdater = 5
                    universLvlUpdater()
                }
            })
        } else if (univers >= 100 && universlvl == 5) {
            $('.upunivers').show()
            $(".upunivers").on("click", function (clickupdat) {
                if (univers >= 100 && universlvl == 5) {
                    clickupdat.preventDefault();
                    universupdater = 6
                    universLvlUpdater()
                }
            })
        } else {
            $('.upunivers').hide()
        }
    }

    function universLvlUpdater() {
        if (universupgradeprice < toucan) {
            toucan = toucan - universupgradeprice
            universfacteur = universfacteur * 2
            universlvl = universupdater
            console.log("facteur univers : " + universfacteur)
            $('.upunivers').hide()
            setTimeout(() => { universlvlchecker() }, 1000);
            prodUpadate()
        }
    }
})








$(document).ready(function () {
    $(".espacetmpsacheter").on("click", function (clickupdat) {
        clickupdat.preventDefault();
        espacetmpslvlchecker()
        console.log(espacetmpslvl)
    })
    espacetmpslvlchecker()
    function espacetmpslvlchecker() {

        if (espacetmps >= 1 && espacetmpslvl == 1) {
            $('.upespacetmps').show()
            $(".upespacetmps").on("click", function (clickupdat) {
                if (espacetmps >= 1 && espacetmpslvl == 1) {
                    clickupdat.preventDefault();
                    espacetmpsupdater = 2
                    espacetmpsLvlUpdater()
                }
            })
        } else if (espacetmps >= 5 && espacetmpslvl == 2) {
            $('.upespacetmps').show()
            $(".upespacetmps").on("click", function (clickupdat) {
                if (espacetmps >= 5 && espacetmpslvl == 2) {
                    clickupdat.preventDefault();
                    espacetmpsupdater = 3
                    espacetmpsLvlUpdater()
                }
            })
        } else if (espacetmps >= 25 && espacetmpslvl == 3) {

            $('.upespacetmps').show()
            $(".upespacetmps").on("click", function (clickupdat) {
                if (espacetmps >= 25 && espacetmpslvl == 3) {
                    clickupdat.preventDefault();
                    espacetmpsupdater = 4
                    espacetmpsLvlUpdater()
                }
            })
        } else if (espacetmps >= 50 && espacetmpslvl == 4) {
            $('.upespacetmps').show()
            $(".upespacetmps").on("click", function (clickupdat) {
                if (espacetmps >= 50 && espacetmpslvl == 4) {
                    clickupdat.preventDefault();
                    espacetmpsupdater = 5
                    espacetmpsLvlUpdater()
                }
            })
        } else if (espacetmps >= 100 && espacetmpslvl == 5) {
            $('.upespacetmps').show()
            $(".upespacetmps").on("click", function (clickupdat) {
                if (espacetmps >= 100 && espacetmpslvl == 5) {
                    clickupdat.preventDefault();
                    espacetmpsupdater = 6
                    espacetmpsLvlUpdater()
                }
            })
        } else {
            $('.upespacetmps').hide()
        }
    }

    function espacetmpsLvlUpdater() {
        if (espacetmpsupgradeprice < toucan) {
            toucan = toucan - espacetmpsupgradeprice
            espacetmpsfacteur = espacetmpsfacteur * 2
            espacetmpslvl = espacetmpsupdater
            console.log("facteur espacetmps : " + espacetmpsfacteur)
            $('.espacetmpscage').hide()
            setTimeout(() => { espacetmpslvlchecker() }, 1000);
            prodUpadate()
        }
    }
})








$(document).ready(function () {
    $(".antimatieretoucanacheter").on("click", function (clickupdat) {
        clickupdat.preventDefault();
        antimatieretoucanlvlchecker()
        console.log(antimatieretoucanlvl)
    })
    antimatieretoucanlvlchecker()
    function antimatieretoucanlvlchecker() {

        if (antimatieretoucan >= 1 && antimatieretoucanlvl == 1) {
            $('.upantimatieretoucan').show()
            $(".upantimatieretoucan").on("click", function (clickupdat) {
                if (antimatieretoucan >= 1 && antimatieretoucanlvl == 1) {
                    clickupdat.preventDefault();
                    antimatieretoucanupdater = 2
                    antimatieretoucanLvlUpdater()
                }
            })
        } else if (antimatieretoucan >= 5 && antimatieretoucanlvl == 2) {
            $('.upantimatieretoucan').show()
            $(".upantimatieretoucan").on("click", function (clickupdat) {
                if (antimatieretoucan >= 5 && antimatieretoucanlvl == 2) {
                    clickupdat.preventDefault();
                    antimatieretoucanupdater = 3
                    antimatieretoucanLvlUpdater()
                }
            })
        } else if (antimatieretoucan >= 25 && antimatieretoucanlvl == 3) {

            $('.upantimatieretoucan').show()
            $(".upantimatieretoucan").on("click", function (clickupdat) {
                if (antimatieretoucan >= 25 && antimatieretoucanlvl == 3) {
                    clickupdat.preventDefault();
                    antimatieretoucanupdater = 4
                    antimatieretoucanLvlUpdater()
                }
            })
        } else if (antimatieretoucan >= 50 && antimatieretoucanlvl == 4) {
            $('.upantimatieretoucan').show()
            $(".upantimatieretoucan").on("click", function (clickupdat) {
                if (antimatieretoucan >= 50 && antimatieretoucanlvl == 4) {
                    clickupdat.preventDefault();
                    antimatieretoucanupdater = 5
                    antimatieretoucanLvlUpdater()
                }
            })
        } else if (antimatieretoucan >= 100 && antimatieretoucanlvl == 5) {
            $('.upantimatieretoucan').show()
            $(".upantimatieretoucan").on("click", function (clickupdat) {
                if (antimatieretoucan >= 100 && antimatieretoucanlvl == 5) {
                    clickupdat.preventDefault();
                    antimatieretoucanupdater = 6
                    antimatieretoucan$LvlUpdater()
                }
            })
        } else {
            $('.upantimatieretoucan').hide()
        }
    }

    function antimatieretoucanLvlUpdater() {
        if (antimatieretoucanupgradeprice < toucan) {
            toucan = toucan - antimatieretoucanupgradeprice
            antimatieretoucanfacteur = antimatieretoucanfacteur * 2
            antimatieretoucanlvl = antimatieretoucanupdater
            console.log("facteur antimatieretoucan : " + antimatieretoucanfacteur)
            $('.upantimatieretoucan').hide()
            setTimeout(() => { antimatieretoucanlvlchecker() }, 1000);
            prodUpadate()
        }
    }
})









function clickSound() {
    $(document).ready(function () {
        var obj = document.createElement("audio");
        obj.src = "click.wav";
        obj.volume = 0.1;
        obj.autoPlay = false;
        obj.preLoad = true;


        obj.play();


    });
}

function musicStrat() {
    $(document).ready(function () {
        $("#audio")[0].play();
        $('#audio').prop("volume", 0.05);
        $('#audio').loop = true;
    })
}
function musicStop() {
    $(document).ready(function () {
        if (nightmode == 1) {
            console.log(nightmode)
            $("body").css("background-image", "url(../images/bgnight.gif)");
            nightmode = 2
            $("#audio").animate({ volume: 0 }, 1000, function () {
                pauseAudio();
            });
            function pauseAudio() {
                $('#audio').prop("volume", 0.05);
                $("#audio").attr("src", "/bgnight.mp3");
            }
        } else if (nightmode == 2) {
            console.log(nightmode)
            $("body").css("background-image", "url(../images/bgmine.gif)");
            nightmode = 0
            $("#audio").animate({ volume: 0 }, 1000, function () {
                pauseAudio();
            });
            function pauseAudio() {
                $('#audio').prop("volume", 0.05);
                $("#audio").attr("src", "/bgmine.mp3");


            }
        } else {
            console.log(nightmode)
            $("body").css("background-image", "url(../images/bg.gif)");
            nightmode = 1
            $("#audio").animate({ volume: 0 }, 1000, function () {
                pauseAudio();
            });
            function pauseAudio() {
                $('#audio').prop("volume", 0.05);
                $("#audio").attr("src", "/bg.mp3");

            }
        }

    })
}

$(document).ready(function () {
    $(".nightmode").on("click", function (clickupdat) {
        musicStop()
    })
})
