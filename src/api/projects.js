export async function fetchProjects() {
    const response = await fetch("http://localhost:1337/api/projects?populate=*");
  
    if (!response.ok) {
      throw new Error("Failed to fetch projects");
    }
  
    const result = await response.json();
  
    return result.data.map((item) => ({
      id: item.id,
      title: item.Title,
      description: item.Description,
      link: item.link,
      techStack: item.TechStack,
      image: item.Image ? `http://localhost:1337${item.Image.url}` : null,
    }));
  }