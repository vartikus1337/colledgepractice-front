import {computed} from "vue";

const props = {
  isCarts: true,
  isNews: false,
}

const classSection = computed(() => {
  const classes: { [key: string]: boolean } = {
    interesting__carts: props.isCarts,
    interesting__news: props.isNews,
  };
  return Object.keys(classes)
    .filter((key) => classes[key])
    .join(" ");
});

console.log(classSection)