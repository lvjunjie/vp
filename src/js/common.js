/**
 * Created by junji on 2017/12/22.
 */
export default {
    test:function () {
        return console.log('测试')
    },
    randomSort:function (arr) {//数组随机排序
        if(arr.length>0){
            return arr.sort(function () {
                return 0.5-Math.random();
            })
        }
    },
    loadImgOver:function (srcList,callBack) {
        let i =0;
        let timer;

        function load(src) {
            if(i < srcList.length){
                let  imgObj = new Image;
                imgObj.src =src;

                timer = setInterval(function () {

                    if(imgObj.complete){
                        clearInterval(timer);
                        load(srcList[i++])
                    }

                },50)
            }else {
                // console.log('图片列表加载完成')
                callBack()

            }

        }

        load(srcList[i])

    }

}
