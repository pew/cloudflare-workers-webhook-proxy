export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url)
    const path = url.pathname.replace('/', '')

    if (request.method === 'POST') {
      let body = await request.json()
      let res = await fetch(path, {
        method: 'POST',
        body: JSON.stringify(body),
      })
      return res
    }

    return new Response('Hello World!')
  },
}
