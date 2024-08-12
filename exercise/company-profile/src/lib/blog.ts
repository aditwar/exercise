const base_url = 'https://app.contentful.com'
const space_id = 'qdgn5flew5hp'
const token = 'Zvg_68T3Y01hLvAuo4QGvMft7AVM-1DZ8IHhGXrAz80'
import resolveResponse from 'contentful-resolve-response'

export const getBlogs = async () => {
    const res = await fetch(`${base_url}$/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=blog&include=10`, { next: {  revalidate: 10 } })
    const data = await res.json()

    const response = {
        items: data.items,
        includes: data.includes
    };
      
    const items = resolveResponse(response)

    return items
}

export const getBlogSlug = async (slug: string) => {
    const res = await fetch(`${base_url}/spaces/${space_id}/environments/master/entries?access_token=${token}&content_type=blog&include=10&fields.slug`, { next: {  revalidate: 3600 } })
    const data = await res.json()

    const response = {
        items: data.items,
        includes: data.includes
    };
      
    const items = resolveResponse(response)

    return items[0]
}