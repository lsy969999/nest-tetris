
import Image from 'next/image'

export default async function Home() {
  const test = await fetch('http://localhost:3000/api/test');
  const test2 = await test.json();
  return (
    <main className="">
      <div>
        main {test2.message}
      </div>
    </main>
  )
}
