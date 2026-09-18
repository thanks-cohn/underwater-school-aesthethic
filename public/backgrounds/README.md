# Backgrounds

This directory is the drop-in background source for the site.

## Layout

```text
public/backgrounds/
├── default.[ext]
├── credits.[ext]
└── rooms/
    ├── grand-hall.[ext]
    ├── classroom.[ext]
    ├── records-office.[ext]
    ├── library.[ext]
    ├── assembly-hall.[ext]
    └── pool-wing.[ext]
```

Room backgrounds live under `public/backgrounds/rooms/`. Site-level backgrounds stay directly under `public/backgrounds/`.

The code uses extensionless locations, so `classroom.webp`, `classroom.png`, `classroom.jpg`, `classroom.gif`, or `classroom.webm` can all work without changing the room definition.

If the local location is empty, contains only whitespace, points to no existing supported file, or the directory has not been populated yet, the layout automatically uses that page's existing `backgroundFallback` URL.

See `current.txt` for the complete page-to-background map, supported extensions, and search priority.
