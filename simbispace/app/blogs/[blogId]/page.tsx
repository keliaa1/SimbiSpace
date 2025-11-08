export default async function blogs({params}:{params: Promise< {blogId: string}>}) {
    const blogId=  (await params).blogId
    return (
        <div>
            <h1 className="font-bold text-5xl">Blog Number{blogId}</h1>
        </div>
    );
}
