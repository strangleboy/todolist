var AipSpeechClient = require('baidu-aip-sdk').speech

// 设置APPID/AK/SK
var APP_ID = '19087311'
var API_KEY = '0k0OGhAb86tEzTRR9ZZoYljy'
var SECRET_KEY = 'B1dnUk5WCANqWUyRus6gpm4dzT6ZVjYt'

// 新建一个对象，建议只保存一个对象调用服务接口
var client = new AipSpeechClient(APP_ID, API_KEY, SECRET_KEY)
console.log(client)
// var HttpClient = require('baidu-aip-sdk').HttpClient

// // 设置request库的一些参数，例如代理服务地址，超时时间等
// // request参数请参考 https://github.com/request/request#requestoptions-callback
// HttpClient.setRequestOptions({ timeout: 5000 })

// // 也可以设置拦截每次请求（设置拦截后，调用的setRequestOptions设置的参数将不生效）,
// // 可以按需修改request参数（无论是否修改，必须返回函数调用参数）
// // request参数请参考 https://github.com/request/request#requestoptions-callback
// HttpClient.setRequestInterceptor(function (requestOptions) {
//   // 查看参数
//   console.log(requestOptions)
//   // 修改参数
//   requestOptions.timeout = 5000
//   // 返回参数
//   return requestOptions
// })
