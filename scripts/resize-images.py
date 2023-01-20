import os
from PIL import Image


def resize_images(folder_path, max_width):
    for filename in os.listdir(folder_path):
        if filename.endswith(".jpg") or filename.endswith(".png") or filename.endswith(".webp"):
            filepath = os.path.join(folder_path, filename)
            with Image.open(filepath) as im:
                width, height = im.size
                if width > max_width:
                    new_height = int((max_width / width) * height)
                    im = im.resize((max_width, new_height), Image.ANTIALIAS)
                    im.save(filepath)


print("Enter folder path : ")
fp = input()
print("Enter the max width : ", end="")
resize_images(fp, int(input()))
