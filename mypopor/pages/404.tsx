import Link from 'next/link'
import Layout from '../components/Layout'

const pageLoadEorrer = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>notFoundError</h1>
    <p>This is the notFoundError page</p>
    <p>
      <Link href="/">
        <button>
         Go home
        </button>
     </Link>
    </p>
  </Layout>
)

export default pageLoadEorrer
