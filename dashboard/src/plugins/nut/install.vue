<script setup lang="ts">
import { reactive } from "vue";

import SharedLinks from "./users/SharedLinks.vue";
import { EMAIL_VALIDATOR } from "../../components/form";

interface FormState {
  email: string;
  realName: string;
  nickName: string;
  password: string;
  passwordConfirmation: string;
  remember: boolean;
  captcha: string;
}
const formState = reactive<FormState>({
  email: "",
  realName: "",
  nickName: "",
  password: "",
  passwordConfirmation: "",
  captcha: "",
  remember: true,
});
const onFinish = (values: any) => {
  console.log("Success:", values);
};
</script>

<template>
  <SharedLinks :title="$t('pages.install.title')">
    <a-form
      :model="formState"
      name="basic"
      :label-col="{ span: 8 }"
      autocomplete="off"
      @finish="onFinish"
    >
      <a-form-item
        :label="$t('fields.email')"
        name="email"
        :rules="EMAIL_VALIDATOR"
      >
        <a-input v-model:value="formState.email" />
      </a-form-item>
      <a-form-item
        :label="$t('fields.real-name')"
        name="realName"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.realName" />
      </a-form-item>
      <a-form-item
        :label="$t('fields.nick-name')"
        name="nickName"
        :rules="[{ required: true }]"
      >
        <a-input v-model:value="formState.nickName" />
      </a-form-item>
      <a-form-item
        :label="$t('fields.password')"
        name="password"
        :rules="[{ required: true }]"
      >
        <a-input-password v-model:value="formState.password" />
      </a-form-item>

      <a-form-item
        :label="$t('fields.password-confirmation')"
        name="passwordConfirmation"
        :rules="[{ required: true }]"
      >
        <a-input-password v-model:value="formState.passwordConfirmation" />
      </a-form-item>
      <a-form-item
        :label="$t('fields.captcha')"
        name="captcha"
        :rules="[{ required: true }]"
        :wrapperCol="{ span: 4 }"
      >
        <a-input v-model:value="formState.captcha" />
      </a-form-item>

      <a-form-item name="remember" :wrapper-col="{ offset: 6, span: 22 }">
        <a-checkbox v-model:checked="formState.remember">{{
          $t("fields.remember-me")
        }}</a-checkbox>
      </a-form-item>

      <a-form-item :wrapper-col="{ offset: 6, span: 22 }">
        <a-button type="primary" html-type="submit">{{
          $t("buttons.submit")
        }}</a-button>
      </a-form-item>
    </a-form>
  </SharedLinks>
</template>

<style scoped></style>
