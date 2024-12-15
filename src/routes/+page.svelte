<script lang="ts">
  import type { PageData } from './$types'
  export let data: PageData; // load関数から渡されたデータ
</script>

<h1>SvelteKit Example</h1>
<p>
  メッセージ: {data.message}
</p>
