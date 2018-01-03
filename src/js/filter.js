/**
 * Created by junji on 2017/9/30.
 */

export default {
    'category':function (value) {
        let result = value;
        switch (value){
            case 'portrait':
                result = '人 像';
                break;
            case 'landscape':
                result = '风 景';
                break;
            case 'building':
                result = '建 筑';
                break;
            case 'blackAndWhite':
                result = '黑 白';
                break;
        }
        return result;

    }

}