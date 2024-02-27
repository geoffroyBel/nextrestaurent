const paths = {
  home() {
    return "/";
  },
  recipiesShow() {
    return `/recipies`;
  },
  recipeDetail(id: number) {
    return `/recipies/${id}`;
  },
};
export default paths;
