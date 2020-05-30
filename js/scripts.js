const dirBtn = document.getElementById('dirToggle');
const dirSpan = document.getElementById('dirSpan');
const flexDirBtn = document.getElementById('flexDirection');
const flexDirSpan = document.getElementById('flexDirSpan'); 
const flexDirRevBtn = document.getElementById('flexDirectionReversed');
const containerList = document.getElementsByClassName('container');
const displayFlexList = document.getElementsByClassName('display-flex');
const flexDirRevButton = document.getElementById('flexDirRevButton');
let direction = 'row';
let flexDirRevBttnChecked = false;

if (flexDirRevBttnChecked) {
    flexDirRevButton.classList.add('checked');
} else {
    flexDirRevButton.classList.remove('checked');
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

flexDirBtn.addEventListener('click', function () {

    if (flexDirRevBttnChecked == false) {
      
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

flexDirRevBtn.addEventListener('click', function() {
    if (flexDirRevBttnChecked == false) {

        for (let k = 0; k < displayFlexList.length; k++) {
            displayFlexList[k].classList.remove('flexDirectionRow');
            displayFlexList[k].classList.remove('flexDirectionColumn');
        }

        if (direction == 'row') {
            for (let m = 0; m < displayFlexList.length; m++) {
                displayFlexList[m].classList.toggle('flexDirectionRow-reverse');
            }

        } else {

            for (let n = 0; n < displayFlexList.length; n++) {
                displayFlexList[n].classList.toggle('flexDirectionColumn-reverse');
            }

        }

        flexDirRevButton.classList.toggle('checked');
        flexDirRevBttnChecked = true; 

    } else {

        for (let p = 0; p < displayFlexList.length; p++) {
            displayFlexList[p].classList.remove('flexDirectionRow-reverse');
            displayFlexList[p].classList.remove('flexDirectionColumn-reverse');
        }

        if (direction == 'row') {
            for (let q = 0; q < displayFlexList.length; q++) {
                displayFlexList[q].classList.toggle('flexDirectionRow');
            }

        } else {

            for (let r = 0; r < displayFlexList.length; r++) {
                displayFlexList[r].classList.toggle('flexDirectionColumn');
            }
        }

        flexDirRevButton.classList.toggle('checked');
        flexDirRevBttnChecked = false;

    }
});