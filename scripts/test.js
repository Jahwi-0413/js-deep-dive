const date = new Date();

console.log(date); //2023-12-31T08:35:15.763Z
console.log(date.toString()); //Sun Dec 31 2023 17:35:15 GMT+0900 (대한민국 표준시)
console.log(date.toISOString()); //2023-12-31T08:35:15.763Z
console.log(date.toUTCString()); //Sun, 31 Dec 2023 08:35:15 GMT
console.log(date.toLocaleString("kr")); //2023. 12. 31. 오후 5:36:33
