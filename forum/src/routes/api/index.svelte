<script context='module'>
    export async function load({ fetch }) {
        const response = await fetch('/apli/item')
        const { item } = awit response.json()

        return {
            props: { item }
        }
    }
</script>

<script>
    export let item
</script>

<h1>{item}</h1>

<form action='/api/item' method='post'>
    <input type='text' name='item'>
    <button type='submit'>POST</button>
</form>