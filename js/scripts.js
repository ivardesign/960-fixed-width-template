const dirBtn = document.getElementById('dirToggle');
const dirSpan = document.getElementById('dirSpan');
const flexDirBtn = document.getElementById('flexDirection');
const flexDirSpan = document.getElementById('flexDirSpan'); 
const flexDirRevBtn = document.getElementById('flexDirectionReversed');
const list = document.getElementsByClassName('flex-container');
const flexDirRevButton = document.getElementById('flexDirRevButton');
let direction = 'row';
let flexDirRevBttnChecked = false;

if (flexDirRevBttnChecked) {
    flexDirRevButton.classList.add('checked');
} else {
    flexDirRevButton.classList.remove('checked');
}

dirBtn.addEventListener('click', function () {
    for (let i = 0; i < list.length; i++) {
        list[i].classList.toggle('ltrDir');
        list[i].classList.toggle('rtlDir');
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

            for (let i = 0; i < list.length; i++) {
                list[i].classList.remove('flexDirectionRow');
                list[i].classList.toggle('flexDirectionColumn');
            }

            flexDirSpan.innerHTML = 'column';
            direction = 'column';

        } else {

            for (let ii = 0; ii < list.length; ii++) {
                list[ii].classList.remove('flexDirectionColumn');
                list[ii].classList.toggle('flexDirectionRow');
            }

            flexDirSpan.innerHTML = 'row';
            direction = 'row';
        }

    } else {

        if (direction == 'row') {

            for (let j = 0; j < list.length; j++) {
                list[j].classList.remove('flexDirectionRow-reverse');
                list[j].classList.toggle('flexDirectionColumn-reverse');
            }

            flexDirSpan.innerHTML = 'column';
            direction = 'column';

        } else {

            for (let jj = 0; jj < list.length; jj++) {
                list[jj].classList.remove('flexDirectionColumn-reverse');
                list[jj].classList.toggle('flexDirectionRow-reverse');
            }

            flexDirSpan.innerHTML = 'row';
            direction = 'row';
        }
    }
});

flexDirRevBtn.addEventListener('click', function() {
    if (flexDirRevBttnChecked == false) {

        for (let k = 0; k < list.length; k++) {
            list[k].classList.remove('flexDirectionRow');
            list[k].classList.remove('flexDirectionColumn');
        }

        if (direction == 'row') {
            for (let m = 0; m < list.length; m++) {
                list[m].classList.toggle('flexDirectionRow-reverse');
            }

        } else {

            for (let n = 0; n < list.length; n++) {
                list[n].classList.toggle('flexDirectionColumn-reverse');
            }

        }

        flexDirRevButton.classList.toggle('checked');
        flexDirRevBttnChecked = true; 

    } else {

        for (let p = 0; p < list.length; p++) {
            list[p].classList.remove('flexDirectionRow-reverse');
            list[p].classList.remove('flexDirectionColumn-reverse');
        }

        if (direction == 'row') {
            for (let q = 0; q < list.length; q++) {
                list[q].classList.toggle('flexDirectionRow');
            }

        } else {

            for (let r = 0; r < list.length; r++) {
                list[r].classList.toggle('flexDirectionColumn');
            }
        }

        flexDirRevButton.classList.toggle('checked');
        flexDirRevBttnChecked = false;

    }
});