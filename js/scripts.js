// mainNav hamburger menu
const mainNavbtn = document.getElementById('mainNavButton');

mainNavbtn.addEventListener('click', function() {
  const hint = document.getElementById('mainNavItems');

  mainNavButton.classList.toggle('checked');
  hint.classList.toggle('displayNone');
});

// demos
const dirBtn = document.getElementById('dirToggle');
const dirSpan = document.getElementById('dirSpan');
const flexDirBtn = document.getElementById('flexDirection');
const flexDirSpan = document.getElementById('flexDirSpan'); 
const flexDirRevBtn = document.getElementById('flexDirRevButton');
const flexWrapBtn = document.getElementById('flexWrapButton')
const containerList = document.getElementsByClassName('container');
const displayFlexList = document.getElementsByClassName('display-flex');
let direction = 'row';
let flexDirRevBtnChecked = false;
let flexWrapBtnChecked = false;

// directionality
if (flexDirRevBtnChecked) {
    flexDirRevBtn.classList.add('checked');
} else {
    flexDirRevBtn.classList.remove('checked');
}

dirBtn.addEventListener('click', function () {
    for (let i = 0; i < containerList.length; i++) {
        containerList[i].classList.toggle('ltrDir');
        containerList[i].classList.toggle('rtlDir');
    }

    if (dirSpan.innerHTML == 'ltr') {
        dirSpan.innerHTML = 'rtl';
    } else {
        dirSpan.innerHTML = 'ltr';
    }
});

// flex-direction column/row
flexDirBtn.addEventListener('click', function () {
    if (flexDirRevBtnChecked == false) {
      
        if (direction == 'row') {

            for (let i = 0; i < displayFlexList.length; i++) {
                displayFlexList[i].classList.remove('flexDirectionRow');
                displayFlexList[i].classList.toggle('flexDirectionColumn');
            }

            flexDirSpan.innerHTML = 'column';
            direction = 'column';

        } else {

            for (let ii = 0; ii < displayFlexList.length; ii++) {
                displayFlexList[ii].classList.remove('flexDirectionColumn');
                displayFlexList[ii].classList.toggle('flexDirectionRow');
            }

            flexDirSpan.innerHTML = 'row';
            direction = 'row';
        }

    } else {

        if (direction == 'row') {

            for (let j = 0; j < displayFlexList.length; j++) {
                displayFlexList[j].classList.remove('flexDirectionRow-reverse');
                displayFlexList[j].classList.toggle('flexDirectionColumn-reverse');
            }

            flexDirSpan.innerHTML = 'column';
            direction = 'column';

        } else {

            for (let jj = 0; jj < displayFlexList.length; jj++) {
                displayFlexList[jj].classList.remove('flexDirectionColumn-reverse');
                displayFlexList[jj].classList.toggle('flexDirectionRow-reverse');
            }

            flexDirSpan.innerHTML = 'row';
            direction = 'row';
        }
    }
});

// flex-direction column-reverse/row-reverse
flexDirRevBtn.addEventListener('click', function() {
    if (flexDirRevBtnChecked == false) {

        for (let i = 0; i < displayFlexList.length; i++) {
            displayFlexList[i].classList.remove('flexDirectionRow');
            displayFlexList[i].classList.remove('flexDirectionColumn');
        }

        if (direction == 'row') {
            for (let ii = 0; ii < displayFlexList.length; ii++) {
                displayFlexList[ii].classList.toggle('flexDirectionRow-reverse');
            }

        } else {

            for (let j = 0; j < displayFlexList.length; j++) {
                displayFlexList[j].classList.toggle('flexDirectionColumn-reverse');
            }

        }

        flexDirRevBtn.classList.toggle('checked');
        flexDirRevBtnChecked = true; 

    } else {

        for (let jj = 0; jj < displayFlexList.length; jj++) {
            displayFlexList[jj].classList.remove('flexDirectionRow-reverse');
            displayFlexList[jj].classList.remove('flexDirectionColumn-reverse');
        }

        if (direction == 'row') {
            for (let k = 0; k < displayFlexList.length; k++) {
                displayFlexList[k].classList.toggle('flexDirectionRow');
            }

        } else {

            for (let kk = 0; kk < displayFlexList.length; kk++) {
                displayFlexList[kk].classList.toggle('flexDirectionColumn');
            }
        }

        flexDirRevBtn.classList.toggle('checked');
        flexDirRevBtnChecked = false;

    }
});

// flex-wrap
flexWrapBtn.addEventListener('click', function () {
    for (let i = 0; i < displayFlexList.length; i++) {
        displayFlexList[i].classList.toggle('flex-wrap');
    }

    flexWrapBtn.classList.toggle('checked');

    if (flexWrapBtnChecked == true) {
        flexWrapBtnChecked = false;
    } else {
        flexWrapBtnChecked = true;
    }

});