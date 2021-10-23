<template>
  <Slide>
    <div class="slide-content layout">
      <sidebar/>

      <div class="video-controls" v-show="playCount > 2">
        <a href="javascript:;" class="video-play" v-show="!playStatus">
          <svg class="icon-play" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 19 23.3" style="enable-background:new 0 0 19 23.3;" xml:space="preserve"><g><path class="st0" d="M0,21.7V1.6c0-1.2,1-2,1.9-1.4l16.4,10.1c1,0.6,1,2.3,0,2.9L1.9,23.2C1,23.7,0,22.9,0,21.7z"/></g></svg>
        </a>
        <a href="javascript:;" class="video-pause" v-show="playStatus">
          <svg class="icon-pause" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 15 23" style="enable-background:new 0 0 15 23;" xml:space="preserve"><path class="st0" d="M3.8,23H1.2C0.5,23,0,22.5,0,21.8V1.2C0,0.5,0.5,0,1.2,0h2.6C4.5,0,5,0.5,5,1.2v20.6C5,22.5,4.5,23,3.8,23z"/><path class="st0" d="M13.8,23h-2.6c-0.7,0-1.2-0.5-1.2-1.2V1.2C10,0.5,10.5,0,11.2,0h2.6C14.5,0,15,0.5,15,1.2v20.6C15,22.5,14.5,23,13.8,23z"/></svg>

        </a>
      </div>
    </div>
  
    <video class="video slide-background" autoplay muted poster="/cover.jpg">
      <source src="/cover.webm" type="video/webm">
      <source src="/cover.mp4" type="video/mp4">
      Your browser doesn't support HTML5 video tag.
    </video>

  </Slide>
</template>

<style scoped>
  .video-controls {
    position: absolute;
    top: var(--space);
    right: var(--space);
  }

  .video-controls a {
    display: table-cell;
    vertical-align: middle;
    background-color: var(--color-dark);
    color: var(--color-light);
    width: 2.5rem;
    height: 2.5rem;
  }

  .video-controls a svg {
    display: block;
    max-width: 30%;
    margin: 0 auto
  }

  .icon-play .st0 { fill: var(--color-light) }
  .icon-pause .st0 { fill: var(--color-light) }

  .sidebar { max-width: 25rem; }

</style>

<script>
export default {
  components: {
    sidebar: () => import('../components/sidebar.vue')
  },

  data: function () {
    return {
      playCount: 1,
      playStatus: true
    }
  },

  mounted: function () {

    let
      self = this,
      video = document.querySelector('.video');

    video.addEventListener('ended', function() {
      self.playCount++;
      if ( self.playCount < 3 ) {
        this.play();
      }
      else {
        this.currentTime = 0.5;
        this.pause();
        self.playStatus = false
      }
    });

    document.querySelector('.video-play').addEventListener('click', function(){
      video.play();
      self.playStatus = true
    })

    document.querySelector('.video-pause').addEventListener('click', function(){
      video.pause();
      self.playStatus = false
    })
  
  }
}
</script>

