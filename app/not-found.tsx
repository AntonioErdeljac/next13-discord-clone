import dynamic from 'next/dynamic'

const Scene = dynamic(() => import('@/components/notfoundpage/Scene'), {
    ssr: false,
})

export default function Home() {
  return (
    <main className="relative h-screen"> 
        <Scene />
    </main>
  );
}