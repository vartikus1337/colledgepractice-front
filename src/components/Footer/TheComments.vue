<script setup lang="ts">
import { Comment, ref } from "vue";
import axios from "axios";

interface Comment {
  username: string;
  text: string;
}

const popupActive = ref(false);
const isScrollBlocked = ref(false);
const comments = ref<Comment[]>([]);

const toggleScroll = () => {
  if (isScrollBlocked.value) {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }
  isScrollBlocked.value = !isScrollBlocked.value;
};

const handleGetComments = async () => {
  try {
    const response = await axios.get("http://localhost:3000/comments");
    comments.value = response.data;
  } catch (error) {
    console.error("Get comments failed:", error);
  }
};

const openPopup = () => {
  popupActive.value = true;
  handleGetComments();
  toggleScroll();
};

const closePopup = () => {
  popupActive.value = false;
  toggleScroll();
};
</script>

<template>
  <button @click="openPopup">Отзывы</button>
  <Teleport to="body">
    <div v-show="popupActive" class="popupComments-bg" @click="closePopup">
      <div class="popupComments" @click.stop>
        <h1>Комментарии</h1>
        <li v-for="(comment, index) in comments" :key="index">
          <strong> {{ comment.username }} </strong>: {{ comment.text }}
        </li>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
button {
  font-style: normal;
  font-weight: 400;
  font-size: 12px;
  line-height: 14px;
  color: rgba(0, 0, 0, 0.5);
}

.popupComments {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-self: center;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  border-radius: 2%;
  padding: 30px;
  gap: 30px;
}

[class^="popupSendComment__"] {
  display: flex;
  flex-direction: column;
  gap: 10px;
}

textarea {
  resize: vertical;
}

li {
  list-style: none;
}
</style>
