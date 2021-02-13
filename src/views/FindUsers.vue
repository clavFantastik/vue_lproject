<template >
  <div>
    <v-row>
      <v-row
        class="mx-auto"
        max-width="350"
        outlined
        v-for="(user, i) in usersData"
        v-bind:key="i"
        style="margin-top: 30px"
      >
        <v-card min-width="350" max-width="350">
          <v-list-item three-line>
            <v-list-item-content>
              <div class="overline mb-1">{{ user.name }}</div>
              <v-list-item-subtitle>{{ user.city }}</v-list-item-subtitle>
            </v-list-item-content>

            <v-list-item-avatar color="grey darken-4">
              <v-img
                style="max-width: 100%"
                alt=""
                :src="`https://randomuser.me/api/portraits/men/${i}.jpg`"
              ></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-card-actions>
            <v-btn outlined rounded text
              ><v-list-item link :to="`/users/${i}`">
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
      </v-row>
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
        .get(`https://api.npoint.io/5fbd4ff634089219213a`)
        .then((response) => {
          this.usersData = response.data;
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