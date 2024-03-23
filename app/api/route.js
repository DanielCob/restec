export const dynamic = 'force-dynamic'
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0'

export async function GET() {
    const res = await fetch('https://localhost:7078/api/register/admin')
    const data = await res.json()
    console.log(data)
    return Response.json(res)
}