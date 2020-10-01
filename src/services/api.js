import Taro from '@tarojs/taro'
import { HTTP_STATUS } from '../services/status'
import { base } from '../services/config'

const token = ''

export default {
    baseOptions(params,method = 'GET'){
       
        let { url, data } = params
        let contenType = 'application/x-www-form-urlencoded'
        contenType = params.contenType || contenType

        console.log(params,'params')
        
        const option ={
            isShowLoading:false,
            loadingText:'loading....',
            url:base + url,
            data:data,
            method:method,
            header:{'content-type':contenType,'token':token},
            success(res){
                if(res.statusCode === HTTP_STATUS.NOT_FOUND){
                    console.log('api','请求资源不存在')
                }else if(res.statusCode === HTTP_STATUS.BAD_GATEWAY){
                    console.log('api','服务端出现了问题')
                }else if(res.statusCode === HTTP_STATUS.FORBIDDEN){
                    console.log('api','没有权限访问')
                }else if (res.statusCode === HTTP_STATUS.SUCCESS){
                    console.log(res.data)
                }
            },
            error(e){
                console.log('api','请求接口出现问题',e)
            }
        }
        return Taro.request(option)
    },
    get(url, data = ''){
        let option = {url,data}
        return this.baseOptions(option)
    },
    post(url,data,contenType){
        let params = {url,data,contenType}
        return this.baseOptions(params,'POST')
    }
}