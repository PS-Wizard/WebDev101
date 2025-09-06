<script>
    import Footer from "$lib/components/Footer.svelte";
    import Navbar from "$lib/components/Navbar.svelte";
</script>

<div
    class="relative h-screen w-screen bg-slate-100 text-black flex flex-col justify-between z-8"
>
    <!-- Overlay content -->
    <Navbar text="AWWWARDS Remake" number={2} />
    <div class="relative z-10 flex flex-col justify-start h-full">
        <!-- Main section -->
        <div class="flex flex-col h-[70vh] gap-6">
            <div class="flex flex-col items-center gap-4">
                <h1
                    class="uppercase text-8xl leading-none tracking-tight clash text-center"
                >
                    Another One
                </h1>

                <p class="text-neutral-500 max-w-4xl text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, quaerat? Eaque doloribus quibusdam ipsam dolore
                    dolorum, iure sint possimus dolorem dignissimos sit neque
                    sunt.
                </p>
                <a
                    href="/"
                    class="px-6 py-3 bg-black text-white uppercase superior"
                >
                    Click Me
                </a>
            </div>
            <img
                src="https://media.tenor.com/HbLdE2e02IAAAAAM/anotha-one-dj-khaled.gif"
                alt="Showcase"
                class="object-fit"
            />
        </div>
    </div>
    <Footer link="https://inkfishnyc.com/work/mcdonalds-24-hour">
        Ink Fish.
    </Footer>
</div>
