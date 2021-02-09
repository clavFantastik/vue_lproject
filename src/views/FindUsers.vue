<template>
  <div>
    <v-row v-for="(user, i) in usersData" v-bind:key="i">
      <v-col sm="3">
        <v-card class="mx-auto" max-width="350" outlined>
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-1">{{ user.name }}</div>
              <v-list-item-subtitle>{{
                user.address.city
              }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar color="grey darken-4">
              <v-img
                style="max-width: 100%"
                alt=""
                :src="`https://randomuser.me/api/portraits/men/${i + 1}.jpg`"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text
              ><v-list-item link :to="`/user/${i + 1}`">
                <v-list-item-title
                  class="text-center"
                  style="margin-bottom: 10px"
                >
                  <v-icon style="margin-bottom: 3px" left>
                    mdi-account-details-outline
                  </v-icon>
                  Перейти в профиль</v-list-item-title
                >
              </v-list-item></v-btn
            >
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "FindUsers",
  data() {
    return {
      usersData: [],
    };
  },
  methods: {
    getUsersData() {
      this.axios
        .get(`http://jsonplaceholder.typicode.com/users`)
        .then((response) => {
          this.usersData = response.data;
          console.log(response.data);
        });
    },
  },
  mounted() {
    this.getUsersData();
  },
  watch: {
    $route() {
      this.getUsersData();
    },
  },
};
</script>