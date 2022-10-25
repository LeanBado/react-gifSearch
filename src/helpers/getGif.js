

export const getGif = async(categoria)=>{
    const url = `http://api.giphy.com/v1/gifs/search?api_key=W4sXfPfjFfOu2nt1XvSitQnsANC47Xqx&q=${categoria}&limit=5`
    const resp = await fetch(url)
    const {data} = await resp.json()
    const gif = data.map(gif =>{
        return {
            id: gif.id,
            url: gif.images.downsized_medium.url,
            title: gif.title
        }
    })
 
    return gif

}
