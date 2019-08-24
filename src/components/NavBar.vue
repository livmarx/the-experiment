<template>
  <div class="nav">
    <nav>
      <router-link :to="{name: 'home'}">
        <div>The Experiment</div>
      </router-link>
      <div class="nav-links">
        <LogOutButton />
        <NavLink buttonName="Sign Up" route="signup" />
        <NavLink buttonName="Sign In" route="signin" />
      </div>
    </nav>
  </div>
</template>

<script>
import LogOutButton from '@/components/LogOutButton';
import NavLink from '@/components/NavLink';
export default {
  name: 'NavBar',
  components: {
    LogOutButton,
    NavLink,
  },
};
</script>

<style>
nav {
  background-color: #b1a8cb;
  padding: 10px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.nav-links {
  display: flex;
  flex-direction: row-reverse;
}
button {
  margin: 5px;
  background-color: #8980a8;
  color: white;
  font-size: 14px;
  border-radius: 3px;
}
a {
  text-decoration: none;
  font-size: 20px;
  color: white;
}
</style>
