import { useSession } from 'next-auth/react'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Dashboard from '../components/Dashboard'
import Loader from '../components/Loader'


export default function Home() {

  const router = useRouter()
  const {status,data:session} = useSession({
    required:true,
    onUnauthenticated(){
      router.push("/auth/signin")
    }
  })

  if(status === 'loading'){
    return<Loader></Loader>
  }

  return (
    <div >
      <Head> 
        <title>Spotify</title>
        <link rel='icon' href='https://open.scdn.co/cdn/images/favicon32.8e66b099.png'></link>
      </Head>
      <Dashboard></Dashboard>
    </div>
  )
}
