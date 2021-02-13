<template>
  <v-app>
    <v-navigation-drawer
      app
      color="green"
      dark
      expand-on-hover
      hide-overlay
      permanent
      right
    >
      <v-list nav shaped dense>
        <v-list-item two-line>
          <v-list-item-avatar>
            <img
              v-bind:src="`https://randomuser.me/api/portraits/men/${$store.state.usersData.id}.jpg`"
            />
          </v-list-item-avatar>
          <v-list-item-content>
            <v-list-item-title> SocialLink</v-list-item-title>
            <v-list-item-subtitle>
              {{ $store.state.usersData.name }}
            </v-list-item-subtitle>
          </v-list-item-content>
        </v-list-item>

        <v-divider class="my-3"></v-divider>

        <v-list-item link to="/">
          <v-list-item-icon>
            <v-icon>mdi-home-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Главная </v-list-item-content>
        </v-list-item>

        <v-list-item link :to="`/users/${$store.state.usersData.id}`">
          <v-list-item-icon>
            <v-icon>mdi-account-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Мой профиль </v-list-item-content>
        </v-list-item>

        <v-list-item link to="/useras">
          <v-list-item-icon>
            <v-icon>mdi-account-plus-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Найти друзей </v-list-item-content>
        </v-list-item>
        <v-divider class="my-3"></v-divider>
        <v-list-item link to="/login">
          <v-list-item-icon>
            <v-icon>mdi-login</v-icon>
          </v-list-item-icon>
          <v-list-item-content> Вход | Регистрация </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <!-- комментарий -->

    <v-content class="px-12 py-3" app>
      <v-container fluid>
        <router-view />
      </v-container>
    </v-content>
  </v-app>
</template>

<script>
export default {
  name: "App",

  components: {},

  data: () => ({
    nav: true,
  }),
};
</script>
