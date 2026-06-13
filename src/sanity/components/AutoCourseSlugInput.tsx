import { useEffect, useRef } from "react";
import { PatchEvent, set, unset, useFormValue, type SlugInputProps } from "sanity";
import { slugifyCourseTitle } from "@/lib/courseSlug";

export default function AutoCourseSlugInput(props: SlugInputProps) {
  const { onChange, renderDefault, value } = props;
  const title = useFormValue(["title"]);
  const currentSlug = value?.current || "";
  const lastAutoSlug = useRef<string | undefined>(undefined);

  useEffect(() => {
    if (typeof title !== "string") {
      return;
    }

    const nextSlug = slugifyCourseTitle(title);

    if (currentSlug === nextSlug) {
      lastAutoSlug.current = nextSlug;
      return;
    }

    const canAutoUpdate = !currentSlug || currentSlug === lastAutoSlug.current;

    if (!nextSlug && currentSlug && canAutoUpdate) {
      lastAutoSlug.current = undefined;
      onChange(PatchEvent.from(unset()));
      return;
    }

    if (nextSlug && canAutoUpdate) {
      lastAutoSlug.current = nextSlug;
      onChange(PatchEvent.from(set({ _type: "slug", current: nextSlug })));
    }
  }, [currentSlug, onChange, title]);

  return renderDefault(props);
}
