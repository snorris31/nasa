<script>
  import { items } from "../store";
  import Grid from "./Grid.svelte";
  import Search from "./Search.svelte";
</script>

<head />
<body>
  <div style={"float: right; padding-right: 100px; padding-top: 50px"}>
    <h8>Image and Video Search</h8>
    <img
      src="nasaicon.png"
      style={"height: 100px; width: 100px;"}
      alt={"nasa icon"}
    />
  </div>
  <div style={"padding-top: 200px"}>
    <Search />
    <Grid {items} />
  </div>
</body>
