var http = require('http');
var fs = require('fs');

http.createServer( function(req, res){

    //read file
    fs.readFile('demofile1.html', function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });

    //create file have a content
    fs.appendFile('mynewfile1.txt', 'Hello Content!', function(err){
        if(err) throw err;
        console.log('Saved!');
    });

    //create empty file
    fs.appendFile('mynewfile2.txt','w', function(err, file){
        if(err) throw err;
        console.log('Saved!');
    });

    //create new file using writeFile() method
    fs.writeFile('mynewfile3.txt', 'Hello Content!', function(err){
        if(err) throw err;
        console.log('Saved!');
    });

    //update file
    fs.appendFile('mynewfile1.txt', 'This is my text.', function(err){
        if(err) throw err;
        console.log('Updated!');
    });

    //replace the content
    fs.writeFile('mynewfile3.txt', 'This is my text', function(err){
        if(err) throw err;
        console.log('Replaced!');
    });

    //delete file
    fs.unlink('mynewfile2.txt', function(err){
        if(err) throw err;
        console.log('File deleted!');
    });
}).listen(8000);