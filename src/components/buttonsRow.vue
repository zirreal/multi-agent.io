<template>
  <div class="buttonsWrapper">
    <slot/>
  </div>
</template>

<script>
export default {
  name: "buttonsRow"
}
</script>

<style scoped>
  .buttonsWrapper {
    margin-top: 47px;
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 27px;
  }
  @media screen and (max-width: 350px) {
    .buttonsWrapper{
      flex-direction: column;
    }
  }
</style>