module.exports = function(app){
	let fs = require('fs')
	
	fs.readdir(__dirname+'/views',(err,files)=>{
		let pages = [];
			files.forEach(file =>{
				let exist = file.indexOf('.ejs')
				if(exist>0){
					let pagename = file.split('.ejs','1')
					pages.push(pagename)
					let url = '/'+pagename+'Admin'
					app.get(url,(req,res)=>{
						res.render(pagename+'',{error: null,err: [],login:'Admin',data:'Data lel'})
					})
					//console.log(url)
				}
			})
			app.get('/admin',function(req,res){
				res.render('admin/admin',{strony: pages});
			});
		})




	
}