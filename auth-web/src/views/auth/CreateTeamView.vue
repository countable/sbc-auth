<template>
  <v-container>
    <div class="view-container">
      <article>
        <h1 class="mb-5">Create Team</h1>
        <p class="intro-text">Tell us about your team and enter a team name.</p>
        <v-card class="profile-card">
          <v-container>
            <v-card-title>
              <h2 class="mb-4">Your Team Profile</h2>
            </v-card-title>
            <v-card-text>
              <TeamForm />
            </v-card-text>
          </v-container>
        </v-card>
      </article>
    </div>
  </v-container>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator'
import { mapActions, mapState } from 'vuex'
import { Organization } from '@/models/Organization'
import TeamForm from '@/components/auth/TeamForm.vue'
import { getModule } from 'vuex-module-decorators'

@Component({
  components: {
    TeamForm
  }
})
export default class CreateTeamView extends Vue { }
</script>

<style lang="scss" scoped>
  article {
    flex: 1 1 auto;
    margin: 0 auto;
    max-width: 50rem;
  }

  .v-card__title {
    font-weight: 700;
    letter-spacing: -0.01rem;
  }

  .intro-text {
    margin-bottom: 3rem;
  }

  // Profile Card
  .profile-card .container {
    padding: 1rem;
  }
</style>
