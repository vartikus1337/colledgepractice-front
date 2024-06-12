<script setup lang="ts">
import { reactive, ref } from "vue";
import axios from "axios";

const popupActive = ref(false);
const isScrollBlocked = ref(false);

let user = reactive({
  name: "",
  mail: "",
  error: "",
});

let comment = reactive({
  text: "",
  error: "",
});

const toggleScroll = () => {
  if (isScrollBlocked.value) {
    document.body.style.overflow = "";
  } else {
    document.body.style.overflow = "hidden";
  }
  isScrollBlocked.value = !isScrollBlocked.value;
};

const validateInput = (): boolean => {
  let isValid = true;

  if (!user.name || /[<>]/.test(user.name)) {
    user.error = "Имя пользователя не должно содержать символы < или >.";
    isValid = false;
  }

  if (!comment.text || /[<>]/.test(comment.text)) {
    comment.error = "Текст не должен содержать символы < или >.";
    isValid = false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(user.mail)) {
    user.error = "Введите корректный email.";
    isValid = false;
  }

  return isValid;
};

const handleSend = async () => {
  if (!validateInput()) {
    return;
  }
  try {
    const response = await axios.post("http://localhost:3000/new_comment", {
      username: user.name,
      mail: user.mail,
      text: comment.text,
    });
    console.log("Send comment successful:", response.data);
    Reset();
  } catch (error) {
    console.error("Send comment failed:", error);
  }
};

const Reset = () => {
  user = { name: "", mail: "", error: "" };
  comment = { text: "", error: "" };
};
</script>

<template>
  <button
    @click="
      popupActive = true;
      toggleScroll;
    "
  >
    Оставить отзыв
  </button>
  <Teleport to="body">
    <div
      v-show="popupActive"
      class="popupSendComment-bg"
      @click="
        popupActive = false;
        toggleScroll;
      "
    >
      <div class="popupSendComment" @click.stop>
        <h1>Оставить отзыв</h1>
        <div class="popupSendComment__check">
          <!-- prettier-ignore -->
          <input type="text" v-model="user.name" placeholder="Имя пользователя" />
          <!-- prettier-ignore -->
          <input type="text" v-model="user.mail" placeholder="Почта (не будет показываться)" />
          <p v-if="user.error != ''" class="error">{{ user.error }}</p>
        </div>
        <div class="popupSendComment__check-comment">
          <textarea v-model="comment.text" />
          <p v-if="comment.error != ''" class="error">{{ comment.error }}</p>
        </div>
        <button @click="handleSend">Оставить комментарий</button>
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

.popupSendComment {
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
</style>
