import {Md5} from "ts-md5"

function  GetRandStr(t , k){
    let str = ""+t
    let strK = ''+k
    str = parseInt(str.slice(str.length-1 ))
    return strK.slice( str , str+1 )
}


const getSign = (data , appKey:string) =>{
    //封装sign
    let signData ={
        time:0,
        app_key:1,
        sign:""
    }
    let t = new Date
    let signStr = ""
    signData.time = parseInt(t.getTime()/1000)
    let rangdstr = GetRandStr(signData.time , appKey)
    let sortD = Object.keys(signData).sort()
    sortD.forEach(k =>{
        if( "sign" !== k  ){
            signStr += k+""+signData[k]
        }
    })
    signStr += rangdstr
    console.log("signStr" , signStr.toLocaleUpperCase( ))
    signData.sign  = Md5.hashStr (signStr.toLocaleUpperCase())
    return Object.assign(signData,data )
}


export default getSign
