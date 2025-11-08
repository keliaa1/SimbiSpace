import Image from "next/image";

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <h1 className="text-4xl font-bold text-zinc-900 dark:text-zinc-50">
        Welcome to SimbiSpace's corner on the internet!!!!! <br/>  What would you like to visit?<br />
        <a href="">View Portfolio</a><br />
        <a href="">Visit Blog</a>
      </h1>
    </div>
  );
}
