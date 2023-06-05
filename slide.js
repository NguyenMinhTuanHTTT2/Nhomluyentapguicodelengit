    var index= 1;
    showImg(index);
    function btm_slide(e){showImg(index = e);}
    function side_slide(e){showImg(index += e);}

    function showImg(e){
    var i;
    const img =document.querySelectorAll('.slide-img img');
    const slides = document.querySelectorAll('.active-slide span')
    if(e> img.length ) {index=1}
    if(e<1){index=img.length}
    for(i=0; i<img.length; i++){
        img[i].style.display = "none";
       
    }
    for(i=0; i<slides.length; i++){
        slides[i].style. background = "white";

    }
    img[index-1].style.display = "block";
    slides[index-1].style.background = "rgb(243, 132, 167)";

}


