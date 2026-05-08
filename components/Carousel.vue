<script>
export default {
  name: "GalleryVertical"
};
</script>

<template>
  <div class="gallery-wrapper">
    <div class="gallery-content">
      <slot />
    </div>
  </div>
</template>

<style scoped>
.gallery-wrapper {
  width: 100%;
  position: relative;
  height: auto;
  overflow: visible;
}

.gallery-content {
  display: flex;
  flex-direction: column;
  gap: 5px; 
  width: 100%;
}

:deep(.embla__slide) {
  flex: 0 0 auto !important;
  width: 100% !important;
  height: auto !important;
  position: relative !important;
  padding-bottom: 0 !important; 
}

:deep(.embla__slide img) {
  position: relative !important;
  top: auto !important;
  left: auto !important;
  width: 100% !important;
  height: auto !important;
  display: block;
}

:deep(.embla__button) {
  display: none !important;
}
</style>