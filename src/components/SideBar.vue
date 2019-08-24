<template>
  <div class="side-bar" v-if="isSignedIn">
    <nav>
      <div class="side-links">
        <NavLink buttonName="MY CLIPBOARD" route="home" />
        <NavLink buttonName="LABORATORIES" route="laboratories" />
        <NavLink buttonName="SUBJECTS" route="subjects" />
        <NavLink buttonName="TRIALS" route="trials" />
      </div>
    </nav>
  </div>
</template>

<script>
import firebase from 'firebase';
// Components:
import NavLink from '@/components/NavLink';
export default {
  name: 'SideBar',
  components: {
    NavLink,
  },
  data() {
    return {
      isSignedIn: false,
    };
  },
  methods: {
    renderLinksConditionally() {
      firebase.auth().onAuthStateChanged(researcher => {
        if (researcher) {
          this.isSignedIn = true;
        } else {
          this.isSignedIn = false;
        }
      });
    },
  },
  created() {
    this.renderLinksConditionally();
  },
};
</script>

<style>
.side-bar {
  height: 100%;
  width: 200px;
  position: fixed;
  z-index: 1;
  background-color: #7863a0;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.side-links {
  display: flex;
  flex-direction: column;
}
/* button {
  margin: 5px;
  background-color: #b1a8cb;
  color: white;
  font-size: 14px;
  border-radius: 3px;
} */
a {
  text-decoration: none;
  font-size: 20px;
  color: white;
}
</style>
