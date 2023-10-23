import Link from "next/link";

export default async function Home() {
  const test = await fetch('http://localhost:3000/api/test');
  const test2 = await test.json();
  return (
    <main className="">
      <div>
        main {test2.message}
        <Link href={"/room"} >go room</Link>
      </div>
    </main>
  )
}
