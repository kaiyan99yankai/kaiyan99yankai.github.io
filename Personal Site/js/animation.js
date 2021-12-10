var back_image = document.getElementsByTagName('P');
var i = 0;
for(i = 0; i < 3; i++){
    window.setTimeout(function(){
        back_image[i].style.visibility = 'visible';
    }, 100);
};
