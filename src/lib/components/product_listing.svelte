<script>
    import Seller from '#lib/components/seller_listing.svelte';
</script>

<div class="bg-pink-200 min-h-fit rounded-2xl p-2 m-2">
    <h1 class="text-2xl font-bold">Warehouse - Mischief Wednesday</h1>
    <p>Mischief Wednesday is a weekly house, disco and pop dance event at Warehouse Leeds on Somers St.</p>
    <button class="bg-black text-white px-2 py-1 rounded-md mt-4 w-full">Quick Buy</button>
    <div class="bg-white px-2 py-1 rounded-md mt-4">
        <h1 class="text-lg font-bold">Sellers:</h1>
        <Seller/>
        <Seller/>
    </div>
</div>