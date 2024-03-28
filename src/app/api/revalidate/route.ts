
export async function POST(request: Request) {
    // const formData = await request.formData()
    const res = await request.json()
    console.log(res)
    return Response.json({ res })
  }