<script setup lang="ts">
import { ref } from "vue"
import BottomMask from "@/components/premade/BottomMask.vue"
import Card from "@/components/layout/Card.vue"

const audio = new Audio("/audioTest.mp3")
const messageText = ref("Start the Experience")

const playAudio = () => {
  messageText.value = "Get Rickrolled mf"
  audio.play()
}
</script>

<template>
  <bottom-mask />
  <div class="contentView">
    <card>
      <h1>This is a private beta.</h1>
      <p>This is an experimental audiovisual experience which you've been invited to test.</p>
    </card>

    <button @click="playAudio">{{ messageText }}</button>
  </div>
</template>
