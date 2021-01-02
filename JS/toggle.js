var toggleNavStatus = false;
var toggleDropStatus = false;
var toggleDropStatusTwo = false;

function toggleNav() {
    var getNav = document.querySelector(".main-nav");
    var getMainHeader = document.querySelector(".fixed-bar");

    if(toggleNavStatus === false) {
        getNav.style.display = "block";
        getMainHeader.style.visibility = "hidden";
        toggleNavStatus = true;
    }
    else if(toggleNavStatus === true) {
        getNav.style.display = "none";
        getMainHeader.style.visibility = "visible";
        toggleNavStatus = false;
    }
}

function toggleDrop(n) {
    switch(n) {
        case 1:
            var getDropDown = document.querySelector("#dropdown-menu-one");
            var getDropDownIcon = document.querySelector("#arrow-drop-down");

            if(toggleDropStatus === false) {
                getDropDownIcon.classList.add("invert-anim");
                getDropDown.style.display = "block";
                getDropDownIcon.style.transform = "scaleY(-1)";
                toggleDropStatus = true;
            }
            else if(toggleDropStatus === true) {
                getDropDownIcon.classList.remove("invert-anim");
                getDropDown.style.display = "none";
                getDropDownIcon.style.transform = "scaleY(1)";
                toggleDropStatus = false;
            }

            break;

        case 2:
            var getDropDown = document.querySelector("#sub-items");
            var getDropDownIcon = document.querySelector("#plus-drop-down");

            if(toggleDropStatusTwo === false) {
                getDropDown.style.display = "block";
                getDropDownIcon.style.backgroundImage = "url('../IMG & VIDS/Icons/Minus.svg')"
                toggleDropStatusTwo = true;
            }
            else if(toggleDropStatusTwo === true) {
                getDropDown.style.display = "none";
                getDropDownIcon.style.backgroundImage = "url('../IMG & VIDS/Icons/Plus.svg')"
                toggleDropStatusTwo = false;
            }

            break;
        
        case 3:
            var getDropDown = document.querySelector("#sub-items-two");
            var getDropDownIcon = document.querySelector("#plus-drop-down-two");

            if(toggleDropStatusTwo === false) {
                getDropDown.style.display = "block";
                getDropDownIcon.style.backgroundImage = "url('../IMG & VIDS/Icons/Minus.svg')"
                toggleDropStatusTwo = true;
            }
            else if(toggleDropStatusTwo === true) {
                getDropDown.style.display = "none";
                getDropDownIcon.style.backgroundImage = "url('../IMG & VIDS/Icons/Plus.svg')"
                toggleDropStatusTwo = false;
            }
    }
}