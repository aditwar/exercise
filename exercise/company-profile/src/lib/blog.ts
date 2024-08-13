const base_url = process.env.BASE_URL_CONTENTFUL
const space_id = process.env.SPACE_ID_CONTENTFUL
const token = process.env.TOKEN_CONTENFUL
import resolveResponse from 'contentful-resolve-response'

export const getBlogs = async () => {
    const res = await fetch(`https://cdn.contentful.com/spaces/qdgn5flew5hp/environments/master/entries?access_token=Zvg_68T3Y01hLvAuo4QGvMft7AVM-1DZ8IHhGXrAz80&content_type=blog&include=10`, { next: {  revalidate: 10 } })
    const data = await res.json()

    const response = {
        items: data.items,
        includes: data.includes
    };
      
    const items = resolveResponse(response)

    return items
}

export const getBlogSlug = async (slug: string) => {
    const res = await fetch(`https://cdn.contentful.com/spaces/qdgn5flew5hp/environments/master/entries?access_token=Zvg_68T3Y01hLvAuo4QGvMft7AVM-1DZ8IHhGXrAz80&content_type=blog&include=10&fields.slug`, { next: {  revalidate: 3600 } })
    const data = await res.json()

    const response = {
        items: data.items,
        includes: data.includes
    };
      
    const items = resolveResponse(response)

    return items[0]
}