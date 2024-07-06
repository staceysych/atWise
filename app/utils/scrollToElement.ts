export const scrollToTheElement = (event: any, id: string) => {
  event.preventDefault();
  const element = document.getElementById(id);

  element?.scrollIntoView({
    behavior: "smooth",
  });
};
