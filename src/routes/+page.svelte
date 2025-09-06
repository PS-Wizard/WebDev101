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
                    Awwwards <br /> Remake 02
                </h1>

                <p class="text-neutral-500 max-w-4xl text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Doloribus, quaerat? Eaque doloribus quibusdam ipsam dolore
                    dolorum, iure sint possimus dolorem dignissimos sit neque
                    sunt.
                </p>
                <a
                    href="/anotherPage"
                    class="px-6 py-3 bg-black text-white uppercase superior"
                >
                    Click Me
                </a>
            </div>
            <img
                src="https://images.unsplash.com/photo-1488972685288-c3fd157d7c7a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Showcase"
                class="object-fit"
            />
        </div>
    </div>
    <Footer link="https://inkfishnyc.com/work/mcdonalds-24-hour">
        Ink Fish.
    </Footer>
</div>
