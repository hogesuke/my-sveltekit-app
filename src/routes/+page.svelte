<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData; // load関数から渡されたデータ
</script>

<h1 class="text-4xl font-bold text-center text-blue-600 mt-10">
  SvelteKit Example
</h1>
<p>
  メッセージ: {data.message}
</p>
<p>
  Date: {data.serverTime}
</p>

