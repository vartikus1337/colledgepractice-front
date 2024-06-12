<script setup lang="ts">
import { Ref, inject, onUnmounted, ref } from "vue";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";

const isLogged = inject("isLogged") as Ref<boolean>;

const isScrollBlocked = ref(false);

const username = ref("");
const password = ref("");
const passwordTwo = ref("");
const mail = ref("");
const usernameError = ref<string | null>(null);
const passwordError = ref<string | null>(null);
const passwordTwoError = ref<string | null>(null);
const mailError = ref<string | null>(null);

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

  // Проверка повторного пароля
  if (password.value !== passwordTwo.value) {
    passwordTwoError.value = "Пароли не совпадают.";
    isValid = false;
  } else {
    passwordTwoError.value = null;
  }

  // Проверка email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(mail.value)) {
    mailError.value = "Введите корректный email.";
    isValid = false;
  } else {
    mailError.value = null;
  }

  return isValid;
};

const handleRegistration = async () => {
  if (!validateInput()) {
    return;
  }

  try {
    const id = uuidv4();
    const response = await axios.post("http://localhost:3000/register", {
      username: username.value,
      password: password.value,
      mail: mail.value,
      id: id,
    });
    console.log("Registration successful:", response.data);
    isLogged.value = true;
  } catch (error) {
    console.error("Registration failed:", error);
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
  } else {
    blockScroll();
  }
};

const AttemptRegistration = () => {
  popupActive.value = false;
  handleRegistration();
  usernameError.value = "";
  passwordError.value = "";
  passwordTwoError.value = "";
  mailError.value = "";
  username.value = "";
  password.value = "";
  passwordTwo.value = "";
  mail.value = "";
  unblockScroll();
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
    Зарегистрироваться
  </button>
  <Teleport to="body">
    <div
      v-show="popupActive"
      class="popupRegistration-bg"
      @click="
        popupActive = false;
        toggleScroll();
      "
    >
      <div class="popupRegistration" @click.stop>
        <h1>Регистрация</h1>
        <div class="popupRegistration__username">
          <!-- prettier-ignore -->
          <input type="text" v-model="username" placeholder="Имя пользователя" />
          <p v-if="usernameError" class="error">{{ usernameError }}</p>
        </div>
        <div class="popupRegistration__password">
          <input type="password" v-model="password" placeholder="Пароль" />
          <p v-if="passwordError" class="error">{{ passwordError }}</p>
        </div>
        <div class="popupRegistration__password">
          <!-- prettier-ignore -->
          <input type="password" v-model="passwordTwo" placeholder="Пароль для подтверждения" />
          <p v-if="passwordTwoError" class="error">{{ passwordTwoError }}</p>
        </div>
        <div class="popupRegistration__mail">
          <input type="email" v-model="mail" placeholder="почта" />
          <p v-if="mailError" class="error">{{ mailError }}</p>
        </div>
        <button @click="AttemptRegistration">Создать аккаунт</button>
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

.popupRegistration-bg {
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.35);
  z-index: 1;
}

.popupRegistration {
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

.popupRegistration > * {
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
