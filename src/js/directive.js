/**
 * Created by junji on 2017/10/8.
 */
import Vue from 'vue'

Vue.directive('drag',{
    inserted:function (el) {
        el.onmousedown=function(e){
            e.preventDefault();
            let l=e.clientX-el.offsetLeft;
            let t=e.clientY-el.offsetTop;
            document.onmousemove=function(e){
                el.style.left=e.clientX-l+'px';
                el.style.top=e.clientY-t+'px';
            };
            el.onmouseup=function(e){
                e.preventDefault();
                document.onmousemove=null;
                el.onmouseup=null;
            }
        }
    }
});

Vue.directive('zoom-pic',{
   inserted:function (el) {
       function scaleFun(num) {
           el.style.webkitTransform="scale("+num+")";
           el.style.transform="scale("+num+")";
       }
       let scaleNum = 1;
       el.onmousewheel = function (e) {
           e.preventDefault();
           let zoomDirection = e.wheelDelta;
           if(zoomDirection > 0){
               //放大
               if(scaleNum <=2.5){
                   scaleNum +=0.1;
                   scaleFun(scaleNum);
               }
           }else if(zoomDirection < 0){
               //缩小
               if(scaleNum >=0.3){
                   scaleNum -=0.1;
                   scaleFun(scaleNum);
               }
           }

       }


   }
});