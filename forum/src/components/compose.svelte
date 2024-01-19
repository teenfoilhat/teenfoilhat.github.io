<script lang="ts">
    let tweet = "";
    let maxCharacters = 1000;

    $: charactersLeft = maxCharacters - tweet.length;
</script>

<div class="compose">
    <form action="/home" method="post" autocomplete="off">
        <input
            aria-label="Enter your Tweet"
            bind:value={tweet}
            name="tweet"
            placeholder="Post Something"
            type="text"
        />
        <button
            class:error={charactersLeft < 0}
            disabled={charactersLeft <= 0}
            type="submit"
        >
            {charactersLeft === maxCharacters ? "Post" : charactersLeft}
        </button>
    </form>
</div>

<style>
    .compose {
        display: grid;
        grid-template-columns: min-content 1fr;
        align-items: center;
        gap: var(--spacing-16);
        padding: var(--spacing-16) var(--spacing-24);
        border-bottom: 1px solid var(--color-border-primary);
    }

    form {
        display: flex;
        align-items: center;
        gap: 16px;
    }

    input {
        color: black;
        background-color: transparent;
    }

    button {
        min-width: 80px;
        padding: 16px;
    }

    .error {
        color: red;
    }
</style>
