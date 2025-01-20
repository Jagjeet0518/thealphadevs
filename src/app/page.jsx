const Page = () => {
  return (
    <main className="h-screen w-screen flex flex-col items-center justify-center">
      <div className="flex max-md:flex-col items-center justify-center gap-4 md:gap-8">
        <img src="/alpha.png" alt="The Alpha Developers" className="size-32 rounded-full" />
        <h1 className="text-8xl font-bold text-white mb-4 font-mono">TheAlphaDevs</h1>
      </div>
      <p className="text-center text-white/75 text-2xl font-medium mt-8 font-mono">
        Your Search Ends Here.
      </p>
    </main>
  )
}

export default Page