import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { getBookBySlug, getBooks } from "@/data/books"

export const revalidate = 60

export default async function Page({ params }: { params: { slug: string } }) {
  const book = await getBookBySlug(params.slug)
  if (!book) return notFound()

  return (
    <main>
      <Header />
      <section className="page-section">
        <div className="page-container" style={{maxWidth:980}}>
          <div style={{color:"#D6AF66",fontSize:13,textTransform:"uppercase",letterSpacing:1,marginBottom:14}}>{book.category}</div>
          <h1 style={{margin:"0 0 10px",color:"#F7F0E3",fontFamily:"Georgia,Times New Roman,serif",fontSize:64,lineHeight:.98,fontWeight:500}}>{book.title}</h1>
          <div style={{color:"rgba(243,234,216,0.7)",marginBottom:18,fontSize:18}}>Par {book.author}</div>
          <p style={{color:"rgba(243,234,216,0.88)",fontSize:22,lineHeight:1.6,margin:"0 0 28px"}}>{book.excerpt}</p>
          <div style={{borderRadius:26,border:"1px solid rgba(255,255,255,.08)",background:"linear-gradient(180deg, rgba(13,19,47,.82), rgba(9,13,30,.88))",boxShadow:"0 30px 80px rgba(0,0,0,.28), inset 0 1px 0 rgba(255,255,255,.04)",padding:28}}>
            <p style={{margin:0,color:"rgba(243,234,216,0.82)",fontSize:18,lineHeight:1.8}}>{book.description}</p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export async function generateStaticParams() {
  const books = await getBooks()
  return books.map((book) => ({ slug: book.slug }))
}
