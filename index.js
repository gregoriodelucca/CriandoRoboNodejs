/*aprendendo criar um conversor com node */

const puppeteer = require('puppeteer');
console.log('Bem vindo ao bot conversor  🤖');

async function robo()
{
    const browser = await puppeteer.launch({ headless: false });
    const page = await browser.newPage();
    const moedaBase = 'dolar';
    const moedaFinal = '${moedaFinal}';
    const qualquerUrl = 'https://www.google.com/search?q=dolar+para+real&sca_esv=581923751&sxsrf=AM9HkKkpdHh9kYWQFWFcwZUqXCxIJJq7WQ%3A1699884599838&source=hp&ei=Ny5SZe7UMICK5OUPiJu62AE&iflsig=AO6bgOgAAAAAZVI8R8KB5ywPrV4dxSUnPYWP8HAgYDAn&ved=0ahUKEwiuzOvNk8GCAxUABbkGHYiNDhsQ4dUDCAo&uact=5&oq=dolar+para+real&gs_lp=Egdnd3Mtd2l6Ig9kb2xhciBwYXJhIHJlYWwyCBAAGIAEGLEDMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAEMgUQABiABDIFEAAYgAQyBRAAGIAESKkhUABYsh5wAHgAkAEAmAGeAaAB1QyqAQQ0LjExuAEDyAEA-AEBwgIHECMYigUYJ8ICBBAjGCfCAgsQABiABBixAxiDAcICCxAAGIoFGLEDGIMBwgIREC4YgAQYsQMYgwEYxwEY0QPCAgsQLhiABBjHARjRA8ICBRAuGIAEwgIOEC4YgAQYsQMYxwEY0QM&sclient=gws-wiz'
    await page.goto(qualquerUrl);
    //await page.screenshot({path: 'example.png'});
    const resultado  = await page.evaluate(()=> {
        return {
            valorMoedaFinal: 
        }
    })
    console.log(`o valor de 1 ${moedaBase} em ${moedaFinal} é ${resultado}`)
   //await browser.close();

}

robo();