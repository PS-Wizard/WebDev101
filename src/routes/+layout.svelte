<script lang="ts">
    import { onMount } from "svelte";
    import "../app.css";
    import {
        afterNavigate,
        beforeNavigate,
        goto,
        onNavigate,
    } from "$app/navigation";
    import { gsap } from "gsap";
    let { children } = $props();
    let blocks: { x: number; y: number; w: number; h: number }[] = $state([]);
    let divBlocks: HTMLElement[] = $state([]);
    onMount(() => {
        const cols = 5;
        const rows = 5;
        const blockW = window.innerWidth / cols;
        const blockH = window.innerHeight / rows;

        blocks = [];
        for (let y = 0; y < rows; y++) {
            for (let x = 0; x < cols; x++) {
                blocks.push({
                    x: x * blockW,
                    y: y * blockH,
                    w: blockW,
                    h: blockH,
                });
            }
        }
    });

    onNavigate((navigation) => {
        if (navigation.type == "link") {
        }
    });

    beforeNavigate(async (nav) => {
        if (nav.type === "link") {
            nav.cancel();
            await gsap.to(divBlocks, {
                height: (i) => blocks[i].h,
                duration: 0.5,
                stagger: { each: 0.02, from: "random" },
                pointerEvents: "auto",
                onComplete: () => {
                    if (nav.to) {
                        goto(nav.to.url);
                    }
                },
            });
        }
    });

    afterNavigate(async () => {
        gsap.to(divBlocks, {
            height: 0,
            stagger: { each: 0.02, from: "random" },
            duration: 0.5,
            pointerEvents: "none",
        });
    });
</script>

<div>
    {#each blocks as block, i}
        <div
            class="absolute bg-black z-10"
            style="
                left: {block.x}px;
                top: {block.y}px;
                width: {block.w}px;
                height: 0px; 
                overflow: hidden;
                pointer-events: none; 
            "
            bind:this={divBlocks[i]}
        ></div>
    {/each}
</div>
<div class="container">
    <div class="absolute flex justify-center items-center">
        {@render children()}
    </div>
</div>
