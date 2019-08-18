<template>
  <div class="nav">
    <nav>
      <NavLink buttonName="Log Out" route="LogOut" />
      <NavLink buttonName="Sign In" route="signin" />
      <NavLink buttonName="Sign Up" route="signup" />
    </nav>
  </div>
</template>

<script>
import NavLink from '@/components/NavLink';
export default {
  name: 'NavBar',
  components: {
    NavLink,
  },
};
</script>

<style>
nav {
  background-color:#d1cae6;
  padding: 10px;
  display: flex;
  flex-direction: row-reverse;
}
</style>
