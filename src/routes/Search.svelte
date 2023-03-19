<script>
  // @ts-nocheck

  import Textfield from "@smui/textfield";
  import Button from "@smui/button";
  import { queryValue, pageValue, initialSearchMade } from "../store";
  import { updateQuery } from "../api/api";

  const runQuery = async () => {
    await updateQuery(query, 1);
    initialSearchMade.set(true);
  };
  let query = "";
</script>

<div id="search-field">
  <Textfield
    bind:value={query}
    label="Enter a query..."
    id="input"
    on:keypress={(e) => {
      if (e?.key === "Enter") {
        queryValue.set(query);
        pageValue.set(1);
        runQuery();
      }
    }}
  />
  <Button on:click={() => runQuery()} id="button" variant="raised"
    >Search</Button
  >
</div>
