//Require FS
const fs = require('fs');

//Require core module http 
const http = require('http');

//Membuat fungsi html
const html = (path, res) => {
    fs.readFile(path, (err, data) => {
        if (err) {
            res.writeHead(404); //404 adalah error
            res.write('Error : page not found'); //Tulisan yang akan muncul apabila terjadi error

        } else {
            res.write(data)
        }
        res.end()
    })
}

//Membuat server
http.createServer((req, res) => {

    const url = req.url;
    console.log(url);

    res.writeHead(200, {
        'Content-Type': 'text/html',
    });

    if (url === '/about') {
        html('./about.html', res)

    } else if (url === '/contact') {
        html('./contact.html', res)

    } else {
        html('./index.html', res)
    }
})

    //Port, yang () adalah host name
    .listen(3000, () => { //Menggunakan port 3000 karena portnya kosong
        console.log('Server is listening on port 3000');
    })
