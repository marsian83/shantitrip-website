import os
from PIL import Image

def convert_to_webp(folder_path):
    count = 1
    for filename in os.listdir(folder_path):
        if filename.endswith(".jpg") or filename.endswith(".png"):
            file_path = os.path.join(folder_path, filename)
            image = Image.open(file_path)
            webp_file_path = os.path.join(folder_path, str(count) + '.webp')
            image.save(webp_file_path, "WEBP", quality=80)
            os.remove(file_path)
            count += 1

print("Input path : ",end="")
folder_path = input()
convert_to_webp(folder_path)
