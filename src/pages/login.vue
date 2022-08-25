<script setup lang="ts">
const user = useUserStore()
const { t } = useI18n()

const router = useRouter()
const route = useRoute()

const login = () => {
  user.hasAuth = true
  console.log(user)
  router.push(route.query?.redirectURL || '/')
}
</script>

<template>
  <div>
    Log in

    <ElButton
      m-3
      text-sm
      type="primary"
      @click="login"
    >
      {{ t('button.go') }}
    </ElButton>
  </div>
</template>

<route lang="yaml">
meta:
  layout: home
  auth: false
  guest: true
</route>
