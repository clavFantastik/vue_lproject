<template>
  <div class="d-flex justify-center">
    <v-card width="600px" class="mt-12 pa-10">
      <v-card-title> Войдите в аккаунт </v-card-title>
      <v-text-field label="Введите имя" v-model="name" outlined> </v-text-field>
      <v-text-field label="Введите город" v-model="city" outlined>
      </v-text-field>
      <v-text-field label="Введите веб-сайт" v-model="website" outlined>
      </v-text-field>
      <v-text-field label="Введите e-mail" v-model="email" outlined>
      </v-text-field>
      <v-text-field label="Введите место работы" v-model="company" outlined>
      </v-text-field>

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

      <v-btn @click="registrate"> Зарагестрироваться </v-btn>
    </v-card>
  </div>
</template>

<script>
export default {
  name: "Reg",
  data() {
    return {};
  },
  methods: {
    PutQue() {
      this.axios.post(`https://api.npoint.io/5fbd4ff634089219213a`, this.smth);
    },
    registrate() {
      this.axios
        .get(`https://api.npoint.io/5fbd4ff634089219213a`)
        .then((response) => {
          let users = response.data;
          let found = false;
          let count = 0;
          for (let i in users) {
            if (
              this.login == users[i].login &&
              this.password == users[i].password
            ) {
              found = true;
            } else {
              count = i;
            }
          }
          if (found == false) {
            this.myId = ++count;
            this.$store.state.usersData.id = count;
            this.person = {
              name: this.name,
              email: this.email,
              city: this.city,
              website: this.website,
              company: this.company,
              login: this.login,
              password: this.password,
            };
            this.smth = response.data;
            this.smth.push(this.person);
            this.PutQue();
            this.$router.push("/users/" + this.myId);
          }
        });
    },
  },
};
</script>