# Backgrounds

This directory is the drop-in background source for the site.

Use the page basename from `current.txt` and add any supported extension. You do not need to edit Astro code when changing formats.

For example, all of these can serve the Classroom page:

- `classroom.webp`
- `classroom.png`
- `classroom.jpg`
- `classroom.gif`
- `classroom.webm`

The Astro layout checks this directory during the static build, selects the first matching file, detects whether it is an image or video, and keeps the old Unsplash URL as a fallback when no local asset exists.

See `current.txt` for the complete current page-to-background map and extension priority.
