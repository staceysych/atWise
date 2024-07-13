const fs = require("fs");
const path = require("path");

const assetsDir = path.join(__dirname, "../assets");
const outputFile = path.join(
  __dirname,
  "../components/Mentor/utils/mapMentorToIcon.tsx"
);

// Step 1: Read the assets directory
fs.readdir(assetsDir, (err: NodeJS.ErrnoException | null, files: string[]) => {
  if (err) {
    console.error("Error reading the assets directory:", err);
    return;
  }

  // Filter files to include only "Mentor*.png"
  const mentorFiles: string[] = files.filter(
    (file: string) => file.startsWith("Mentor") && file.endsWith(".png")
  );

  // Step 2: Generate import statements
  const importStatements: string = mentorFiles
    .map((file: string, index: number) => {
      const mentorName: string = `Mentor${index + 1}`;
      return `import ${mentorName} from "@/app/assets/${file}";`;
    })
    .join("\n");

  // Generate the array of mentors
  const mentorsArray: string = `const mentors: StaticImageData[] = [${mentorFiles
    .map((_, index: number) => `Mentor${index + 1}`)
    .join(", ")}];`;

  // Generate the mapping function using the array
  const mapFunction: string = `
export const mapMentorToIcon = (id: string): StaticImageData => {
    return mentors[Number(id) - 1];
};
`;

  // Combine import statements, mentors array, and mapping function
  const content: string = `import { StaticImageData } from "next/image";\n\n${importStatements}\n\n${mentorsArray}\n\n${mapFunction}`;

  // Step 3: Write to the TypeScript file
  fs.writeFile(outputFile, content, (err: NodeJS.ErrnoException | null) => {
    if (err) {
      console.error("Error writing to file:", err);
      return;
    }
    console.log(
      "File has been updated with dynamic imports, mentors array, and mapping function."
    );
  });
});
