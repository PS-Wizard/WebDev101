<script>
    let { children, link } = $props();
</script>

<nav class="flex justify-between items-center text-black py-4 px-8 z-1000 text-white">
    <div class="text-lg font-semibold uppercase">
        <a href={link}>
            {@render children()} &nearr;
        </a>
    </div>
</nav>
