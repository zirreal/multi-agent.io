<template>
  <div class="icon-wrapper">
    <svg v-if="type === 'paper'" id="Компонент_4_1" data-name="Компонент 4 – 1" xmlns="http://www.w3.org/2000/svg" width="29" height="38" viewBox="0 0 29 38">
      <g id="Прямоугольник_254" data-name="Прямоугольник 254" fill="none" stroke="#000" stroke-width="1">
        <rect width="29" height="38" stroke="none"/>
        <rect x="0.5" y="0.5" width="28" height="37" fill="none"/>
      </g>
      <path id="Контур_942" data-name="Контур 942" d="M11296.546,4072.27h20.916" transform="translate(-11292.679 -4058.941)" fill="none" stroke="#000" stroke-width="1"/>
      <path id="Контур_946" data-name="Контур 946" d="M11296.546,4072.27h20.916" transform="translate(-11292.679 -4064.512)" fill="none" stroke="#000" stroke-width="1"/>
      <path id="Контур_943" data-name="Контур 943" d="M11296.546,4072.27h20.916" transform="translate(-11292.679 -4053.37)" fill="none" stroke="#000" stroke-width="1"/>
      <path id="Контур_944" data-name="Контур 944" d="M11296.546,4072.27h20.916" transform="translate(-11292.679 -4047.799)" fill="none" stroke="#000" stroke-width="1"/>
      <path id="Контур_945" data-name="Контур 945" d="M11296.546,4072.27h20.916" transform="translate(-11292.679 -4042.228)" fill="none" stroke="#000" stroke-width="1"/>
    </svg>
  </div>
</template>

<script>
export default {
  name: "Icon",
  props: ['type']
}
</script>

<style scoped>
  .icon-wrapper {
    display: flex;
    align-items: center;
    justify-content: center;
  }
</style>