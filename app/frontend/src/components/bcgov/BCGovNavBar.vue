<template>
  <nav v-if="!hideNavBar" class="navigation-main">
    <div class="nav-holder">
      <ul>
        <li>
          <router-link :to="{ name: 'About' }">About</router-link>
        </li>
        <li>
          <router-link :to="{ name: 'UserForms' }">My Forms</router-link>
        </li>
        <li v-if="isAdmin">
          <router-link :to="{ name: 'FormCreate' }">Create a New Form</router-link>
        </li>
        <li v-if="isAdmin">
          <router-link :to="{ name: 'User' }">User (TBD)</router-link>
        </li>
      </ul>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  name: 'BCGovNavBar',
  computed: {
    ...mapGetters('auth', ['isAdmin']),
    hideNavBar() {
      return this.$route && this.$route.meta && this.$route.meta.hideNavBar;
    }
  }
};
</script>

<style lang="scss" scoped>
.navigation-main {
  box-shadow: 0 6px 8px -4px #b3b1b3;
  display: flex;
  color: #fcba19;
  background-color: #38598a;
  width: 100%;
  -webkit-box-shadow: 0 6px 8px -4px #b3b1b3;
  -moz-box-shadow: 0 6px 8px -4px #b3b1b3;

  .nav-holder {
    padding: 0;
    ul {
      display: flex;
      flex-direction: row;
      margin: 0;
      color: #ffffff;
      list-style: none;
      margin-left: -1.7rem;

      li {
        a {
          display: flex;
          font-weight: normal;
          min-height: 2rem;
          color: #ffffff;
          padding: 0.75rem 1rem 0.75rem 1rem;
          text-decoration: none;

          &:focus {
            outline: none;
            outline-offset: 0;
          }
          &:hover {
            text-decoration: underline;
          }
        }

        & ~ li {
          border-left: 1px solid #9b9b9b;
          margin: 0;
        }
      }

      .router-link-exact-active {
        background-color: #7ba2cc80;
        border-bottom: 2px solid #fcba19;
        font-weight: bold;
      }
    }
  }
}
</style>
