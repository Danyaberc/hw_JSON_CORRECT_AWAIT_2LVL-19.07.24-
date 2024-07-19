console.log('IT`S WORK')

const render = async() =>{
    const root = document.querySelector('.counter')

    const inc = root.querySelector('.inc')
    const dec = root.querySelector('.dec')
    const num = root.querySelector('.num')
    const articleTxt = root.querySelector('.article')
    const btnTxt = root.querySelector('.check')

    const { data } = await axios.get('/num')
    num.innerHTML = data
    
    const newRes = await axios.get('/num',()=>{
        num.innerHTML = newRes.data
    })
    
    inc.addEventListener('click', async() =>{
        const res =  await axios.get('/inc')
        num.innerHTML = res.data
    })

    dec.addEventListener('click', async() =>{
        const res = await axios.get('/dec')
        num.innerHTML = res.data
    })


     btnTxt.addEventListener('click', async (req,res) => {
        const info = await axios.get('/jsonArticle')
        
        articleTxt.innerHTML = `${info.data.title} <br>${info.data.discr}`
        
    })

    console.log(data)
}

render()