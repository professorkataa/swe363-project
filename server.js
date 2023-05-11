        // Load HTTP module
        const http = require("http");
        const fs = require('fs');
        
        const server =  http.createServer((req,res) => {
            console.log(req.url, req.method);

        res.setHeader('Content-Type' , 'text/html')

        let path = './dammam sport center/';

        switch(req.url){
            case '/':
                path += 'index.html';
                break;
            case '/academices':
                path += 'academices.html';
                break;
            case '/stadiums':
                path += 'stadiums.html';
                break;
            case '/matches':
                path += 'matches.html';
                break;
            case '/tournaments':
                path += 'tournaments.html';
                break;    
            case '/login':
                path += 'login-user.html';
                break;
            case '/login-admin':
                path += 'login-admin.html';
                break; 
                
        }
        
        fs.readFile(path , (err,data) => {
            if (err){
                console.log(err);
                res.end();
            }else{
                res.write(data);
                res.end();
            }    
        })

        }) ; 

        

        server.listen(3000,'localhost' , () =>{

            console.log('listing to the req')
        })
       