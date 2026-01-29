/**
 * Random Flicks & Musings Data
 * 
 * Add your photos, thoughts, and creative musings here.
 * Each item can be an image with optional title and description.
 */

export interface ArtItem {
  id: string;
  title?: string;
  description?: string;
  imageUrl: string; // Path to image in src/assets/images/art/
  category?: string; // Optional: "photography", "digital-art", "traditional", etc.
  date?: string; // Optional: When the piece was created
}

// TODO: Replace with your own artwork and photos
// 
// To add images:
// 1. Place your images in src/assets/images/art/
// 2. Import them here or use relative paths
// 3. Update the imageUrl field with the correct path
//
// Example with imports:
// import example1 from "../../assets/images/art/example1.jpg";
// Then use: imageUrl: example1
//
// Or use public folder (for images that don't need processing):
// Place in public/art/ and use: imageUrl: "/art/example1.jpg"

export const artItems: ArtItem[] = [
  {
    id: "1",
    title: "Example Photo 1",
    description: "A beautiful landscape photograph",
    imageUrl: "/art/example1.jpg", // Place image in public/art/ folder
    category: "photography",
    date: "2024",
  },
  {
    id: "2",
    title: "Example Artwork 1",
    description: "Digital art piece",
    imageUrl: "/art/example2.jpg", // Place image in public/art/ folder
    category: "digital-art",
    date: "2024",
  },
  {
    id: "3",
    title: "Example Photo 2",
    description: "Street photography",
    imageUrl: "/art/example3.jpg", // Place image in public/art/ folder
    category: "photography",
    date: "2024",
  },
  // Add more art items as needed
];

// Optional: Group art by category
export const artByCategory: Record<string, ArtItem[]> = artItems.reduce(
  (acc, item) => {
    const category = item.category || "uncategorized";
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  },
  {} as Record<string, ArtItem[]>
);

