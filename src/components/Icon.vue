<template>
  <div class="icon-wrapper">
    <svg v-if="type === 'paper'" data-name="Компонент 4 – 1" xmlns="http://www.w3.org/2000/svg" width="29" height="38" viewBox="0 0 29 38">
      <g data-name="Прямоугольник 254" fill="none" stroke="#000" stroke-width="1">
        <rect width="29" height="38" stroke="none"/>
        <rect x="0.5" y="0.5" width="28" height="37" fill="none"/>
      </g>
      <path data-name="Контур 942" d="M11296.546,4072.27h20.916" transform="translate(-11292.679 -4058.941)" fill="none" stroke="#000" stroke-width="1"/>
      <path data-name="Контур 946" d="M11296.546,4072.27h20.916" transform="translate(-11292.679 -4064.512)" fill="none" stroke="#000" stroke-width="1"/>
      <path data-name="Контур 943" d="M11296.546,4072.27h20.916" transform="translate(-11292.679 -4053.37)" fill="none" stroke="#000" stroke-width="1"/>
      <path data-name="Контур 944" d="M11296.546,4072.27h20.916" transform="translate(-11292.679 -4047.799)" fill="none" stroke="#000" stroke-width="1"/>
      <path data-name="Контур 945" d="M11296.546,4072.27h20.916" transform="translate(-11292.679 -4042.228)" fill="none" stroke="#000" stroke-width="1"/>
    </svg>
    <svg v-if="type === 'success'" xmlns="http://www.w3.org/2000/svg" width="32.973" height="32.973" viewBox="0 0 32.973 32.973">
      <path data-name="Контур 947" d="M23.774,11.255a1.288,1.288,0,0,1,0,1.822l-8.641,8.641a1.288,1.288,0,0,1-1.822,0L9.2,17.6a1.288,1.288,0,0,1,1.821-1.821l3.2,3.2,7.73-7.73A1.288,1.288,0,0,1,23.774,11.255Zm9.2,5.231A16.487,16.487,0,1,1,16.487,0,16.478,16.478,0,0,1,32.973,16.487Zm-2.576,0A13.911,13.911,0,1,0,16.487,30.4,13.9,13.9,0,0,0,30.4,16.487Z" fill="#0cb977"/>
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
    align-items: center;
    justify-content: center;
  }
</style>