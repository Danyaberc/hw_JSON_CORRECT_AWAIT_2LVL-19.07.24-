import http, { createServer } from 'node:http';
import fs from 'node:fs/promises';

const config = {
    port: 8000,
}

let num = 10;

const server = http.createServer(async (req, res) => {
    const { url } = req;

    if (url === '/') {
        const fileRead = await fs.readFile('./index.html', 'utf8')

        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html', 'charset=utf-8')
        res.end(fileRead)
    }
    else if (url === '/main.css'){
        const cssFile = await fs.readFile('./client/main.css', 'utf8')

        res.statusCode = 200;
        res.setHeader('Content-type', 'text/css')
        res.end(cssFile)
    }
    else if (url === '/main.js'){
        const jsFile = await fs.readFile('./client/main.js', 'utf8')

        res.statusCode = 200;
        res.setHeader('Content-type', 'text/javascript')
        res.end(jsFile)
    }
    else if(url === '/bla') {
        const img = await fs.readFile ('./img/01.jpg')

        res.statusCode = 200;
        res.setHeader('Content-type', 'image/jpeg')
        res.end(img)
    }
    else if (url === '/inc'){
        num+=1;

        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html', 'charset=utf-8');
         console.log(num)
        res.end(String(num))
    }
    else if (url === '/dec'){
        num-=1

        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html', 'charset=utf-8');
        console.log(num)
        res.end(String(num))
    }
    else if( url === '/num'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html', 'charset=utf-8');
        console.log(num)
        res.end(String(num))
    }
    else if( url === '/jsonArticle'){
        res.statusCode = 200;
        res.setHeader('Content-type', 'application/json')
        let Article = 
        {
            title:'Стаття ',
            discr: ' Науковий або публіцистичний твір невеликого розміру в збірці, журналі, газеті тощо. Вона є результатом розумового процесу, в якому поєднуються аналіз, структурування, формулювання та висловлення думок.'
        }
        let resArticle = JSON.stringify(Article)
        console.log(resArticle)
        res.end(resArticle)
    }
    else{
        res.statusCode = 404;
        res.setHeader('Content-type', 'text/html', 'charset=utf-8')
        res.end('error')
    }

})

server.listen(config.port)