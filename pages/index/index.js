//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    goes: [
	      {
	        id: 1,
		 	name: '面包',
		 	dis: 'xxx',
		 	price: 0,
			ad: '+',
         	de: '-',
           namy: 0
	       },
	      {
		    id: 2,
		    name: '牛奶',
		    dis: 'yyy',
		    price: 0,
		    ad: '+',
        	de: '-',
          namy: 0
	       }
        ],
    goesList: [0, 0],
    tatolOfCut: 0,
 },
 coun: function(event) {
   //当前商品在列表的索引
   let index = Number(event.target.id) - 1;
   //调用商品类的add方法
   this.data.goesList[index] += 1;
   const length = this.data.goes.length;
   let sum = 0;
   for(let a = 0; a < length; a ++) {
     sum += this.data.goesList[a];
     }
   this.data.tatolOfCut = sum;
   this.setData({
     tatolOfCut: this.data.tatolOfCut
   });
},
  del: function(event) {
    //当前商品在列表的索引
    let index = Number(event.target.id) - 1;
    //调用商品类的del方法
    this.data.goesList[index] -= 1;
    //循环列表
    const length = this.data.goes.length;
    let sum = 0;
    for (let a = 0; a < length; a++) {
      sum += this.data.goesList[a];
    }
    this.data.tatolOfCut = sum;
    this.setData({
      tatolOfCut: this.data.tatolOfCut
    })
}
})
