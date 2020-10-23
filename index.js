// SIDE NAV BAR
chg();

function chg() {
    if (document.getElementById("mySidenav").style.width <= "110px") {
        $("#mySidenav").css("background-color", "#b9e1dc");
        $("#sideNav-close").css("visibility", "hidden");
        $("#sideNav-1")[0].innerHTML = '<i class="fas fa-cogs"></i>';
        $("#sideNav-2")[0].innerHTML = '<i class="fas fa-key"></i>';
    } else {
        $("#mySidenav").css("background-color", "#111");
        $("#sideNav-close").css("visibility", "visible");
        $("#sideNav-1")[0].innerHTML = "Settings";
        $("#sideNav-2")[0].innerHTML = "Passoword";
    }
}

function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
    chg()
}

function closeNav() {
    document.getElementById("mySidenav").style.width = "110px";
    chg();

}