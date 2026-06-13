type CourseLike = {
  title?: string;
  slug?: string | { current?: string };
  id?: string;
};

export function slugifyCourseTitle(title: string) {
  return title
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}

export function getCourseSlug(course: CourseLike) {
  if (typeof course.slug === "string" && course.slug) {
    return course.slug;
  }

  if (typeof course.slug === "object" && course.slug?.current) {
    return course.slug.current;
  }

  if (course.title) {
    return slugifyCourseTitle(course.title);
  }

  return course.id || "";
}
