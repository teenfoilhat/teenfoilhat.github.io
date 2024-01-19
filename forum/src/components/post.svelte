<script lang="ts">
    import type { PostType } from "../types";

    export let post: PostType;
</script>

<article class="post-container">
    <div class="pID">
        {post.id}
    </div>
    <div class="content">
        {post.content}
    </div>
</article>

<style>
    .post-container {
        display: inline-block;
        width: 100%;
        height: fit-content;
        overflow-x: hidden;
        font-family: monospace;
        border: 5px solid black;
    }

    .pID {
        display: inline-block;
    }

    .content {
        display: inline-block;
        height: 100%;
        width: 100%;
        border-top: 5px solid black;
    }
</style>
