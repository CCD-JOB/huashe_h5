export default{
  methods: {
    getRouteToken(){
      if (this.$route.query.token) {
        let token = this.$route.query.token;
        window.sessionStorage.setItem("token", token);
      }
    }
    
  },

}