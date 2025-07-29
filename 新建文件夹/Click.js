/*
 * @Author: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @Date: 2025-07-30 06:10:26
 * @LastEditors: error: error: git config user.name & please set dead value or install git && error: git config user.email & please set dead value or install git & please set dead value or install git
 * @LastEditTime: 2025-07-30 06:30:18
 * @FilePath: \waxre项目\新建文件夹\Click.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
var user = new Map([["waxre060914@hotmail.com","tzj167690"]])

function login(){
	var username = document.getElementById("login-username").value;
	var password = document.getElementById("login-password").value;
	
	if(user.get(username)==password){
		window.location.href="./待开放.html";
	}else{
		alert("用户名或密码错误");
	}
}