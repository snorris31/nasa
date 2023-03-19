<script>
  import Dialog, { Header, Title, Content, Actions } from "@smui/dialog";
  import IconButton from "@smui/icon-button";
  import { showDialog, itemToShow } from "../store";

  export let open = true;

  function createVideoUrl(url, videotitle) {
    let removecollection = url?.substring(0, url.length - 15);
    return removecollection + videotitle + "~orig.mp4";
  }
</script>

<Dialog
  bind:open
  fullscreen
  aria-labelledby="fullscreen-title"
  aria-describedby="fullscreen-content"
>
  <Header>
    <Title id="fullscreen-title">{$itemToShow.data[0].title}</Title>
    <IconButton class="material-icons" on:click={() => showDialog.set(false)}
      >x</IconButton
    >
  </Header>
  <div>
    <Content id="fullscreen-content itemContent">
      {#if $itemToShow.data[0].media_type == "video"}
        <video width="320" height="240" controls>
          <source
            src={createVideoUrl($itemToShow.href, $itemToShow.data[0].nasa_id)}
          />
          <track kind="captions" />
        </video>
      {/if}
      {#if $itemToShow.data[0].media_type != "video"}
        <img src={$itemToShow?.links[0].href} alt={""} loading={"eager"} />
      {/if}
      <div>Media Type: {$itemToShow.data[0].media_type}</div>
      <div>
        Description: {$itemToShow.data[0].description ?? "No description"}
      </div>
      <div>Date Created: {$itemToShow.data[0].date_created ?? "No date"}</div>
    </Content>
  </div>
</Dialog>
