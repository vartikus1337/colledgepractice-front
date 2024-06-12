<script setup lang="ts">
import { Ref, inject, onUnmounted, ref } from "vue";
import axios from "axios";

const isLogged = inject("isLogged") as Ref<boolean>;

const isScrollBlocked = ref(false);

const username = ref("");
const password = ref("");
const usernameError = ref<string | null>(null);
const passwordError = ref<string | null>(null);

const popupActive = ref(false);

const validateInput = (): boolean => {
  let isValid = true;

  // Проверка имени пользователя
  if (!username.value || /[<>]/.test(username.value)) {
    usernameError.value =
      "Имя пользователя не должно содержать символы < или >.";
    isValid = false;
  } else {
    usernameError.value = null;
  }

  // Проверка пароля
  if (!password.value || /[<>]/.test(password.value)) {
    passwordError.value = "Пароль не должен содержать символы < или >.";
    isValid = false;
  } else {
    passwordError.value = null;
  }

  return isValid;
};

const handleLogin = async () => {
  if (!validateInput()) {
    return;
  }

  try {
    const response = await axios.post("http://localhost:3000/login", {
      username: username.value,
      password: password.value,
    });
    console.log("Login successful:", response.data);
    isLogged.value = true;
  } catch (error) {
    console.error("Login failed:", error);
  }
};

const blockScroll = () => {
  document.body.style.overflow = "hidden";
  isScrollBlocked.value = true;
};

const unblockScroll = () => {
  document.body.style.overflow = "";
  isScrollBlocked.value = false;
};

const toggleScroll = () => {
  if (isScrollBlocked.value) {
    unblockScroll();
    usernameError.value = "";
    passwordError.value = "";
    username.value = "";
    password.value = "";
    popupActive.value = false;
  } else {
    blockScroll();
  }
};

const AttemptLogin = () => {
  handleLogin();
};

onUnmounted(() => {
  unblockScroll();
});
</script>

<template>
  <button
    class="login__text"
    @click="
      popupActive = true;
      toggleScroll();
    "
  >
    Войти
  </button>
  <Teleport to="body">
    <div
      v-show="popupActive"
      class="popupLogin-bg"
      @click="
        popupActive = false;
        toggleScroll();
      "
    >
      <div class="popupLogin" @click.stop>
        <h1>Login</h1>
        <div class="popupLogin__username">
          <!-- prettier-ignore -->
          <input type="text" v-model="username" placeholder="Имя пользователя" />
          <p v-if="usernameError" class="error">{{ usernameError }}</p>
        </div>
        <div class="popupLogin__password">
          <input type="password" v-model="password" placeholder="Пароль" />
          <p v-if="passwordError" class="error">{{ passwordError }}</p>
        </div>
        <button @click="AttemptLogin">Войти</button>
      </div>
    </div>
  </Teleport>
</template>

<style scoped>
.error {
  color: red;
  font-size: 0.9em;
}

.login__text {
  color: #1e3072;
  font-size: 20px;
}

.popupLogin {
  width: 40%;
  display: flex;
  flex-direction: column;
  align-self: center;
  overflow: hidden;
  background-color: rgb(255, 255, 255);
  border-radius: 2%;
  opacity: 1;
  padding: 30px;
  gap: 30px;
}

.popupLogin__username,
.popupLogin__password {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.popupLogin > * {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
