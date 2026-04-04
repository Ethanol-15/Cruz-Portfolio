export async function fetchProjects() {
  const BASE_URL = "https://cruz-portfolio-backend.onrender.com";

  const response = await fetch(`${BASE_URL}/api/projects?populate=*`);

  if (!response.ok) {
    throw new Error("Failed to fetch projects");
  }

  const result = await response.json();

  return result.data.map((item) => ({
    id: item.id,
    title: item.Title,
    description: item.Description,
    link: item.link
      ? item.link.startsWith("http")
        ? item.link
        : `https://${item.link}`
      : null,
    techStack: item.TechStack,
    image: item.Image?.url
      ? `${BASE_URL}${item.Image.url}`
      : null,
  }));
}