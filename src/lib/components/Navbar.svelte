<script>
    let { text, number } = $props();
</script>

<nav class="flex justify-between items-center text-black py-4 px-8">
    <div class="text-lg font-semibold uppercase">
        {text}
    </div>
    <div class="text-xl">
        {number}
    </div>
</nav>
