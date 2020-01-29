!function(){
    function writeCode(prefix, code, callback) {
        let container = document.querySelector('#code')
        let styleTag = document.querySelector('#styleTag')
        let n = 0
        let interval = setInterval(() => {
            n += 1
            container.innerHTML = code.substring(0, n)
            styleTag.innerHTML = code.substring(0, n)
            container.scrollTop = container.scrollHeight
            if(n >= code.length) {
                window.clearInterval(interval)
                callback && callback()
            }
        }, 20);
    }
    let code = `
    /*
     * 首先，绘制皮卡丘的背景图
     */
    .preview {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        background-color: #fee433;
        height: 100%;
        border: 1px solid green;
    }
    .wrapper {
        width: 100%;
        height: 180px;
        position: relative;
    }
    /*
     * 绘制皮卡丘的鼻子
     */
    .wrapper .nose {
        width: 0;
        height: 0;
        border-width: 12px;
        border-style: solid;
        border-radius: 11px;
        border-color: black transparent transparent;
        position: absolute;
        left: 50%;
        transform: translateX(-50%);
        top: 28px;
    }
    /*
     * 绘制皮卡丘的眼睛
     */
    .wrapper .eye{
        width: 50px;
        height: 50px;
        background-color: #2e2e2e;
        position: absolute;
        border-radius: 50%;
    }
    /*
     * 绘制皮卡丘的眼珠子
     */
    .wrapper .eye::before{
        content: '';
        width: 24px;
        height: 24px;
        display: block;
        background-color: white;
        position: absolute;
        border: 2px solid black;
        border-radius: 50%;
        left: 10px;
        top: 1px;
    }
    /*
     * 左眼在左边
     */
    .wrapper .eye.left {
        right: 50%;
        margin-right: 70px;
    }
    /*
     * 右眼在右边
     */
    .wrapper .eye.right {
        left: 50%;
        margin-left: 70px;
    }
    /*
     * 绘制皮卡丘的脸
     */
    .wrapper .face {
        width: 68px;
        height: 68px;
        border-radius: 50%;
        position: absolute;
        background-color: #fc0d1c;
        border: 2px solid black;
        top: 85px
    }
    /*
     * 左脸（腮）在左边
     */
    .wrapper .face.left {
        right: 50%;
        margin-right: 96px;
    }
    /*
     * 右脸（腮）在右边
     */
    .wrapper .face.right {
        left: 50%;
        margin-left: 96px;
    }
    /*
     * 绘制上嘴唇
     */
    .wrapper .upperLip {
        width: 60px;
        height: 25px;
        background-color: #fee433;
        border: 3px solid black;
        position: absolute;
        top: 52px;
    }
    .wrapper .upperLip.left {
        right: 50%;
        border-top: none;
        border-right: none;
        border-bottom-left-radius: 40px 25px;
        transform: rotate(-31deg);
    }
    .wrapper .upperLip.right {
        left: 50%;
        border-top: none;
        border-left: none;
        border-bottom-right-radius: 40px 25px;
        transform: rotate(30deg);
    }
    /*
     * 绘制舌头
     */
    .wrapper .lowerLip-wrapper {
        left: 50%;
        transform: translateX(-50%);
        bottom: 0px;
        width: 100px;
        height: 120px;
        position: absolute;
        overflow: hidden;
    }
    .wrapper .lowerLip-wrapper .lowerLip {
        width: 100px;
        height: 2000px;
        background-color: #990513;
        border-radius: 100px/500px;
        border: 2px solid black;
        position: absolute;
        bottom: 0px;
        overflow: hidden;
    }
    .wrapper .lowerLip-wrapper .lowerLip::after {
        content: '';
        background-color: #fc4a62;
        width: 100px;
        height: 100px;
        position: absolute;
        bottom: -5px;
        border-radius: 50%;
    }
    `
    writeCode('', code)
}.call()