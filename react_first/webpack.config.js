const path = require('path');

module.exports = {
    name :'wordrelay-setting',
    mode : 'development',
    devtool :'eval',
    resolve : {
        extensions : ['.js','.jsx']  // 웹팩이 적당히 파일을 불려들어서 client 확장자명을 js 나 jsx 형식으로 읽는다.
    },
    entry: {
        app : ['./client']
    }, //cleint 부터 읽어들인다.

    module:{
        rules:[{

            test:/\.jsx?/, 
            loader:'babel-loader', //jsx 를 인식하게 해준다
            options:{
                presets:[["@babel/preset-env",{
                    targets:{
                        browsers:['> 1% in KR'], //browsers list
                    },
                    debug:true
                }],"@babel/preset-react"],
                plugins:[
                    "@babel/plugin-proposal-class-properties",
                    "react-hot-loader/babel" //재 빌드 라이브러리
                ]
            }
        }],
    },
    output : {
        path:path.join(__dirname, 'dist'), //__dirname <-현재 폴더(react-first)의 dist 폴더를 path 에 합친다. (hot-dev는 내부적으로 app.js 로 빌드해줌)
        filename: 'app.js' 
    }//app.js 로 읽는다 


};