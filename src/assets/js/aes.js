import CryptoJS from 'crypto-js'
function getAesString(data,key,iv){//加密
  var key  = CryptoJS.enc.Utf8.parse(key);
  //alert(key）;
  var iv   = CryptoJS.enc.Utf8.parse(iv);
  var encrypted =CryptoJS.AES.encrypt(data,key,
    {
      iv:iv,
      mode:CryptoJS.mode.CBC,
      padding:CryptoJS.pad.Pkcs7
    });
  return encrypted.toString();    //返回的是base64格式的密文
}
function getDAesString(encrypted,key,iv){//解密
  var key  = CryptoJS.enc.Utf8.parse(key);
  var iv   = CryptoJS.enc.Utf8.parse(iv);
  var decrypted =CryptoJS.AES.decrypt(encrypted,key,
    {
      iv:iv,
      mode:CryptoJS.mode.CBC,
      padding:CryptoJS.pad.Pkcs7
    });
  return decrypted.toString(CryptoJS.enc.Utf8);      //
}
export function getAES(data){ //加密
  var key  = '776f726b2f647967';  //密钥
  var iv   = '';
  var encrypted =getAesString(data,key,iv); //密文
  var encrypted1 =CryptoJS.enc.Utf8.parse(encrypted);
  return encrypted;
}

export function getDAes(data){//解密
  var key  = '776f726b2f647967';  //密钥
  var iv   = '16-Bytes--String';
  // console.log('getDAes(',data,")");
  if(data == null || data == "" || data == undefined) return;
  var decryptedStr =getDAesString(data,key,iv);
  return decryptedStr;
}
