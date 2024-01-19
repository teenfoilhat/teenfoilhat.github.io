<script lang="ts">
    import Compose from "../components/compose.svelte";
    import Post from "../components/post.svelte";
    import type { PostType } from "../types";

    export let posts: PostType[] = [];
</script>

<head>
    <title>TeenFoilHat Forum</title>
</head>

<main>
    <aside>
        <pre>
            
             //
            //
           /  \
          /    \ 
         /      \ 
        /        \ 
       —-----------
      |           |
      |          /|
      ( *   *   | /
      |  L      /
      \  ^~^   /\
    (   -          )
  /  |    p          \
 /__ /   p         /  \
  / /    p        /___|

  TEENFOILHAT FORUM

        </pre>
    </aside>

    <section>
        <Compose />

        {#each posts as post (post.id)}
            <Post {post} />
        {/each}
    </section>
</main>

<style>
    main {
        width: 100%;
        height: 98vh;

        display: grid;
        grid-template-columns: 50% 50%;

        grid-column-gap: 0;
        grid-row-gap: 0;

        font-family: monospace;
    }

    pre {
        width: fit-content;
    }
    aside {
        display: flex;
        flex-wrap: wrap;

        justify-content: center;
        align-content: center;
    }
</style>
