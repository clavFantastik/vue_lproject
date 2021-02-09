<template>
  <div class="d-flex justify-center">
    <v-card width="600px" class="mt-12 pa-10">
      <v-card-title> Войдите в аккаунт </v-card-title>

      <v-text-field
        label="Введите логин"
        v-model="login"
        outlined
      ></v-text-field>

      <v-text-field
        label="Введите пароль"
        v-model="password"
        outlined
      ></v-text-field>

      <v-btn @click="authenticate"> Войти </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {};
  },
  methods: {
    authenticate() {
      this.axios
        .get(`https://api.npoint.io/5fbd4ff634089219213a`)
        .then((response) => {
          let users = response.data;
          let found = false;
          for (let i in users) {
            if (
              this.login == users[i].login &&
              this.password == users[i].password
            ) {
              this.myId = ++i;
              this.$emit("login", ++i);
              this.$router.push("/users/" + this.myId);
              found = true;
              break;
            }
          }
          if (!found) {
            window.alert("ss");
          }
        });
    },
  },
};
</script>