const http=require("http")

http.createServer((req,res)=>{
	res.write("ilakata mafiliya")
	res.end()
}).listen(2003)