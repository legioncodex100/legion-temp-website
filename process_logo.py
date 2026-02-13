from PIL import Image
import sys

def process_logo(input_path, output_path):
    # Open image and ensure RGBA
    img = Image.open(input_path).convert("RGBA")
    data = img.getdata()

    new_data = []
    for item in data:
        # Check if pixel is close to white (background)
        # Using a threshold of 200 for R, G, B
        if item[0] > 200 and item[1] > 200 and item[2] > 200:
            new_data.append((255, 255, 255, 0)) # Transparent
        else:
            # It's part of the logo (black/dark)
            # Make it white for the dark footer
            new_data.append((255, 255, 255, 255)) # White, Opaque

    img.putdata(new_data)
    img.save(output_path, "PNG")
    print(f"Processed image saved to {output_path}")

if __name__ == "__main__":
    process_logo("public/images/affiliations/british-wrestling-stacked.jpg", "public/images/affiliations/british-wrestling-white.png")
