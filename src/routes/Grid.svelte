<script>
  // @ts-nocheck

  import Button from "@smui/button";
  import { updateQuery } from "../api/api";
  import { showDialog, itemToShow, queryValue, pageValue } from "../store";
  import ImageList, {
    Image,
    ImageAspectContainer,
    Item,
    Supporting,
    Label,
  } from "@smui/image-list";
  import Dialog from "./Dialog.svelte";

  export let items;
  let updateResult = "Done";

  const onClickPageUp = async () => {
    updateResult = "";
    pageValue.set($pageValue + 1);
    updateResult = await updateQuery($queryValue, $pageValue);
  };
  const onClickPageDown = async () => {
    updateResult = "";
    pageValue.set($pageValue - 1);
    updateResult = await updateQuery($queryValue, $pageValue);
  };
</script>

{#if updateResult == "Done"}
  <ImageList class="my-image-list-standard">
    {#each $items as item}
      <Item>
        <ImageAspectContainer>
          <Image
            src={item?.links[0].href}
            alt="Image {item?.data[0]?.description}"
            on:click={() => {
              showDialog.set(true);
              itemToShow.set(item);
            }}
          />
        </ImageAspectContainer>
        <Supporting>
          <Label>{item?.data[0]?.description ?? ""}</Label>
        </Supporting>
      </Item>
    {/each}
  </ImageList>
  {#if $showDialog == true}
    <Dialog open={true} />
  {/if}
  <div id="buttons">
    {#if !($pageValue == 1)}
      <Button on:click={() => onClickPageDown()}>Before</Button>
    {/if}
    {#if $items.length > 0}
      <Button on:click={() => onClickPageUp()}>Next</Button>
    {/if}
  </div>
{/if}
{#if updateResult == ""}
  <div class="loadingText">Loading...</div>
{/if}
