export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-8 bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-col items-center gap-6 text-center max-w-lg w-full bg-white dark:bg-zinc-900 p-12 rounded-2xl shadow-sm border border-zinc-100 dark:border-zinc-800">
        <div className="w-24 h-24 bg-zinc-200 dark:bg-zinc-700 rounded-full mb-2 flex items-center justify-center text-3xl">
          👋
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50">
          이연우
        </h1>
        <p className="text-lg leading-relaxed text-zinc-600 dark:text-zinc-400">
          안녕하세요! 바이브 코딩을 배우고 있는 대학생입니다. 잘 부탁드립니다.
        </p>
        <div className="h-1 w-12 bg-zinc-200 dark:bg-zinc-700 rounded-full mt-4" />
      </main>
    </div>
  );
}
